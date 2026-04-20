import Navigation from "../components/Navigation";
import MountainDivider from "../components/MountainDivider";
import JourneyHeroVideo from "../components/JourneyHeroVideo";
import MistBackground from "../components/MistBackground";
import Footer from "../components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import { unstable_noStore as noStore } from "next/cache";
import { getServerTranslations } from "../../lib/translations";

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  noStore();
  const { journeysCatalog } = await getServerTranslations();
  return {
    title: journeysCatalog('meta.title'),
    description: journeysCatalog('meta.description'),
    alternates: { canonical: "/journeys" },
    openGraph: {
      title: journeysCatalog('meta.ogTitle'),
      description: journeysCatalog('meta.ogDescription'),
      images: [{ url: "/journey.png", width: 1200, height: 630, alt: journeysCatalog('meta.ogAlt') }],
    },
    twitter: {
      card: "summary_large_image",
      title: journeysCatalog('meta.twitterTitle'),
      description: journeysCatalog('meta.twitterDescription'),
    },
  };
}

const JOURNEY_SLUGS = [
  { key: "quietWeek", slug: "quiet-week" },
  { key: "betweenChapters", slug: "between-chapters" },
  { key: "writingResidency", slug: "writing-residency" },
  { key: "sharedJourney", slug: "shared-journey" },
] as const;

const ARC_KEYS = ["1", "2", "3", "4", "5"] as const;
const INCLUDED_KEYS = ["accommodation", "food", "transport", "human", "handle", "bring"] as const;
const NOT_FOR_EVERYONE_KEYS = ["connectivity", "excursions", "spiritual", "escape", "guests"] as const;

export default async function JourneysPage() {
  noStore();
  const { journeysCatalog } = await getServerTranslations();

  return (
    <div className="min-h-screen bg-background text-[#2d3a47] scroll-smooth relative">
      <MistBackground opacity={0.1} animated={true} />
      <Navigation />

      {/* Hero — poetic register */}
      <section className="relative py-32 px-6 sm:px-12 lg:px-24 pt-32 overflow-hidden">
        <JourneyHeroVideo />
        <div className="relative z-20 max-w-3xl mx-auto text-center space-y-6">
          <h1 className="h1 text-white">{journeysCatalog('hero.title')}</h1>
          <p className="text-xl sm:text-2xl text-white/95 font-light max-w-2xl mx-auto">
            {journeysCatalog('hero.subtitle')}
          </p>
          <p className="pt-4">
            <Link
              href="#not-for-everyone"
              className="text-sm text-white/75 hover:text-white underline underline-offset-4 decoration-white/40"
            >
              {journeysCatalog('hero.fitLink')}
            </Link>
          </p>
        </div>
      </section>

      <MountainDivider />

      {/* Four journey cards */}
      <section className="relative py-32 md:py-40 px-6 sm:px-12 lg:px-24 bg-background z-10">
        <div className="max-w-5xl mx-auto space-y-10 md:space-y-12">
          {JOURNEY_SLUGS.map(({ key, slug }) => {
            const base = `journeys.${key}`;
            return (
              <article
                key={slug}
                className="bg-white border border-[#e8e6e3] rounded-xl p-10 md:p-14"
              >
                {/* Poetic header */}
                <header className="space-y-6">
                  <h2
                    className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal leading-tight text-[#2d3a47] tracking-tight"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {journeysCatalog(`${base}.name`)}
                  </h2>
                  <p className="text-lg md:text-xl leading-relaxed text-[#4a5560] italic max-w-3xl">
                    {journeysCatalog(`${base}.hook`)}
                  </p>
                </header>

                {/* Operational meta */}
                <div className="mt-10 pt-8 border-t border-[#e8e6e3] grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
                  {([
                    { label: journeysCatalog('labels.length'), value: journeysCatalog(`${base}.length`) },
                    { label: journeysCatalog('labels.season'), value: journeysCatalog(`${base}.season`) },
                    { label: journeysCatalog('labels.group'), value: journeysCatalog(`${base}.groupSize`) },
                    { label: journeysCatalog('labels.price'), value: journeysCatalog(`${base}.priceRange`) },
                    { label: journeysCatalog('labels.location'), value: journeysCatalog(`${base}.location`) },
                  ]).map((item) => (
                    <div key={item.label} className="space-y-1">
                      <p className="text-xs uppercase tracking-[0.14em] text-[#6b7786]">{item.label}</p>
                      <p className="text-sm md:text-base text-[#2d3a47] leading-snug">{item.value}</p>
                    </div>
                  ))}
                </div>

                {/* Two-col: description / arc */}
                <div className="mt-10 pt-8 border-t border-[#e8e6e3] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                  <div className="space-y-8">
                    <div className="space-y-3">
                      <h3 className="text-xs uppercase tracking-[0.14em] text-[#3d5a7a] font-medium">
                        {journeysCatalog('labels.forWhom')}
                      </h3>
                      <p className="text-body leading-relaxed">{journeysCatalog(`${base}.forWhom`)}</p>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xs uppercase tracking-[0.14em] text-[#3d5a7a] font-medium">
                        {journeysCatalog('labels.different')}
                      </h3>
                      <p className="text-body leading-relaxed">
                        {journeysCatalog(`${base}.whatMakesItDifferent`)}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xs uppercase tracking-[0.14em] text-[#3d5a7a] font-medium">
                      {journeysCatalog('labels.arc')}
                    </h3>
                    <ol className="space-y-3">
                      {ARC_KEYS.map((k, i) => (
                        <li key={k} className="text-body leading-relaxed flex gap-4">
                          <span className="text-sm text-[#9ca5b3] tabular-nums pt-[0.35rem] min-w-[1.25rem]">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span>{journeysCatalog(`${base}.arc.${k}`)}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-10 pt-8 border-t border-[#e8e6e3]">
                  <Link
                    href={`/enquire?journey=${slug}`}
                    className="text-[#3d5a7a] font-medium hover:text-[#2d4a6a] inline-flex items-center gap-2 group"
                  >
                    {journeysCatalog('labels.enquirePrefix')}
                    {journeysCatalog(`${base}.name`)}
                    <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <MountainDivider />

      {/* What every journey includes */}
      <section className="relative py-32 md:py-40 px-6 sm:px-12 lg:px-24 bg-white z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="h2 mb-8">{journeysCatalog('includedSection.title')}</h2>
            <p className="text-large max-w-2xl mx-auto">
              {journeysCatalog('includedSection.subtitle')}
            </p>
          </div>

          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-12">
            {INCLUDED_KEYS.map((k) => (
              <div key={k} className="space-y-3">
                <dt className="text-base md:text-lg font-medium text-[#3d5a7a]">
                  {journeysCatalog(`included.${k}.heading`)}
                </dt>
                <dd className="text-body leading-relaxed">
                  {journeysCatalog(`included.${k}.body`)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <MountainDivider />

      {/* Not for everyone */}
      <section
        id="not-for-everyone"
        className="relative py-32 md:py-40 px-6 sm:px-12 lg:px-24 bg-background z-10 scroll-mt-20"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="h2 mb-8">{journeysCatalog('notForEveryoneSection.title')}</h2>
            <p className="text-large max-w-2xl mx-auto">
              {journeysCatalog('notForEveryoneSection.subtitle')}
            </p>
          </div>

          <div className="space-y-10 md:space-y-12">
            {NOT_FOR_EVERYONE_KEYS.map((k) => (
              <div key={k} className="space-y-3">
                <h3 className="text-lg md:text-xl font-medium text-[#2d3a47] leading-snug">
                  {journeysCatalog(`notForEveryone.${k}.heading`)}
                </h3>
                <p className="text-body leading-relaxed">
                  {journeysCatalog(`notForEveryone.${k}.body`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Custom journey */}
      <section className="relative py-32 md:py-40 px-6 sm:px-12 lg:px-24 bg-white z-10">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <h2 className="h2">{journeysCatalog('customSection.title')}</h2>
          <div className="space-y-6 text-body leading-relaxed">
            <p>{journeysCatalog('customSection.paragraph1')}</p>
            <p>{journeysCatalog('customSection.paragraph2')}</p>
          </div>
          <div className="pt-4">
            <Link
              href="/enquire?journey=custom"
              className="inline-block px-10 py-4 rounded-lg border border-[#3d5a7a] text-[#3d5a7a] hover:bg-[#3d5a7a]/5 transition-all duration-300 text-base font-medium active:scale-[0.98]"
            >
              {journeysCatalog('customSection.cta')}
            </Link>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Final CTA */}
      <section className="relative py-32 md:py-40 px-6 sm:px-12 lg:px-24 bg-background z-10">
        <div className="max-w-2xl mx-auto text-center space-y-10">
          <div>
            <h2 className="h2 mb-8">{journeysCatalog('finalCta.title')}</h2>
            <p className="text-large">{journeysCatalog('finalCta.subtitle')}</p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/enquire?intent=call"
              className="inline-block min-w-[220px] px-10 py-5 rounded-lg bg-[#3d5a7a] text-white hover:bg-[#2d4a6a] transition-all duration-300 text-lg font-medium shadow-sm hover:shadow-md active:scale-[0.98]"
            >
              {journeysCatalog('finalCta.callButton')}
            </Link>
            <Link
              href="/enquire?intent=form"
              className="inline-block min-w-[220px] px-10 py-5 rounded-lg border border-[#3d5a7a] text-[#3d5a7a] hover:bg-[#3d5a7a]/5 transition-all duration-300 text-lg font-medium active:scale-[0.98]"
            >
              {journeysCatalog('finalCta.formButton')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
