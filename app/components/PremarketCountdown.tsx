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
  const [currentDigitHeight, setCurrentDigitHeight] = useState(0);

  // Use useLayoutEffect to measure the height of a digit after render
  useEffect(() => {
    const updateHeight = () => {
      if (digitRef.current) {
        setCurrentDigitHeight(digitRef.current.offsetHeight);
      }
    };

    updateHeight(); // Set initial height on mount
    window.addEventListener('resize', updateHeight); // Listen for window resize

    return () => {
      window.removeEventListener('resize', updateHeight); // Clean up on unmount
    };
  }, []); // Empty dependency array: runs once on mount, cleans up on unmount.

  return (
    <div className="relative overflow-hidden h-12 sm:h-16 md:h-20 lg:h-24 xl:h-32 w-6 sm:w-8 md:w-10 lg:w-12 xl:w-16 inline-block">
      <motion.div
        animate={{ y: -(digit * currentDigitHeight) }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full"
      >
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} ref={i === 0 ? digitRef : null} className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-32 flex items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-white">
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
      <div key={interval} className="inline-flex items-center mx-0.5 sm:mx-1">
        <ScrollingDigit digit={tens} />
        <ScrollingDigit digit={units} />
        <span className="ml-0.5 sm:ml-1 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">{interval.charAt(0)}</span>
        {interval !== 'seconds' && <span className="mx-0.5 sm:mx-1 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white">:</span>}
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
          <div className="flex flex-wrap items-center justify-center text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-6 animate-fade-in-up">
            <p>Premarket on{" "}</p>
            <span className="mx-1 sm:mx-2">
              <Image
                src="/revelcy.png" // Assuming this image exists in public folder
                alt="revelcy logo"
                width={2148}
                height={633}
                className="w-[90px] sm:w-[120px] md:w-[150px] lg:w-[180px] xl:w-[170px] h-auto object-contain"
              />
            </span>
            <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white mx-1 sm:mx-2" />
            <p>Launch on</p>
            <Image
              src="/pump.fun.png" // Assuming this image exists in public folder
              alt="pump.fun logo"
              width={25}
              height={25}
              className="sm:w-10 sm:h-10 md:w-12 md:h-12 ml-1 sm:ml-2"
            />
          </div>

          <motion.h3
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-10 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
          </motion.h3>

          <a
            href="#" // Placeholder link
            className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full bg-[#69489F] hover:bg-opacity-90 transition-all duration-300 text-white font-bold text-lg sm:text-xl shadow-lg hover:scale-105"
          >
            Join Premarket
          </a>
        </motion.div>
      </div>
    </section>
  );
}
