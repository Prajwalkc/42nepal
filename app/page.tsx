import MountainDivider from "./components/MountainDivider";
import HeroVideo from "./components/HeroVideo";
import Navigation from "./components/Navigation";
import MistBackground from "./components/MistBackground";
import Footer from "./components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { unstable_noStore as noStore } from "next/cache";
import { getServerTranslations } from "../lib/translations";

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
  noStore();
  const { common, home } = await getServerTranslations();
  return (
    <div className="min-h-screen bg-background text-[#2d3a47] scroll-smooth relative">
      <MistBackground opacity={0.10} animated={true} />
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-24 overflow-hidden z-10 text-white">
        <HeroVideo />

        <div className="relative z-20 max-w-5xl mx-auto text-center px-4">
          <div className="space-y-8 md:space-y-10 animate-fade-in">
            <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-tight">
              {common('siteName')}
            </h1>

            <div className="flex items-center justify-center gap-4 py-2">
              <div className="w-16 md:w-24 h-px bg-white/60" />
              <div className="w-1.5 h-1.5 bg-white/70 rounded-full" />
              <div className="w-16 md:w-24 h-px bg-white/60" />
            </div>

            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white/95 leading-relaxed tracking-wide">
              {common('tagline')}
            </p>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl font-normal text-white max-w-3xl mx-auto mt-10 md:mt-14 leading-relaxed px-4 tracking-wide font-sans">
            {home('subtitle')}
          </p>

          <div className="mt-12 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/teams"
              className="inline-block min-w-[200px] px-8 py-4 rounded-lg bg-white text-[#2d3a47] hover:bg-white/90 transition-all duration-300 text-base font-medium shadow-sm hover:shadow-md active:scale-[0.98]"
            >
              {home('hero.ctaTeams')}
            </Link>
            <Link
              href="/journeys"
              className="inline-block min-w-[200px] px-8 py-4 rounded-lg border border-white/70 text-white hover:bg-white/10 transition-all duration-300 text-base font-medium active:scale-[0.98]"
            >
              {home('hero.ctaSolo')}
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy — three pillars */}
      <section id="philosophy" className="relative py-32 md:py-40 px-6 sm:px-12 lg:px-24 bg-background scroll-mt-20 z-10">
        <div className="max-w-3xl mx-auto space-y-16 md:space-y-20">
          <div className="text-center">
            <h2 className="h2 mb-6">
              {home('philosophy.title')}
            </h2>
          </div>

          <div className="space-y-14 md:space-y-16">
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
              <h3 className="h4 text-[#3d5a7a]">{home('philosophy.return.title')}</h3>
              <p className="text-body leading-relaxed">
                {home('philosophy.return.text')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Ways to Experience — two paths, teams weighted */}
      <section className="relative py-32 md:py-40 px-6 sm:px-12 lg:px-24 bg-white z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 md:mb-24">
            <h2 className="h2 mb-8">
              {home('ways.title')}
            </h2>
            <p className="text-large max-w-2xl mx-auto">
              {home('ways.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
            {/* Teams — primary, visually weightier */}
            <Link
              href="/teams"
              className="group lg:col-span-3 bg-background border border-[#e8e6e3] hover:border-[#9ca5b3] rounded-xl p-10 md:p-12 transition-all duration-300 ease-out flex flex-col hover:shadow-md hover:-translate-y-1 shadow-sm"
            >
              <div className="space-y-6 flex-1">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#3d5a7a]/10 text-[#3d5a7a] text-xs font-medium uppercase tracking-[0.18em]">
                  {home('ways.teams.label')}
                </span>
                <h3 className="text-3xl md:text-4xl font-medium leading-tight text-[#2d3a47] group-hover:text-[#3d5a7a] transition-colors duration-300">
                  {home('ways.teams.title')}
                </h3>
                <p className="text-base md:text-lg text-body leading-relaxed">
                  {home('ways.teams.description')}
                </p>
              </div>
              <div className="pt-8 mt-auto space-y-4 border-t border-[#e8e6e3]">
                <p className="text-sm text-[#6b7786] pt-6">
                  {home('ways.teams.priceRange')}
                </p>
                <span className="text-base font-medium text-[#3d5a7a] inline-flex items-center gap-2 transition-all duration-300">
                  {home('ways.teams.cta')}
                  <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                </span>
              </div>
            </Link>

            {/* Solo — secondary */}
            <Link
              href="/journeys"
              className="group lg:col-span-2 bg-background border border-[#e8e6e3] hover:border-[#9ca5b3] rounded-xl p-10 md:p-12 transition-all duration-300 ease-out flex flex-col hover:shadow-md hover:-translate-y-1 shadow-sm"
            >
              <div className="space-y-6 flex-1">
                <span className="inline-block text-xs uppercase tracking-[0.18em] text-[#6b7786]">
                  {home('ways.solo.label')}
                </span>
                <h3 className="text-2xl md:text-3xl font-medium leading-tight text-[#2d3a47] group-hover:text-[#3d5a7a] transition-colors duration-300">
                  {home('ways.solo.title')}
                </h3>
                <p className="text-body leading-relaxed">
                  {home('ways.solo.description')}
                </p>
              </div>
              <div className="pt-8 mt-auto space-y-4 border-t border-[#e8e6e3]">
                <p className="text-sm text-[#6b7786] pt-6">
                  {home('ways.solo.priceRange')}
                </p>
                <span className="text-body text-[#3d5a7a] font-medium inline-flex items-center gap-2 transition-all duration-300">
                  {home('ways.solo.cta')}
                  <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Proof — stat, quote, photo */}
      <section className="relative py-32 md:py-40 px-6 sm:px-12 lg:px-24 bg-background z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 md:mb-24">
            <h2 className="h2">
              {home('proof.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Stat */}
            <div className="bg-white border border-[#e8e6e3] rounded-xl p-10 flex flex-col justify-between min-h-[320px]">
              <div>
                <div className="text-6xl md:text-7xl font-medium text-[#3d5a7a] leading-none">
                  {home('proof.stat.number')}
                </div>
                <p className="mt-4 text-body text-[#2d3a47]">
                  {home('proof.stat.label')}
                </p>
              </div>
              <p className="text-small text-[#6b7786] mt-8">
                {home('proof.stat.context')}
              </p>
            </div>

            {/* Quote */}
            <div className="bg-white border border-[#e8e6e3] rounded-xl p-10 flex flex-col justify-between min-h-[320px]">
              <blockquote className="text-body text-[#2d3a47] leading-relaxed">
                <span className="text-[#9ca5b3]" aria-hidden="true">“</span>
                {home('proof.quote.text')}
                <span className="text-[#9ca5b3]" aria-hidden="true">”</span>
              </blockquote>
              <div className="mt-8">
                <p className="text-body font-medium text-[#2d3a47]">
                  {home('proof.quote.author')}
                </p>
                <p className="text-small text-[#6b7786]">
                  {home('proof.quote.context')}
                </p>
              </div>
            </div>

            {/* Photo */}
            <div className="bg-white border border-[#e8e6e3] rounded-xl overflow-hidden flex flex-col min-h-[320px]">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-[#9ca5b3] to-[#3d5a7a]">
                <Image
                  src="/journey.png"
                  alt={home('proof.caption.text')}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-body text-[#2d3a47]">
                  {home('proof.caption.text')}
                </p>
                <p className="text-small text-[#6b7786] mt-2">
                  {home('proof.caption.context')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Why the Himalayas */}
      <section className="relative py-32 md:py-40 px-6 sm:px-12 lg:px-24 bg-white z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20 md:mb-24">
            <h2 className="h2 mb-8">
              {home('whyHimalayas.title')}
            </h2>
          </div>

          <div className="space-y-16 md:space-y-20">
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

      {/* Founder Note */}
      <section className="relative py-32 md:py-40 px-6 sm:px-12 lg:px-24 bg-background z-10">
        <div className="max-w-2xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="h2 mb-8">
              {home('whyExists.title')}
            </h2>
          </div>

          <div className="space-y-8 text-body leading-relaxed text-[#4a5560]">
            <p>{home('whyExists.text1')}</p>
            <p>{home('whyExists.text2')}</p>
            <p>{home('whyExists.text3')}</p>
          </div>

          <div className="pt-8 text-body text-[#6b7786]">
            <p className="font-medium">{common('founder')}</p>
            <p className="text-small">{common('founderTitle')}</p>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Final CTA — two buttons */}
      <section id="enquire" className="relative py-32 md:py-40 px-6 sm:px-12 lg:px-24 bg-white scroll-mt-20 z-10">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <div>
            <h2 className="h2 mb-8">
              {home('cta.title')}
            </h2>
            <p className="text-large">
              {home('cta.subtitle')}
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/teams"
              className="inline-block min-w-[220px] px-10 py-5 rounded-lg bg-[#3d5a7a] text-white hover:bg-[#2d4a6a] transition-all duration-300 text-lg font-medium shadow-sm hover:shadow-md active:scale-[0.98]"
            >
              {home('cta.teamsButton')}
            </Link>
            <Link
              href="/journeys"
              className="inline-block min-w-[220px] px-10 py-5 rounded-lg border border-[#3d5a7a] text-[#3d5a7a] hover:bg-[#3d5a7a]/5 transition-all duration-300 text-lg font-medium active:scale-[0.98]"
            >
              {home('cta.soloButton')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
