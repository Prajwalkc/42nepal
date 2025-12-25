import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div 
      className="relative inline-block" 
      style={{ 
        backgroundColor: 'transparent',
      }}
    >
      <Image
        src="/logo.png"
        alt="The Mountain Whisper"
        width={500}
        height={500}
        className={className}
        priority
        unoptimized
        style={{ 
          backgroundColor: 'transparent',
          mixBlendMode: 'normal',
          objectFit: 'contain',
          objectPosition: 'left center',
          display: 'block'
        }}
      />
    </div>
  );
}

