"use client";

import { Suspense } from "react";
import Navigation from "../components/Navigation";
import ScenicMountains from "../components/ScenicMountains";
import MistBackground from "../components/MistBackground";
import EnquireForm from "./EnquireForm";
import EnquireHero from "./EnquireHero";

export default function EnquirePage() {
  return (
    <div className="min-h-screen bg-[#f8f6f3] text-[#2d3a47] scroll-smooth relative">
      <MistBackground opacity={0.01} animated={false} />
      <Navigation />
      
      {/* Intro Section */}
      <section className="relative py-32 px-6 sm:px-12 lg:px-24 pt-32">
        <Suspense fallback={
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="h1 mb-6">Begin a conversation</h1>
            <p className="text-large max-w-2xl mx-auto">
              Tell us what you're seeking. There's no commitment — just a thoughtful exchange.
            </p>
          </div>
        }>
          <EnquireHero />
        </Suspense>
      </section>

      {/* Enquiry Form */}
      <section className="relative py-20 px-6 sm:px-12 lg:px-24 bg-[#f8f6f3]">
        <Suspense fallback={
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-12 border border-[#e8e6e3]">
              <p className="text-body text-center">Loading...</p>
            </div>
          </div>
        }>
          <EnquireForm />
        </Suspense>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-[#e8e6e3] bg-white">
        <div className="relative h-32 overflow-hidden text-[#9ca5b3] opacity-15">
          <ScenicMountains />
        </div>
        <div className="relative z-10 px-6 sm:px-12 lg:px-24 py-16 text-center space-y-6">
          <p className="text-large font-light text-secondary">
            Step away from noise. Return with clarity.
          </p>
          <p className="text-small text-muted">
            © 2024 The Mountain Whisper. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
