"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export function GotSPKZSection() {
  return (
    <section className="relative py-32 sm:py-40 px-4 sm:px-6 lg:px-8  overflow-hidden bg-transparent" style={{ backgroundImage: `url('/start.png')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="relative z-10 max-w-6xl mx-auto">


        <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-12">
          {/* Left side - Mascot
          <div className="flex-shrink-0">
            <Image
              src="/SPKZ Mo_pointing_left_arm x.png"
              alt="SPKZ Token"
              width={891}
              height={138}
              className="w-[300px] sm:w-[400px] lg:w-[500px] h-auto"
            />
          </div> */}

          {/* Right side - Logos and Text */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* <div className="flex items-center gap-4 mb-8">
              <Image
                src="/SPKZKeywhite-imageonline.co-merged.png"
                alt="SPKZ Token"
                width={200}
                height={138}
                className="
    w-[480px]       
    sm:w-[360px]   
    md:w-[420px]   
    lg:w-[900px]    
    xl:w-[1200px]   lg:-ml-15 
  "
              />


            </div> */}

            <h2 className="mb-8 text-white text-3xl sm:text-3xl md:text-3xl  lg:whitespace-nowrap lg:text-2xl xl:text-4xl animate-fade-in-up animation-delay-200">
              Your key to the future of music culture
            </h2>

            <p className="text-white mb-6 text-2xl sm:text-3xl lg:text-2xl animate-fade-in-up animation-delay-400">
              Become a SPKZ Millionaire.
            </p>

            <p className="text-gray-300 mb-12 text-2xl lg:text-2xl sm:text-3xl animate-fade-in-up animation-delay-600">
              Buy a Key. Get Perks.
            </p>

            <div className="w-full flex justify-center lg:justify-start">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 px-12 py-4 rounded-full font-bold text-xl transition-all duration-300 hover:scale-[1.05] shadow-lg bg-[#00D1FF] text-white shadow-[#00D1FF]/30 hover:bg-cyan-300"
              >
                Buy SPKZ Token
                <ArrowRightIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
