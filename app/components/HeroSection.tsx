"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export function HeroSection() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Teko:wght@700&display=swap');
      `}</style>
      <section className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat text-white flex flex-col justify-between py-12 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundImage: `url('/celebrating.png')` }}>
        <div className="container mx-auto z-10">
          <div className="absolute top-8 left-4 w-full px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-10 pr-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 120,
                }}
              >
                <Image
                  src="/spkz-mascot.png"
                  alt="SPKZ Token"
                  width={260}
                  height={260}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
                />
              </motion.div>
              <div className="flex flex-col items-center justify-center">
                <div className="flex items-center">
                  <div className="relative">
                    <Image
                      src="/mostro.png"
                      alt="Mostro"
                      width={150}
                      height={37}
                      className="w-[120px] h-auto md:w-[150px]"
                    />
                    <p className="text-base md:text-xl font-light tracking-widest text-right -mt-1 md:-mt-2">
                      presents
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-xs lg:text-sm text-center">
                    Music Capital Markets <br />
                    for Real World Artists
                  </p>
                  <a
                    href="https://mostro.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#d3fe3d] text-black px-3 py-1.5 rounded-md font-bold flex items-center gap-1.5 text-xs hover:bg-yellow-300 transition-colors mt-2"
                  >
                    Go to Mostro
                    <ArrowRightIcon className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Buy SPKZ Token Button */}
        <div className="absolute bottom-20 md:bottom-10 lg:bottom-4 left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-5 lg:transform-none">
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="inline-flex items-center justify-center gap-2 md:gap-3 px-8 md:px-12 py-4 rounded-full font-bold text-base md:text-xl whitespace-nowrap transition-all duration-300 hover:scale-[1.05] shadow-lg bg-[#00D1FF] text-white shadow-[#00D1FF]/30 hover:bg-cyan-300 w-auto"
          >
            Buy SPKZ Token
            <ArrowRightIcon className="w-5 h-5" />
          </motion.a>
        </div>
      </section>
    </>
  );
}
