import ScenicMountains from "./ScenicMountains";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#f8f6f3] overflow-hidden">
      {/* Subtle mountain silhouette background */}
      <div className="absolute inset-0 bottom-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40 text-[#2d3a47] opacity-[0.05]">
          <ScenicMountains />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-12 md:py-16">
        <div className="text-center space-y-6">
          <p className="text-base sm:text-lg font-light text-[#4a5560]">
            Step away from noise. Return with clarity.
          </p>
          
          {/* Footer Links */}
          <div className="flex items-center justify-center gap-6 text-sm text-[#6b7786]">
            <Link 
              href="/blog"
              className="hover:text-[#4a5560] transition-colors duration-300"
            >
              Insights
            </Link>
          </div>
          
          <p className="text-xs sm:text-sm text-[#6b7786]">
            © {currentYear} The Mountain Whisper · Nepal
          </p>
        </div>
      </div>
    </footer>
  );
}
