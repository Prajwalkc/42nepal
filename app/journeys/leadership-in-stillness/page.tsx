import Navigation from "../../components/Navigation";
import MountainDivider from "../../components/MountainDivider";
import ScenicMountains from "../../components/ScenicMountains";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership in Stillness | The Mountain Whisper",
  description: "A journey for founders, executives, and managers seeking perspective, clear decisions, and renewed focus through Himalayan stillness.",
};

export default function LeadershipInStillnessPage() {
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
            Leadership in Stillness
          </h1>
          <p className="text-2xl sm:text-3xl mb-6 text-[#3d5a7a] font-light">
            For founders, executives, managers
          </p>
          <p className="text-large max-w-2xl mx-auto leading-relaxed text-[#4a5560]">
            Find the perspective that transforms how you lead and make decisions. 
            Designed for leaders who understand that the best decisions come from stillness, not speed.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <span className="text-small text-[#6b7786]">7 days</span>
            <span className="text-small text-[#9ca5b3]">•</span>
            <span className="text-small text-[#6b7786]">Himalayan Foothills</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link
              href="/enquire?journey=leadership-in-stillness"
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
              <h3 className="h4 text-[#3d5a7a]">Founders navigating growth and complex decisions</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                For founders who recognize that the most important decisions require perspective, not urgency. 
                Who understand that clarity comes from elevation—both literal and metaphorical—and who 
                know that the best leadership happens when you can see clearly.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="h4 text-[#3d5a7a]">C-suite executives seeking strategic clarity</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                For executives who understand that strategic thinking requires space, not more information. 
                Who recognize that the best decisions emerge from stillness, and who know that leadership 
                at the highest levels requires the ability to see beyond the immediate.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="h4 text-[#3d5a7a]">Managers leading teams through change</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                For managers who recognize that leading through change requires clarity, not just action. 
                Who understand that the best leadership comes from a place of calm confidence, and who 
                know that perspective is essential when navigating complexity.
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
              The best leadership decisions don't come from urgency. They come from clarity. Leadership in 
              Stillness exists because we believe that the most effective leaders are those who can step 
              away from the noise, gain perspective, and make decisions from a place of calm confidence 
              rather than reactive urgency.
            </p>
            <p>
              In the Himalayas, perspective takes on a different quality. From elevation, you see differently. 
              The problems that felt overwhelming at sea level become clearer from above. The decisions that 
              seemed urgent become less pressing. The stillness allows for the kind of thinking that good 
              leadership requires.
            </p>
            <p>
              This journey isn't about learning new frameworks or strategies. It's about creating space. 
              Space to think clearly. Space to see the bigger picture. Space to make decisions from a place 
              of clarity rather than reaction. The mountains provide the elevation. You provide the willingness 
              to step away. Together, they create the conditions for genuine perspective.
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
              You return with a renewed sense of perspective. The clarity you find at elevation stays with you. 
              The decisions you make from stillness become touchstones for how you want to lead. The perspective 
              you gain becomes something you can return to when the noise of daily leadership gets loud again.
            </p>
            <p>
              The experience of leading from stillness becomes a reference point. You'll remember what it feels 
              like to make decisions from clarity rather than urgency, to see the bigger picture rather than 
              getting lost in the immediate, to lead from calm confidence rather than reactive pressure.
            </p>
            <p>
              Most importantly, you'll have created space for the kind of thinking that good leadership requires. 
              Space that allows you to see clearly, to make decisions thoughtfully, and to lead from a place of 
              perspective rather than reaction. That space becomes something you can return to, even in the midst 
              of demanding leadership responsibilities.
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
              <h3 className="h4 text-[#3d5a7a]">Day 1: Arrival and Orientation</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                Arrive in Kathmandu. Brief orientation. Time to disconnect and prepare. Step away from 
                the immediate demands of leadership. Begin to create space for the kind of thinking that 
                good leadership requires.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Day 2: Beginning the Journey</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                Travel to the starting point. First day of elevation and perspective. Begin to see 
                differently. The mountains provide the elevation. You provide the willingness to step 
                away from urgency and into clarity.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="h4 text-[#3d5a7a]">Day 3: Strategic Reflection</h3>
              <p className="text-body leading-relaxed text-[#4a5560]">
                Full day at elevation. Time for deep thinking about leadership challenges. Space for 
                strategic reflection. The stillness allows for the kind of clarity that good decisions 
                require. Begin to see the bigger picture. Return with the beginning of perspective.
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
              This journey is designed for leaders who understand that the best decisions come from stillness, 
              not speed. The pace is intentional—slow enough to allow for deep thinking, structured enough to 
              support strategic reflection. If you're looking for a high-intensity experience or structured 
              leadership training, this may not be the right journey for you.
            </p>
            <p>
              Connectivity is available at base locations but intentionally limited during trekking days. This 
              is by design. The perspective you're seeking requires space from the constant demands of leadership. 
              If you need constant connectivity or regular access to your team, consider whether this journey 
              aligns with your needs.
            </p>
            <p>
              The journey requires a basic level of physical fitness, but the emphasis is on elevation and 
              perspective, not strenuous activity. The mountains provide the elevation. You provide the 
              willingness to step away and think clearly. Together, they create the conditions for genuine 
              leadership perspective.
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
              Let's discuss how Leadership in Stillness can serve your need for perspective and clarity. 
              No pressure, just thoughtful dialogue.
            </p>
          </div>
          <Link
            href="/enquire?journey=leadership-in-stillness"
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

