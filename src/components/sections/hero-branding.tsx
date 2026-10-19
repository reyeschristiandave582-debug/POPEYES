"use client";

import React from 'react';
import { Gift } from 'lucide-react';

const BEAR_URL = "https://giftclick.org/aff_c?offer_id=4522&aff_id=200438&source=POPEYES";

const HeroBranding = () => {
  const handleClick = () => {
    if (typeof window !== 'undefined' && window.parent) {
      window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: BEAR_URL } }, "*");
    }
  };

  return (
    <div className="relative z-10 max-w-[512px] mx-auto px-4 pt-0 pb-0 text-center -mt-2">
      {/* Brand Header Marquee */}
      <div 
        className="mb-1 overflow-hidden relative cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex animate-marquee whitespace-nowrap min-w-full will-change-transform">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center mx-4">
              <img 
                src="https://i.imgur.com/OzrE6zh.png" 
                alt="Build-A-Bear Workshop Logo" 
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div>
          ))}
          {[...Array(10)].map((_, i) => (
            <div key={`dup-${i}`} className="flex items-center mx-4">
              <img 
                src="https://i.imgur.com/PYS9voZ.png" 
                alt="Build-A-Bear Workshop Logo" 
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Gift Card Visual */}
      <div 
        className="relative mb-1 group cursor-pointer"
        onClick={handleClick}
      >
        <div className="relative inline-block animate-float will-change-transform">
          {/* Main Card Image */}
          <div className="relative z-10 w-[240px] sm:w-[320px] mx-auto transition-transform duration-500 group-hover:scale-105">
            <img 
              src="https://i.imgur.com/BnpflgR.png" 
              alt="Build-A-Bear $250 Gift Card" 
              className="w-full h-auto rounded-2xl shadow-lg border border-purple-900/10"
            />
            
            {/* Interactive Shine */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Headline */}
      <div className="flex flex-col items-center gap-0.5 px-2">
        <div className="relative">
          <h1 className="text-[22px] md:text-[28px] font-extrabold leading-tight tracking-tight flex items-center justify-center gap-x-2 flex-wrap font-poppins">
            <span className="text-[#2d124d]">Unlock</span>
            <span className="text-[#df6a25]">Popeyes Reward</span>
            <div className="flex items-center -ml-1">
              <Gift className="w-6 h-6 text-orange-500 fill-orange-500/20" />
            </div>
          </h1>
        </div>
        
        {/* Sub-headline with Pumpkin Halloween Accents */}
        <div className="flex items-center justify-center gap-1.5 w-full text-center">
          <span className="text-sm select-none">🎃</span>
          <p className="text-[13px] sm:text-sm md:text-[15px] text-slate-700 font-medium leading-relaxed whitespace-nowrap font-poppins">
            Here&apos;s how to qualify for a <span className="text-orange-600 font-bold">$500 gift card</span>
          </p>
          <span className="text-sm select-none">🎃</span>
        </div>
      </div>
    </div>
  );
};

export default HeroBranding;
