import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Mountain Whisper",
    short_name: "Mountain Whisper",
    description: "Curated Himalayan retreats for corporate teams and individuals. Step away from noise. Return with clarity, perspective, and renewed purpose.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#f8f6f3",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/icon-16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/icon-32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  };
}

