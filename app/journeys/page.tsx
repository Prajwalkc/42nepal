import Navigation from "../components/Navigation";
import MountainDivider from "../components/MountainDivider";
import ScenicMountains from "../components/ScenicMountains";
import JourneyCard from "../components/JourneyCard";
import JourneyHeroVideo from "../components/JourneyHeroVideo";
import MistBackground from "../components/MistBackground";
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
        <div className="relative z-20 max-w-3xl mx-auto text-center space-y-8">
          <h1 className="h1 mb-6 text-white">
            Journeys
          </h1>
          <p className="text-large max-w-2xl mx-auto text-white">
            Thoughtfully curated experiences in the Himalayas — designed for clarity, rest, and meaningful work. 
            Each journey is a different way to experience the Himalayas with intention, at different paces and durations.
          </p>
        </div>
      </section>

      <MountainDivider />

      {/* Featured Journeys Grid */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3] z-10">
        <div className="max-w-6xl mx-auto">
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
      <footer className="relative border-t border-[#e8e6e3] bg-[#f8f6f3]">
        <div className="relative h-32 overflow-hidden text-[#9ca5b3] opacity-15">
          <ScenicMountains />
        </div>
        <div className="relative z-10 px-6 sm:px-12 lg:px-24 py-16 text-center space-y-6">
          <p className="text-large font-light text-secondary">
            Step away from noise. Return with clarity.
          </p>
          <p className="text-small text-muted">
            © 2024 The Mountain Whisper. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

