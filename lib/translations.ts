import { cookies } from 'next/headers';
import { locales, defaultLocale, type Locale } from '../i18n';

/**
 * Helper function to load translations in server components
 * Returns translation functions similar to next-intl's getTranslations
 */
export async function getServerTranslations() {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('NEXT_LOCALE')?.value;
  const locale: Locale = (localeCookie && locales.includes(localeCookie as Locale))
    ? (localeCookie as Locale)
    : defaultLocale;
  
  const messages = (await import(`../messages/${locale}.json`)).default;
  
  // Helper function to get nested values (for dot notation like 'philosophy.silence.title')
  const getNestedValue = (obj: any, path: string): string => {
    const keys = path.split('.');
    let value: any = obj;
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) return path;
    }
    return typeof value === 'string' ? value : path;
  };
  
  // Create translation function for a namespace
  const t = (namespace: string) => {
    const namespaceMessages = messages[namespace as keyof typeof messages];
    if (!namespaceMessages) return (key: string) => key;
    
    return (key: string) => {
      if (typeof namespaceMessages === 'object') {
        return getNestedValue(namespaceMessages, key);
      }
      return key;
    };
  };
  
  // Helper to get nested namespace (e.g., places('manang'))
  const places = (subKey: string) => {
    const placesMessages = messages.places;
    if (!placesMessages || typeof placesMessages !== 'object') {
      return (key: string) => key;
    }
    const subMessages = (placesMessages as any)[subKey];
    if (!subMessages || typeof subMessages !== 'object') {
      return (key: string) => key;
    }
    return (key: string) => getNestedValue(subMessages, key);
  };
  
  // Helper to get translated journey content by slug
  const getJourneyTranslation = (slug: string) => {
    const journeysMessages = messages.journeys;
    if (!journeysMessages || typeof journeysMessages !== 'object') {
      return null;
    }
    
    // Map slug to translation key
    const slugMap: Record<string, string> = {
      'quiet-reset': 'quietReset',
      'leadership-in-stillness': 'betweenDecisions',
      'solo-reflection': 'soloReflection',
      'shared-stillness': 'sharedStillness',
      'team-realignment': 'collectiveAscent',
    };
    
    const key = slugMap[slug];
    if (!key) return null;
    
    const journeyMessages = (journeysMessages as any)[key];
    if (!journeyMessages || typeof journeyMessages !== 'object') {
      return null;
    }
    
    return journeyMessages;
  };
  
  // Helper to get journey detail translations (e.g., journeys.detail.enquire)
  const journeyDetail = (key: string) => {
    const journeysMessages = messages.journeys;
    if (!journeysMessages || typeof journeysMessages !== 'object') {
      return key;
    }
    const detailMessages = (journeysMessages as any).detail;
    if (!detailMessages || typeof detailMessages !== 'object') {
      return key;
    }
    return getNestedValue(detailMessages, key);
  };
  
  return {
    locale,
    messages,
    t,
    common: t('common'),
    home: t('home'),
    workFromHimalayas: t('workFromHimalayas'),
    journeys: t('journeys'),
    places,
    enquire: t('enquire'),
    getJourneyTranslation,
    journeyDetail,
  };
}

