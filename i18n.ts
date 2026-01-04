import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'fr', 'ru', 'zh', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export default getRequestConfig(async ({ locale }) => {
  // Validate and default to 'en' if locale is invalid
  const validLocale: Locale = (locale && locales.includes(locale as Locale)) ? (locale as Locale) : 'en';

  return {
    locale: validLocale,
    messages: (await import(`./messages/${validLocale}.json`)).default
  };
});

