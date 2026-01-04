import Navigation from "../../components/Navigation";
import MountainDivider from "../../components/MountainDivider";
import Footer from "../../components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import { unstable_noStore as noStore } from "next/cache";
import { getServerTranslations } from "../../../lib/translations";

// Force dynamic rendering to ensure translations update when language changes
export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  noStore();
  const { common, getJourneyTranslation } = await getServerTranslations();
  const translation = getJourneyTranslation('quiet-reset');
  const title = translation?.title || "The Quiet Reset";
  const description = translation?.description || "A journey designed to help you step back, breathe, and remember what matters.";
  
  return {
    title: `${title} | ${common('siteName')}`,
    description: description,
    alternates: {
      canonical: "/journeys/quiet-reset",
    },
    openGraph: {
      title: `${title} | ${common('siteName')}`,
      description: description,
      images: [
        {
          url: "/images/journeys/quiet-reset.png",
          width: 1200,
          height: 630,
          alt: `${title} - Himalayan retreat for burnout and reflection`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${common('siteName')}`,
      description: description,
    },
  };
}

export default async function QuietResetPage() {
  noStore();
  const { common, journeyDetail, getJourneyTranslation } = await getServerTranslations();
  const translation = getJourneyTranslation('quiet-reset');
  
  const title = translation?.title || "The Quiet Reset";
  const subtitle = translation?.subtitle || "For burnout, slowing down, reflection";
  const description = translation?.description || "";
  const forWho = translation?.forWho || [];
  const whyExists = translation?.whyThisJourneyExists;
  const whatChanges = translation?.whatChangesAfter;
  const gentleFlow = translation?.aGentleFlow;
  const importantToKnow = translation?.importantToKnow;
  const startConversation = translation?.startConversation;
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
            {title}
          </h1>
          <p className="text-2xl sm:text-3xl mb-6 text-[#3d5a7a] font-light">
            {subtitle}
          </p>
          <p className="text-large max-w-2xl mx-auto leading-relaxed text-[#4a5560]">
            {description}
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <span className="text-small text-[#6b7786]">7 days</span>
            <span className="text-small text-[#9ca5b3]">•</span>
            <span className="text-small text-[#6b7786]">Himalayan Foothills</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link
              href="/enquire?journey=quiet-reset"
              className="px-12 py-5 rounded-lg bg-[#3d5a7a] text-white hover:bg-[#2d4a6a] transition-all duration-300 text-lg font-medium shadow-sm hover:shadow-md active:scale-[0.98]"
            >
              {journeyDetail('enquire')}
            </Link>
            <Link
              href="/journeys"
              className="text-body text-[#3d5a7a] hover:opacity-70 transition-opacity"
            >
              {journeyDetail('exploreOtherJourneys')}
            </Link>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Who This Journey Is For Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3]">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="h2 mb-8">{journeyDetail('whoThisJourneyIsFor')}</h2>
          </div>
          <div className="space-y-6">
            {forWho.map((item: string, index: number) => (
              <div key={index} className="space-y-3">
                <h3 className="h4 text-[#3d5a7a]">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MountainDivider />

      <MountainDivider />

      {/* Why This Journey Exists Section */}
      {whyExists && (
        <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-white">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="h2 mb-8">{whyExists.title}</h2>
            </div>
            <div className="space-y-8 text-body leading-relaxed text-[#4a5560]">
              <p>{whyExists.paragraph1}</p>
              <p>{whyExists.paragraph2}</p>
              <p>{whyExists.paragraph3}</p>
            </div>
          </div>
        </section>
      )}

      <MountainDivider />

      {/* What Changes After Section */}
      {whatChanges && (
        <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3]">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="h2 mb-8">{whatChanges.title}</h2>
            </div>
            <div className="space-y-8 text-body leading-relaxed text-[#4a5560]">
              <p>{whatChanges.paragraph1}</p>
              <p>{whatChanges.paragraph2}</p>
              <p>{whatChanges.paragraph3}</p>
            </div>
          </div>
        </section>
      )}

      {gentleFlow && <MountainDivider />}

      {/* A Gentle Flow Section */}
      {gentleFlow && (
        <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-white">
          <div className="max-w-3xl mx-auto space-y-16">
            <div className="text-center">
              <h2 className="h2 mb-8">{gentleFlow.title}</h2>
            </div>
            <div className="space-y-12">
              {gentleFlow.day1 && (
                <div className="space-y-4">
                  <h3 className="h4 text-[#3d5a7a]">{gentleFlow.day1.title}</h3>
                  <p className="text-body leading-relaxed text-[#4a5560]">
                    {gentleFlow.day1.description}
                  </p>
                </div>
              )}
              {gentleFlow.day2 && (
                <div className="space-y-4">
                  <h3 className="h4 text-[#3d5a7a]">{gentleFlow.day2.title}</h3>
                  <p className="text-body leading-relaxed text-[#4a5560]">
                    {gentleFlow.day2.description}
                  </p>
                </div>
              )}
              {gentleFlow.day3 && (
                <div className="space-y-4">
                  <h3 className="h4 text-[#3d5a7a]">{gentleFlow.day3.title}</h3>
                  <p className="text-body leading-relaxed text-[#4a5560]">
                    {gentleFlow.day3.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {importantToKnow && <MountainDivider />}

      {/* Important to Know Section */}
      {importantToKnow && (
        <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3]">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="h2 mb-8">{importantToKnow.title}</h2>
            </div>
            <div className="space-y-8 text-body leading-relaxed text-[#4a5560]">
              <p>{importantToKnow.paragraph1}</p>
              <p>{importantToKnow.paragraph2}</p>
              <p>{importantToKnow.paragraph3}</p>
            </div>
          </div>
        </section>
      )}

      {startConversation && <MountainDivider />}

      {/* Soft CTA Section */}
      {startConversation && (
        <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-white">
          <div className="max-w-2xl mx-auto text-center space-y-12">
            <div>
              <h2 className="h2 mb-8">{startConversation.title}</h2>
              <p className="text-large text-[#4a5560]">
                {startConversation.subtitle}
              </p>
            </div>
            <Link
              href="/enquire?journey=quiet-reset"
              className="inline-block px-12 py-5 rounded-lg bg-[#3d5a7a] text-white hover:bg-[#2d4a6a] transition-all duration-300 text-lg font-medium shadow-sm hover:shadow-md active:scale-[0.98]"
            >
              {startConversation.button}
            </Link>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

