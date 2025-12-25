"use client";

import { useEffect, useState } from "react";

interface MistBackgroundProps {
  opacity?: number;
  className?: string;
  animated?: boolean;
}

export default function MistBackground({ 
  opacity = 0.05, 
  className = "",
  animated = false
}: MistBackgroundProps) {
  const [animationOffset, setAnimationOffset] = useState(0);

  useEffect(() => {
    if (!animated) return;

    let frameId: number;
    let startTime = Date.now();
    const duration = 50000; // 50 seconds

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = (elapsed % duration) / duration;
      
      // Very slow, subtle movement using ease-in-out
      const eased = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      
      setAnimationOffset(eased * 100);
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [animated]);

  return (
    <div 
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{
        opacity: opacity,
        background: `
          radial-gradient(circle at ${20 + animationOffset * 0.1}% ${30 + animationOffset * 0.05}%, rgba(200, 210, 220, 0.3) 0%, transparent 50%),
          radial-gradient(circle at ${80 - animationOffset * 0.1}% ${70 - animationOffset * 0.05}%, rgba(180, 190, 200, 0.25) 0%, transparent 50%),
          radial-gradient(circle at ${50 + animationOffset * 0.05}% ${50 - animationOffset * 0.05}%, rgba(190, 200, 210, 0.2) 0%, transparent 60%),
          linear-gradient(180deg, rgba(200, 210, 220, 0.15) 0%, transparent 100%)
        `,
        mixBlendMode: 'normal',
        willChange: animated ? 'background' : 'auto',
      }}
      aria-hidden="true"
    />
  );
}

