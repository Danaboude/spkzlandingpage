"use client";

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#6953DA]/30 rounded-xl overflow-hidden bg-gradient-to-r from-[#6953DA]/5 to-[#1E97E6]/5 hover:border-[#3FD9FF]/50 transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 sm:p-8 text-left group"
      >
        <span className="text-[#FFFFFF] pr-6 sm:pr-8 group-hover:text-[#D3FE3D] transition-colors leading-relaxed text-sm sm:text-base md:text-lg">
          {question}
        </span>
        <svg
          className={`w-6 h-6 text-[#3FD9FF] flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
          <div className="h-px bg-gradient-to-r from-[#6953DA] to-[#3FD9FF] mb-6"></div>
          <p className="text-[#D2D2D5] leading-relaxed text-sm sm:text-base md:text-lg">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}