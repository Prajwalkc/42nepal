import { MetadataRoute } from "next";
import { getAllJourneys } from "../data/journeys";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.themountainwhisper.com";
  const now = new Date();

  // Get all journey slugs dynamically
  const journeys = getAllJourneys();
  const journeyRoutes = journeys.map((journey) => ({
    url: `${baseUrl}/journeys/${journey.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [
    // Home page - highest priority
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Key pages - high priority
    {
      url: `${baseUrl}/journeys`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/enquire`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/work-from-the-himalayas`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/corporate`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Other pages - medium priority
    {
      url: `${baseUrl}/itinerary/everest-base-camp`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    // Dynamic journey routes from data
    ...journeyRoutes,
  ];
}

