import Navigation from "../components/Navigation";
import MountainDivider from "../components/MountainDivider";
import MistBackground from "../components/MistBackground";
import Footer from "../components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Places",
  description: "Locations chosen for stillness, light, and distance from urgency. Where journeys and work experiences unfold.",
  alternates: {
    canonical: "/places",
  },
  openGraph: {
    title: "Places | The Mountain Whisper",
    description: "Locations chosen for stillness, light, and distance from urgency. Where journeys and work experiences unfold.",
    images: [
      {
        url: "/journey.png",
        width: 1200,
        height: 630,
        alt: "Himalayan mountain landscape - The Mountain Whisper places",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Places | The Mountain Whisper",
    description: "Locations chosen for stillness, light, and distance from urgency. Where journeys and work experiences unfold.",
  },
};

const workPlaces = [
  {
    name: "Manang",
    description: "High valleys where silence settles between peaks.",
    href: "/places/manang",
  },
];

const journeyPlaces = [
  {
    name: "Mustang",
    description: "Ancient landscapes where time moves differently.",
    href: "/places/mustang",
  },
];

export default function PlacesPage() {
  return (
    <div className="min-h-screen bg-[#f8f6f3] text-[#2d3a47] scroll-smooth relative">
      <MistBackground opacity={0.10} animated={true} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 pt-32 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="h1 mb-6">
            Places
          </h1>
          <p className="text-large max-w-2xl mx-auto leading-relaxed text-[#4a5560]">
            Places are chosen for stillness, light, and distance from urgency. 
            These are the locations where journeys and work-from-Himalayas experiences unfold.
          </p>
        </div>
      </section>

      <MountainDivider />

      {/* Places List */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3] z-10">
        <div className="max-w-5xl mx-auto space-y-32">
          {/* Work Places Section */}
          {workPlaces.length > 0 && (
            <div className="space-y-12">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-[#e8e6e3]">
                <div>
                  <h2 className="h2 text-[#3d5a7a] mb-2">Work from the Himalayas</h2>
                  <p className="text-body text-[#6b7786]">
                    Places suited for focused work and deep thinking
                  </p>
                </div>
                <Link 
                  href="/work-from-the-himalayas"
                  className="text-small text-[#3d5a7a] hover:text-[#2d4a6a] transition-colors duration-300 font-medium inline-flex items-center gap-2 whitespace-nowrap"
                >
                  Learn more
                  <span>→</span>
                </Link>
              </div>
              <div className="space-y-6">
                {workPlaces.map((place) => (
                  <Link
                    key={place.href}
                    href={place.href}
                    className="group block"
                  >
                    <div className="bg-white border border-[#e8e6e3] rounded-xl p-8 hover:border-[#9ca5b3] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                        <div className="space-y-4 flex-1">
                          <div className="flex items-start gap-4">
                            <div className="flex-1">
                              <h3 className="h3 text-[#3d5a7a] group-hover:text-[#2d4a6a] transition-colors duration-300 mb-2">
                                {place.name}
                              </h3>
                              <p className="text-body text-[#4a5560] leading-relaxed">
                                {place.description}
                              </p>
                            </div>
                            <span className="text-xs font-medium text-[#3d5a7a] bg-[#f8f6f3] px-3 py-1.5 rounded-full border border-[#e8e6e3] whitespace-nowrap flex-shrink-0">
                              Work
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-[#3d5a7a] group-hover:text-[#2d4a6a] transition-colors duration-300 sm:ml-4">
                          <span className="text-small font-medium">Explore place</span>
                          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Journey Places Section */}
          {journeyPlaces.length > 0 && (
            <div className="space-y-12">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-[#e8e6e3]">
                <div>
                  <h2 className="h2 text-[#3d5a7a] mb-2">Journeys</h2>
                  <p className="text-body text-[#6b7786]">
                    Places where curated journey experiences unfold
                  </p>
                </div>
                <Link 
                  href="/journeys"
                  className="text-small text-[#3d5a7a] hover:text-[#2d4a6a] transition-colors duration-300 font-medium inline-flex items-center gap-2 whitespace-nowrap"
                >
                  View all journeys
                  <span>→</span>
                </Link>
              </div>
              <div className="space-y-6">
                {journeyPlaces.map((place) => (
                  <Link
                    key={place.href}
                    href={place.href}
                    className="group block"
                  >
                    <div className="bg-white border border-[#e8e6e3] rounded-xl p-8 hover:border-[#9ca5b3] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                        <div className="space-y-4 flex-1">
                          <div className="flex items-start gap-4">
                            <div className="flex-1">
                              <h3 className="h3 text-[#3d5a7a] group-hover:text-[#2d4a6a] transition-colors duration-300 mb-2">
                                {place.name}
                              </h3>
                              <p className="text-body text-[#4a5560] leading-relaxed">
                                {place.description}
                              </p>
                            </div>
                            <span className="text-xs font-medium text-[#3d5a7a] bg-[#f8f6f3] px-3 py-1.5 rounded-full border border-[#e8e6e3] whitespace-nowrap flex-shrink-0">
                              Journey
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-[#3d5a7a] group-hover:text-[#2d4a6a] transition-colors duration-300 sm:ml-4">
                          <span className="text-small font-medium">Explore place</span>
                          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <MountainDivider />

      <Footer />
    </div>
  );
}

