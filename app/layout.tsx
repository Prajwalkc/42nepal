import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { cookies } from 'next/headers';
import { locales, defaultLocale, type Locale } from '../i18n';
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.themountainwhisper.com"),
  title: {
    default: "The Mountain Whisper",
    template: "%s | The Mountain Whisper",
  },
  description: "Curated Himalayan retreats for corporate teams and individuals. Step away from noise. Return with clarity, perspective, and renewed purpose.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    siteName: "The Mountain Whisper",
    title: "The Mountain Whisper",
    description: "Curated Himalayan retreats for corporate teams and individuals. Step away from noise. Return with clarity, perspective, and renewed purpose.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Mountain Whisper",
    description: "Curated Himalayan retreats for corporate teams and individuals. Step away from noise. Return with clarity, perspective, and renewed purpose.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  manifest: '/manifest.webmanifest',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Read locale from cookie, fallback to default
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('NEXT_LOCALE')?.value;
  const locale: Locale = (localeCookie && locales.includes(localeCookie as Locale)) 
    ? (localeCookie as Locale) 
    : defaultLocale;
  
  // Load messages for the detected locale
  const messages = (await import(`../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
