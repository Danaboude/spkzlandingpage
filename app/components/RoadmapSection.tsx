"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function RoadmapSection() {
  const roadmapEvents = [
    {
      date: "December",
      description: [
        "Instant access to the Speakeasy gated Discord channel",
        "Access to livestreams and talks",
        "PFP drop and music drop"
      ],
      color: "bg-blue-500",
    },
    {
      date: "Winter 2026",
      description: [
        "Early Access to Beta launch",
        "Music drops",
        "Exclusive livestreams"
      ],
      color: "bg-purple-500",
    },
    {
      date: "Spring 2026",
      description: [
        "Multistream event Sonic Green for Earth Day in April",
        "Event perks"
      ],
      color: "bg-green-500",
    },
    {
      date: "Summer 2026",
      description: [
        "Livestreams: Summer concert series",
        "Exclusive access"
      ],
      color: "bg-yellow-500",
    },
  ];

  return (
    <section className="relative w-full bg-transparent py-20 sm:py-28 px-6 text-center overflow-hidden">
      <motion.h2
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--foreground)] mb-20 tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <Image
          src="/SPKZ_MILLIONAIRE_ROADMAP_white.png"
          alt="SPKZ Token"
          width={891}
          height={138}
          className="w-[480px] sm:w-[400px] lg:w-[1000px] h-auto mx-auto"
        />
      </motion.h2>

      <div className="relative max-w-7xl mx-auto">

        <div className="relative flex flex-wrap justify-center items-stretch">
          {roadmapEvents.map((event, i) => (
            <motion.div
              key={i}
              className="w-full sm:w-1/2 lg:w-1/4 px-6 py-10 flex flex-col items-center relative"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Marker */}
              <div className="relative z-10 mb-4">
                <motion.div
                  className={`w-6 h-6 ${event.color} rounded-full relative z-10 shadow-lg`}
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                ></motion.div>

                <div className={`absolute left-1/2 -translate-x-1/2 top-full w-[3px] h-10 ${event.color} opacity-80`}></div>
              </div>

              {/* Card */}
              <div className="mt-4 w-full bg-gray-800 p-4 rounded-2xl border border-gray-600 shadow-lg hover:shadow-xl 
              transition-all duration-300 group hover:scale-[1.02] h-auto flex flex-col flex-1">

                <p className="text-gray-300 text-lg font-semibold mb-2">{event.date}</p>

                {event.description && (
                  <ul className="text-gray-400 text-xs leading-relaxed list-disc list-inside space-y-1 text-left flex-1">
                    {event.description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
