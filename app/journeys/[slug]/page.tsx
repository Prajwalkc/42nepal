import { notFound } from "next/navigation";
import { getJourneyBySlug, getAllJourneySlugs } from "../../../data/journeys";
import Navigation from "../../components/Navigation";
import MountainDivider from "../../components/MountainDivider";
import Footer from "../../components/Footer";
import Link from "next/link";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllJourneySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const journey = getJourneyBySlug(slug);
  
  if (!journey) {
    return {
      title: "Journey Not Found | The Mountain Whisper",
    };
  }

  // Ensure description is 140-160 characters
  let description = journey.metaDescription;
  if (description.length < 140 || description.length > 160) {
    description = journey.shortDescription || journey.description;
    if (description.length > 160) {
      description = description.substring(0, 157) + "...";
    }
  }

  return {
    title: journey.metaTitle,
    description: description,
    alternates: {
      canonical: `/journeys/${slug}`,
    },
    openGraph: {
      title: journey.metaTitle,
      description: description,
      images: [
        {
          url: `/images/journeys/${slug}.png`,
          width: 1200,
          height: 630,
          alt: `${journey.title} - ${journey.subtitle} journey in the Himalayas`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: journey.metaTitle,
      description: description,
    },
  };
}

export default async function JourneyDetailPage({ params }: Props) {
  const { slug } = await params;
  const journey = getJourneyBySlug(slug);

  if (!journey) {
    notFound();
  }

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
            {journey.title}
          </h1>
          <p className="text-2xl sm:text-3xl mb-6 text-[#3d5a7a] font-light">
            {journey.subtitle}
          </p>
          <p className="text-large max-w-2xl mx-auto leading-relaxed text-[#4a5560]">
            {journey.description}
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
              Enquire
            </Link>
            <Link
              href="/journeys"
              className="text-body text-[#3d5a7a] hover:opacity-70 transition-opacity"
            >
              Explore other journeys
            </Link>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Who This Journey Is For Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3]">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="h2 mb-8">Who This Journey Is For</h2>
          </div>
          <div className="space-y-6">
            {journey.suitableFor.map((item, index) => (
              <div key={index} className="space-y-3">
                <h3 className="h4 text-[#3d5a7a]">{item}</h3>
                <p className="text-body leading-relaxed">
                  {journey.forWho[index] || journey.description}
                </p>
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
            <h2 className="h2 mb-8">What This Journey Offers</h2>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Pace and rhythm</h3>
              <p className="text-body leading-relaxed">
                A gentle daily rhythm that allows for work, rest, and reflection. No rigid schedules. 
                Structure your days around what you need to accomplish, with natural pauses built in.
              </p>
            </div>
            {journey.workFriendly && (
              <div className="space-y-4">
                <h3 className="h4 text-[#3d5a7a]">Work-friendliness</h3>
                <p className="text-body leading-relaxed">
                  This journey supports focused work. Reliable connectivity where possible, quiet spaces for thinking, 
                  and flexibility to structure your days around your work needs.
                </p>
              </div>
            )}
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Reflection and rest focus</h3>
              <p className="text-body leading-relaxed">
                Ample time for reflection, journaling, and rest. The pace allows for processing insights 
                and returning with clarity.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Support and guidance</h3>
              <p className="text-body leading-relaxed">
                Local support ensures you have what you need. Guidance, not management. Help when you need it, 
                space when you don't.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* A Gentle Rhythm Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3]">
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="text-center">
            <h2 className="h2 mb-8">A Gentle Rhythm</h2>
          </div>
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Morning</h3>
              <p className="text-body leading-relaxed">{journey.dailyRhythm.morning}</p>
            </div>
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Midday</h3>
              <p className="text-body leading-relaxed">{journey.dailyRhythm.midday}</p>
            </div>
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Evening</h3>
              <p className="text-body leading-relaxed">{journey.dailyRhythm.evening}</p>
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Sample Itinerary Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="text-center">
            <h2 className="h2 mb-8">Sample Itinerary</h2>
          </div>
          <div className="space-y-8">
            {journey.itinerary.map((day) => (
              <div key={day.day} className="space-y-3 pb-8 border-b border-[#e8e6e3] last:border-0">
                <div className="flex items-baseline space-x-4">
                  <span className="text-lg font-medium text-[#3d5a7a]">Day {day.day}</span>
                  <h3 className="h4">{day.title}</h3>
                </div>
                <p className="text-body text-[#4a5560]">{day.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Practical Notes Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3]">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="h2 mb-8">Practical Notes</h2>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Seasons</h3>
              <p className="text-body">{journey.practicalNotes.seasons}</p>
            </div>

            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Altitude</h3>
              <p className="text-body">{journey.practicalNotes.altitude}</p>
            </div>

            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Connectivity expectations</h3>
              <p className="text-body">{journey.practicalNotes.connectivity}</p>
            </div>

            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Suitability notes</h3>
              <p className="text-body">{journey.practicalNotes.suitability}</p>
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
              <h2 className="h2">What's Included</h2>
              <div className="space-y-4">
                {journey.included.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-[#3d5a7a] mt-1">✓</span>
                    <p className="text-body">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="h2">Not Included</h2>
              <div className="space-y-4">
                {journey.excluded.map((item, index) => (
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
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3]">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <div>
            <h2 className="h2 mb-8">Enquire About This Journey</h2>
            <p className="text-large">
              Let's discuss how this journey can serve your needs. 
              No pressure, just honest dialogue.
            </p>
          </div>
          <Link
            href={`/enquire?journey=${journey.slug}`}
            className="inline-block px-12 py-5 rounded-lg bg-[#3d5a7a] text-white hover:bg-[#2d4a6a] transition-all duration-300 text-lg font-medium shadow-sm hover:shadow-md active:scale-[0.98]"
          >
            Begin a conversation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

