"use client";

import { motion } from "framer-motion";

export function KnowledgeBar() {
  const words = Array(10).fill("IF YOU'RE HERE YOU'RE EARLY • IF YOU KNOW YOU KNOW • BE A $SPKZ MILLIONAIRE • IF YOU'RE HERE YOU'RE EARLY • IF YOU KNOW YOU KNOW • BE A $SPKZ MILLIONAIRE •").join(" "); // Repeat the phrase

  return (
    <section className="relative bg-[#d3fe3d] text-black w-full bg-accent-yellow py-3 sm:py-4 overflow-hidden">
      <motion.div
        className="whitespace-nowrap text-primary-bg font-bold italic text-lg sm:text-xl md:text-2xl"
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }} // Scroll to -50% to create a seamless loop
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 15, // Adjust speed as needed
            ease: "linear",
          },
        }}
      >
        {words} {words} {/* Duplicate content for seamless loop */}
      </motion.div>
    </section>
  );
}
