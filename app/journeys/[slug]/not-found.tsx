import Link from "next/link";
import Navigation from "../../components/Navigation";
import MountainDivider from "../../components/MountainDivider";
import ScenicMountains from "../../components/ScenicMountains";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f8f6f3] text-[#2d3a47] scroll-smooth">
      <Navigation />
      
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-white pt-32">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <h1 className="h1 mb-6">Journey Not Found</h1>
          <p className="text-large">
            The journey you're looking for doesn't exist. 
            Perhaps it's time to explore a different path.
          </p>
          <Link
            href="/#journeys"
            className="inline-block px-12 py-5 rounded-lg bg-[#3d5a7a] text-white hover:bg-[#2d4a6a] transition-all duration-300 text-lg font-medium shadow-sm hover:shadow-md active:scale-[0.98]"
          >
            Explore Journeys
          </Link>
        </div>
      </section>

      <MountainDivider />

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

