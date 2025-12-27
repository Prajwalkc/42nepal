import Navigation from "../components/Navigation";
import MountainDivider from "../components/MountainDivider";
import WorkHeroVideo from "../components/WorkHeroVideo";
import MistBackground from "../components/MistBackground";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "From the Himalayas",
  description: "A calm space for individuals, artists, founders, and small teams. Deep work and stillness in the mountains without the noise. Focused productivity.",
  alternates: {
    canonical: "/work-from-the-himalayas",
  },
  openGraph: {
    title: "From the Himalayas | The Mountain Whisper",
    description: "A calm space for individuals, artists, founders, and small teams. Deep work and stillness in the mountains without the noise. Focused productivity.",
    images: [
      {
        url: "/work.png",
        width: 1200,
        height: 630,
        alt: "Himalayan mountain landscape for remote work and deep focus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "From the Himalayas | The Mountain Whisper",
    description: "A calm space for individuals, artists, founders, and small teams. Deep work and stillness in the mountains without the noise. Focused productivity.",
  },
};

export default function WorkFromTheHimalayasPage() {
  return (
    <div className="min-h-screen bg-[#f8f6f3] text-[#2d3a47] scroll-smooth relative">
      <MistBackground opacity={0.10} animated={true} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 px-6 sm:px-12 lg:px-24 pt-32 overflow-hidden">
        <WorkHeroVideo />
        <div className="relative z-20 max-w-3xl mx-auto text-center space-y-6">
          <h1 className="h1 mb-4 text-white">
            From the Himalayas
          </h1>
          <p className="text-xl sm:text-2xl text-white/95 font-light max-w-2xl mx-auto">
            Focused work, without the noise
          </p>
        </div>
      </section>

      <MountainDivider />

      {/* What This Really Is Section */}
      <section className="relative pt-20 pb-40 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3] z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center">
            <h2 className="h2 mb-12">What This Really Is</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-8">
                <div className="space-y-2">
                  <p className="text-large text-[#4a5560]">This is not a coworking space.</p>
                </div>
                <div className="space-y-2">
                  <p className="text-large text-[#4a5560]">This is not a retreat.</p>
                </div>
                <div className="space-y-2">
                  <p className="text-large text-[#4a5560]">This is not a vacation disguised as work.</p>
                </div>
              </div>

              <div className="pt-4 space-y-6">
                <p className="text-body leading-relaxed text-[#4a5560]">
                  From the Himalayas is a thoughtfully designed experience for people who want to work or create with clarity, without noise — in one of the quietest landscapes on earth.
                </p>
                <p className="text-body leading-relaxed text-[#4a5560]">
                  It's for those who understand that the best work happens when you're not fighting distractions, when you have space to think, and when the environment supports focus rather than urgency.
                </p>
              </div>
            </div>

            <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/images/work.png"
                alt="Creative workspace for artists and writers in the mountains"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Who This Is For Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3] z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="h2 mb-8">Who This Is For</h2>
          </div>
          
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Digital nomads and independent builders</h3>
              <p className="text-body leading-relaxed text-[#4a5560] pl-8 border-l-2 border-[#e8e6e3]">
                People who work remotely and want to do it in a place that supports deep focus and clear thinking.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Founders & co-founders</h3>
              <p className="text-body leading-relaxed text-[#4a5560] pl-8 border-l-2 border-[#e8e6e3]">
                Builders who need quiet space to think, plan, and create without the constant noise of daily operations.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Small teams and SMEs</h3>
              <p className="text-body leading-relaxed text-[#4a5560] pl-8 border-l-2 border-[#e8e6e3]">
                Small teams and small businesses seeking a calm environment to work together while experiencing the stillness of the mountains.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Writers, artists, researchers</h3>
              <p className="text-body leading-relaxed text-[#4a5560] pl-8 border-l-2 border-[#e8e6e3]">
                People whose work requires uninterrupted time, deep thinking, and the kind of clarity that comes from stillness. Writers finishing manuscripts. Musicians composing. Painters beginning series.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      <MountainDivider />

      {/* How Work Happens Here Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3]">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center mb-20">
            <h2 className="h2 mb-8">How Work Happens Here</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Work-friendly environments</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                We curate spaces that support focus. Quiet rooms, natural light, and environments designed for thinking. Location-dependent, but always intentional.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Reliable internet where possible</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                We're transparent about connectivity. Some locations offer reliable internet. Others offer reliable quiet. We'll help you choose based on what you need to accomplish.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Flexible daily rhythm</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                No rigid schedules. No mandatory activities. Structure your days around your work, your needs, and the natural rhythm that emerges when you're not fighting noise.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Space for focus, rest, and reflection</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                Work deeply. Rest when needed. Take walks. Reflect. The environment supports all of it — because the best work happens when you're not exhausted.
              </p>
            </div>

            <div className="space-y-4 md:col-span-2">
              <h3 className="h4 text-[#3d5a7a]">Support without intrusion</h3>
              <p className="text-body leading-relaxed text-[#4a5560] max-w-2xl">
                Local support is available when you need it. Guidance, not management. Help, not oversight. You work. We ensure the environment supports that.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* A Different Way of Working Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center mb-20">
            <h2 className="h2 mb-8">A Different Way of Working</h2>
          </div>
          
          <div className="space-y-10">
            <p className="text-body leading-relaxed text-[#4a5560] text-lg">
              Productivity is measured in clarity, not hours. When you're not fighting distractions, when you have space to think, when the environment supports focus — you accomplish more with less effort.
            </p>

            <p className="text-body leading-relaxed text-[#4a5560] text-lg">
              Fewer distractions mean deeper focus. No constant notifications. No urgent interruptions. Just work, when you need to work. Rest, when you need to rest.
            </p>

            <p className="text-body leading-relaxed text-[#4a5560] text-lg">
              The environment supports thinking, not urgency. The mountains teach patience. The quiet teaches presence. You return not just with work done, but with clarity about what matters.
            </p>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Solo to Small Teams Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3]">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="h2 mb-8">Solo to Small Teams</h2>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-body">
                This experience works for individuals, pairs, and small teams (2–10 people). Whether you're working alone or with others, the environment adapts to your needs.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-body">
                Privacy is respected. Flexibility is built in. Custom pacing means you work when you need to, rest when you need to, and connect when it makes sense.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-body">
                Small teams find that shared elevation creates shared understanding. But there's no forced collaboration, no mandatory team-building. Just space to work well, together or alone.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Practical Considerations Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="h2 mb-8">Practical Considerations</h2>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Seasons and timing</h3>
              <p className="text-body">
                Different seasons offer different experiences. We'll guide you on the best times for your stay, considering weather, connectivity, and the kind of stillness you're seeking.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Altitude and suitability</h3>
              <p className="text-body">
                We work with locations that are safe and manageable. For higher elevation options, we ensure proper acclimatization and support. Your well-being is our priority.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Connectivity expectations</h3>
              <p className="text-body">
                Some locations offer reliable internet. Others offer reliable quiet. We're transparent about what to expect, so you can choose based on your work requirements.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Who this may not be ideal for</h3>
              <p className="text-body">
                If you need constant connectivity, prefer urban environments, or require extensive infrastructure, this may not be the right fit. We're honest about limitations because we want you to make the right choice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      <MountainDivider />

      {/* Enquiry CTA Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3]">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <div>
            <h2 className="h2 mb-8">Begin a Conversation</h2>
            <p className="text-large">
              Tell us how you work best — we'll suggest a calm fit.
            </p>
          </div>
          <Link
            href="/enquire?interest=work-from-the-himalayas"
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

