import Navigation from "../../components/Navigation";
import MountainDivider from "../../components/MountainDivider";
import MistBackground from "../../components/MistBackground";
import Footer from "../../components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manang",
  description: "A high-altitude Himalayan village defined by silence and long pauses. Where stillness, light, and simplicity create space for deep work and reflection.",
  alternates: {
    canonical: "/places/manang",
  },
  openGraph: {
    title: "Manang | The Mountain Whisper",
    description: "A high-altitude Himalayan village defined by silence and long pauses. Where stillness, light, and simplicity create space for deep work and reflection.",
    images: [
      {
        url: "/journey.png",
        width: 1200,
        height: 630,
        alt: "Manang - High-altitude Himalayan village for stillness and deep work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manang | The Mountain Whisper",
    description: "A high-altitude Himalayan village defined by silence and long pauses. Where stillness, light, and simplicity create space for deep work and reflection.",
  },
};

export default function ManangPage() {
  return (
    <div className="min-h-screen bg-[#f8f6f3] text-[#2d3a47] scroll-smooth relative">
      <MistBackground opacity={0.10} animated={true} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 pt-32 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="h1 mb-6">Manang</h1>
          <p className="text-large max-w-2xl mx-auto leading-relaxed text-[#4a5560]">
            A high-altitude Himalayan village defined by silence and long pauses. 
            The pace here is slow. The air is thin. The light is clear.
          </p>
        </div>
      </section>

      <MountainDivider />

      {/* Why Manang Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3] z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center mb-16">
            <h2 className="h2 mb-4">Why Manang</h2>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Stillness</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                Stillness here is not absence. It's presence. The kind of quiet that allows you to hear what you've been missing. 
                Days move slowly. Evenings stretch. Time becomes spacious.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Light</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                Light at altitude is different. Clearer. More direct. It illuminates not just the landscape but your thinking. 
                The clarity you seek often comes with the clarity of light.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Altitude</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                Altitude requires patience. Your body adjusts. Your mind adjusts. The process itself teaches something about slowing down, 
                about respecting limits, about the value of gradual change.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Simplicity</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                Simplicity is not deprivation. It's focus. Fewer distractions. Fewer choices. What remains is what matters. 
                This simplicity supports the kind of thinking that gets lost in complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* What This Place Supports Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-white z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center mb-16">
            <h2 className="h2 mb-4">What this place supports</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Deep work</h3>
              <p className="text-body text-[#4a5560]">
                The quiet, the altitude, the simplicity—they create conditions where focus becomes natural. 
                You work without the constant pull of distraction.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Reflection</h3>
              <p className="text-body text-[#4a5560]">
                The long pauses between activities. The walks. The stillness. 
                These moments allow you to process and understand.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Long-form thinking</h3>
              <p className="text-body text-[#4a5560]">
                The kind of sustained thought that requires time and space. 
                Problems that felt intractable begin to resolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Practical Information Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3] z-10">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center">
            <h2 className="h2 mb-4">Practical Information</h2>
            <p className="text-large text-[#4a5560] max-w-2xl mx-auto">
              Essential details about facilities, services, and what to expect
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Medical Facilities */}
            <div className="bg-white border border-[#e8e6e3] rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-[#f8f6f3] flex items-center justify-center">
                  <span className="text-xl">🏥</span>
                </div>
                <h3 className="h4 text-[#3d5a7a]">Medical Facilities</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-body font-medium text-[#2d3a47] mb-1">Manang Health Post</p>
                  <p className="text-small text-[#6b7786]">Basic medical services available in the village</p>
                </div>
                <div>
                  <p className="text-body font-medium text-[#2d3a47] mb-1">Altitude Sickness Support</p>
                  <p className="text-small text-[#6b7786]">Local guides trained in recognizing and managing altitude-related issues</p>
                </div>
                <div>
                  <p className="text-body font-medium text-[#2d3a47] mb-1">Emergency Evacuation</p>
                  <p className="text-small text-[#6b7786]">Helicopter evacuation available for serious medical emergencies</p>
                </div>
              </div>
            </div>

            {/* Nearby Attractions */}
            <div className="bg-white border border-[#e8e6e3] rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-[#f8f6f3] flex items-center justify-center">
                  <span className="text-xl">🏔️</span>
                </div>
                <h3 className="h4 text-[#3d5a7a]">Nearby Attractions</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-body font-medium text-[#2d3a47] mb-1">Gangapurna Lake</p>
                  <p className="text-small text-[#6b7786]">Short walk from the village. A peaceful spot for reflection</p>
                </div>
                <div>
                  <p className="text-body font-medium text-[#2d3a47] mb-1">Ice Lake (Kicho Tal)</p>
                  <p className="text-small text-[#6b7786]">Day hike destination. High-altitude lake with stunning mountain views</p>
                </div>
                <div>
                  <p className="text-body font-medium text-[#2d3a47] mb-1">Milarepa Cave</p>
                  <p className="text-small text-[#6b7786]">Historic meditation cave. A place of quiet significance</p>
                </div>
              </div>
            </div>

            {/* Connectivity */}
            <div className="bg-white border border-[#e8e6e3] rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-[#f8f6f3] flex items-center justify-center">
                  <span className="text-xl">📶</span>
                </div>
                <h3 className="h4 text-[#3d5a7a]">Connectivity</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-body font-medium text-[#2d3a47] mb-1">Internet Access</p>
                  <p className="text-small text-[#6b7786]">Limited and intermittent. Best for essential communication only</p>
                </div>
                <div>
                  <p className="text-body font-medium text-[#2d3a47] mb-1">Mobile Network</p>
                  <p className="text-small text-[#6b7786]">Spotty coverage. Some areas have better signal than others</p>
                </div>
                <div>
                  <p className="text-body font-medium text-[#2d3a47] mb-1">Power Supply</p>
                  <p className="text-small text-[#6b7786]">Electricity available but can be unreliable. Solar power recommended for devices</p>
                </div>
              </div>
            </div>

            {/* Accommodation & Services */}
            <div className="bg-white border border-[#e8e6e3] rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-[#f8f6f3] flex items-center justify-center">
                  <span className="text-xl">🏠</span>
                </div>
                <h3 className="h4 text-[#3d5a7a]">Accommodation & Services</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-body font-medium text-[#2d3a47] mb-1">Lodges & Guesthouses</p>
                  <p className="text-small text-[#6b7786]">Simple, comfortable accommodations. Basic amenities available</p>
                </div>
                <div>
                  <p className="text-body font-medium text-[#2d3a47] mb-1">Dining</p>
                  <p className="text-small text-[#6b7786]">Local teahouses serve traditional Nepali and Tibetan cuisine</p>
                </div>
                <div>
                  <p className="text-body font-medium text-[#2d3a47] mb-1">Supplies</p>
                  <p className="text-small text-[#6b7786]">Basic supplies available. Limited selection. Plan accordingly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Important Considerations Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-white z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center mb-16">
            <h2 className="h2 mb-4">Important Considerations</h2>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Altitude</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                Manang sits at approximately 3,540 meters (11,614 feet). This requires proper acclimatization. 
                Some people adjust quickly. Others need more time. We ensure proper support and pacing. 
                Your well-being matters more than any schedule.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Connectivity Limitations</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                Internet access is limited. This is intentional. The quiet that makes deep work possible also means less connectivity. 
                If your work requires constant online presence or real-time collaboration, this may not be the right fit.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Not for Everyone</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                This place is not for everyone. If you need urban comforts, reliable connectivity, or extensive infrastructure, 
                look elsewhere. We're honest about limitations because we want you to choose what actually serves you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Work from the Himalayas CTA */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3] z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div>
            <h2 className="h2 mb-4">Work from the Himalayas</h2>
            <p className="text-large text-[#4a5560]">
              Manang is suitable for work-focused stays. For people comfortable with simplicity and altitude. 
              If you need quiet space to think, to write, to build, this place offers that.
            </p>
          </div>
          <Link
            href="/work-from-the-himalayas"
            className="inline-block px-12 py-5 rounded-lg bg-[#3d5a7a] text-white hover:bg-[#2d4a6a] transition-all duration-300 text-lg font-medium shadow-sm hover:shadow-md active:scale-[0.98]"
          >
            Learn more about work from the Himalayas
          </Link>
        </div>
      </section>

      <MountainDivider />

      <Footer />
    </div>
  );
}

