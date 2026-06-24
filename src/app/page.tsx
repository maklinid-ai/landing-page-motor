import { Navbar } from "@/components/maklin/navbar";
import { HeroSection } from "@/components/maklin/hero-section";
import { Marquee } from "@/components/maklin/marquee";
import { ProblemSection } from "@/components/maklin/problem-section";
import { MistakesSection } from "@/components/maklin/mistakes-section";
import { OpportunitySection } from "@/components/maklin/opportunity-section";
import { SolutionSection } from "@/components/maklin/solution-section";
import { WhyMaklinSection } from "@/components/maklin/why-maklin-section";
import { ProfitSimulationSection } from "@/components/maklin/profit-simulation-section";
import { PricingSection } from "@/components/maklin/pricing-section";
import { LeadFormSection } from "@/components/maklin/lead-form-section";
import { FaqSection } from "@/components/maklin/faq-section";
import { FinalCtaSection } from "@/components/maklin/final-cta-section";
import { Footer } from "@/components/maklin/footer";
import { FloatingWhatsApp } from "@/components/maklin/floating-whatsapp";
import { LeadFormDialog } from "@/components/maklin/lead-form-dialog";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <Marquee />
        <ProblemSection />
        <MistakesSection />
        <OpportunitySection />
        <SolutionSection />
        <WhyMaklinSection />
        <ProfitSimulationSection />
        <PricingSection />
        <LeadFormSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <LeadFormDialog />
    </div>
  );
}
