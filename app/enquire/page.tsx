"use client";

import { Suspense } from "react";
import Navigation from "../components/Navigation";
import ScenicMountains from "../components/ScenicMountains";
import MistBackground from "../components/MistBackground";
import Footer from "../components/Footer";
import EnquireForm from "./EnquireForm";
import EnquireHero from "./EnquireHero";

export default function EnquirePage() {
  return (
    <div className="min-h-screen bg-[#f8f6f3] text-[#2d3a47] scroll-smooth relative">
      <MistBackground opacity={0.01} animated={false} />
      <Navigation />
      
      {/* Intro Section */}
      <section className="relative pt-32 pb-20 px-6 sm:px-12 lg:px-24">
        <Suspense fallback={
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="h1 mb-6">Start a conversation</h1>
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
            <div className="bg-white p-12 border border-[#e8e6e3] rounded-2xl">
              <p className="text-body text-center">Loading...</p>
            </div>
          </div>
        }>
          <EnquireForm />
        </Suspense>
      </section>

      <Footer />
    </div>
  );
}
