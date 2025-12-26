import Navigation from "../components/Navigation";
import MountainDivider from "../components/MountainDivider";
import JourneyCard from "../components/JourneyCard";
import JourneyHeroVideo from "../components/JourneyHeroVideo";
import MistBackground from "../components/MistBackground";
import Footer from "../components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import { getAllJourneys } from "../../data/journeys";

export const metadata: Metadata = {
  title: "Journeys | The Mountain Whisper",
  description: "Thoughtfully curated experiences in the Himalayas — designed for clarity, rest, and meaningful work.",
};

export default function JourneysPage() {
  const journeys = getAllJourneys();

  return (
    <div className="min-h-screen bg-[#f8f6f3] text-[#2d3a47] scroll-smooth relative">
      <MistBackground opacity={0.10} animated={true} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 px-6 sm:px-12 lg:px-24 pt-32 overflow-hidden">
        <JourneyHeroVideo />
        <div className="relative z-20 max-w-3xl mx-auto text-center space-y-6">
          <h1 className="h1 mb-4 text-white">
            Journeys into Stillness
          </h1>
          <p className="text-xl sm:text-2xl text-white/95 font-light max-w-2xl mx-auto">
            A small collection of curated experiences shaped by mountains, silence, and time.
          </p>
        </div>
      </section>

      <MountainDivider />

      {/* Featured Journeys Grid */}
      <section className="relative pt-20 pb-40 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3] z-10">
        <div className="max-w-6xl mx-auto">
          {/* Journey Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {journeys.map((journey) => (
              <JourneyCard key={journey.slug} journey={journey} />
            ))}
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* CTA Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <div>
            <h2 className="h2 mb-8">Begin a Conversation</h2>
            <p className="text-large">
              Not sure which journey fits? We'll help you choose.
            </p>
          </div>
          <Link
            href="/enquire?interest=journey"
            className="inline-block px-12 py-5 rounded-lg bg-[#3d5a7a] text-white hover:bg-[#2d4a6a] transition-all duration-300 text-lg font-medium shadow-sm hover:shadow-md active:scale-[0.98]"
          >
            Begin a conversation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

