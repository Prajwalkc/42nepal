"use client";

import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { journeys } from "../../data/journeys";

export default function EnquireHero() {
  const searchParams = useSearchParams();
  const journeySlug = searchParams.get("journey");
  const journey = journeySlug ? journeys.find((j) => j.slug === journeySlug) : null;
  const t = useTranslations('enquire');

  return (
    <div className="max-w-3xl mx-auto text-center space-y-8">
      <h1 className="h1 mb-6">
        {t('title')}
      </h1>
      <p className="text-large max-w-2xl mx-auto">
        {t('subtitle')}
      </p>
    </div>
  );
}

