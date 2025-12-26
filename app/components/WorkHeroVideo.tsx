"use client";

import Image from "next/image";

export default function WorkHeroVideo() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Fallback Image */}
      <div className="absolute inset-0">
        <Image
          src="/background.png"
          alt="Himalayan mountains"
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
        poster="/background.png"
        style={{
          filter: 'brightness(0.95) contrast(1.05)',
        }}
      >
        <source src="/work.mp4" type="video/mp4" />
      </video>
      
      {/* Subtle overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2d3a47]/10 via-transparent to-[#2d3a47]/15" />
    </div>
  );
}

