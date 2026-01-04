import Navigation from "../../components/Navigation";
import MountainDivider from "../../components/MountainDivider";
import MistBackground from "../../components/MistBackground";
import Footer from "../../components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import { unstable_noStore as noStore } from "next/cache";
import { getServerTranslations } from "../../../lib/translations";

// Force dynamic rendering to ensure translations update when language changes
export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const { common, places } = await getServerTranslations();
  const manang = places('manang');
  
  return {
    title: manang('title'),
    description: manang('description'),
    alternates: {
      canonical: "/places/manang",
    },
    openGraph: {
      title: `${manang('title')} | ${common('siteName')}`,
      description: manang('description'),
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
      title: `${manang('title')} | ${common('siteName')}`,
      description: manang('description'),
    },
  };
}

export default async function ManangPage() {
  // Prevent caching to ensure translations update when language changes
  noStore();
  const { common, places, workFromHimalayas } = await getServerTranslations();
  const manang = places('manang');
  return (
    <div className="min-h-screen bg-[#f8f6f3] text-[#2d3a47] scroll-smooth relative">
      <MistBackground opacity={0.10} animated={true} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 pt-32 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="h1 mb-6">{manang('title')}</h1>
          <p className="text-large max-w-2xl mx-auto leading-relaxed text-[#4a5560]">
            {manang('description')}
          </p>
        </div>
      </section>

      <MountainDivider />

      {/* Why Manang Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3] z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center mb-16">
            <h2 className="h2 mb-4">{manang('whyManang.title')}</h2>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">{manang('whyManang.stillness.title')}</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                {manang('whyManang.stillness.text')}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">{manang('whyManang.light.title')}</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                {manang('whyManang.light.text')}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">{manang('whyManang.altitude.title')}</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                {manang('whyManang.altitude.text')}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">{manang('whyManang.simplicity.title')}</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                {manang('whyManang.simplicity.text')}
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
            <h2 className="h2 mb-4">{manang('supports.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">{manang('supports.deepWork.title')}</h3>
              <p className="text-body text-[#4a5560]">
                {manang('supports.deepWork.text')}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">{manang('supports.reflection.title')}</h3>
              <p className="text-body text-[#4a5560]">
                {manang('supports.reflection.text')}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">{manang('supports.thinking.title')}</h3>
              <p className="text-body text-[#4a5560]">
                {manang('supports.thinking.text')}
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
            <h2 className="h2 mb-4">{manang('practical.title')}</h2>
            <p className="text-large text-[#4a5560] max-w-2xl mx-auto">
              {manang('practical.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Medical Facilities */}
            <div className="bg-white border border-[#e8e6e3] rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-[#f8f6f3] flex items-center justify-center">
                  <span className="text-xl">🏥</span>
                </div>
                <h3 className="h4 text-[#3d5a7a]">{manang('practical.medical.title')}</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-body font-medium text-[#2d3a47] mb-1">{manang('practical.medical.healthPost.name')}</p>
                  <p className="text-small text-[#6b7786]">{manang('practical.medical.healthPost.description')}</p>
                </div>
                <div>
                  <p className="text-body font-medium text-[#2d3a47] mb-1">{manang('practical.medical.altitude.name')}</p>
                  <p className="text-small text-[#6b7786]">{manang('practical.medical.altitude.description')}</p>
                </div>
                <div>
                  <p className="text-body font-medium text-[#2d3a47] mb-1">{manang('practical.medical.evacuation.name')}</p>
                  <p className="text-small text-[#6b7786]">{manang('practical.medical.evacuation.description')}</p>
                </div>
              </div>
            </div>

            {/* Nearby Attractions */}
            <div className="bg-white border border-[#e8e6e3] rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-[#f8f6f3] flex items-center justify-center">
                  <span className="text-xl">🏔️</span>
                </div>
                <h3 className="h4 text-[#3d5a7a]">{manang('practical.attractions.title')}</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-body font-medium text-[#2d3a47] mb-1">{manang('practical.attractions.gangapurna.name')}</p>
                  <p className="text-small text-[#6b7786]">{manang('practical.attractions.gangapurna.description')}</p>
                </div>
                <div>
                  <p className="text-body font-medium text-[#2d3a47] mb-1">{manang('practical.attractions.iceLake.name')}</p>
                  <p className="text-small text-[#6b7786]">{manang('practical.attractions.iceLake.description')}</p>
                </div>
                <div>
                  <p className="text-body font-medium text-[#2d3a47] mb-1">{manang('practical.attractions.milarepa.name')}</p>
                  <p className="text-small text-[#6b7786]">{manang('practical.attractions.milarepa.description')}</p>
                </div>
              </div>
            </div>

            {/* Connectivity */}
            <div className="bg-white border border-[#e8e6e3] rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-[#f8f6f3] flex items-center justify-center">
                  <span className="text-xl">📶</span>
                </div>
                <h3 className="h4 text-[#3d5a7a]">{manang('practical.connectivity.title')}</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-body font-medium text-[#2d3a47] mb-1">{manang('practical.connectivity.internet.name')}</p>
                  <p className="text-small text-[#6b7786]">{manang('practical.connectivity.internet.description')}</p>
                </div>
                <div>
                  <p className="text-body font-medium text-[#2d3a47] mb-1">{manang('practical.connectivity.mobile.name')}</p>
                  <p className="text-small text-[#6b7786]">{manang('practical.connectivity.mobile.description')}</p>
                </div>
                <div>
                  <p className="text-body font-medium text-[#2d3a47] mb-1">{manang('practical.connectivity.power.name')}</p>
                  <p className="text-small text-[#6b7786]">{manang('practical.connectivity.power.description')}</p>
                </div>
              </div>
            </div>

            {/* Accommodation & Services */}
            <div className="bg-white border border-[#e8e6e3] rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-[#f8f6f3] flex items-center justify-center">
                  <span className="text-xl">🏠</span>
                </div>
                <h3 className="h4 text-[#3d5a7a]">{manang('practical.accommodation.title')}</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-body font-medium text-[#2d3a47] mb-1">{manang('practical.accommodation.lodges.name')}</p>
                  <p className="text-small text-[#6b7786]">{manang('practical.accommodation.lodges.description')}</p>
                </div>
                <div>
                  <p className="text-body font-medium text-[#2d3a47] mb-1">{manang('practical.accommodation.dining.name')}</p>
                  <p className="text-small text-[#6b7786]">{manang('practical.accommodation.dining.description')}</p>
                </div>
                <div>
                  <p className="text-body font-medium text-[#2d3a47] mb-1">{manang('practical.accommodation.supplies.name')}</p>
                  <p className="text-small text-[#6b7786]">{manang('practical.accommodation.supplies.description')}</p>
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
            <h2 className="h2 mb-4">{manang('considerations.title')}</h2>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">{manang('considerations.altitude.title')}</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                {manang('considerations.altitude.text')}
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">{manang('considerations.connectivity.title')}</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                {manang('considerations.connectivity.text')}
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">{manang('considerations.notForEveryone.title')}</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                {manang('considerations.notForEveryone.text')}
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
            <h2 className="h2 mb-4">{manang('workCta.title')}</h2>
            <p className="text-large text-[#4a5560]">
              {manang('workCta.text')}
            </p>
          </div>
          <Link
            href="/work-from-the-himalayas"
            className="inline-block px-12 py-5 rounded-lg bg-[#3d5a7a] text-white hover:bg-[#2d4a6a] transition-all duration-300 text-lg font-medium shadow-sm hover:shadow-md active:scale-[0.98]"
          >
            {common('learnMore')}
          </Link>
        </div>
      </section>

      <MountainDivider />

      <Footer />
    </div>
  );
}

