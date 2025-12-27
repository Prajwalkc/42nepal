import MountainDivider from "../../components/MountainDivider";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Everest Base Camp Itinerary",
  description: "A journey to the base of the world's highest peak, through Sherpa villages, ancient monasteries, and the breathtaking Khumbu Valley. Fourteen days of elevation.",
  alternates: {
    canonical: "/itinerary/everest-base-camp",
  },
  openGraph: {
    title: "Everest Base Camp Itinerary | The Mountain Whisper",
    description: "A journey to the base of the world's highest peak, through Sherpa villages, ancient monasteries, and the breathtaking Khumbu Valley. Fourteen days of elevation.",
    images: [
      {
        url: "/journey.png",
        width: 1200,
        height: 630,
        alt: "Everest Base Camp journey through the Himalayas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Everest Base Camp Itinerary | The Mountain Whisper",
    description: "A journey to the base of the world's highest peak, through Sherpa villages, ancient monasteries, and the breathtaking Khumbu Valley. Fourteen days of elevation.",
  },
};

export default function EverestBaseCampItinerary() {
  return (
    <div className="min-h-screen bg-[#faf9f7] text-[#2d2d2d]">
      {/* Header */}
      <header className="bg-white border-b border-[#e5e5e5] px-6 sm:px-12 lg:px-24 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-light text-[#2d2d2d]">
            42 Nepal
          </Link>
          <Link 
            href="/" 
            className="text-sm text-[#78716c] hover:text-[#2d2d2d] font-light"
          >
            ← Back to Journeys
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-20 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-light mb-6 tracking-tight">
            Everest Region Trek
          </h1>
          <p className="text-xl text-[#78716c] font-light leading-relaxed">
            A journey to the base of the world's highest peak, through Sherpa villages, 
            ancient monasteries, and the breathtaking Khumbu Valley.
          </p>
        </div>
      </section>

      <MountainDivider />

      {/* Itinerary Details */}
      <section className="relative py-24 px-6 sm:px-12 lg:px-24 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Overview */}
          <div className="bg-white p-8 border border-[#e5e5e5] space-y-6">
            <h2 className="text-2xl font-light text-[#2d2d2d]">Overview</h2>
            <div className="grid grid-cols-2 gap-6 text-sm">
              <div>
                <span className="text-[#78716c]">Duration:</span>
                <p className="text-[#2d2d2d] font-light mt-1">14 days</p>
              </div>
              <div>
                <span className="text-[#78716c]">Difficulty:</span>
                <p className="text-[#2d2d2d] font-light mt-1">Moderate to Challenging</p>
              </div>
              <div>
                <span className="text-[#78716c]">Max Altitude:</span>
                <p className="text-[#2d2d2d] font-light mt-1">5,364m (Everest Base Camp)</p>
              </div>
              <div>
                <span className="text-[#78716c]">Best Season:</span>
                <p className="text-[#2d2d2d] font-light mt-1">March-May, October-November</p>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            <h2 className="text-2xl font-light text-[#2d2d2d]">Highlights</h2>
            <ul className="space-y-4 text-[#78716c] leading-relaxed">
              <li className="flex items-start">
                <span className="text-[#3b82f6] mr-3">•</span>
                <span>Fly into Lukla, one of the world's most dramatic airstrips</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3b82f6] mr-3">•</span>
                <span>Visit Tengboche Monastery, the spiritual heart of the Khumbu</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3b82f6] mr-3">•</span>
                <span>Stand at Everest Base Camp (5,364m) with views of the Khumbu Icefall</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3b82f6] mr-3">•</span>
                <span>Climb Kala Patthar (5,545m) for sunrise views of Everest</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3b82f6] mr-3">•</span>
                <span>Experience authentic Sherpa culture and hospitality</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3b82f6] mr-3">•</span>
                <span>Walk through Sagarmatha National Park, a UNESCO World Heritage site</span>
              </li>
            </ul>
          </div>

          {/* Day-by-Day Itinerary */}
          <div className="space-y-8">
            <h2 className="text-2xl font-light text-[#2d2d2d]">Day-by-Day Itinerary</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 border-l-2 border-[#3b82f6]">
                <h3 className="text-lg font-light text-[#2d2d2d] mb-2">Day 1: Arrival in Kathmandu</h3>
                <p className="text-[#78716c] leading-relaxed">
                  Arrive in Kathmandu, meet your guide, and prepare for the journey ahead. 
                  Briefing about the trek and final equipment check.
                </p>
              </div>

              <div className="bg-white p-6 border-l-2 border-[#3b82f6]">
                <h3 className="text-lg font-light text-[#2d2d2d] mb-2">Day 2: Fly to Lukla, Trek to Phakding</h3>
                <p className="text-[#78716c] leading-relaxed">
                  Early morning flight to Lukla (2,860m). Begin trekking along the Dudh Koshi River 
                  to Phakding (2,610m). Gentle introduction to the trail. 3-4 hours walking.
                </p>
              </div>

              <div className="bg-white p-6 border-l-2 border-[#3b82f6]">
                <h3 className="text-lg font-light text-[#2d2d2d] mb-2">Day 3: Phakding to Namche Bazaar</h3>
                <p className="text-[#78716c] leading-relaxed">
                  Cross suspension bridges and climb steadily to Namche Bazaar (3,440m), 
                  the trading hub of the Khumbu. First views of Everest on a clear day. 5-6 hours walking.
                </p>
              </div>

              <div className="bg-white p-6 border-l-2 border-[#3b82f6]">
                <h3 className="text-lg font-light text-[#2d2d2d] mb-2">Day 4: Acclimatization Day in Namche</h3>
                <p className="text-[#78716c] leading-relaxed">
                  Rest day for acclimatization. Optional hike to Everest View Hotel or Khumjung village. 
                  Visit the Sherpa Culture Museum. Important day for adjusting to altitude.
                </p>
              </div>

              <div className="bg-white p-6 border-l-2 border-[#3b82f6]">
                <h3 className="text-lg font-light text-[#2d2d2d] mb-2">Day 5: Namche to Tengboche</h3>
                <p className="text-[#78716c] leading-relaxed">
                  Descend to the river, then climb through rhododendron forests to Tengboche (3,860m). 
                  Visit the famous monastery with panoramic mountain views. 5-6 hours walking.
                </p>
              </div>

              <div className="bg-white p-6 border-l-2 border-[#3b82f6]">
                <h3 className="text-lg font-light text-[#2d2d2d] mb-2">Day 6-7: Tengboche to Dingboche</h3>
                <p className="text-[#78716c] leading-relaxed">
                  Continue ascending through Imja Valley to Dingboche (4,410m). Another acclimatization 
                  day here. Views of Ama Dablam dominate the landscape. 5-6 hours walking each day.
                </p>
              </div>

              <div className="bg-white p-6 border-l-2 border-[#3b82f6]">
                <h3 className="text-lg font-light text-[#2d2d2d] mb-2">Day 8: Dingboche to Lobuche</h3>
                <p className="text-[#78716c] leading-relaxed">
                  Climb to Lobuche (4,910m), passing memorials to climbers. The landscape becomes 
                  more stark and alpine. 5-6 hours walking.
                </p>
              </div>

              <div className="bg-white p-6 border-l-2 border-[#3b82f6]">
                <h3 className="text-lg font-light text-[#2d2d2d] mb-2">Day 9: Lobuche to Gorak Shep to Everest Base Camp</h3>
                <p className="text-[#78716c] leading-relaxed">
                  Early start to Gorak Shep (5,164m), then continue to Everest Base Camp (5,364m). 
                  Return to Gorak Shep for the night. Long, rewarding day. 7-8 hours walking.
                </p>
              </div>

              <div className="bg-white p-6 border-l-2 border-[#3b82f6]">
                <h3 className="text-lg font-light text-[#2d2d2d] mb-2">Day 10: Kala Patthar, then descend to Pheriche</h3>
                <p className="text-[#78716c] leading-relaxed">
                  Early morning climb to Kala Patthar (5,545m) for sunrise views of Everest. 
                  Descend to Pheriche (4,240m). 6-7 hours walking.
                </p>
              </div>

              <div className="bg-white p-6 border-l-2 border-[#3b82f6]">
                <h3 className="text-lg font-light text-[#2d2d2d] mb-2">Day 11-12: Return to Namche Bazaar</h3>
                <p className="text-[#78716c] leading-relaxed">
                  Retrace steps back to Namche Bazaar, enjoying the descent and familiar landscapes. 
                  5-6 hours walking each day.
                </p>
              </div>

              <div className="bg-white p-6 border-l-2 border-[#3b82f6]">
                <h3 className="text-lg font-light text-[#2d2d2d] mb-2">Day 13: Namche to Lukla</h3>
                <p className="text-[#78716c] leading-relaxed">
                  Final day of trekking, returning to Lukla. Celebrate the journey with your team. 
                  6-7 hours walking.
                </p>
              </div>

              <div className="bg-white p-6 border-l-2 border-[#3b82f6]">
                <h3 className="text-lg font-light text-[#2d2d2d] mb-2">Day 14: Fly to Kathmandu</h3>
                <p className="text-[#78716c] leading-relaxed">
                  Morning flight back to Kathmandu. Rest day to reflect on the journey. 
                  Optional farewell dinner.
                </p>
              </div>
            </div>
          </div>

          {/* What to Expect */}
          <div className="space-y-6">
            <h2 className="text-2xl font-light text-[#2d2d2d]">What to Expect</h2>
            <div className="bg-white p-8 border border-[#e5e5e5] space-y-6 text-[#78716c] leading-relaxed">
              <p>
                This trek is physically demanding but deeply rewarding. You'll walk 5-8 hours most days, 
                often on rocky, uneven terrain. The altitude will challenge you, but our itinerary includes 
                proper acclimatization days.
              </p>
              <p>
                Accommodation is in teahouses—simple, warm lodges run by local families. Rooms are basic 
                but comfortable. Meals are hearty and nourishing, with a mix of local and international dishes.
              </p>
              <p>
                The weather can change quickly in the mountains. Be prepared for cold mornings, warm afternoons, 
                and potentially strong winds at higher altitudes. Your guide will monitor conditions and adjust 
                the schedule if needed.
              </p>
            </div>
          </div>

          {/* Cultural & Spiritual Notes */}
          <div className="space-y-6">
            <h2 className="text-2xl font-light text-[#2d2d2d]">Cultural & Spiritual Notes</h2>
            <div className="bg-white p-8 border border-[#e5e5e5] space-y-6 text-[#78716c] leading-relaxed">
              <p>
                The Khumbu region is the heartland of the Sherpa people, whose culture is deeply intertwined 
                with Buddhism and the mountains. You'll see prayer flags, mani stones, and chortens throughout 
                the journey.
              </p>
              <p>
                Tengboche Monastery is one of the most important spiritual centers in the region. If possible, 
                we'll time our visit to witness morning or evening prayers—a profound experience of stillness 
                and devotion.
              </p>
              <p>
                Respect the local customs: walk clockwise around religious structures, remove shoes before 
                entering temples, and ask permission before photographing people. The phrase "Tashi Delek" 
                (blessings and good luck) is always appreciated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 px-6 sm:px-12 lg:px-24 bg-white border-t border-[#e5e5e5]">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <p className="text-lg text-[#78716c] font-light">
            Ready to begin your journey?
          </p>
          <Link
            href="/#journeys"
            className="inline-block px-8 py-4 border border-[#78716c] text-[#2d2d2d] hover:bg-[#78716c] hover:text-[#faf9f7] font-light tracking-wide"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-[#e5e5e5] bg-white">
        <div className="px-6 sm:px-12 lg:px-24 py-12 text-center space-y-4">
          <p className="text-lg font-light text-[#78716c] italic">
            Walk slowly. Breathe deeply.
          </p>
          <p className="text-sm text-[#a8a29e]">
            © 2024 42 Nepal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

