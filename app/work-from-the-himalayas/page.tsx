import Navigation from "../components/Navigation";
import MountainDivider from "../components/MountainDivider";
import WorkHeroVideo from "../components/WorkHeroVideo";
import MistBackground from "../components/MistBackground";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { unstable_noStore as noStore } from "next/cache";
import { getServerTranslations } from "../../lib/translations";

// Force dynamic rendering to ensure translations update when language changes
export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  // Prevent caching in metadata generation
  noStore();
  const { common, workFromHimalayas } = await getServerTranslations();
  
  return {
    title: workFromHimalayas('title'),
    description: workFromHimalayas('subtitle'),
    alternates: {
      canonical: "/work-from-the-himalayas",
    },
    openGraph: {
      title: `${workFromHimalayas('title')} | ${common('siteName')}`,
      description: workFromHimalayas('subtitle'),
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
      title: `${workFromHimalayas('title')} | ${common('siteName')}`,
      description: workFromHimalayas('subtitle'),
    },
  };
}

export default async function WorkFromTheHimalayasPage() {
  // Prevent caching to ensure translations update when language changes
  noStore();
  const { common, workFromHimalayas } = await getServerTranslations();
  return (
    <div className="min-h-screen bg-[#f8f6f3] text-[#2d3a47] scroll-smooth relative">
      <MistBackground opacity={0.10} animated={true} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 px-6 sm:px-12 lg:px-24 pt-32 overflow-hidden">
        <WorkHeroVideo />
        <div className="relative z-20 max-w-3xl mx-auto text-center space-y-6">
          <h1 className="h1 mb-4 text-white">
            {workFromHimalayas('title')}
          </h1>
          <p className="text-xl sm:text-2xl text-white/95 font-light max-w-2xl mx-auto">
            {workFromHimalayas('subtitle')}
          </p>
        </div>
      </section>

      <MountainDivider />

      {/* What This Really Is Section */}
      <section className="relative pt-20 pb-40 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3] z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center">
            <h2 className="h2 mb-12">{workFromHimalayas('whatThisIs.title')}</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-8">
                <div className="space-y-2">
                  <p className="text-large text-[#4a5560]">{workFromHimalayas('whatThisIs.notCoworking')}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-large text-[#4a5560]">{workFromHimalayas('whatThisIs.notWorkshop')}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-large text-[#4a5560]">{workFromHimalayas('whatThisIs.notWorkcation')}</p>
                </div>
              </div>

              <div className="pt-4 space-y-6">
                <p className="text-body leading-relaxed text-[#4a5560]">
                  {workFromHimalayas('whatThisIs.text1')}
                </p>
                <p className="text-body leading-relaxed text-[#4a5560]">
                  {workFromHimalayas('whatThisIs.text2')}
                </p>
                <p className="text-body leading-relaxed text-[#4a5560]">
                  {workFromHimalayas('whatThisIs.text3')}
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
            <h2 className="h2 mb-8">{workFromHimalayas('whoFor.title')}</h2>
          </div>
          
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">{workFromHimalayas('whoFor.founders.title')}</h3>
              <p className="text-body leading-relaxed text-[#4a5560] pl-8 border-l-2 border-[#e8e6e3]">
                {workFromHimalayas('whoFor.founders.text')}
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">{workFromHimalayas('whoFor.teams.title')}</h3>
              <p className="text-body leading-relaxed text-[#4a5560] pl-8 border-l-2 border-[#e8e6e3]">
                {workFromHimalayas('whoFor.teams.text')}
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">{workFromHimalayas('whoFor.creators.title')}</h3>
              <p className="text-body leading-relaxed text-[#4a5560] pl-8 border-l-2 border-[#e8e6e3]">
                {workFromHimalayas('whoFor.creators.text')}
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
            <h2 className="h2 mb-8">{workFromHimalayas('howWorkHappens.title')}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">{workFromHimalayas('howWorkHappens.environments.title')}</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                {workFromHimalayas('howWorkHappens.environments.text')}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">{workFromHimalayas('howWorkHappens.rhythm.title')}</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                {workFromHimalayas('howWorkHappens.rhythm.text')}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">{workFromHimalayas('howWorkHappens.space.title')}</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                {workFromHimalayas('howWorkHappens.space.text')}
              </p>
            </div>

            <div className="space-y-4 md:col-span-2">
              <h3 className="h4 text-[#3d5a7a]">{workFromHimalayas('howWorkHappens.support.title')}</h3>
              <p className="text-body leading-relaxed text-[#4a5560] max-w-2xl">
                {workFromHimalayas('howWorkHappens.support.text')}
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
            <h2 className="h2 mb-4">{workFromHimalayas('places.title')}</h2>
            <p className="text-large text-[#4a5560] max-w-2xl mx-auto">
              {workFromHimalayas('places.subtitle')}
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
                          {workFromHimalayas('places.manang.name')}
                        </h3>
                        <p className="text-body text-[#4a5560] leading-relaxed">
                          {workFromHimalayas('places.manang.description')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#3d5a7a] group-hover:text-[#2d4a6a] transition-colors duration-300 sm:ml-4">
                    <span className="text-small font-medium">{workFromHimalayas('places.explorePlace')}</span>
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
            <h2 className="h2 mb-8">{workFromHimalayas('differentWay.title')}</h2>
          </div>
          
          <div className="space-y-10">
            <p className="text-body leading-relaxed text-[#4a5560] text-lg">
              {workFromHimalayas('differentWay.text1')}
            </p>

            <p className="text-body leading-relaxed text-[#4a5560] text-lg">
              {workFromHimalayas('differentWay.text2')}
            </p>

            <p className="text-body leading-relaxed text-[#4a5560] text-lg">
              {workFromHimalayas('differentWay.text3')}
            </p>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Practical Considerations Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="h2 mb-8">{workFromHimalayas('practical.title')}</h2>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">{workFromHimalayas('practical.seasons.title')}</h3>
              <p className="text-body">
                {workFromHimalayas('practical.seasons.text')}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">{workFromHimalayas('practical.altitude.title')}</h3>
              <p className="text-body">
                {workFromHimalayas('practical.altitude.text')}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">{workFromHimalayas('practical.connectivity.title')}</h3>
              <p className="text-body">
                {workFromHimalayas('practical.connectivity.text')}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">{workFromHimalayas('practical.notForEveryone.title')}</h3>
              <p className="text-body">
                {workFromHimalayas('practical.notForEveryone.text')}
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
            <h2 className="h2 mb-8">{workFromHimalayas('cta.title')}</h2>
            <p className="text-large">
              {workFromHimalayas('cta.subtitle')}
            </p>
          </div>
          <Link
            href="/enquire?interest=work-from-the-himalayas"
            className="inline-block px-12 py-5 rounded-lg bg-[#3d5a7a] text-white hover:bg-[#2d4a6a] transition-all duration-300 text-lg font-medium shadow-sm hover:shadow-md active:scale-[0.98]"
          >
            {common('beginConversation')}
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

