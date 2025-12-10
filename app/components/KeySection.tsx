"use client";

import Image from "next/image";

export function KeySection() {
  const benefits = [
    {
      icon: "/Speakeasy_Access.png",
      title: "Speakeasy Access",
      description:
        "1 million SPKZ tokens grants perks & entry into the gated Speakeasy on Mostro's Discord.",
    },
    {
      icon: "/Whitelist_Access.png",
      title: "Whitelist Access",
      description: "Automatic whitelist for the Mostro Beta Artist Drop",
    },
    {
      icon: "/Creative-Status.png",
      title: "Future Airdrops",
      description: "Priority access to drops and rewards.",
    },
    {
      icon: "/Virtual-Access.png",
      title: "Virtual Access",
      description: "Catch livestreams, artist talks, virtual events.",
    },
    {
      icon: "/Future-Airdrops.png",
      title: "Creative Status",
      description: 'Become a "SPKZ Millionaire" and help shape the Mostro culture.',
    },
  ];



  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#000000] to-transparent">


      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="mb-6 text-[#FFFFFF] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            1M SPKZ GETS YOU A KEY
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#D3FE3D] to-[#3FD9FF] mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 px-4">
          {benefits.map((benefit, index) => (
            <div
              key={`benefit-${index}`}
              className="flex-shrink-0 w-full max-w-xs group relative bg-gradient-to-br from-[#1E97E6]/10 to-[#9C8BE7]/10 border border-[#3FD9FF]/30 rounded-xl px-8 py-5 lg:px-10 lg:py-7 hover:border-[#D3FE3D] transition-all duration-300 hover:shadow-[0_0_30px_rgba(211,254,61,0.2)] text-center"
            >
              <div className="mb-6 flex justify-center items-center p-4 rounded-lg">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={120}
                  height={120}
                  className="w-39 h-auto p-4 mx-auto"
                />
              </div>
              <h3 className="mb-4 text-[#FFFFFF] text-lg sm:text-xl md:text-2xl lg:-mt-10">
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
    </section>
  );
}
