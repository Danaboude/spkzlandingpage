"use client";

import { HeroSection } from "./components/HeroSection";
import { KnowledgeBar } from "./components/KnowledgeBar";
import { KeySection } from "./components/KeySection";
import { PremarketCountdown } from "./components/PremarketCountdown";
import RoadmapSection from "./components/RoadmapSection";
import { GotSPKZSection } from "./components/GotSPKZSection";
import { FAQSection } from "./components/FAQSection";
import { LinksSection } from "./components/LinksSection";

import { Footer } from "./components/Footer";

export default function Home() {
  const targetDate = "2025-12-25T00:00:00Z"; // Example target date for countdown

  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <KnowledgeBar />
      <KeySection />
  {/*  <PremarketCountdown targetDate={targetDate} />*/}
      <RoadmapSection />
      <FAQSection />
      <GotSPKZSection />
            <LinksSection />

      <Footer />
    </main>
  );
}