import Navigation from "../components/Navigation";
import MountainDivider from "../components/MountainDivider";
import Footer from "../components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import { unstable_noStore as noStore } from "next/cache";
import { getServerTranslations } from "../../lib/translations";

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  noStore();
  const { teams } = await getServerTranslations();
  return {
    title: teams('meta.title'),
    description: teams('meta.description'),
    alternates: { canonical: "/teams" },
    openGraph: {
      title: teams('meta.ogTitle'),
      description: teams('meta.ogDescription'),
      images: [{ url: "/journey.png", width: 1200, height: 630, alt: teams('meta.ogAlt') }],
    },
    twitter: {
      card: "summary_large_image",
      title: teams('meta.twitterTitle'),
      description: teams('meta.twitterDescription'),
    },
  };
}

const PACKAGE_SLUGS = ["strategy", "engineering", "culture"] as const;
const INCLUDED_KEYS = ["1", "2", "3", "4", "5", "6", "7", "8"] as const;
const SAMPLE_DAY_ITEM_KEYS = ["1", "2", "3", "4", "5"] as const;
const SAMPLE_DAY_SLOT_KEYS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] as const;
const LOGISTICS_KEYS = [
  "arrival", "transport", "accommodation", "altitude",
  "connectivity", "dietary", "insurance", "visa",
] as const;
const TESTIMONIAL_KEYS = ["1", "2", "3"] as const;
const FAQ_KEYS = [
  "altitude", "invoice", "partner", "cancel",
  "lead", "remote", "nda", "facilitator",
] as const;

export default async function TeamsPage() {
  noStore();
  const { teams } = await getServerTranslations();

  return (
    <div className="min-h-screen bg-background text-[#2d3a47] scroll-smooth">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="h1">{teams('hero.title')}</h1>
          <p className="text-large max-w-3xl mx-auto">{teams('hero.subtitle')}</p>
          <p className="text-small text-[#6b7786] tracking-wide">{teams('hero.meta')}</p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/enquire?intent=call"
              className="inline-block min-w-[240px] px-10 py-4 rounded-lg bg-[#3d5a7a] text-white hover:bg-[#2d4a6a] transition-all duration-300 text-base font-medium shadow-sm hover:shadow-md active:scale-[0.98]"
            >
              {teams('hero.ctaCall')}
            </Link>
            <Link
              href="/enquire?intent=guide"
              className="inline-block min-w-[240px] px-10 py-4 rounded-lg border border-[#3d5a7a] text-[#3d5a7a] hover:bg-[#3d5a7a]/5 transition-all duration-300 text-base font-medium active:scale-[0.98]"
            >
              {teams('hero.ctaGuide')}
            </Link>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Packages */}
      <section className="relative py-32 md:py-40 px-6 sm:px-12 lg:px-24 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 md:mb-24 max-w-3xl mx-auto">
            <h2 className="h2 mb-8">{teams('packagesSection.title')}</h2>
            <p className="text-large">{teams('packagesSection.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PACKAGE_SLUGS.map((slug) => (
              <div
                key={slug}
                className="bg-white border border-[#e8e6e3] rounded-xl p-8 md:p-10 flex flex-col"
              >
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-medium text-[#3d5a7a] leading-tight">
                    {teams(`packages.${slug}.name`)}
                  </h3>
                  <p className="text-sm text-[#6b7786] tracking-wide">
                    {teams(`packages.${slug}.lengthDays`)} · {teams(`packages.${slug}.teamSize`)}
                  </p>
                  <p className="text-xl font-medium text-[#2d3a47]">
                    {teams(`packages.${slug}.pricePerPerson`)}
                  </p>
                </div>

                <p className="mt-6 text-body leading-relaxed">
                  {teams(`packages.${slug}.description`)}
                </p>

                <div className="mt-8 pt-8 border-t border-[#e8e6e3]">
                  <p className="text-sm font-medium text-[#2d3a47] uppercase tracking-[0.14em] mb-4">
                    {teams('packagesSection.includedLabel')}
                  </p>
                  <ul className="space-y-2">
                    {INCLUDED_KEYS.map((k) => (
                      <li key={k} className="text-[0.95rem] text-[#4a5560] leading-relaxed flex gap-3">
                        <span className="text-[#9ca5b3] flex-shrink-0 mt-[0.45rem]" aria-hidden="true">·</span>
                        <span>{teams(`packages.${slug}.included.${k}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-8 border-t border-[#e8e6e3]">
                  <p className="text-sm font-medium text-[#2d3a47] uppercase tracking-[0.14em] mb-4">
                    {teams('packagesSection.sampleDayLabel')}
                  </p>
                  <ul className="space-y-2">
                    {SAMPLE_DAY_ITEM_KEYS.map((k) => (
                      <li key={k} className="text-[0.95rem] text-[#4a5560] leading-relaxed flex gap-3">
                        <span className="text-[#9ca5b3] flex-shrink-0 mt-[0.45rem]" aria-hidden="true">·</span>
                        <span>{teams(`packages.${slug}.sampleDay.${k}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 pt-8 border-t border-[#e8e6e3]">
                  <Link
                    href={`/enquire?intent=call&package=${encodeURIComponent(teams(`packages.${slug}.name`))}`}
                    className="text-[#3d5a7a] font-medium hover:text-[#2d4a6a] inline-flex items-center gap-2 group"
                  >
                    {teams('packagesSection.cta')}
                    <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* A sample day */}
      <section className="relative py-32 md:py-40 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="h2 mb-8">{teams('sampleDaySection.title')}</h2>
            <p className="text-large">{teams('sampleDaySection.subtitle')}</p>
          </div>

          <ol className="space-y-8 md:space-y-10">
            {SAMPLE_DAY_SLOT_KEYS.map((k) => (
              <li key={k} className="grid grid-cols-[auto_1fr] gap-6 md:gap-10">
                <div className="text-xl md:text-2xl font-medium text-[#3d5a7a] tabular-nums tracking-wide min-w-[72px]">
                  {teams(`sampleDay.${k}.time`)}
                </div>
                <p className="text-body leading-relaxed">
                  {teams(`sampleDay.${k}.text`)}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <MountainDivider />

      {/* Why Nepal, why us */}
      <section className="relative py-32 md:py-40 px-6 sm:px-12 lg:px-24 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="h2">{teams('whyUs.title')}</h2>
          </div>

          <div className="space-y-16">
            {(["locations", "trackRecord", "different"] as const).map((k) => (
              <div key={k} className="space-y-6">
                <h3 className="h4 text-[#3d5a7a]">{teams(`whyUs.${k}.heading`)}</h3>
                <p className="text-body leading-relaxed">{teams(`whyUs.${k}.body`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Logistics at a glance */}
      <section className="relative py-32 md:py-40 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="h2 mb-8">{teams('logisticsSection.title')}</h2>
            <p className="text-large max-w-2xl mx-auto">{teams('logisticsSection.subtitle')}</p>
          </div>

          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-12">
            {LOGISTICS_KEYS.map((k) => (
              <div key={k} className="space-y-3">
                <dt className="text-base md:text-lg font-medium text-[#3d5a7a]">
                  {teams(`logistics.${k}.heading`)}
                </dt>
                <dd className="text-body leading-relaxed">
                  {teams(`logistics.${k}.body`)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <MountainDivider />

      {/* Proof */}
      <section className="relative py-32 md:py-40 px-6 sm:px-12 lg:px-24 bg-background">
        <div className="max-w-6xl mx-auto space-y-20 md:space-y-24">
          <div className="text-center">
            <h2 className="h2">{teams('proofSection.title')}</h2>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {TESTIMONIAL_KEYS.map((k) => (
              <div
                key={k}
                className="bg-white border border-[#e8e6e3] rounded-xl p-8 md:p-10 flex flex-col min-h-[280px]"
              >
                <blockquote className="text-body text-[#2d3a47] leading-relaxed flex-1">
                  <span className="text-[#9ca5b3]" aria-hidden="true">“</span>
                  {teams(`testimonials.${k}.quote`)}
                  <span className="text-[#9ca5b3]" aria-hidden="true">”</span>
                </blockquote>
                <div className="mt-8 pt-6 border-t border-[#e8e6e3]">
                  <p className="text-body font-medium text-[#2d3a47]">{teams(`testimonials.${k}.name`)}</p>
                  <p className="text-small text-[#6b7786]">{teams(`testimonials.${k}.role`)}</p>
                  <p className="text-small text-[#6b7786]">{teams(`testimonials.${k}.company`)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Case study */}
          <div className="bg-[#3d5a7a] text-white rounded-xl p-10 md:p-14 max-w-4xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-white/70 mb-6">
              {teams('caseStudy.label')}
            </p>
            <h3 className="text-2xl md:text-3xl font-medium leading-tight mb-6">
              {teams('caseStudy.title')}
            </h3>
            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              {teams('caseStudy.body')}
            </p>
          </div>

          {/* Numbers strip */}
          <div className="grid grid-cols-3 gap-4 md:gap-12 max-w-4xl mx-auto text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-medium text-[#3d5a7a]">{teams('numbers.teamsNumber')}</div>
              <p className="text-small text-[#6b7786] tracking-wide">{teams('numbers.teamsLabel')}</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-medium text-[#3d5a7a]">{teams('numbers.countriesNumber')}</div>
              <p className="text-small text-[#6b7786] tracking-wide">{teams('numbers.countriesLabel')}</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-medium text-[#3d5a7a]">{teams('numbers.npsNumber')}</div>
              <p className="text-small text-[#6b7786] tracking-wide">{teams('numbers.npsLabel')}</p>
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* FAQ */}
      <section className="relative py-32 md:py-40 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="h2">{teams('faqSection.title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {FAQ_KEYS.map((k) => (
              <div key={k} className="space-y-3">
                <h3 className="text-lg font-medium text-[#2d3a47] leading-snug">
                  {teams(`faq.${k}.question`)}
                </h3>
                <p className="text-body leading-relaxed">{teams(`faq.${k}.answer`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Final CTA */}
      <section className="relative py-32 md:py-40 px-6 sm:px-12 lg:px-24 bg-background">
        <div className="max-w-2xl mx-auto text-center space-y-10">
          <div>
            <h2 className="h2 mb-8">{teams('finalCta.title')}</h2>
            <p className="text-large">{teams('finalCta.subtitle')}</p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/enquire?intent=call"
              className="inline-block min-w-[240px] px-10 py-5 rounded-lg bg-[#3d5a7a] text-white hover:bg-[#2d4a6a] transition-all duration-300 text-lg font-medium shadow-sm hover:shadow-md active:scale-[0.98]"
            >
              {teams('finalCta.callButton')}
            </Link>
            <Link
              href="/enquire?intent=form"
              className="inline-block min-w-[240px] px-10 py-5 rounded-lg border border-[#3d5a7a] text-[#3d5a7a] hover:bg-[#3d5a7a]/5 transition-all duration-300 text-lg font-medium active:scale-[0.98]"
            >
              {teams('finalCta.formButton')}
            </Link>
          </div>

          <p className="text-small text-[#6b7786] max-w-lg mx-auto pt-4">
            {teams('finalCta.note')}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
