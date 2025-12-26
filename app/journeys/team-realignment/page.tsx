import Navigation from "../../components/Navigation";
import MountainDivider from "../../components/MountainDivider";
import Footer from "../../components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collective Ascent | The Mountain Whisper",
  description: "Shared elevation creates shared understanding. This journey brings teams into a quiet, neutral environment where alignment, trust, and perspective can naturally return.",
};

export default function TeamRealignmentPage() {
  return (
    <div className="min-h-screen bg-[#f8f6f3] text-[#2d3a47] scroll-smooth">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-white pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f6f3] via-[#f8f6f3] to-white opacity-50" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 0%, rgba(61, 90, 122, 0.03) 0%, transparent 50%)`
        }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <h1 className="h1 mb-4">
            Collective Ascent
          </h1>
          <p className="text-xl sm:text-2xl text-[#3d5a7a] font-light">
            Shared perspective for teams
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <span className="text-small text-[#6b7786]">7 days</span>
            <span className="text-small text-[#9ca5b3]">•</span>
            <span className="text-small text-[#6b7786]">Annapurna Region</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link
              href="/enquire?journey=team-realignment"
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
              <h3 className="h4 text-[#3d5a7a]">Teams navigating conflict or transition</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                For teams facing difficult conversations, organizational change, or the kind of friction 
                that comes from working closely under pressure. The mountains provide space to address 
                what needs addressing, away from the context that created the tension.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="h4 text-[#3d5a7a]">Leadership groups needing alignment</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                For leadership teams who recognize that alignment isn't achieved in meetings—it's 
                built through shared experience. The elevation, the shared challenge, the quiet moments 
                create conditions for genuine understanding that conference rooms cannot provide.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="h4 text-[#3d5a7a]">Small teams seeking deeper trust and collaboration</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                For teams who understand that trust is built through shared experience, not through 
                exercises or activities. The mountains provide the shared experience. The elevation 
                creates the conditions. The stillness allows for the conversations that matter.
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
              Team alignment isn't achieved through workshops or exercises. It's built through shared 
              experience. Collective Ascent exists because we believe that the most meaningful 
              team connections happen away from the office, in spaces that allow for genuine conversation 
              and authentic interaction.
            </p>
            <p>
              In the Himalayas, teams experience something together that changes how they see each other. 
              The shared challenge of elevation, the quiet moments of reflection, the natural conversations 
              that emerge when you're walking together—these create the conditions for trust and alignment 
              that structured activities cannot replicate.
            </p>
            <p>
              This journey isn't about fixing your team. It's about creating space. Space for authentic 
              conversations. Space for shared experience. Space to see each other differently. The 
              mountains provide the elevation. You provide the willingness to engage authentically. 
              Together, they create the conditions for genuine alignment.
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
              You return as a stronger unit. The shared experience of elevation, the conversations you have 
              in the mountains, the trust you build through walking together—these become part of how you 
              work together. The alignment you find at elevation translates to how you operate at sea level.
            </p>
            <p>
              The relationships you build in the mountains stay with you. The understanding you gain of 
              each other becomes something you can return to when tensions arise. The shared clarity you 
              find becomes a touchstone for how you make decisions together.
            </p>
            <p>
              Most importantly, you'll have created a shared experience that didn't exist before. An 
              experience that reminds you why you work together, and how working together can be different 
              when you have genuine trust and alignment. That experience becomes something you can return 
              to when the work gets challenging again.
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
              <h3 className="h4 text-[#3d5a7a]">Day 1: Arrival and Gathering</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                Arrive in Kathmandu. Team gathering. Brief orientation and intention setting. Time to 
                settle in together. Begin to step away from the context of daily work.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Day 2: Beginning Together</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                Travel to the starting point. First day of shared elevation and connection. Begin walking 
                together at a natural pace. The mountains provide the backdrop. You provide the willingness 
                to engage authentically.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Day 3: Building Trust</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                Full day of trekking together. Natural dynamics emerge. Trust begins to build through 
                shared experience. Space for authentic conversations. The elevation creates the conditions. 
                The stillness allows for what needs to be said. Return with the beginning of alignment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Important to Know Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3]">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="h2 mb-8">Important to Know</h2>
          </div>
          <div className="space-y-8 text-body leading-relaxed text-[#4a5560]">
            <p>
              This journey is designed for small teams (4–12 people). The experience relies on the 
              intimacy of a small group and the natural dynamics that emerge when teams are together 
              in a different context. If your team is larger, consider whether this journey aligns 
              with your needs.
            </p>
            <p>
              The journey requires a basic level of physical fitness from all team members, but the 
              emphasis is on shared experience and connection, not strenuous activity. The mountains 
              provide the elevation. You provide the willingness to engage together authentically.
            </p>
            <p>
              Connectivity is available at base locations but intentionally limited during trekking days. 
              This is by design. The alignment you're seeking requires space from the daily work that 
              created the need for realignment. If your team requires constant connectivity, consider 
              whether this journey aligns with your needs.
            </p>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Soft CTA Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <div>
            <h2 className="h2 mb-8">Start a Conversation</h2>
            <p className="text-large text-[#4a5560]">
              Let's discuss how Collective Ascent can serve your team's need for alignment 
              and trust. No pressure, just thoughtful dialogue.
            </p>
          </div>
          <Link
            href="/enquire?journey=team-realignment"
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

