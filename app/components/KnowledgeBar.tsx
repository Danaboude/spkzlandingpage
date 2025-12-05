"use client";

import { motion } from "framer-motion";

export function KnowledgeBar() {
  const words = Array(10).fill("If you know, you know").join(" "); // Repeat the phrase

  return (
    <section className="relative bg-[#E2FC7B] text-black w-full bg-accent-yellow py-3 sm:py-4 overflow-hidden">
      <motion.div
        className="whitespace-nowrap text-primary-bg font-bold text-lg sm:text-xl md:text-2xl"
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
