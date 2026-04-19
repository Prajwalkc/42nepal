import Link from "next/link";
import Image from "next/image";
import { Journey } from "../../data/journeys";

type JourneyCardProps = {
  journey: Journey;
  className?: string;
  translatedTitle?: string;
  translatedSubtitle?: string;
  viewJourneyText?: string;
};

// Map journey slug to image path
const getJourneyImagePath = (slug: string): string => {
  return `/images/journeys/${slug}.png`;
};

export default function JourneyCard({ 
  journey, 
  className = "",
  translatedTitle,
  translatedSubtitle,
  viewJourneyText = "View journey"
}: JourneyCardProps) {
  const imagePath = getJourneyImagePath(journey.slug);
  const title = translatedTitle || journey.title;
  const subtitle = translatedSubtitle || journey.subtitle;

  return (
    <Link 
      href={`/journeys/${journey.slug}`} 
      className={`group bg-white border border-[#e8e6e3] hover:border-[#9ca5b3] rounded-xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 flex flex-col ${className}`}
    >
      <div className="relative h-28 md:h-40 overflow-hidden">
        <Image
          src={imagePath}
          alt={`${title} - ${subtitle} journey in the Himalayas`}
          fill
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-[#2d3a47]/10" />
      </div>
      <div className="p-6 md:p-8 space-y-4 flex-1 flex flex-col">
        <div className="space-y-2 flex-1">
          <h3 className="h3 text-[#2d3a47] group-hover:text-[#3d5a7a] transition-colors duration-300">{title}</h3>
          <p className="text-body text-[#4a5560] leading-relaxed">
            {subtitle}
          </p>
        </div>
        <div className="pt-2 mt-auto">
          <span className="text-small text-[#3d5a7a] font-medium inline-flex items-center gap-2 group-hover:text-[#2d4a6a] transition-all duration-300">
            {viewJourneyText}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

