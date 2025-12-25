"use client";

import { useSearchParams } from "next/navigation";
import { journeys } from "../../data/journeys";

export default function EnquireHero() {
  const searchParams = useSearchParams();
  const journeySlug = searchParams.get("journey");
  const journey = journeySlug ? journeys.find((j) => j.slug === journeySlug) : null;

  return (
    <div className="max-w-3xl mx-auto text-center space-y-8">
      <h1 className="h1 mb-6">
        Start a conversation
      </h1>
      <p className="text-large max-w-2xl mx-auto">
        Tell us what you're seeking. There's no commitment — just a thoughtful exchange.
      </p>
    </div>
  );
}

