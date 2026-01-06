"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export function GotSPKZSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-transparent">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/start.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Vignette Effect - Smooth and using #25234B */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(37, 35, 75, 0.4) 40%, #25234B 90%)'
        }}
      />

      <div className="relative z-20 w-full h-full p-4 sm:p-6 lg:p-12 flex flex-col items-start justify-start">

        <div className="flex flex-col gap-8 max-w-4xl">
          {/* Images Section */}
          <div className="flex items-center gap-6">

            <Image
              src="/SPKZKeywhite-imageonline.co-merged.png"
              alt="SPKZ Key"
              width={200}
              height={150}
              className="w-40 sm:w-48 lg:w-96 h-auto animate-float animation-delay-500"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-start text-left space-y-4">
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in-up">
              Your key to the future<br />of music culture
            </h2>

            <p className="text-white text-xl sm:text-2xl lg:text-3xl font-medium animate-fade-in-up animation-delay-200">
              Become a SPKZ Millionaire.
            </p>

            <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl animate-fade-in-up animation-delay-400">
              Buy a Key. Get Perks.
            </p>

            <a
              href="#"
              className="mt-4 inline-flex items-center justify-center gap-3 px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg bg-[#00D1FF] text-white shadow-[#00D1FF]/30 hover:bg-cyan-300 animate-fade-in-up animation-delay-600"
            >
              Buy SPKZ Token
              <ArrowRightIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
