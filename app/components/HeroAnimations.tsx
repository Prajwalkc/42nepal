"use client";

export default function HeroAnimations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle floating mountain silhouettes */}
      <svg
        className="absolute bottom-0 left-0 w-full h-64 opacity-10"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
      >
        <path
          d="M0,200 L0,150 Q100,120 200,130 T400,125 T600,110 T800,115 T1000,100 T1200,105 L1200,200 Z"
          fill="white"
        >
          <animate
            attributeName="d"
            values="M0,200 L0,150 Q100,120 200,130 T400,125 T600,110 T800,115 T1000,100 T1200,105 L1200,200 Z;M0,200 L0,155 Q100,125 200,135 T400,130 T600,115 T800,120 T1000,105 T1200,110 L1200,200 Z;M0,200 L0,150 Q100,120 200,130 T400,125 T600,110 T800,115 T1000,100 T1200,105 L1200,200 Z"
            dur="20s"
            repeatCount="indefinite"
          />
        </path>
      </svg>

      {/* Floating particles/dots */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + i * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

