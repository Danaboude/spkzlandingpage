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
      <section className="relative w-full min-h-screen bg-gradient-to-br from-[#1A0B3D] to-[#3A1B7A] text-white flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="container mx-auto z-10">
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-full px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-6xl mx-auto flex flex-wrap items-start items-start justify-center gap-10"
            >
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
              <div className="flex flex-col items-end gap-2">
                <p className="text-xs lg:text-sm text-right">
                  Music Capital Markets <br className="hidden sm:block" />
                  for Real World Artists
                </p>
                <a
                  href="https://mostro.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#d3fe3d] text-black px-3 py-1.5 rounded-md font-bold flex items-center gap-1.5 text-xs hover:bg-yellow-300 transition-colors"
                >
                  Go to Mostro
                  <ArrowRightIcon className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-5 text-center lg:text-left">
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
                className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[360px] lg:h-[360px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col items-center lg:items-start"
            >
                <Image
                src="/SPKZTOKENlogowhite.png"
                alt="SPKZ Token"
                width={891}
                height={138}
                className="w-[400px] sm:w-[250px] md:w-[400px] lg:w-[400px] xl:w-[650px] h-auto lg:-ml-3  "
              />
              <p className="text-lg sm:text-xl lg:text-3xl xl:text-5xl text-gray-200 whitespace-nowrap max-w-md mb-1">
                The Speakeasy token SPKZ
              </p>
              <p className="text-lg sm:text-xl lg:text-3xl xl:text-5xl text-gray-200 whitespace-nowrap max-w-md mb-8">
                Your key to the Mostro ecosystem
              </p>

              <div className="w-full flex justify-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-3 px-12 py-4 rounded-full font-bold text-xl transition-all duration-300 hover:scale-[1.05] shadow-lg bg-[#00D1FF] text-white shadow-[#00D1FF]/30 hover:bg-cyan-300"
                >
                  Buy SPKZ Token
                  <ArrowRightIcon className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
