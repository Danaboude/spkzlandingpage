"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRightIcon, ArrowTopRightOnSquareIcon, ChartBarIcon, UsersIcon, MusicalNoteIcon } from "@heroicons/react/24/solid";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-transparent text-text-light flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

      <div className="relative z-10 container mx-auto">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-[#8AD4F7] via-[#69489F] to-[#E2FC7B] bg-clip-text text-transparent">
              SPKZ Token
            </span>
            <br />
            Welcome to the Underground

          </h1>
          <p className="text-xl text-text-dark max-w-3xl mx-auto">
            Join the future of music where fans and creators thrive together through tokenization
          </p>
        </motion.div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Mostro Card - Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1C1E2F] rounded-2xl p-6 md:p-8 min-h-[400px] flex flex-col justify-center"
          >
            {/* Logo and Title */}
            <div className="flex flex-col items-center mb-8">
              <div className="relative mb-6 h-32 flex items-center justify-center">
                <Image
                  src="/mostro.png"
                  alt="Mostro Platform"
                  width={120}
                  height={120}
                  className="relative rounded-xl object-contain"
                />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">Mostro</h2>
              <p className="text-sm md:text-base text-gray-300 text-center mb-6">
                Fan-powered music tokenization platform
              </p>
            </div>

            {/* Action Button */}
            <a
              href="https://mostro.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-[#8AD4F7] to-cyan-500 text-black font-bold text-base md:text-lg lg:text-xl transition-all duration-300 hover:scale-[1.02]"
            >
              Launch Mostro Platform
              <ArrowTopRightOnSquareIcon className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Speakeasy Card - Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#1C1E2F] rounded-2xl p-6 md:p-8 min-h-[400px] flex flex-col justify-center"
          >
            {/* Logo and Title */}
            <div className="flex flex-col items-center mb-8">
              <div className="relative mb-6 h-32 flex items-center justify-center">
                <Image
                  src="/spkz-mascot.png"
                  alt="Speakeasy Token"
                  width={120}
                  height={120}
                  className="relative rounded-xl object-contain"
                />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">Speakeasy (SPKZ)</h2>
              <p className="text-sm md:text-base text-gray-300 text-center mb-6">
                Your key to the Mostro ecosystem
              </p>
            </div>

            {/* Action Button */}
            <a
              href="#"
              className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-[#69489F] to-purple-600 text-white font-bold text-base md:text-lg lg:text-xl transition-all duration-300 hover:scale-[1.02]"
            >
              Buy SPKZ Token
              <ArrowRightIcon className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

       
      </div>
    </section>
  );
}