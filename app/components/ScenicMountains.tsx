export default function ScenicMountains() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1200 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {/* Prominent Himalayan mountain silhouettes */}
      <path
        d="M0 600 L0 400 L200 350 L400 380 L500 300 L600 320 L700 280 L800 300 L900 260 L1000 280 L1100 250 L1200 270 L1200 600 Z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M0 600 L0 450 L150 420 L300 440 L450 380 L550 400 L650 360 L750 380 L850 340 L950 360 L1050 330 L1200 350 L1200 600 Z"
        fill="currentColor"
        opacity="0.12"
      />
      {/* Snow peaks */}
      <path
        d="M500 300 L520 280 L540 300 Z"
        fill="currentColor"
        opacity="0.25"
      />
      <path
        d="M700 280 L720 260 L740 280 Z"
        fill="currentColor"
        opacity="0.25"
      />
      <path
        d="M900 260 L920 240 L940 260 Z"
        fill="currentColor"
        opacity="0.25"
      />
    </svg>
  );
}

