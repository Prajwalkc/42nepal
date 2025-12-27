import Navigation from "../../components/Navigation";
import MountainDivider from "../../components/MountainDivider";
import Footer from "../../components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solo Reflection Journey",
  description: "A journey for solo travelers seeking meaning, insight, and emotional reset through Himalayan solitude and reflection. Walk at your own pace.",
  alternates: {
    canonical: "/journeys/solo-reflection",
  },
  openGraph: {
    title: "Solo Reflection Journey | The Mountain Whisper",
    description: "A journey for solo travelers seeking meaning, insight, and emotional reset through Himalayan solitude and reflection. Walk at your own pace.",
    images: [
      {
        url: "/images/journeys/solo-reflection.png",
        width: 1200,
        height: 630,
        alt: "Solo Reflection Journey - Personal retreat in the Himalayas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solo Reflection Journey | The Mountain Whisper",
    description: "A journey for solo travelers seeking meaning, insight, and emotional reset through Himalayan solitude and reflection. Walk at your own pace.",
  },
};

export default function SoloReflectionPage() {
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
            Solo Reflection Journey
          </h1>
          <p className="text-2xl sm:text-3xl mb-6 text-[#3d5a7a] font-light">
            For solo travelers seeking meaning and reflection
          </p>
          <p className="text-large max-w-2xl mx-auto leading-relaxed text-[#4a5560]">
            Walk at your own pace. Reflect in silence. Return with clarity. 
            Sometimes the most profound insights come from walking alone.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <span className="text-small text-[#6b7786]">7 days</span>
            <span className="text-small text-[#9ca5b3]">•</span>
            <span className="text-small text-[#6b7786]">Langtang Valley</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link
              href="/enquire?journey=solo-reflection"
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
              <h3 className="h4 text-[#3d5a7a]">Individuals seeking personal clarity</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                For those who recognize that some questions can only be answered alone. Who understand that 
                the deepest insights often emerge in solitude, and who are ready to walk with themselves 
                in a way that daily life rarely allows.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="h4 text-[#3d5a7a]">Those processing life transitions</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                For those navigating change—whether it's a career shift, a relationship transition, or 
                simply the feeling that something needs to shift. The mountains provide space to process 
                what needs processing, without the noise of others' expectations or advice.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="h4 text-[#3d5a7a]">Anyone needing space for deep reflection</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                For those who know that reflection requires solitude, and that the most meaningful 
                conversations are often the ones you have with yourself. This journey offers the space 
                to think deeply, without interruption or expectation.
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
              Some questions can only be answered alone. Some insights only emerge in solitude. The Solo 
              Reflection Journey exists because we believe that there is profound value in walking alone, 
              in thinking deeply without the presence of others, in having the space to process what needs 
              processing without external input.
            </p>
            <p>
              In the Himalayas, solitude takes on a different quality. It's not loneliness—it's presence 
              with yourself. The mountains don't demand conversation. They simply exist, and in their presence, 
              you can exist fully with yourself. This journey is about creating the conditions for that kind 
              of presence.
            </p>
            <p>
              The Solo Reflection Journey isn't about isolation. It's about intentional solitude. About choosing 
              to walk alone not because you have to, but because you recognize that some paths are meant to be 
              walked alone. The mountains provide the space. You provide the willingness to be present with yourself. 
              Together, they create the conditions for genuine insight.
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
              You return with a deeper understanding of yourself. The insights you gain in solitude stay with you. 
              The questions you process alone become clearer. The clarity you find walking by yourself becomes 
              something you can return to, even when you're back in the noise of daily life.
            </p>
            <p>
              The experience of intentional solitude becomes a touchstone. You'll remember what it feels like to 
              think deeply without interruption, to process without external input, to be fully present with yourself. 
              That memory becomes something you can access when you need space to think clearly.
            </p>
            <p>
              Most importantly, you'll have created space for reflection that didn't exist before. Space that 
              allows you to see yourself more clearly, to understand your own patterns, and to make decisions 
              from a place of clarity rather than reaction. That space becomes something you can return to, 
              even in the midst of daily demands.
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
                Arrive in Kathmandu. Brief orientation. Time to settle into solitude. No expectations. 
                No agenda. Just permission to be alone with yourself, fully.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Day 2: Beginning Alone</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                Travel to the starting point. First day of solo walking and reflection. Begin to find 
                your own rhythm—walk, pause, reflect. No schedule. Simply be present with the mountains 
                and yourself.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Day 3: Deepening Insight</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                Full day of walking at your own pace. Time to process and reflect. Insights emerge naturally 
                from stillness. The first full day of solitude and reflection. Begin to see yourself more 
                clearly. Return with the beginning of clarity.
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
              This journey is designed for intentional solitude, not isolation. You'll have guide support for 
              safety, but the emphasis is on walking alone, thinking alone, reflecting alone. If you're looking 
              for group connection or shared experience, this may not be the right journey for you.
            </p>
            <p>
              Connectivity is intentionally minimal. This is by design. The reflection you're seeking requires 
              disconnection from the noise that distracts from inner clarity. If you need constant communication 
              or regular internet access, consider whether this journey aligns with your needs.
            </p>
            <p>
              The journey requires comfort with your own company. Solitude can be challenging if you're not 
              accustomed to being alone with your thoughts. The mountains provide the space. You provide the 
              willingness to be present with yourself, fully, without distraction.
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
              Let's discuss how the Solo Reflection Journey can serve your need for solitude and insight. 
              No pressure, just thoughtful dialogue.
            </p>
          </div>
          <Link
            href="/enquire?journey=solo-reflection"
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

