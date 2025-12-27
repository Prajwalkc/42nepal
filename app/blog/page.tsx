import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import MountainDivider from "../components/MountainDivider";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights | The Mountain Whisper",
  description: "Reflections on stillness, mindful travel, and Himalayan retreats—notes from The Mountain Whisper.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Insights | The Mountain Whisper",
    description: "Reflections on stillness, mindful travel, and Himalayan retreats—notes from The Mountain Whisper.",
    images: [
      {
        url: "/journey.png",
        width: 1200,
        height: 630,
        alt: "Himalayan mountain landscape - The Mountain Whisper journal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights | The Mountain Whisper",
    description: "Reflections on stillness, mindful travel, and Himalayan retreats—notes from The Mountain Whisper.",
  },
};

const blogPosts = [
  {
    slug: "why-mindful-retreats-in-nepal",
    title: "Why Mindful Retreats in Nepal's Himalayas Are the Ultimate Reset",
    excerpt: "Discover why Nepal's Himalayas are the perfect place for a mindful retreat—silence, nature, clarity, and meaningful reset away from modern noise.",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#f8f6f3] text-[#2d3a47] scroll-smooth">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 px-6 sm:px-12 lg:px-24 bg-white pt-32">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="h1 mb-4">
            Insights
          </h1>
          <p className="text-large max-w-2xl mx-auto text-[#4a5560]">
            Reflections on stillness, mindful travel, and Himalayan retreats—notes from The Mountain Whisper.
          </p>
        </div>
      </section>

      <MountainDivider />

      {/* Blog Posts List */}
      <section className="relative pt-20 pb-40 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3]">
        <div className="max-w-3xl mx-auto space-y-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-white border border-[#e8e6e3] hover:border-[#9ca5b3] rounded-xl p-8 transition-all duration-300 ease-out hover:shadow-lg"
            >
              <div className="space-y-4">
                <h2 className="h3 text-[#2d3a47] group-hover:text-[#3d5a7a] transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-body text-[#4a5560] leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="pt-2">
                  <span className="text-body text-[#3d5a7a] font-medium group-hover:text-[#2d4a6a] inline-flex items-center gap-2 transition-all duration-300">
                    Read more
                    <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <MountainDivider />

      <Footer />
    </div>
  );
}

