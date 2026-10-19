"use client";

import React from 'react';

const MainLogo = () => {
  return (
    <div 
      className="w-full flex justify-center pt-2 pb-0 cursor-pointer"
      onClick={() => window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: "https://giftclick.org/aff_c?offer_id=1765&aff_id=200438&source=DUNKIN" } }, "*")}
    >
      <img 
        src="https://i.imgur.com/KEG2oQj.png" 
        alt="Build-A-Bear Logo" 
        className="h-18 sm:h-15 w-20 object-contain transition-all duration-700 hover:brightness-120"
      />
    </div>
  );
};

export default MainLogo;
