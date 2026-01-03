import Navigation from "../components/Navigation";
import MountainDivider from "../components/MountainDivider";
import WorkHeroVideo from "../components/WorkHeroVideo";
import MistBackground from "../components/MistBackground";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work From the Himalayas",
  description: "A calm space for individuals, artists, founders, and small teams. Deep work and stillness in the mountains without the noise. Focused productivity.",
  alternates: {
    canonical: "/work-from-the-himalayas",
  },
  openGraph: {
    title: "Work From the Himalayas | The Mountain Whisper",
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
    title: "Work From the Himalayas | The Mountain Whisper",
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
            Work From the Himalayas
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
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-8">
                <div className="space-y-2">
                  <p className="text-large text-[#4a5560]">This is not a coworking space.</p>
                </div>
                <div className="space-y-2">
                  <p className="text-large text-[#4a5560]">This is not a productivity workshop.</p>
                </div>
                <div className="space-y-2">
                  <p className="text-large text-[#4a5560]">This is not a workcation.</p>
                </div>
              </div>

              <div className="pt-4 space-y-6">
                <p className="text-body leading-relaxed text-[#4a5560]">
                  Work From the Himalayas is a space for people who want to work or create with clarity, in one of the quietest landscapes on earth.
                </p>
                <p className="text-body leading-relaxed text-[#4a5560]">
                  The best work happens when you have space to think. When the environment supports focus rather than urgency. When stillness becomes a condition for clarity.
                </p>
                <p className="text-body leading-relaxed text-[#4a5560]">
                  You work. The mountains provide the context. The quiet provides the space. Together, they create conditions where deep thinking becomes possible.
                </p>
              </div>
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
              <h3 className="h4 text-[#3d5a7a]">Founders and co-founders</h3>
              <p className="text-body leading-relaxed text-[#4a5560] pl-8 border-l-2 border-[#e8e6e3]">
                Builders who need quiet space to think, plan, and create without the constant noise of daily operations.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Small teams</h3>
              <p className="text-body leading-relaxed text-[#4a5560] pl-8 border-l-2 border-[#e8e6e3]">
                Teams seeking a calm environment to work together while experiencing the stillness of the mountains.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Writers, artists, researchers</h3>
              <p className="text-body leading-relaxed text-[#4a5560] pl-8 border-l-2 border-[#e8e6e3]">
                People whose work requires uninterrupted time and deep thinking. Writers finishing manuscripts. Musicians composing. Painters beginning series.
              </p>
            </div>
          </div>
        </div>
      </section>

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
              <h3 className="h4 text-[#3d5a7a]">Flexible daily rhythm</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                No rigid schedules. No mandatory activities. Structure your days around your work and the natural rhythm that emerges in stillness.
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

      {/* Places Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center mb-20">
            <h2 className="h2 mb-4">Places</h2>
            <p className="text-large text-[#4a5560] max-w-2xl mx-auto">
              Places chosen for stillness, light, and distance from urgency. 
              Where work experiences unfold.
            </p>
          </div>
          
          <div className="space-y-6">
            <Link
              href="/places/manang"
              className="group block"
            >
              <div className="bg-[#f8f6f3] border border-[#e8e6e3] rounded-xl p-8 hover:border-[#9ca5b3] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                  <div className="space-y-4 flex-1">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <h3 className="h3 text-[#3d5a7a] group-hover:text-[#2d4a6a] transition-colors duration-300 mb-2">
                          Manang
                        </h3>
                        <p className="text-body text-[#4a5560] leading-relaxed">
                          High valleys where silence settles between peaks. A high-altitude Himalayan village defined by stillness and long pauses.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#3d5a7a] group-hover:text-[#2d4a6a] transition-colors duration-300 sm:ml-4">
                    <span className="text-small font-medium">Explore place</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </div>
            </Link>
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
              Productivity is measured in clarity, not hours. When you have space to think and the environment supports focus, you accomplish more with less effort.
            </p>

            <p className="text-body leading-relaxed text-[#4a5560] text-lg">
              No constant notifications. No urgent interruptions. Just work when you need to work. Rest when you need to rest.
            </p>

            <p className="text-body leading-relaxed text-[#4a5560] text-lg">
              The mountains teach patience. The quiet teaches presence. You return not just with work done, but with clarity about what matters.
            </p>
          </div>
        </div>
      </section>

      <MountainDivider />

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
              <h3 className="h4 text-[#3d5a7a]">Connectivity</h3>
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
              Share what you're working on and what you need. We'll suggest a calm fit that supports your work.
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

