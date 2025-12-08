"use client";

export function KnowledgeBar() {
  const words = Array(10).fill("IF YOU'RE HERE YOU'RE EARLY • IF YOU KNOW YOU KNOW • BE A $SPKZ MILLIONAIRE • IF YOU'RE HERE YOU'RE EARLY • IF YOU KNOW YOU KNOW • BE A $SPKZ MILLIONAIRE •").join(" "); // Repeat the phrase

  return (
    <section className="relative bg-[#d3fe3d] text-black w-full bg-accent-yellow py-3 sm:py-4 overflow-hidden">
      <style>{`
        @keyframes scrollX {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .infinite-scroll-knowledge {
          display: flex;
          width: fit-content;
          animation: scrollX 90s linear infinite;
        }
      `}</style>
      <div className="infinite-scroll-knowledge">
        <span className="text-primary-bg font-bold italic text-lg sm:text-xl md:text-2xl whitespace-nowrap">
            {words}{' '}
        </span>
        <span className="text-primary-bg font-bold italic text-lg sm:text-xl md:text-2xl whitespace-nowrap">
            {words}{' '}
        </span>
      </div>
    </section>
  );
}
