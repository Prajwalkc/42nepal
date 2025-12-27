import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Begin a Conversation",
  description: "Tell us what you're seeking. There's no commitment — just a thoughtful exchange about your Himalayan journey. We'll guide you thoughtfully and clearly.",
  alternates: {
    canonical: "/enquire",
  },
  openGraph: {
    title: "Begin a Conversation | The Mountain Whisper",
    description: "Tell us what you're seeking. There's no commitment — just a thoughtful exchange about your Himalayan journey. We'll guide you thoughtfully and clearly.",
    images: [
      {
        url: "/journey.png",
        width: 1200,
        height: 630,
        alt: "Himalayan mountain landscape - Begin your journey with The Mountain Whisper",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Begin a Conversation | The Mountain Whisper",
    description: "Tell us what you're seeking. There's no commitment — just a thoughtful exchange about your Himalayan journey. We'll guide you thoughtfully and clearly.",
  },
};

export default function EnquireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

