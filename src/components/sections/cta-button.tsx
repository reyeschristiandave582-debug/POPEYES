"use client";

import React from 'react';
import { Star } from 'lucide-react';

/**
 * CTAButton Component (Halloween Edition 10/10 Polish)
 * 
 * High-converting primary CTA button styled with rich Halloween orange gradients,
 * enhanced outer ambient glow, ring highlights, and star accents.
 */
export default function CTAButton() {
  const url = "https://giftclick.org/aff_c?offer_id=4522&aff_id=200438&source=POPEYES";

  const handleClick = (e: React.MouseEvent) => {
    // For Orchids preview environment
    if (typeof window !== 'undefined' && window.parent) {
      window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url } }, "*");
    }
  };

  return (
    <div className="relative z-10 w-full max-w-md mx-auto px-4 flex flex-col items-center mt-5 mb-2">
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="group relative w-full h-[52px] sm:h-[58px] bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 text-white rounded-full flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(249,115,22,0.55)] hover:shadow-[0_0_28px_rgba(249,115,22,0.75)] ring-2 ring-orange-300/60 hover:ring-orange-200 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden no-underline border border-amber-200/50 animate-pulse"
      >
        {/* Continuous Shine Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent -left-full group-hover:animate-shine pointer-events-none" />

        <div className="flex items-center justify-center gap-2.5 sm:gap-3 relative z-10">
          <Star 
            className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-[#FFD700] text-[#FFD700] flex-shrink-0" 
            style={{ filter: 'drop-shadow(0 0 7px rgba(255,215,0,0.9))' }}
          />

          <span className="text-[14px] sm:text-[16px] font-black uppercase text-white tracking-[0.14em] drop-shadow-md">
            START REVIEW
          </span>

          <Star 
            className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-[#FFD700] text-[#FFD700] flex-shrink-0" 
            style={{ filter: 'drop-shadow(0 0 7px rgba(255,215,0,0.9))' }}
          />
        </div>
      </a>

      {/* Enhanced Floor Glow */}
      <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 w-4/5 h-7 bg-orange-500/40 blur-2xl -z-10 rounded-full pointer-events-none" />
    </div>
  );
}
