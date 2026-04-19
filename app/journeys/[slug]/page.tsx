import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import { getJourneyBySlug, getAllJourneySlugs } from "../../../data/journeys";
import Navigation from "../../components/Navigation";
import MountainDivider from "../../components/MountainDivider";
import Footer from "../../components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import { getServerTranslations } from "../../../lib/translations";

type Props = {
  params: Promise<{ slug: string }>;
};

// Force dynamic rendering to ensure translations update when language changes
export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  const slugs = getAllJourneySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  noStore();
  const { slug } = await params;
  const journey = getJourneyBySlug(slug);
  
  if (!journey) {
    return {
      title: "Journey Not Found | The Mountain Whisper",
    };
  }

  const { common, getJourneyTranslation } = await getServerTranslations();
  const translation = getJourneyTranslation(slug);
  const title = translation.title || journey.title;
  const subtitle = translation.subtitle || journey.subtitle;

  // Ensure description is 140-160 characters
  let description = journey.metaDescription;
  if (description.length < 140 || description.length > 160) {
    description = journey.shortDescription || journey.description;
    if (description.length > 160) {
      description = description.substring(0, 157) + "...";
    }
  }

  return {
    title: `${title} | ${common('siteName')}`,
    description: description,
    alternates: {
      canonical: `/journeys/${slug}`,
    },
    openGraph: {
      title: `${title} | ${common('siteName')}`,
      description: description,
      images: [
        {
          url: `/images/journeys/${slug}.png`,
          width: 1200,
          height: 630,
          alt: `${title} - ${subtitle} journey in the Himalayas`,
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

export default async function JourneyDetailPage({ params }: Props) {
  noStore();
  const { slug } = await params;
  const journey = getJourneyBySlug(slug);

  if (!journey) {
    notFound();
  }

  const { common, journeys: journeysT, getJourneyTranslation, journeyDetail } = await getServerTranslations();
  const translation = getJourneyTranslation(slug);
  const title = translation?.title || journey.title;
  const subtitle = translation?.subtitle || journey.subtitle;
  const description = translation?.description || journey.description;
  const forWho = translation?.forWho || journey.forWho;
  const dailyRhythm = translation?.dailyRhythm || journey.dailyRhythm;
  const included = translation?.included || journey.included;
  const excluded = translation?.excluded || journey.excluded;
  const practicalNotes = translation?.practicalNotes || journey.practicalNotes;
  
  // Get translated itinerary or use original
  const getItineraryDay = (day: number) => {
    if (!translation?.itinerary) return null;
    const dayKey = `day${day}` as keyof typeof translation.itinerary;
    return translation.itinerary[dayKey] || null;
  };

  return (
    <div className="min-h-screen bg-background text-[#2d3a47] scroll-smooth">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-white pt-32 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <h1 className="h1 mb-4">
            {title}
          </h1>
          <p className="text-2xl sm:text-3xl mb-6 text-[#3d5a7a] font-normal">
            {subtitle}
          </p>
          <p className="text-large max-w-2xl mx-auto leading-relaxed text-[#4a5560]">
            {description}
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <span className="text-small text-[#6b7786]">{journey.duration}</span>
            <span className="text-small text-[#9ca5b3]">•</span>
            <span className="text-small text-[#6b7786]">{journey.location}</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link
              href={`/enquire?journey=${journey.slug}`}
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
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-background">
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

      {/* What This Journey Offers Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="h2 mb-8">{journeyDetail('whatThisJourneyOffers')}</h2>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">{journeyDetail('paceAndRhythm')}</h3>
              <p className="text-body leading-relaxed">
                {journeyDetail('paceAndRhythmDesc')}
              </p>
            </div>
            {journey.workFriendly && (
              <div className="space-y-4">
                <h3 className="h4 text-[#3d5a7a]">{journeyDetail('workFriendliness')}</h3>
                <p className="text-body leading-relaxed">
                  {journeyDetail('workFriendlinessDesc')}
                </p>
              </div>
            )}
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">{journeyDetail('reflectionAndRestFocus')}</h3>
              <p className="text-body leading-relaxed">
                {journeyDetail('reflectionAndRestFocusDesc')}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">{journeyDetail('supportAndGuidance')}</h3>
              <p className="text-body leading-relaxed">
                {journeyDetail('supportAndGuidanceDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* A Gentle Rhythm Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-background">
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="text-center">
            <h2 className="h2 mb-8">{journeyDetail('aGentleRhythm')}</h2>
          </div>
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">{journeyDetail('morning')}</h3>
              <p className="text-body leading-relaxed">{dailyRhythm.morning}</p>
            </div>
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">{journeyDetail('midday')}</h3>
              <p className="text-body leading-relaxed">{dailyRhythm.midday}</p>
            </div>
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">{journeyDetail('evening')}</h3>
              <p className="text-body leading-relaxed">{dailyRhythm.evening}</p>
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Sample Itinerary Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="text-center">
            <h2 className="h2 mb-8">{journeyDetail('sampleItinerary')}</h2>
          </div>
          <div className="space-y-8">
            {journey.itinerary.map((day) => {
              const translatedDay = getItineraryDay(day.day);
              return (
                <div key={day.day} className="space-y-3 pb-8 border-b border-[#e8e6e3] last:border-0">
                  <div className="flex items-baseline space-x-4">
                    <span className="text-lg font-medium text-[#3d5a7a]">{journeyDetail('day')} {day.day}</span>
                    <h3 className="h4">{translatedDay?.title || day.title}</h3>
                  </div>
                  <p className="text-body text-[#4a5560]">{translatedDay?.description || day.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Practical Notes Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-background">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="h2 mb-8">{journeyDetail('practicalNotes')}</h2>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">{journeyDetail('seasons')}</h3>
              <p className="text-body">{practicalNotes.seasons}</p>
            </div>

            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">{journeyDetail('altitude')}</h3>
              <p className="text-body">{practicalNotes.altitude}</p>
            </div>

            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">{journeyDetail('connectivityExpectations')}</h3>
              <p className="text-body">{practicalNotes.connectivity}</p>
            </div>

            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">{journeyDetail('suitabilityNotes')}</h3>
              <p className="text-body">{practicalNotes.suitability}</p>
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* What's Included / Not Included Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="h2">{journeyDetail('whatsIncluded')}</h2>
              <div className="space-y-4">
                      {included.map((item: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-[#3d5a7a] mt-1">✓</span>
                    <p className="text-body">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="h2">{journeyDetail('notIncluded')}</h2>
              <div className="space-y-4">
                      {excluded.map((item: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-[#9ca5b3] mt-1">—</span>
                    <p className="text-body text-[#6b7786]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Enquiry CTA Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-background">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <div>
            <h2 className="h2 mb-8">{journeyDetail('enquireAboutThisJourney')}</h2>
            <p className="text-large">
              {journeyDetail('enquireAboutThisJourneyDesc')}
            </p>
          </div>
          <Link
            href={`/enquire?journey=${journey.slug}`}
            className="inline-block px-12 py-5 rounded-lg bg-[#3d5a7a] text-white hover:bg-[#2d4a6a] transition-all duration-300 text-lg font-medium shadow-sm hover:shadow-md active:scale-[0.98]"
          >
            {journeyDetail('beginConversation')}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

