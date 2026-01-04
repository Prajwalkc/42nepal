import MountainDivider from "./components/MountainDivider";
import HeroVideo from "./components/HeroVideo";
import Navigation from "./components/Navigation";
import MistBackground from "./components/MistBackground";
import Footer from "./components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import { unstable_noStore as noStore } from "next/cache";
import { getServerTranslations } from "../lib/translations";

// Force dynamic rendering to ensure translations update when language changes
export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  noStore();
  const { common, home } = await getServerTranslations();
  
  return {
    title: home('title'),
    description: home('subtitle'),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: `${home('title')} | ${common('siteName')}`,
      description: home('subtitle'),
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
      title: `${home('title')} | ${common('siteName')}`,
      description: home('subtitle'),
    },
  };
}

export default async function Home() {
  // Prevent caching to ensure translations update when language changes
  noStore();
  const { common, home } = await getServerTranslations();
  return (
    <div className="min-h-screen bg-[#f8f6f3] text-[#2d3a47] scroll-smooth relative">
      <MistBackground opacity={0.10} animated={true} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-24 overflow-hidden z-10 text-white">
        <HeroVideo />
        {/* <HeroAnimations /> */}
        
        <div className="relative z-20 max-w-5xl mx-auto text-center px-4">
          <div className="space-y-8 md:space-y-10 animate-fade-in">
            {/* Main Title */}
            <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-tight">
    {common('siteName')}
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
    {common('tagline')}
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
    {home('subtitle')}
  </p>
</div>


      </section>

      {/* Introduction Paragraph */}
      <section className="relative py-20 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3] z-10">
        <div className="max-w-3xl mx-auto">
          <p className="text-body text-[#4a5560] leading-relaxed text-center">
            {home('intro')}
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="relative py-40 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3] scroll-mt-20 z-10">
        <div className="max-w-3xl mx-auto space-y-20">
          <div className="text-center">
            <h2 className="h2 mb-6">
              {home('philosophy.title')}
            </h2>
          </div>
          
          <div className="space-y-16">
            <div className="space-y-6">
              <h3 className="h4 text-[#3d5a7a]">{home('philosophy.silence.title')}</h3>
              <p className="text-body leading-relaxed">
                {home('philosophy.silence.text')}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="h4 text-[#3d5a7a]">{home('philosophy.elevation.title')}</h3>
              <p className="text-body leading-relaxed">
                {home('philosophy.elevation.text')}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="h4 text-[#3d5a7a]">{home('philosophy.clarity.title')}</h3>
              <p className="text-body leading-relaxed">
                {home('philosophy.clarity.text')}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="h4 text-[#3d5a7a]">{home('philosophy.intentional.title')}</h3>
              <p className="text-body leading-relaxed">
                {home('philosophy.intentional.text')}
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
              {home('waysToExperience.title')}
            </h2>
            <p className="text-large max-w-2xl mx-auto">
              {home('waysToExperience.subtitle')}
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
                  {home('waysToExperience.journeys.title')}
                </h3>
                <p className="text-body group-hover:text-[#2d3a47] transition-colors duration-300 leading-relaxed">
                  {home('waysToExperience.journeys.description')}
                </p>
              </div>
              <div className="pt-6 mt-auto">
                <span className="text-body text-[#3d5a7a] font-medium group-hover:text-[#2d4a6a] inline-flex items-center gap-2 transition-all duration-300">
                  {common('explore')}
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
                  {home('waysToExperience.work.title')}
                </h3>
                <p className="text-body group-hover:text-[#2d3a47] transition-colors duration-300 leading-relaxed">
                  {home('waysToExperience.work.description')}
                </p>
              </div>
              <div className="pt-6 mt-auto">
                <span className="text-body text-[#3d5a7a] font-medium group-hover:text-[#2d4a6a] inline-flex items-center gap-2 transition-all duration-300">
                  {common('explore')}
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
                  {home('waysToExperience.soloOrShared.title')}
                </h3>
                <p className="text-body group-hover:text-[#2d3a47] transition-colors duration-300 leading-relaxed">
                  {home('waysToExperience.soloOrShared.description')}
                </p>
              </div>
              <div className="pt-6 mt-auto">
                <span className="text-body text-[#3d5a7a] font-medium group-hover:text-[#2d4a6a] inline-flex items-center gap-2 transition-all duration-300">
                  {common('explore')}
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
                  {home('waysToExperience.custom.title')}
                </h3>
                <p className="text-body group-hover:text-[#2d3a47] transition-colors duration-300 leading-relaxed">
                  {home('waysToExperience.custom.description')}
                </p>
              </div>
              <div className="pt-6 mt-auto">
                <span className="text-body text-[#3d5a7a] font-medium group-hover:text-[#2d4a6a] inline-flex items-center gap-2 transition-all duration-300">
                  {common('beginConversation')}
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
              {home('whyHimalayas.title')}
            </h2>
          </div>
          
          <div className="space-y-20">
            <div className="space-y-6">
              <h3 className="h4 text-[#3d5a7a]">{home('whyHimalayas.altitude.title')}</h3>
              <p className="text-body leading-relaxed">
                {home('whyHimalayas.altitude.text')}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="h4 text-[#3d5a7a]">{home('whyHimalayas.stillness.title')}</h3>
              <p className="text-body leading-relaxed">
                {home('whyHimalayas.stillness.text')}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="h4 text-[#3d5a7a]">{home('whyHimalayas.perspective.title')}</h3>
              <p className="text-body leading-relaxed">
                {home('whyHimalayas.perspective.text')}
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
              {home('whyExists.title')}
            </h2>
          </div>
          
          <div className="space-y-8 text-body leading-relaxed text-[#4a5560]">
            <p>
              {home('whyExists.text1')}
            </p>
            
            <p>
              {home('whyExists.text2')}
            </p>
            
            <p>
              {home('whyExists.text3')}
            </p>
          </div>
          
          <div className="pt-8 text-body text-[#6b7786]">
            <p className="font-medium">{common('founder')}</p>
            <p className="text-small">{common('founderTitle')}</p>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Final CTA Section */}
      <section id="enquire" className="relative py-40 px-6 sm:px-12 lg:px-24 bg-white scroll-mt-20 z-10">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <div>
            <h2 className="h2 mb-8">
              {home('cta.title')}
            </h2>
            <p className="text-large">
              {home('cta.subtitle')}
            </p>
          </div>
          
          <div className="pt-8">
            <Link 
              href="/enquire"
              className="inline-block px-12 py-5 rounded-lg bg-[#3d5a7a] text-white hover:bg-[#2d4a6a] transition-all duration-300 text-lg font-medium shadow-sm hover:shadow-md active:scale-[0.98]"
            >
              {common('beginConversation')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />


    </div>
  );
}
