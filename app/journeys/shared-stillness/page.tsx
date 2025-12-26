import Navigation from "../../components/Navigation";
import MountainDivider from "../../components/MountainDivider";
import Footer from "../../components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shared Stillness | The Mountain Whisper",
  description: "A journey for couples seeking presence, reconnection, and shared clarity through Himalayan stillness.",
};

export default function SharedStillnessPage() {
  return (
    <div className="min-h-screen bg-[#f8f6f3] text-[#2d3a47] scroll-smooth">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-white pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f6f3] via-[#f8f6f3] to-white opacity-50" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 0%, rgba(61, 90, 122, 0.03) 0%, transparent 50%)`
        }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <h1 className="h1 mb-4">
            Shared Stillness
          </h1>
          <p className="text-2xl sm:text-3xl mb-6 text-[#3d5a7a] font-light">
            For couples seeking presence and reconnection
          </p>
          <p className="text-large max-w-2xl mx-auto leading-relaxed text-[#4a5560]">
            A journey designed for couples to step away together, reconnect, and find presence with each other. 
            In the stillness of the mountains, create space for what truly matters in your relationship.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <span className="text-small text-[#6b7786]">7 days</span>
            <span className="text-small text-[#9ca5b3]">•</span>
            <span className="text-small text-[#6b7786]">Himalayan Foothills</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link
              href="/enquire?journey=shared-stillness"
              className="px-12 py-5 rounded-lg bg-[#3d5a7a] text-white hover:bg-[#2d4a6a] transition-all duration-300 text-lg font-medium shadow-sm hover:shadow-md active:scale-[0.98]"
            >
              Enquire
            </Link>
            <Link
              href="/journeys"
              className="text-body text-[#3d5a7a] hover:opacity-70 transition-opacity"
            >
              Explore other journeys
            </Link>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Who This Journey Is For Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3]">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="h2 mb-8">Who This Journey Is For</h2>
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="h4 text-[#3d5a7a]">Couples wanting to reconnect and slow down together</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                For those who feel the pace of daily life has created distance, and who want to step away 
                together to remember what brought you together in the first place.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="h4 text-[#3d5a7a]">Partners seeking presence and deeper connection</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                For couples who understand that the best relationships are built in quiet moments, 
                not in the noise of routine. Those who want to be present with each other, fully.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="h4 text-[#3d5a7a]">Those looking to create shared stillness and clarity</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                For couples who recognize that clarity comes from stillness, and that the most meaningful 
                conversations happen when you're not rushing to the next thing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Why This Journey Exists Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="h2 mb-8">Why This Journey Exists</h2>
          </div>
          <div className="space-y-8 text-body leading-relaxed text-[#4a5560]">
            <p>
              Most relationships suffer not from conflict, but from absence. The absence of presence. 
              The absence of stillness. The absence of space to simply be together without agenda or expectation.
            </p>
            <p>
              Shared Stillness exists because we believe that the deepest connections are found not in doing 
              more together, but in being present together. In the Himalayas, away from the noise and urgency 
              of daily life, couples can rediscover what it means to be truly present with each other.
            </p>
            <p>
              This journey is not about fixing anything. It's about creating space. Space to walk together 
              in silence. Space to have conversations that matter. Space to remember why you chose each other. 
              The mountains provide the stillness. You provide the presence.
            </p>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* What Changes After Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3]">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="h2 mb-8">What Changes After</h2>
          </div>
          <div className="space-y-8 text-body leading-relaxed text-[#4a5560]">
            <p>
              You return with a renewed sense of presence with each other. The conversations you have 
              in the mountains stay with you. The stillness you create together becomes something you 
              can return to, even in the noise of daily life.
            </p>
            <p>
              You'll have shared a journey that required nothing from you except presence. No performance. 
              No expectations. Just being together in a place that supports connection. That experience 
              becomes a touchstone you can return to when life gets loud again.
            </p>
            <p>
              Most importantly, you'll have created space for what matters. Space that didn't exist before. 
              Space that reminds you why you chose each other, and why choosing presence together is one of 
              the most important choices you can make.
            </p>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* A Gentle Flow Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="text-center">
            <h2 className="h2 mb-8">A Gentle Flow</h2>
          </div>
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Day 1: Arrival and Settling</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                Arrive in Kathmandu. Brief orientation. Time to rest and settle in together. 
                No agenda, just presence. Let the pace of the mountains begin to slow your own.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Day 2: Beginning Together</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                Travel to the starting point. First gentle walk side by side. Introduction to shared stillness. 
                Begin to create space for presence with each other.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Day 3: Deepening Presence</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                Full day of walking together at a mindful pace. More time for shared reflection and quiet moments. 
                The mountains provide the backdrop. You provide the presence. Return with renewed connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Soft CTA Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3]">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <div>
            <h2 className="h2 mb-8">Start a Conversation</h2>
            <p className="text-large text-[#4a5560]">
              Let's discuss how Shared Stillness can serve your relationship. 
              No pressure, just thoughtful dialogue.
            </p>
          </div>
          <Link
            href="/enquire?journey=shared-stillness"
            className="inline-block px-12 py-5 rounded-lg bg-[#3d5a7a] text-white hover:bg-[#2d4a6a] transition-all duration-300 text-lg font-medium shadow-sm hover:shadow-md active:scale-[0.98]"
          >
            Start a conversation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

