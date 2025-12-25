"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set playback rate to very slow (0.3x = very slow)
    video.playbackRate = 0.3;

    const LOOP_DURATION = 3; // 3 seconds
    let animationFrameId: number;

    const smoothLoop = () => {
      if (video.currentTime >= LOOP_DURATION) {
        video.currentTime = 0;
      }
      animationFrameId = requestAnimationFrame(smoothLoop);
    };

    video.currentTime = 0;
    video.play().then(() => {
      animationFrameId = requestAnimationFrame(smoothLoop);
    });

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Video layer */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        style={{ 
          transform: "scale(1.1) translateZ(0)",
          willChange: "transform",
          backfaceVisibility: "hidden",
        }}
        poster="/background.png"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* MAIN TINTED OVERLAY — not black */}
      <div className="absolute" />

      {/* SOFT DEPTH GRADIENT */}
      <div className="absolute" />

      {/* SUBTLE VIGNETTE (mountain night feel) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(28,37,48,0.15),rgba(15,23,32,0.85))]" />
    </div>
  );
}
