"use client";

import { motion } from "framer-motion";

export function GotSPKZSection() {
  return (
    <section className="relative py-32 sm:py-40 px-4 sm:px-6 lg:px-8  overflow-hidden bg-transparent">
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Section divider */}
        <div className="h-px bg-gray-300 mb-20"></div>

        <div className="mb-10 animate-fade-in-up">
          <span className="inline-block w-16 h-16 sm:w-20 sm:h-20 text-white mx-auto mb-8 text-4xl sm:text-6xl">🔑</span>
        </div>

        <h2 className=" mb-8 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl animate-fade-in-up animation-delay-200">
          The Speakeasy isn't a club.<br className="hidden sm:block" />It's a password to the future of music culture.
        </h2>

        <p className="text-white mb-6 text-xl sm:text-2xl animate-fade-in-up animation-delay-400">
          Become a SPKZ Millionaire.
        </p>

        <p className="text-gray-300 mb-12 text-xl sm:text-2xl animate-fade-in-up animation-delay-600">
          Buy a Key. Get Perks.
        </p>

        <a
          href="[PLACEHOLDER FOR PUMP.FUN TOKEN LINK]"
          className="inline-flex items-center gap-3 px-10 py-5 sm:px-12 sm:py-6 bg-[#69489F] text-wihte rounded-lg hover:bg-gray-800 transition-all duration-300 group hover:scale-105 font-semibold text-lg animate-fade-in-up animation-delay-800"
        >
          <span className="whitespace-nowrap">Buy SPKZ Token</span>
          <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
