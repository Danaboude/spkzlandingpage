"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, AcademicCapIcon } from "@heroicons/react/24/solid"; // Using a placeholder icon
import Image from "next/image";

interface CountdownProps {
  targetDate: string;
}

const calculateTimeLeft = (targetDate: string) => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

const ScrollingDigit = ({ digit }: { digit: number }) => {
  const digitRef = useRef<HTMLDivElement>(null);
  const [digitHeight, setDigitHeight] = useState(0);

  useEffect(() => {
    if (digitRef.current) {
      setDigitHeight(digitRef.current.offsetHeight);
    }
  }, [digitRef]);

  return (
    <div className="relative overflow-hidden h-20 md:h-24 lg:h-32 w-10 md:w-12 lg:w-16 inline-block align-middle">
      <motion.div
        animate={{ y: -(digit * digitHeight) }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full"
      >
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} ref={i === 0 ? digitRef : null} className="h-20 md:h-24 lg:h-32 flex items-center justify-center text-5xl md:text-6xl lg:text-8xl font-bold text-white">
            {i}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export function PremarketCountdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: React.ReactElement[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    // @ts-ignore
    if (!timeLeft[interval]) {
      return;
    }

    const value = (timeLeft as any)[interval] as number;
    const str = String(value).padStart(2, '0');
    const tens = parseInt(str[0]);
    const units = parseInt(str[1]);

    timerComponents.push(
      <div key={interval} className="inline-flex mx-1 sm:mx-2 items-center">
        <ScrollingDigit digit={tens} />
        <ScrollingDigit digit={units} />
        <span className="ml-1 text-3xl md:text-4xl lg:text-5xl text-white">{interval.charAt(0)}</span>
        {interval !== 'seconds' && <span className="mx-1 text-5xl md:text-6xl lg:text-7xl text-white">:</span>}
      </div>
    );
  });

  return (
    <section className="relative w-full bg-secondary-bg py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center justify-center"
        >
          <div className="flex items-center justify-center text-text-light text-lg sm:text-xl md:text-2xl font-semibold mb-6 animate-fade-in-up">
            <p>Premarket on{" "}</p>
            <span className="text-mostro-green mx-2">
              <Image
                src="/revelcy.png" // Assuming this image exists in public folder
                alt="revelcy logo"
                width={80}
                height={80}
              />
            </span>
            <ArrowRightIcon className="h-6 w-6 text-text-light mx-2" />
            <p>Launch on</p>
            <Image
              src="/pump.fun.png" // Assuming this image exists in public folder
              alt="revelcy logo"
              width={40}
              height={40}
            />          </div>

          <motion.h3
            className="text-30xl sm:text-7xl lg:text-8xl xl:text-15xl font-extrabold text-white mb-10 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
          </motion.h3>

          <a
            href="#" // Placeholder link
            className="px-10 py-4 rounded-full bg-accent-purple hover:bg-opacity-90 transition-all duration-300 text-white bg-[#69489F] font-bold text-xl shadow-lg hover:scale-105"
          >
            Join Premarket
          </a>
        </motion.div>
      </div>
    </section>
  );
}
