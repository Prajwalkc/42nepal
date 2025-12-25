"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { journeys } from "../../data/journeys";

export default function EnquireForm() {
  const searchParams = useSearchParams();
  const journeySlug = searchParams.get("journey");
  const interestParam = searchParams.get("interest");
  const journey = journeySlug ? journeys.find((j) => j.slug === journeySlug) : null;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (journey) {
      setFormData((prev) => ({
        ...prev,
        message: `I'm interested in ${journey.title}.`,
      }));
    } else if (interestParam === "work-from-the-himalayas") {
      setFormData((prev) => ({
        ...prev,
        message: "I'm interested in Work From the Himalayas.",
      }));
    }
  }, [journey, interestParam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - no backend required yet
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We'll be in touch soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-12">
      <form onSubmit={handleSubmit} className="space-y-8 bg-white p-12 sm:p-16 border border-[#e8e6e3] rounded-xl shadow-sm">
        <div className="space-y-3">
          <label htmlFor="name" className="block text-body text-[#4a5560] font-normal">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-6 py-4 rounded-xl border border-[#e8e6e3] bg-[#f8f6f3] focus:border-[#9ca5b3] focus:outline-none focus:ring-2 focus:ring-[#9ca5b3] focus:ring-opacity-20 focus:shadow-sm text-body transition-all duration-200 hover:border-[#d1d5db]"
            placeholder=""
          />
        </div>

        <div className="space-y-3">
          <label htmlFor="email" className="block text-body text-[#4a5560] font-normal">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-6 py-4 rounded-xl border border-[#e8e6e3] bg-[#f8f6f3] focus:border-[#9ca5b3] focus:outline-none focus:ring-2 focus:ring-[#9ca5b3] focus:ring-opacity-20 focus:shadow-sm text-body transition-all duration-200 hover:border-[#d1d5db]"
            placeholder=""
          />
        </div>

        <div className="space-y-3">
          <label htmlFor="message" className="block text-body text-[#4a5560] font-normal">
            Message
          </label>
          <p className="text-small text-[#6b7683] font-light -mt-1 mb-2">
            You can share as much or as little as you like — an idea, a question, or an intention.
          </p>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={8}
            required
            className="w-full px-6 py-4 rounded-lg border border-[#e8e6e3] bg-[#f8f6f3] focus:border-[#9ca5b3] focus:outline-none focus:ring-2 focus:ring-[#9ca5b3] focus:ring-opacity-20 focus:shadow-sm text-body resize-none transition-all duration-200 hover:border-[#d1d5db]"
            placeholder=""
          />
        </div>

        <div className="pt-6">
          <button
            type="submit"
            className="w-full px-12 py-5 rounded-lg bg-[#3d5a7a] text-white hover:bg-[#2d4a6a] transition-all duration-300 text-lg font-medium shadow-sm hover:shadow-md active:scale-[0.98]"
          >
            Send message
          </button>
        </div>
      </form>

      {/* Reassurance Section */}
      <div className="text-center">
        <p className="text-small text-[#6b7683] font-light leading-relaxed max-w-xl mx-auto">
          We read every message carefully.<br />
          There's no automated reply, no pressure, and no expectation — just a thoughtful response.
        </p>
      </div>
    </div>
  );
}

