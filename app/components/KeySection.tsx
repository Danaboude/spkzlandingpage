"use client";

export function KeySection() {
  const benefits = [
    {
      icon: "🔑",
      title: "Speakeasy Access",
      description:
        "1 million SPKZ tokens grants perks & entry into the gated Speakeasy on Mostro's Discord.",
    },
    {
      icon: "📋",
      title: "Whitelist Access",
      description: "Automatic whitelist for the Beta Mostro Artist Drop.",
    },
    {
      icon: "🎁",
      title: "Future NFTs & Airdrops",
      description: "Priority access to drops and rewards.",
    },
    {
      icon: "📻",
      title: "Virtual Access",
      description: "Catch livestreams, artist talks, virtual events.",
    },
    {
      icon: "✨",
      title: "Creative Status",
      description: 'Become a "SPKZ Millionaire" and help shape the Mostro culture.',
    },
  ];

  const allBenefits = [...benefits, ...benefits];

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#000000] to-transparent">
      <style>{`
        @keyframes scrollX {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .infinite-scroll {
          animation: scrollX 25s linear infinite;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="mb-6 text-[#FFFFFF] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            1M SPKZ get you a key to
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#D3FE3D] to-[#3FD9FF] mx-auto rounded-full"></div>
        </div>

        <div className="overflow-hidden w-full">
          <div className="flex gap-6 lg:gap-8 infinite-scroll w-fit">
            {allBenefits.map((benefit, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 group relative bg-gradient-to-br from-[#1E97E6]/10 to-[#9C8BE7]/10 border border-[#3FD9FF]/30 rounded-xl p-8 lg:p-10 hover:border-[#D3FE3D] transition-all duration-300 hover:shadow-[0_0_30px_rgba(211,254,61,0.2)]"
              >
                <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-[#D3FE3D]/20 to-[#3FD9FF]/20 rounded-lg">
                  <span className="text-2xl sm:text-3xl">{benefit.icon}</span>
                </div>
                <h3 className="mb-4 text-[#FFFFFF] text-lg sm:text-xl md:text-2xl">
                  {benefit.title}
                </h3>
                <p className="text-[#D2D2D5] text-sm sm:text-base md:text-lg">
                  {benefit.description}
                </p>

                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#D3FE3D]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
