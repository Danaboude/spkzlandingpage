"use client";
import { motion } from "framer-motion";

const roadmapEvents = [
  {
    date: "December",
    title: "Phase 1: Launch",
    description: [
      "Instant access to Speakeasy Discord",
      "Livestreams and talks",
      "PFP & music drop",
    ],
  },
  {
    date: "Winter 2026",
    title: "Phase 2: Expansion",
    description: [
      "Early Access to Beta launch",
      "Music drops",
      "Exclusive livestreams",
    ],
  },
  {
    date: "Spring 2026",
    title: "Phase 3: Community",
    description: [
      "Sonic Green Earth Day event",
      "Event perks & rewards",
    ],
  },
  {
    date: "Summer 2026",
    title: "Phase 4: Scale",
    description: [
      "Summer concert series",
      "Exclusive access",
    ],
  },
];

export default function RoadmapSection() {
  return (
    <section className="relative w-full py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 md:mb-32 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-green-400">
          Roadmap
        </h2>

        {/* Desktop View (Horizontal) */}
        <div className="hidden md:block relative">
          <div className="relative h-[600px] w-full">
            {/* SVG Wave Line */}
            <svg
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              viewBox="0 0 1200 600"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#22c55e" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 0 300 Q 150 230 300 300 T 600 300 T 900 300 T 1200 300"
                fill="none"
                stroke="url(#waveGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </svg>

            {roadmapEvents.map((event, i) => {
              // Calculate positions
              // i=0 (10%): Hill. Target Y ~ 255
              // i=1 (35%): Valley. Target Y ~ 345
              // i=2 (60%): Hill. Target Y ~ 255
              // i=3 (85%): Valley. Target Y ~ 345

              const leftPos = 10 + i * 25;
              const isTop = i % 2 === 0;
              const dotY = isTop ? 245 : 355; // Tweaked slightly for visual center of Q curve (230 amplitude ref)

              return (
                <div key={`desktop-group-${i}`}>
                  {/* Card */}
                  <motion.div
                    className="absolute w-64 z-20"
                    style={{
                      left: `${leftPos}%`,
                      transform: 'translateX(-50%)', // Center card on the line
                      top: isTop ? "0" : "auto",
                      bottom: isTop ? "auto" : "0",
                    }}
                    initial={{ opacity: 0, scale: 0.9, y: isTop ? -20 : 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.3 }}
                  >
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                      <div className="text-xl font-bold text-white mb-2">{event.date}</div>
                      <h3 className="text-lg text-purple-300 mb-3">{event.title}</h3>
                      <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
                        {event.description.map((line, idx) => (
                          <li key={idx}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  {/* Connector Line */}
                  <motion.div
                    className="absolute w-[1px] border-l border-dashed border-white/30 z-10"
                    style={{
                      left: `${leftPos}%`,
                      top: isTop ? "auto" : `${dotY}px`,
                      bottom: isTop ? `${600 - dotY}px` : "auto",
                      height: isTop ? `${dotY}px` : `${600 - dotY}px` // Span from dot to edge
                      // Actually span to card? Using large height + z-index behind card is easier
                    }}
                    initial={{ opacity: 0, height: 0 }}
                    whileInView={{ opacity: 1, height: isTop ? dotY : (600 - dotY) }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.3, duration: 0.5 }}
                  />

                  {/* Dot */}
                  <motion.div
                    className="absolute w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)] z-30"
                    style={{
                      left: `${leftPos}%`,
                      top: `${dotY}px`,
                      marginTop: "-10px", // Center vertically
                      marginLeft: "-10px" // Center horizontally
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + i * 0.3, type: "spring" }}
                  />
                </div>
              );
            })}

          </div>
        </div>

        {/* Mobile View (Vertical) */}
        <div className="md:hidden relative border-l-2 border-white/10 ml-6 pl-8 space-y-12">
          {roadmapEvents.map((event, i) => (
            <motion.div
              key={i}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <span className="absolute -left-[41px] top-6 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-black" />
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl">
                <div className="text-xl font-bold text-white mb-1">{event.date}</div>
                <h3 className="text-lg text-purple-300 mb-2">{event.title}</h3>
                <ul className="text-sm text-gray-400 list-disc list-inside">
                  {event.description.map((d, idx) => <li key={idx}>{d}</li>)}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
