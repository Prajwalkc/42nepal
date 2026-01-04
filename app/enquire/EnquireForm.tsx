"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { journeys } from "../../data/journeys";

type FormState = "idle" | "loading" | "success" | "error";

export default function EnquireForm() {
  const searchParams = useSearchParams();
  const journeySlug = searchParams.get("journey");
  const interestParam = searchParams.get("interest");
  const journey = journeySlug ? journeys.find((j) => j.slug === journeySlug) : null;
  const t = useTranslations('enquire');

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "", // Honeypot field
  });

  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/enquire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          company: formData.company, // Honeypot
          journey: journey ? journey.title : null,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || t('form.error'));
      }

      setFormState("success");
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
        company: "",
      });
    } catch (error) {
      setFormState("error");
      setErrorMessage(
        error instanceof Error ? error.message : t('form.error')
      );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <p className="text-small text-[#6b7683] font-light text-center">
        {t('form.responseTime')}
      </p>
      <form onSubmit={handleSubmit} className="space-y-8 bg-white p-12 sm:p-16 border border-[#e8e6e3] rounded-2xl shadow-sm">
        {/* Honeypot field - hidden from users */}
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
          style={{ position: "absolute", left: "-9999px" }}
          aria-hidden="true"
        />

        {/* Success message */}
        {formState === "success" && (
          <div className="p-4 rounded-xl bg-[#f0f9f4] border border-[#86efac] text-[#166534] text-body">
            {t('form.success')}
          </div>
        )}

        {/* Error message */}
        {formState === "error" && errorMessage && (
          <div className="p-4 rounded-xl bg-[#fef2f2] border border-[#fecaca] text-[#991b1b] text-body">
            {errorMessage}
          </div>
        )}

        <div className="space-y-3">
          <label htmlFor="name" className="block text-body text-[#4a5560] font-normal">
            {t('form.name')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={formState === "loading"}
            className="w-full px-6 py-4 rounded-xl border border-[#e8e6e3] bg-[#f8f6f3] focus:border-[#9ca5b3] focus:outline-none focus:ring-2 focus:ring-[#9ca5b3] focus:ring-opacity-20 focus:shadow-sm text-body transition-all duration-200 hover:border-[#d1d5db] disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder=""
          />
        </div>

        <div className="space-y-3">
          <label htmlFor="email" className="block text-body text-[#4a5560] font-normal">
            {t('form.email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={formState === "loading"}
            className="w-full px-6 py-4 rounded-xl border border-[#e8e6e3] bg-[#f8f6f3] focus:border-[#9ca5b3] focus:outline-none focus:ring-2 focus:ring-[#9ca5b3] focus:ring-opacity-20 focus:shadow-sm text-body transition-all duration-200 hover:border-[#d1d5db] disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder=""
          />
        </div>

        <div className="space-y-3">
          <label htmlFor="message" className="block text-body text-[#4a5560] font-normal">
            {t('form.message')}
          </label>
          <p className="text-small text-[#6b7683] font-light -mt-1 mb-2">
            {t('form.messageHint')}
          </p>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={8}
            required
            disabled={formState === "loading"}
            className="w-full px-6 py-4 rounded-xl border border-[#e8e6e3] bg-[#f8f6f3] focus:border-[#9ca5b3] focus:outline-none focus:ring-2 focus:ring-[#9ca5b3] focus:ring-opacity-20 focus:shadow-sm text-body resize-none transition-all duration-200 hover:border-[#d1d5db] disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder=""
          />
        </div>

        <div className="pt-6">
          <button
            type="submit"
            disabled={formState === "loading" || formState === "success"}
            className="w-full px-12 py-5 rounded-lg bg-[#3d5a7a] text-white hover:bg-[#2d4a6a] transition-all duration-300 text-lg font-medium shadow-sm hover:shadow-md active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {formState === "loading" ? t('form.sending') : formState === "success" ? t('form.sent') : t('form.submit')}
          </button>
        </div>
      </form>

      {/* Reassurance Section */}
      <div className="text-center pt-4">
        <p className="text-small text-[#6b7683] font-light leading-relaxed max-w-xl mx-auto">
          {t('form.reassurance')}
        </p>
      </div>
    </div>
  );
}

