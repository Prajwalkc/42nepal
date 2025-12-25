import Link from "next/link";
import Image from "next/image";
import { Journey } from "../../data/journeys";

type JourneyCardProps = {
  journey: Journey;
  className?: string;
};

export default function JourneyCard({ journey, className = "" }: JourneyCardProps) {
  return (
    <Link 
      href={`/journeys/${journey.slug}`} 
      className={`group bg-white border border-[#e8e6e3] hover:border-[#9ca5b3] rounded-xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 flex flex-col ${className}`}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
          alt={journey.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2d3a47]/60 to-transparent" />
      </div>
      <div className="p-8 md:p-10 space-y-6 flex-1 flex flex-col">
        <div className="space-y-3 flex-1">
          <div className="flex items-center justify-between">
            <h3 className="h3 text-[#2d3a47] group-hover:text-[#3d5a7a] transition-colors duration-300">{journey.title}</h3>
            <span className="text-small text-[#6b7786] font-medium">{journey.duration}</span>
          </div>
          <p className="text-body leading-relaxed text-[#4a5560]">
            {journey.shortDescription}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          {journey.focusTags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1.5 text-small bg-[#f8f6f3] border border-[#e8e6e3] text-[#4a5560] rounded-md group-hover:border-[#9ca5b3] transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="pt-2 mt-auto">
          <span className="text-small text-[#3d5a7a] font-medium inline-flex items-center gap-2 group-hover:text-[#2d4a6a] transition-all duration-300">
            View journey
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

