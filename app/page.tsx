import ScenicMountains from "./components/ScenicMountains";
import MountainDivider from "./components/MountainDivider";
import HeroVideo from "./components/HeroVideo";
import HeroAnimations from "./components/HeroAnimations";
import Navigation from "./components/Navigation";
import MistBackground from "./components/MistBackground";
import Footer from "./components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Himalayan Retreats for Clarity and Stillness",
  description: "Curated Himalayan retreats for corporate teams and individuals. Step away from noise. Return with clarity, perspective, and renewed purpose.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Himalayan Retreats for Clarity and Stillness | The Mountain Whisper",
    description: "Curated Himalayan retreats for corporate teams and individuals. Step away from noise. Return with clarity, perspective, and renewed purpose.",
    images: [
      {
        url: "/journey.png",
        width: 1200,
        height: 630,
        alt: "Himalayan mountain landscape - The Mountain Whisper retreats",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Himalayan Retreats for Clarity and Stillness | The Mountain Whisper",
    description: "Curated Himalayan retreats for corporate teams and individuals. Step away from noise. Return with clarity, perspective, and renewed purpose.",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f6f3] text-[#2d3a47] scroll-smooth relative">
      <MistBackground opacity={0.10} animated={true} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-24 overflow-hidden z-10">
        <HeroVideo />
        {/* <HeroAnimations /> */}
        
        <div className="relative z-20 max-w-5xl mx-auto text-center px-4">
          <div className="space-y-8 md:space-y-10 animate-fade-in">
            {/* Main Title */}
            <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-tight">
    The Mountain Whisper
  </h1>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 py-2">
              <div className="w-16 md:w-24 h-px bg-white/60" />
              <div className="w-1.5 h-1.5 bg-white/70 rounded-full" />
              <div className="w-16 md:w-24 h-px bg-white/60" />
  </div>

            {/* Tagline */}
  <p
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white/95 leading-relaxed"
    style={{
                letterSpacing: "0.02em",
    }}
  >
    Where silence speaks.
  </p>
          </div>

          {/* Subtitle - separated with more space */}
  <p
            className="text-lg sm:text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto mt-12 md:mt-16 leading-relaxed px-4"
            style={{
              letterSpacing: "0.01em",
              color: "white",
              fontWeight: "400",  
              fontFamily: "var(--font-inter)",
            }}
  >
    Thoughtfully curated experiences in the Himalayas — designed for clarity,
    rest, and meaningful work.
  </p>
</div>


      </section>

      {/* Introduction Paragraph */}
      <section className="relative py-20 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3] z-10">
        <div className="max-w-3xl mx-auto">
          <p className="text-body text-[#4a5560] leading-relaxed text-center">
            The Mountain Whisper offers mindful retreats in the heart of Nepal's Himalayas, where stillness becomes a teacher and elevation brings clarity. Here, in the quiet spaces between peaks and valleys, you'll find the reset you've been seeking—not as escape, but as return. These carefully curated experiences invite you to step away from the noise of daily life and into the profound silence that the mountains have held for millennia. Whether you come seeking perspective, rest, or simply the space to remember what matters, the Himalayas offer something increasingly rare: genuine stillness, where clarity emerges naturally and purpose finds its voice again. <Link href="/blog/why-mindful-retreats-in-nepal" className="text-[#3d5a7a] hover:text-[#2d4a6a] underline">Why mindful retreats in Nepal's Himalayas are the ultimate reset</Link>.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="relative py-40 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3] scroll-mt-20 z-10">
        <div className="max-w-3xl mx-auto space-y-20">
          <div className="text-center">
            <h2 className="h2 mb-6">
              Philosophy
            </h2>
          </div>
          
          <div className="space-y-16">
            <div className="space-y-6">
              <h3 className="h4 text-[#3d5a7a]">Silence</h3>
              <p className="text-body leading-relaxed">
                In the Himalayas, silence is not empty—it's full. Full of clarity, perspective, 
                and the kind of stillness that allows you to hear what truly matters. Away from 
                the constant noise of modern life, silence becomes a teacher.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="h4 text-[#3d5a7a]">Elevation</h3>
              <p className="text-body leading-relaxed">
                Physical elevation brings mental elevation. As you ascend, the noise of routine 
                fades. What remains is essential. The higher you go, the clearer you see—not just 
                the landscape, but your own path forward.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="h4 text-[#3d5a7a]">Clarity Beyond Routine</h3>
              <p className="text-body leading-relaxed">
                Our journeys are designed to break the patterns that keep you stuck. Through 
                intentional time in nature's most powerful spaces, you'll find the clarity that 
                eludes you in daily routine. Return with perspective that transforms how you 
                work, lead, and live.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="h4 text-[#3d5a7a]">Intentional Living</h3>
              <p className="text-body leading-relaxed">
                The Mountain Whisper is about creating spaces for reflection, work, and rest. 
                Not escape, but return. Not withdrawal, but clarity. We believe in the power 
                of intentional time away—time that helps you return with renewed purpose and 
                deeper understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Ways to Experience */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-white z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="h2 mb-8">
              Ways to Experience
            </h2>
            <p className="text-large max-w-2xl mx-auto">
              People experience The Mountain Whisper in different ways. 
              Each path offers its own rhythm, its own depth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Journeys */}
            <Link
              href="/journeys"
              className="group bg-[#f8f6f3] border border-[#e8e6e3] hover:border-[#9ca5b3] rounded-xl p-8 transition-all duration-300 ease-out flex flex-col hover:shadow-xl hover:-translate-y-2 shadow-sm"
            >
              <div className="space-y-6 flex-1">
                <h3 className="h4 text-[#3d5a7a] group-hover:text-[#2d4a6a] transition-colors duration-300">
                  Journeys
                </h3>
                <p className="text-body group-hover:text-[#2d3a47] transition-colors duration-300 leading-relaxed">
                  Thoughtfully curated experiences designed for clarity, rest, and meaningful work. 
                  Different paces, different durations, each with intention.
                </p>
              </div>
              <div className="pt-6 mt-auto">
                <span className="text-body text-[#3d5a7a] font-medium group-hover:text-[#2d4a6a] inline-flex items-center gap-2 transition-all duration-300">
                  Explore
                  <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                </span>
              </div>
            </Link>

            {/* Work From the Himalayas */}
            <Link
              href="/work-from-the-himalayas"
              className="group bg-[#f8f6f3] border border-[#e8e6e3] hover:border-[#9ca5b3] rounded-xl p-8 transition-all duration-300 ease-out flex flex-col hover:shadow-xl hover:-translate-y-2 shadow-sm"
            >
              <div className="space-y-6 flex-1">
                <h3 className="h4 text-[#3d5a7a] group-hover:text-[#2d4a6a] transition-colors duration-300">
                  Work From the Himalayas
                </h3>
                <p className="text-body group-hover:text-[#2d3a47] transition-colors duration-300 leading-relaxed">
                  A calm retreat for founders, remote teams, and independent builders. 
                  Deep work and stillness in the mountains.
                </p>
              </div>
              <div className="pt-6 mt-auto">
                <span className="text-body text-[#3d5a7a] font-medium group-hover:text-[#2d4a6a] inline-flex items-center gap-2 transition-all duration-300">
                  Explore
                  <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                </span>
              </div>
            </Link>

            {/* Solo or Shared */}
            <Link
              href="/journeys"
              className="group bg-[#f8f6f3] border border-[#e8e6e3] hover:border-[#9ca5b3] rounded-xl p-8 transition-all duration-300 ease-out flex flex-col hover:shadow-xl hover:-translate-y-2 shadow-sm"
            >
              <div className="space-y-6 flex-1">
                <h3 className="h4 text-[#3d5a7a] group-hover:text-[#2d4a6a] transition-colors duration-300">
                  Solo or Shared
                </h3>
                <p className="text-body group-hover:text-[#2d3a47] transition-colors duration-300 leading-relaxed">
                  Whether you come alone or with others, the experience adapts. 
                  Personal reflection or shared elevation—both paths lead to clarity.
                </p>
              </div>
              <div className="pt-6 mt-auto">
                <span className="text-body text-[#3d5a7a] font-medium group-hover:text-[#2d4a6a] inline-flex items-center gap-2 transition-all duration-300">
                  Explore
                  <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                </span>
              </div>
            </Link>

            {/* Custom Journey */}
            <Link
              href="/enquire"
              className="group bg-[#f8f6f3] border border-[#e8e6e3] hover:border-[#9ca5b3] rounded-xl p-8 transition-all duration-300 ease-out flex flex-col hover:shadow-xl hover:-translate-y-2 shadow-sm"
            >
              <div className="space-y-6 flex-1">
                <h3 className="h4 text-[#3d5a7a] group-hover:text-[#2d4a6a] transition-colors duration-300">
                  Custom Journey
                </h3>
                <p className="text-body group-hover:text-[#2d3a47] transition-colors duration-300 leading-relaxed">
                  For those seeking something specific. We design experiences that meet you 
                  where you are, with the pace and focus you need.
                </p>
              </div>
              <div className="pt-6 mt-auto">
                <span className="text-body text-[#3d5a7a] font-medium group-hover:text-[#2d4a6a] inline-flex items-center gap-2 transition-all duration-300">
                  Begin a conversation
                  <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Why the Himalayas */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-white z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="h2 mb-8">
              Why the Himalayas
            </h2>
          </div>
          
          <div className="space-y-20">
            <div className="space-y-6">
              <h3 className="h4 text-[#3d5a7a]">Altitude</h3>
              <p className="text-body leading-relaxed">
                Physical elevation creates mental elevation. As you ascend, the noise of routine 
                fades. What remains is essential. The challenge of altitude mirrors the challenge 
                of clarity—both require patience, presence, and the willingness to slow down.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="h4 text-[#3d5a7a]">Stillness</h3>
              <p className="text-body leading-relaxed">
                The Himalayas offer something increasingly rare: genuine stillness. No Wi-Fi zones. 
                No urgent notifications. Just mountains that have stood for millennia, teaching 
                patience. In this stillness, clarity emerges naturally.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="h4 text-[#3d5a7a]">Perspective</h3>
              <p className="text-body leading-relaxed">
                From elevation, you see differently. The problems that felt overwhelming at sea level 
                shrink to their proper size. The priorities that seemed urgent reveal their true 
                importance. You return with perspective that transforms how you work, lead, and live.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Founder Message Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3] z-10">
        <div className="max-w-2xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="h2 mb-8">
              Why this exists
            </h2>
          </div>
          
          <div className="space-y-8 text-body leading-relaxed text-[#4a5560]">
            <p>
              I've spent years working in fast-moving environments where everything feels urgent. 
              Deadlines stack up, decisions need to be made quickly, and the pace never slows. 
              Over time, I learned that clarity doesn't come from doing more — it comes from 
              creating space. The kind of space that lets you see what actually matters.
            </p>
            
            <p>
              Working closer to nature, especially in the Himalayas, changed how I approach both 
              work and life. The mountains taught me that slowing down isn't about doing less — 
              it's about doing what matters with intention. The elevation, the silence, the 
              perspective — these aren't luxuries. They're necessities for anyone who wants to 
              work deeply and live fully.
            </p>
            
            <p>
              The Mountain Whisper exists for others who care deeply about their work but want 
              to work with intention. For those who understand that the best thinking happens 
              away from the noise. If that resonates with you, I hope we can create that space 
              together.
            </p>
          </div>
          
          <div className="pt-8 text-body text-[#6b7786]">
            <p className="font-medium">Prajwal</p>
            <p className="text-small">Founder, The Mountain Whisper</p>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Final CTA Section */}
      <section id="enquire" className="relative py-40 px-6 sm:px-12 lg:px-24 bg-white scroll-mt-20 z-10">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <div>
            <h2 className="h2 mb-8">
              Begin a conversation
            </h2>
            <p className="text-large">
              Tell us what you're seeking — we'll guide you thoughtfully.
            </p>
          </div>
          
          <div className="pt-8">
            <Link 
              href="/enquire"
              className="inline-block px-12 py-5 rounded-lg bg-[#3d5a7a] text-white hover:bg-[#2d4a6a] transition-all duration-300 text-lg font-medium shadow-sm hover:shadow-md active:scale-[0.98]"
            >
              Begin a conversation
            </Link>
          </div>
        </div>
      </section>

      <Footer />


    </div>
  );
}
