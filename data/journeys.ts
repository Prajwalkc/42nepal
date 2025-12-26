export type Journey = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  shortDescription: string;
  duration: string;
  location: string;
  focusTags: string[];
  workFriendly: boolean;
  featured: boolean;
  suitableFor: string[];
  audience: string;
  outcome: string;
  forWho: string[];
  experiences: string[];
  dailyRhythm: {
    morning: string;
    midday: string;
    evening: string;
  };
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  included: string[];
  excluded: string[];
  practicalNotes: {
    seasons: string;
    altitude: string;
    connectivity: string;
    suitability: string;
  };
  metaTitle: string;
  metaDescription: string;
};

export const journeys: Journey[] = [
  {
    slug: "quiet-reset",
    title: "The Quiet Reset",
    subtitle: "For burnout, slowing down, reflection",
    description: "A journey designed to help you step back, breathe, and remember what matters. For those experiencing burnout, constant stress, or the feeling that you're always behind.",
    shortDescription: "A journey designed to help you step back, breathe, and remember what matters.",
    duration: "7 days",
    location: "Himalayan Foothills",
    focusTags: ["Rest", "Reflection", "Solo-friendly"],
    workFriendly: false,
    featured: true,
    suitableFor: ["Solo travelers", "Individuals seeking rest"],
    audience: "Individuals or leaders experiencing burnout or overwhelm",
    outcome: "Rest, mental clarity, calm return",
    forWho: [
      "Those experiencing burnout or chronic stress",
      "Leaders who need to slow down and reset",
      "Anyone feeling overwhelmed by constant demands"
    ],
    experiences: [
      "Gentle trekking at your own pace",
      "Daily sunrise walks in silence",
      "Ample time for reflection and journaling",
      "Mindful movement and rest",
      "Local guidance with deep respect for the mountains",
      "Evening contemplation in quiet spaces"
    ],
    dailyRhythm: {
      morning: "Early sunrise walk in silence. Light breakfast. Gentle movement to begin the day.",
      midday: "Slow-paced trekking with frequent pauses. Time to observe, reflect, and simply be.",
      evening: "Quiet dinner. Journaling prompts. Early rest for restoration."
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival and settling",
        description: "Arrive in Kathmandu. Brief orientation. Time to rest and adjust."
      },
      {
        day: 2,
        title: "Journey begins",
        description: "Travel to starting point. First gentle walk. Introduction to the rhythm of the journey."
      },
      {
        day: 3,
        title: "Finding your pace",
        description: "Begin trekking at a slow, mindful pace. First full day of reflection and stillness."
      },
      {
        day: 4,
        title: "Deepening stillness",
        description: "Continue at elevation. More time for quiet contemplation and journaling."
      },
      {
        day: 5,
        title: "Integration day",
        description: "A day of rest and reflection. Optional gentle walks. Time to process insights."
      },
      {
        day: 6,
        title: "Return journey",
        description: "Begin the descent. Integration of insights. Preparing to return with clarity."
      },
      {
        day: 7,
        title: "Departure",
        description: "Final reflection. Departure from Kathmandu with renewed perspective."
      }
    ],
    included: [
      "Accommodation guidance and support",
      "Local guide with deep knowledge of the mountains",
      "Slow pacing designed for reflection",
      "Daily reflection prompts and journaling space",
      "Mindful movement and rest periods",
      "Quiet spaces for contemplation"
    ],
    excluded: [
      "International flights",
      "Visa arrangements",
      "Personal travel insurance",
      "Specific accommodation guarantees"
    ],
    practicalNotes: {
      seasons: "Best in spring (March-May) and autumn (September-November) for comfortable weather and clear views.",
      altitude: "Moderate elevation (2,000-3,500m). Suitable for most travelers with proper acclimatization.",
      connectivity: "Limited internet access. Designed for disconnection and reflection.",
      suitability: "Ideal for those seeking rest and restoration. Not suitable if you need constant connectivity."
    },
    metaTitle: "The Quiet Reset | The Mountain Whisper",
    metaDescription: "A journey for burnout, slowing down, and reflection. Step back, breathe, and remember what matters in the Himalayas."
  },
  {
    slug: "leadership-in-stillness",
    title: "Between Decisions",
    subtitle: "For founders, executives, and senior leaders",
    outcome: "Perspective, clear decisions, renewed focus",
    description: "A journey designed for leaders standing between choices. Step away from urgency, noise, and constant responsibility to regain perspective. This experience offers space — not coaching, not frameworks — but the clarity that emerges when decisions are no longer rushed.",
    shortDescription: "A journey designed for leaders standing between choices. Step away from urgency, noise, and constant responsibility to regain perspective.",
    duration: "7 days",
    location: "Himalayan Foothills",
    focusTags: ["Reflection", "Work-friendly", "Small groups"],
    workFriendly: true,
    featured: true,
    suitableFor: ["Founders", "Co-founders", "Small teams"],
    audience: "Founders, executives, managers",
    forWho: [
      "Founders navigating growth and complex decisions",
      "C-suite executives seeking strategic clarity",
      "Managers leading teams through change"
    ],
    experiences: [
      "Strategic reflection time at elevation",
      "Quiet spaces for deep thinking",
      "Leadership-focused journaling prompts",
      "Mindful pacing that allows for clarity",
      "Experienced local guidance",
      "Time away from urgent demands"
    ],
    dailyRhythm: {
      morning: "Early quiet time for strategic thinking. Light breakfast. Setting intentions for the day.",
      midday: "Trekking with space for reflection. Natural pauses for processing decisions and priorities.",
      evening: "Quiet dinner. Leadership reflection prompts. Rest for mental clarity."
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival and orientation",
        description: "Arrive in Kathmandu. Brief orientation. Time to disconnect and prepare."
      },
      {
        day: 2,
        title: "Journey begins",
        description: "Travel to starting point. First day of elevation and perspective."
      },
      {
        day: 3,
        title: "Strategic reflection",
        description: "Full day at elevation. Time for deep thinking about leadership challenges."
      },
      {
        day: 4,
        title: "Clarity and decisions",
        description: "Continue ascent. Natural clarity emerges from stillness and elevation."
      },
      {
        day: 5,
        title: "Integration day",
        description: "Day of rest and reflection. Processing insights. Planning for return."
      },
      {
        day: 6,
        title: "Return with clarity",
        description: "Begin descent. Integrating new perspective. Preparing to lead differently."
      },
      {
        day: 7,
        title: "Departure",
        description: "Final reflection. Departure with renewed focus and clear priorities."
      }
    ],
    included: [
      "Accommodation guidance and support",
      "Local guide with understanding of leadership needs",
      "Pacing designed for strategic reflection",
      "Leadership-focused reflection prompts",
      "Quiet spaces for deep thinking",
      "Time away from digital distractions"
    ],
    excluded: [
      "International flights",
      "Visa arrangements",
      "Personal travel insurance",
      "Specific accommodation guarantees"
    ],
    practicalNotes: {
      seasons: "Best in spring and autumn for optimal weather and work conditions.",
      altitude: "Moderate elevation (2,000-3,500m). Suitable for strategic thinking and reflection.",
      connectivity: "Reliable internet available at base locations. Limited connectivity during trekking days.",
      suitability: "Ideal for founders and small teams seeking clarity. Work-friendly with dedicated spaces."
    },
    metaTitle: "Between Decisions | The Mountain Whisper",
    metaDescription: "A journey designed for leaders standing between choices. Step away from urgency, noise, and constant responsibility to regain perspective."
  },
  {
    slug: "solo-reflection",
    title: "Solo Reflection Journey",
    subtitle: "For solo travelers seeking meaning and reflection",
    outcome: "Insight, emotional reset, reconnection",
    description: "Walk at your own pace. Reflect in silence. Return with clarity. Sometimes the most profound insights come from walking alone.",
    shortDescription: "Walk at your own pace. Reflect in silence. Return with clarity.",
    duration: "7 days",
    location: "Langtang Valley",
    focusTags: ["Solo-friendly", "Reflection", "Rest"],
    workFriendly: false,
    featured: true,
    suitableFor: ["Solo travelers", "Individuals"],
    audience: "Solo travelers seeking meaning and reflection",
    forWho: [
      "Individuals seeking personal clarity",
      "Those processing life transitions",
      "Anyone needing space for deep reflection"
    ],
    experiences: [
      "Solo walking at your own pace",
      "Guide support for safety, not interference",
      "Ample silence and solitude",
      "Personal reflection and journaling",
      "Time to process without expectations",
      "Natural rhythm that matches your needs"
    ],
    dailyRhythm: {
      morning: "Wake naturally. Quiet breakfast. Begin walking when ready, at your own pace.",
      midday: "Walk, pause, reflect. No schedule. Simply be present with the mountains and yourself.",
      evening: "Quiet dinner. Personal reflection time. Rest when you need it."
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival",
        description: "Arrive in Kathmandu. Brief orientation. Time to settle into solitude."
      },
      {
        day: 2,
        title: "Beginning",
        description: "Travel to starting point. First day of solo walking and reflection."
      },
      {
        day: 3,
        title: "Finding your rhythm",
        description: "Full day of walking at your own pace. Time to process and reflect."
      },
      {
        day: 4,
        title: "Deepening insight",
        description: "Continue at elevation. Insights emerge naturally from stillness."
      },
      {
        day: 5,
        title: "Integration",
        description: "Day of rest or gentle walking. Processing what has emerged."
      },
      {
        day: 6,
        title: "Return journey",
        description: "Begin descent. Integrating insights. Preparing to return with clarity."
      },
      {
        day: 7,
        title: "Departure",
        description: "Final reflection. Departure with new perspective and insight."
      }
    ],
    included: [
      "Accommodation guidance and support",
      "Local guide for safety (minimal presence)",
      "Flexible pacing that matches your needs",
      "Personal reflection prompts",
      "Quiet spaces for solitude",
      "Respect for your need for space"
    ],
    excluded: [
      "International flights",
      "Visa arrangements",
      "Personal travel insurance",
      "Specific accommodation guarantees"
    ],
    practicalNotes: {
      seasons: "Best in spring and autumn. Winter possible for experienced travelers seeking solitude.",
      altitude: "Moderate to high elevation (2,500-4,000m). Requires good physical condition.",
      connectivity: "Minimal connectivity. Designed for complete disconnection and solitude.",
      suitability: "Perfect for solo travelers seeking deep reflection. Not suitable if you need constant communication."
    },
    metaTitle: "Solo Reflection Journey | The Mountain Whisper",
    metaDescription: "A journey for solo travelers seeking meaning, insight, and emotional reset through Himalayan solitude and reflection."
  },
  {
    slug: "shared-stillness",
    title: "Shared Stillness",
    subtitle: "For couples seeking presence and reconnection",
    outcome: "Presence, reconnection, shared clarity",
    description: "A journey designed for couples to step away together, reconnect, and find presence with each other. In the stillness of the mountains, create space for what truly matters in your relationship.",
    shortDescription: "For couples seeking presence and reconnection",
    duration: "7 days",
    location: "Himalayan Foothills",
    focusTags: ["Couples", "Reconnection", "Presence"],
    workFriendly: false,
    featured: true,
    suitableFor: ["Couples", "Partners"],
    audience: "Couples seeking presence and reconnection",
    forWho: [
      "Couples wanting to reconnect and slow down together",
      "Partners seeking presence and deeper connection",
      "Those looking to create shared stillness and clarity"
    ],
    experiences: [
      "Shared walking at a gentle, mindful pace",
      "Time for presence and connection",
      "Quiet moments together in nature",
      "Shared reflection and conversation",
      "Evening contemplation in peaceful spaces",
      "Local guidance with respect for your journey"
    ],
    dailyRhythm: {
      morning: "Wake together. Quiet breakfast. Begin walking side by side at a natural, gentle pace.",
      midday: "Shared walking with natural pauses. Time to be present with each other and the mountains.",
      evening: "Quiet dinner together. Reflection time. Early rest for connection and restoration."
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival and settling",
        description: "Arrive in Kathmandu. Brief orientation. Time to rest and settle in together."
      },
      {
        day: 2,
        title: "Journey begins",
        description: "Travel to starting point. First gentle walk together. Introduction to shared stillness."
      },
      {
        day: 3,
        title: "Finding presence",
        description: "Full day of walking together at a mindful pace. Creating space for presence and connection."
      },
      {
        day: 4,
        title: "Deepening connection",
        description: "Continue at elevation. More time for shared reflection and quiet moments together."
      },
      {
        day: 5,
        title: "Integration day",
        description: "Day of rest and reflection together. Processing insights. Time to simply be present."
      },
      {
        day: 6,
        title: "Return journey",
        description: "Begin descent. Integrating shared insights. Preparing to return with renewed connection."
      },
      {
        day: 7,
        title: "Departure",
        description: "Final reflection together. Departure with presence and reconnection."
      }
    ],
    included: [
      "Accommodation guidance and support",
      "Local guide for safety and support",
      "Gentle pacing designed for couples",
      "Shared reflection prompts",
      "Quiet spaces for connection",
      "Respect for your shared journey"
    ],
    excluded: [
      "International flights",
      "Visa arrangements",
      "Personal travel insurance",
      "Specific accommodation guarantees"
    ],
    practicalNotes: {
      seasons: "Best in spring and autumn. Winter possible for couples seeking quiet solitude.",
      altitude: "Moderate elevation (2,000-3,500m). Gentle pacing suitable for couples.",
      connectivity: "Minimal connectivity. Designed for presence and disconnection together.",
      suitability: "Perfect for couples seeking reconnection and presence. Not suitable if you need constant communication."
    },
    metaTitle: "Shared Stillness | The Mountain Whisper",
    metaDescription: "A journey for couples seeking presence, reconnection, and shared clarity through Himalayan stillness."
  },
  {
    slug: "team-realignment",
    title: "Collective Ascent",
    subtitle: "For small teams (4–12) and leadership groups",
    outcome: "Trust, alignment, shared clarity",
    description: "Shared elevation creates shared understanding. This journey brings teams into a quiet, neutral environment where alignment, trust, and perspective can naturally return. Designed for teams who value depth over activities and clarity over speed.",
    shortDescription: "Shared elevation creates shared understanding. This journey brings teams into a quiet, neutral environment where alignment, trust, and perspective can naturally return.",
    duration: "7 days",
    location: "Annapurna Region",
    focusTags: ["Small groups", "Work-friendly", "Reflection"],
    workFriendly: true,
    featured: false,
    suitableFor: ["Small teams", "Pairs", "Groups"],
    audience: "Small teams (4–12) and leadership groups",
    forWho: [
      "Teams navigating conflict or transition",
      "Leadership groups needing alignment",
      "Small teams seeking deeper trust and collaboration"
    ],
    experiences: [
      "Shared trekking that builds connection",
      "Facilitated reflection sessions",
      "Natural team dynamics at elevation",
      "Time for authentic conversations",
      "Shared meals and quiet moments",
      "Experienced local guidance"
    ],
    dailyRhythm: {
      morning: "Shared breakfast. Brief intention setting. Begin walking together at a natural pace.",
      midday: "Trekking with natural pauses. Space for conversations and shared reflection.",
      evening: "Shared dinner. Facilitated reflection time. Building trust through shared experience."
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival and gathering",
        description: "Arrive in Kathmandu. Team gathering. Brief orientation and intention setting."
      },
      {
        day: 2,
        title: "Journey begins",
        description: "Travel to starting point. First day of shared elevation and connection."
      },
      {
        day: 3,
        title: "Building trust",
        description: "Full day of trekking together. Natural dynamics emerge. Trust begins to build."
      },
      {
        day: 4,
        title: "Deepening alignment",
        description: "Continue at elevation. Facilitated reflection. Authentic conversations emerge."
      },
      {
        day: 5,
        title: "Integration day",
        description: "Day of rest and reflection. Processing insights. Planning for return as a team."
      },
      {
        day: 6,
        title: "Return together",
        description: "Begin descent. Integrating shared insights. Preparing to work differently together."
      },
      {
        day: 7,
        title: "Departure",
        description: "Final reflection as a team. Departure with renewed trust and alignment."
      }
    ],
    included: [
      "Accommodation guidance and support",
      "Local guide with team experience",
      "Pacing designed for team connection",
      "Facilitated reflection sessions",
      "Shared spaces for authentic conversations",
      "Support for team dynamics"
    ],
    excluded: [
      "International flights",
      "Visa arrangements",
      "Personal travel insurance",
      "Specific accommodation guarantees"
    ],
    practicalNotes: {
      seasons: "Best in spring and autumn for group travel and optimal conditions.",
      altitude: "Moderate elevation (2,000-3,500m). Suitable for most team members with proper pacing.",
      connectivity: "Reliable internet at base locations. Limited during trekking days for focused team time.",
      suitability: "Ideal for small teams (4-12 people) seeking alignment. Work-friendly with shared spaces."
    },
    metaTitle: "Collective Ascent | The Mountain Whisper",
    metaDescription: "Shared elevation creates shared understanding. This journey brings teams into a quiet, neutral environment where alignment, trust, and perspective can naturally return."
  }
];

export function getJourneyBySlug(slug: string): Journey | undefined {
  return journeys.find((journey) => journey.slug === slug);
}

export function getAllJourneySlugs(): string[] {
  return journeys.map((journey) => journey.slug);
}

export function getFeaturedJourneys(): Journey[] {
  return journeys.filter((journey) => journey.featured);
}

export function getAllJourneys(): Journey[] {
  return journeys;
}

