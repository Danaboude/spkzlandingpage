import { FAQItem } from "./FAQItem";
import { motion } from "framer-motion";

export function FAQSection() {
  const faqs = [
    {
      question: "What is SPKZ?",
      answer: "A social token granting access to the exclusive Mostro.xyz Speakeasy community."
    },
    {
      question: "What's a SPKZ millionaire?",
      answer: "Anyone holding 1,000,000 SPKZ, granting a digital \"key\" to events, perks, and private spaces."
    },
    {
      question: "What can I do with my SPKZ?",
      answer: "Join the gated Discord, get whitelist access, attend events, and experience early platform features."
    },
    {
      question: "Will there be future drops?",
      answer: "Yes — SPKZ millionaires get priority for Mostro NFTs, artist collaborations, and music experiences."
    },
    {
      question: "Is SPKZ an investment?",
      answer: "No — it is an access token focused on utility and culture, not financial gain."
    },
    {
      question: "How many tokens do I need for The Speakeasy?",
      answer: "1,000,000 SPKZ = 1 key."
    },
    {
      question: "Where can I get SPKZ?",
      answer: "On Pump.fun (Solana). Search for \"SPKZ — The Speakeasy Token.\""
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#000000] to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="mb-6 text-[#FFFFFF] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Frequently Asked Questions</h2>
          <p className="text-[#D2D2D5] mb-6 text-base sm:text-lg md:text-xl">Everything you need to know about SPKZ</p>
          <div className="h-1 w-24 bg-gradient-to-r from-[#9C8BE7] to-[#1E97E6] mx-auto rounded-full mb-8"></div>
          <motion.a
            href="/spkz-whitepaper.pdf" // Assuming the PDF is in the public directory
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 mt-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-[1.05] shadow-lg bg-[#00D1FF] text-white shadow-[#00D1FF]/30 hover:bg-cyan-300 transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Learn About SPKZ Token
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-2">
              <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-2.25a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-2.25a.75.75 0 01.75-.75z" clipRule="evenodd" />
            </svg>
          </motion.a>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FAQItem question={faq.question} answer={faq.answer} />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative background */}
      <div className="absolute left-0 bottom-0 w-72 h-72 bg-[#9C8BE7] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
    </section>
  );
}