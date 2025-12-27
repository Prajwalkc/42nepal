import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
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
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', sizes: 'any' },
      { url: '/icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/logo.png',
  },
  manifest: '/manifest.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Mountain Whisper",
    url: "https://www.themountainwhisper.com",
    description: "Curated Himalayan retreats for corporate teams and individuals. Step away from noise. Return with clarity, perspective, and renewed purpose.",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "The Mountain Whisper",
    url: "https://www.themountainwhisper.com",
    description: "Curated Himalayan retreats for corporate teams and individuals. Step away from noise. Return with clarity, perspective, and renewed purpose.",
  };

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
