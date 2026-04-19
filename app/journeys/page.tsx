import Navigation from "../components/Navigation";
import MountainDivider from "../components/MountainDivider";
import JourneyCard from "../components/JourneyCard";
import JourneyHeroVideo from "../components/JourneyHeroVideo";
import MistBackground from "../components/MistBackground";
import Footer from "../components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import { unstable_noStore as noStore } from "next/cache";
import { getAllJourneys } from "../../data/journeys";
import { getServerTranslations } from "../../lib/translations";

// Force dynamic rendering to ensure translations update when language changes
export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const { common, journeys: journeysT } = await getServerTranslations();
  
  return {
    title: journeysT('title'),
    description: journeysT('subtitle'),
    alternates: {
      canonical: "/journeys",
    },
    openGraph: {
      title: `${journeysT('title')} | ${common('siteName')}`,
      description: journeysT('subtitle'),
      images: [
        {
          url: "/journey.png",
          width: 1200,
          height: 630,
          alt: "Himalayan mountain landscape for curated journey experiences",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${journeysT('title')} | ${common('siteName')}`,
      description: journeysT('subtitle'),
    },
  };
}

export default async function JourneysPage() {
  // Prevent caching to ensure translations update when language changes
  noStore();
  const { common, journeys: journeysT, getJourneyTranslation } = await getServerTranslations();
  const journeys = getAllJourneys();

  return (
    <div className="min-h-screen bg-background text-[#2d3a47] scroll-smooth relative">
      <MistBackground opacity={0.10} animated={true} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 px-6 sm:px-12 lg:px-24 pt-32 overflow-hidden">
        <JourneyHeroVideo />
        <div className="relative z-20 max-w-3xl mx-auto text-center space-y-6">
          <h1 className="h1 mb-4 text-white">
            {journeysT('title')}
          </h1>
          <p className="text-xl sm:text-2xl text-white/95 font-light max-w-2xl mx-auto">
            {journeysT('subtitle')}
          </p>
        </div>
      </section>

      <MountainDivider />

      {/* Featured Journeys Grid */}
      <section className="relative pt-20 pb-40 px-6 sm:px-12 lg:px-24 bg-background z-10">
        <div className="max-w-6xl mx-auto">
          {/* Journey Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {journeys.map((journey) => {
              const translation = getJourneyTranslation(journey.slug);
              return (
                <JourneyCard 
                  key={journey.slug} 
                  journey={journey}
                  translatedTitle={translation.title || undefined}
                  translatedSubtitle={translation.subtitle || undefined}
                  viewJourneyText={journeysT('viewJourney')}
                />
              );
            })}
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* CTA Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <div>
            <h2 className="h2 mb-8">{journeysT('cta.title')}</h2>
            <p className="text-large">
              {journeysT('cta.subtitle')}
            </p>
          </div>
          <Link
            href="/enquire?interest=journey"
            className="inline-block px-12 py-5 rounded-lg bg-[#3d5a7a] text-white hover:bg-[#2d4a6a] transition-all duration-300 text-lg font-medium shadow-sm hover:shadow-md active:scale-[0.98]"
          >
            {common('beginConversation')}
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

