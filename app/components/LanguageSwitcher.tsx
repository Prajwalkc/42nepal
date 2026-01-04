"use client";

import { useState, useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import { locales, type Locale } from '../../i18n';

interface LanguageSwitcherProps {
  useWhiteText?: boolean;
}

export default function LanguageSwitcher({ useWhiteText = false }: LanguageSwitcherProps) {
  const locale = useLocale() as Locale;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const switchLocale = (newLocale: Locale) => {
    if (typeof document !== 'undefined') {
      // Set cookie synchronously using document.cookie to ensure it's set before navigation
      const maxAge = 60 * 60 * 24 * 365; // 1 year
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=${maxAge}; SameSite=Lax`;
      
      setIsOpen(false);
      
      // Force navigation to the same page to ensure fresh server request with new cookie
      window.location.href = window.location.pathname;
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const languageNames: Record<Locale, string> = {
    en: 'EN',
    fr: 'FR',
    ru: 'RU',
    zh: 'ZH',
    de: 'DE',
    ne: 'NE',
  };

  const textColor = useWhiteText ? 'text-white/90' : 'text-[#4a5560]';
  const borderColor = useWhiteText ? 'border-white/30' : 'border-[#e8e6e3]';
  const hoverBorderColor = useWhiteText ? 'hover:border-white/50' : 'hover:border-[#9ca5b3]';
  const iconColor = useWhiteText ? 'text-white/70' : 'text-[#6b7786]';
  const dropdownBgColor = useWhiteText ? 'bg-black/60 backdrop-blur-md border-white/20' : 'bg-white border-[#e8e6e3]';
  const dropdownTextColor = useWhiteText ? 'text-white/90' : 'text-[#4a5560]';
  const hoverBgColor = useWhiteText ? 'hover:bg-white/10' : 'hover:bg-[#f8f6f3]';
  const activeBgColor = useWhiteText ? 'bg-white/15' : 'bg-[#f8f6f3]';

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 ${borderColor} ${textColor} ${hoverBorderColor} transition-colors cursor-pointer px-3 py-1.5 text-sm font-medium rounded border`}
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span>{languageNames[locale]}</span>
        <svg 
          className={`w-4 h-4 ${iconColor} transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className={`absolute right-0 mt-2 min-w-[90px] ${dropdownBgColor} border rounded-lg shadow-xl z-50 overflow-hidden`}>
          <div className="py-1">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                className={`w-full text-left px-4 py-2 text-sm ${loc === locale ? 'font-semibold' : 'font-medium'} ${dropdownTextColor} ${hoverBgColor} transition-colors ${
                  loc === locale ? activeBgColor : ''
                }`}
              >
                {languageNames[loc]}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

