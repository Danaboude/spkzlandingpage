import { FAQItem } from "./FAQItem";

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
          <div className="h-1 w-24 bg-gradient-to-r from-[#9C8BE7] to-[#1E97E6] mx-auto rounded-full"></div>
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