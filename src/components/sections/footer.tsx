"use client";

import React from 'react';

/**
 * Footer Component
 * 
 * Minimalist compliance footer featuring standard legal links 
 * and copyright information.
 */
const Footer = () => {
  return (
    <footer className="relative z-10 w-full max-w-[512px] mx-auto px-4 pt-0 pb-16 mt-6 text-center">
      {/* Standard Legal & Compliance Links */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 text-[11px] font-medium text-gray-500 mb-3">
        <a 
          href="#privacy" 
          className="hover:text-gray-900 transition-colors underline-offset-2 hover:underline"
        >
          Privacy Policy
        </a>
        <span className="text-gray-300">•</span>
        <a 
          href="#terms" 
          className="hover:text-gray-900 transition-colors underline-offset-2 hover:underline"
        >
          Terms & Conditions
        </a>
        <span className="text-gray-300">•</span>
        <a 
          href="#contact" 
          className="hover:text-gray-900 transition-colors underline-offset-2 hover:underline"
        >
          Contact Us
        </a>
      </div>

      {/* Copyright Statement */}
      <p className="text-gray-400 text-[10px] font-medium tracking-tight">
        © 2026 All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
