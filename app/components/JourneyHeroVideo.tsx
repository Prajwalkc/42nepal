"use client";

import Image from "next/image";

export default function JourneyHeroVideo() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Fallback Image */}
      <div className="absolute inset-0">
        <Image
          src="/journey.png"
          alt="Himalayan mountain landscape for curated journey experiences"
          fill
          priority
          className="object-cover"
          quality={90}
        />
      </div>
      
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/journey.png"
      >
        <source src="/journey.mp4" type="video/mp4" />
      </video>
    </div>
  );
}


