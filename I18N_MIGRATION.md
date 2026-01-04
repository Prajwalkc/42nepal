# i18n Implementation Guide

## Setup Complete ✅

The i18n infrastructure is now set up with support for:
- English (en)
- French (fr) 
- Russian (ru)
- Chinese (zh)
- German (de)

## Current Structure

```
app/
  [locale]/          # New locale-aware routes
    layout.tsx       # Locale layout with NextIntl provider
    page.tsx         # Example home page (needs to be created)
  layout.tsx        # Root layout (minimal)
  components/
    LanguageSwitcher.tsx  # Language switcher component
messages/
  en.json           # English translations
  fr.json           # French translations
  ru.json           # Russian translations
  zh.json           # Chinese translations
  de.json           # German translations
```

## How to Use Translations

### In Server Components

```tsx
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

// For server components
export default async function Page() {
  const t = await getTranslations('home');
  
  return <h1>{t('title')}</h1>;
}
```

### In Client Components

```tsx
'use client';
import { useTranslations } from 'next-intl';

export default function Component() {
  const t = useTranslations('home');
  
  return <h1>{t('title')}</h1>;
}
```

### Using Links with Locale

```tsx
import { Link } from '@/navigation'; // Use next-intl's Link
import { useLocale } from 'next-intl';

// Or manually:
const locale = useLocale();
<Link href={`/${locale}/journeys`}>Journeys</Link>
```

## Migration Steps

1. **Move pages to [locale] folder**: All pages need to be moved from `app/` to `app/[locale]/`

2. **Update imports**: Change `next/link` to use `next-intl` navigation:
   ```tsx
   import { Link } from '@/navigation';
   ```

3. **Add translations**: Replace hardcoded strings with translation keys:
   ```tsx
   // Before
   <h1>The Mountain Whisper</h1>
   
   // After
   const t = useTranslations('common');
   <h1>{t('siteName')}</h1>
   ```

4. **Update Navigation**: Add language switcher to Navigation component

5. **Update metadata**: Use translations in metadata:
   ```tsx
   export async function generateMetadata({ params }) {
     const t = await getTranslations('home');
     return { title: t('title') };
   }
   ```

## Next Steps

1. Create `app/[locale]/page.tsx` with translated home page
2. Move other pages to `app/[locale]/` folder
3. Update all components to use translations
4. Complete translation files for all languages
5. Test language switching functionality

## Notes

- All routes now require locale prefix: `/en/`, `/fr/`, etc.
- Default locale (en) is still required in URL
- Language switcher component is ready to use
- Translation files can be expanded as needed

