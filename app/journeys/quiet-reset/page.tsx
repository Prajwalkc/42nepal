import Navigation from "../../components/Navigation";
import MountainDivider from "../../components/MountainDivider";
import ScenicMountains from "../../components/ScenicMountains";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Quiet Reset | The Mountain Whisper",
  description: "A journey designed to help you step back, breathe, and remember what matters. For those experiencing burnout, constant stress, or the feeling that you're always behind.",
};

export default function QuietResetPage() {
  return (
    <div className="min-h-screen bg-[#f8f6f3] text-[#2d3a47] scroll-smooth">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-white pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f6f3] via-[#f8f6f3] to-white opacity-50" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 0%, rgba(61, 90, 122, 0.03) 0%, transparent 50%)`
        }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <h1 className="h1 mb-4">
            The Quiet Reset
          </h1>
          <p className="text-2xl sm:text-3xl mb-6 text-[#3d5a7a] font-light">
            For burnout, slowing down, reflection
          </p>
          <p className="text-large max-w-2xl mx-auto leading-relaxed text-[#4a5560]">
            A journey designed to help you step back, breathe, and remember what matters. 
            For those experiencing burnout, constant stress, or the feeling that you're always behind.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <span className="text-small text-[#6b7786]">7 days</span>
            <span className="text-small text-[#9ca5b3]">•</span>
            <span className="text-small text-[#6b7786]">Himalayan Foothills</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link
              href="/enquire?journey=quiet-reset"
              className="px-12 py-5 rounded-lg bg-[#3d5a7a] text-white hover:bg-[#2d4a6a] transition-all duration-300 text-lg font-medium shadow-sm hover:shadow-md active:scale-[0.98]"
            >
              Enquire
            </Link>
            <Link
              href="/journeys"
              className="text-body text-[#3d5a7a] hover:opacity-70 transition-opacity"
            >
              Explore other journeys
            </Link>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Who This Journey Is For Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3]">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="h2 mb-8">Who This Journey Is For</h2>
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="h4 text-[#3d5a7a]">Those experiencing burnout or chronic stress</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                For those who feel the weight of constant demands, who recognize that the pace you've been 
                keeping is no longer sustainable, and who need space to remember what rest actually feels like.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="h4 text-[#3d5a7a]">Leaders who need to slow down and reset</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                For leaders who understand that the best decisions come from clarity, not urgency. Those who 
                recognize that slowing down isn't weakness—it's wisdom. And who know that to lead well, you 
                must first remember how to rest.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="h4 text-[#3d5a7a]">Anyone feeling overwhelmed by constant demands</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                For those who feel like you're always behind, always catching up, always responding to 
                the next urgent thing. This journey offers a different pace. A pace that allows you to 
                breathe, to see clearly, and to remember what actually matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Why This Journey Exists Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="h2 mb-8">Why This Journey Exists</h2>
          </div>
          <div className="space-y-8 text-body leading-relaxed text-[#4a5560]">
            <p>
              Burnout isn't a personal failing. It's what happens when the pace of life exceeds your capacity 
              to restore. The Quiet Reset exists because we believe that restoration isn't a luxury—it's a necessity. 
              And that the best restoration happens away from the noise that created the exhaustion in the first place.
            </p>
            <p>
              In the Himalayas, the pace is different. The mountains don't rush. They don't demand. They simply exist, 
              and in their presence, you remember that you can exist too—without the constant pressure to do more, 
              be more, achieve more. This journey is about remembering what it feels like to simply be.
            </p>
            <p>
              The Quiet Reset isn't about fixing you. It's about creating space. Space to breathe. Space to rest. 
              Space to remember what matters. The mountains provide the stillness. You provide the permission to 
              slow down. Together, they create the conditions for genuine restoration.
            </p>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* What Changes After Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3]">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="h2 mb-8">What Changes After</h2>
          </div>
          <div className="space-y-8 text-body leading-relaxed text-[#4a5560]">
            <p>
              You return with a renewed sense of what rest actually means. Not just sleep, but the kind of 
              restoration that comes from stillness, from being present without agenda, from remembering that 
              you are more than what you produce.
            </p>
            <p>
              The clarity you find in the mountains stays with you. The problems that felt overwhelming before 
              you left will still exist, but you'll see them differently. From elevation, you gain perspective. 
              From stillness, you gain clarity. From rest, you gain the capacity to engage with life again, 
              but differently.
            </p>
            <p>
              Most importantly, you'll have created a touchstone—a memory of what it feels like to be truly 
              rested, truly present, truly still. That memory becomes something you can return to when life 
              gets loud again. A reminder that rest isn't something you earn. It's something you choose.
            </p>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* A Gentle Flow Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="text-center">
            <h2 className="h2 mb-8">A Gentle Flow</h2>
          </div>
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Day 1: Arrival and Settling</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                Arrive in Kathmandu. Brief orientation. Time to rest and adjust. No expectations. 
                No agenda. Just permission to slow down and begin to let go of the pace you've been keeping.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Day 2: Beginning the Reset</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                Travel to the starting point. First gentle walk. Introduction to the rhythm of the journey. 
                Begin to find your own pace—slow, mindful, without urgency. The mountains teach patience. 
                You learn to receive it.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Day 3: Deepening Rest</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                Full day of slow-paced trekking with frequent pauses. Time to observe, reflect, and simply be. 
                The first full day of reflection and stillness. Begin to remember what rest feels like. 
                Return with the beginning of clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Important to Know Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3]">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="h2 mb-8">Important to Know</h2>
          </div>
          <div className="space-y-8 text-body leading-relaxed text-[#4a5560]">
            <p>
              This journey is designed for restoration, not achievement. The pace is slow. The expectations 
              are minimal. The goal is rest, not reaching a summit. If you're looking for a challenge or a 
              physical accomplishment, this may not be the right journey for you.
            </p>
            <p>
              Connectivity is intentionally minimal. This is by design. The restoration you're seeking requires 
              disconnection from the noise that created the exhaustion. If you need constant communication 
              or regular internet access, consider whether this journey aligns with your needs.
            </p>
            <p>
              The journey requires a basic level of physical fitness, but the emphasis is on gentle movement 
              and rest, not strenuous activity. The mountains provide the elevation. You provide the 
              permission to move slowly, to pause often, and to rest when you need it.
            </p>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Soft CTA Section */}
      <section className="relative py-40 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <div>
            <h2 className="h2 mb-8">Start a Conversation</h2>
            <p className="text-large text-[#4a5560]">
              Let's discuss how The Quiet Reset can serve your need for restoration. 
              No pressure, just thoughtful dialogue.
            </p>
          </div>
          <Link
            href="/enquire?journey=quiet-reset"
            className="inline-block px-12 py-5 rounded-lg bg-[#3d5a7a] text-white hover:bg-[#2d4a6a] transition-all duration-300 text-lg font-medium shadow-sm hover:shadow-md active:scale-[0.98]"
          >
            Start a conversation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-[#e8e6e3] bg-[#f8f6f3]">
        <div className="relative h-32 overflow-hidden text-[#9ca5b3] opacity-15">
          <ScenicMountains />
        </div>
        <div className="relative z-10 px-6 sm:px-12 lg:px-24 py-16 text-center space-y-6">
          <p className="text-large font-light text-secondary">
            Step away from noise. Return with clarity.
          </p>
          <p className="text-small text-muted">
            © {new Date().getFullYear()} The Mountain Whisper. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

