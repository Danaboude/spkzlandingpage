"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function LinksSection() {
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-center gap-2 sm:gap-3 md:gap-4 mb-4">
          <motion.a
            href="https://pump.fun/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-2 hover:border-blue-400"
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <Image src="/pump.fun.png" alt="Pump.fun" width={48} height={48} className="w-12 h-12" />
          </motion.a>
          <motion.a
            href="https://www.Revelcy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-5 py-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-2 hover:border-blue-400"
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Image src="/revelcy.png" alt="Revelcy" width={96} height={48} className="h-12 w-auto" />
          </motion.a>
          <motion.a
            href="https://x.com/mostroxyz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-2 hover:border-blue-400"
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image src="/x.png" alt="Twitter/X" width={48} height={48} className="w-12 h-12" />
          </motion.a>
          <motion.a
            href="#"
            className="flex items-center justify-center p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-2 hover:border-blue-400"
            title="Gated Discord (coming soon)"
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Image src="/d.png" alt="Discord" width={48} height={48} className="w-12 h-12" />
          </motion.a>
          <motion.a
            href="#"
            className="flex items-center justify-center p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-2 hover:border-blue-400"
            title="Telegram"
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image src="/Telegram.png" alt="Telegram" width={48} height={48} className="w-12 h-12" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}