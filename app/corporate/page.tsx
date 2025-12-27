import Navigation from "../components/Navigation";
import MountainDivider from "../components/MountainDivider";
import ScenicMountains from "../components/ScenicMountains";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Retreats",
  description: "Leadership retreats designed for companies and teams seeking clarity, alignment, and renewed purpose in the Himalayas. Step away from noise.",
  alternates: {
    canonical: "/corporate",
  },
  openGraph: {
    title: "Corporate Retreats | The Mountain Whisper",
    description: "Leadership retreats designed for companies and teams seeking clarity, alignment, and renewed purpose in the Himalayas. Step away from noise.",
    images: [
      {
        url: "/journey.png",
        width: 1200,
        height: 630,
        alt: "Himalayan mountain landscape for corporate leadership retreats",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Retreats | The Mountain Whisper",
    description: "Leadership retreats designed for companies and teams seeking clarity, alignment, and renewed purpose in the Himalayas. Step away from noise.",
  },
};

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-[#f8f6f3] text-[#2d3a47] scroll-smooth">
      <Navigation />
      
      {/* Hero */}
      <section className="relative py-32 px-6 sm:px-12 lg:px-24 bg-white pt-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="h1 mb-6">
            Corporate Retreats
          </h1>
          <p className="text-large max-w-2xl mx-auto">
            Leadership retreats designed for companies and teams seeking clarity, 
            alignment, and renewed purpose.
          </p>
        </div>
      </section>

      <MountainDivider />

      {/* Why Silence and Altitude Help Leadership */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3]">
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="text-center">
            <h2 className="h2 mb-8">
              Why Silence and Altitude Help Leadership
            </h2>
          </div>
          
          <div className="space-y-12">
            <p className="text-body">
              Leadership requires clarity. Yet clarity is increasingly difficult to find in 
              environments filled with constant input, urgent decisions, and competing priorities. 
              The Himalayas offer something rare: genuine space to think.
            </p>
            
            <p className="text-body">
              At elevation, the noise of routine fades. What remains is essential. Teams that 
              experience this together return with shared perspective, clearer communication, and 
              the kind of alignment that only comes from stepping away from the daily rhythm.
            </p>
            
            <p className="text-body">
              These retreats are not team-building exercises. They are intentional spaces for 
              reflection, strategic thinking, and authentic connection—designed for leaders who 
              understand that the best decisions come from stillness, not speed.
            </p>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Who It's For */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="h2 mb-8">
              Who It's For
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Executives</h3>
              <p className="text-body">
                C-suite leaders and senior executives seeking strategic clarity and renewed 
                perspective on complex challenges.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Founders</h3>
              <p className="text-body">
                Startup founders and entrepreneurs navigating growth, decisions, and the 
                isolation that comes with leadership.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Teams</h3>
              <p className="text-body">
                Leadership teams and small groups seeking alignment, trust, and deeper 
                understanding of shared goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* What Makes These Different */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3]">
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="text-center">
            <h2 className="h2 mb-8">
              What Makes These Retreats Different
            </h2>
          </div>
          
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Privacy</h3>
              <p className="text-body">
                We understand that corporate retreats require discretion. All arrangements 
                are handled with complete confidentiality. Your team's presence and purpose 
                remain private.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Pace</h3>
              <p className="text-body">
                These are not rushed itineraries. We design journeys that allow for genuine 
                reflection, strategic thinking, and meaningful conversations. The pace matches 
                the purpose: clarity, not efficiency.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Discretion</h3>
              <p className="text-body">
                From initial enquiry to completion, every detail is handled with professional 
                discretion. We work with companies that value privacy and understand that 
                transformation requires trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* CTA */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <div>
            <h2 className="h2 mb-8">
              Enquire About a Corporate Retreat
            </h2>
            <p className="text-large">
              Let's discuss how a Himalayan retreat can serve your leadership team.
            </p>
          </div>
          
          <div className="pt-8">
            <Link
              href="/enquire"
              className="inline-block px-12 py-5 rounded-lg bg-[#3d5a7a] text-white hover:bg-[#2d4a6a] transition-all duration-300 text-lg font-medium shadow-sm hover:shadow-md active:scale-[0.98]"
            >
              Begin a conversation
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-[#e8e6e3] bg-[#f8f6f3]">
        <div className="relative h-32 overflow-hidden text-[#9ca5b3] opacity-15">
          <ScenicMountains />
        </div>
        <div className="relative z-10 px-6 sm:px-12 lg:px-24 py-16 text-center space-y-6">
          <p className="text-large font-light text-secondary">
            Step away from noise. Return with clarity.
          </p>
          <p className="text-small text-muted">
            © 2024 The Mountain Whisper. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

