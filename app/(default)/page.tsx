import dynamic from "next/dynamic";
import Hero from "@/components/hero-home";

const TheProblem = dynamic(() => import("@/components/the-problem"));
const TheSolution = dynamic(() => import("@/components/the-solution"));
const UseCase = dynamic(() => import("@/components/use-case"));
const Outcomes = dynamic(() => import("@/components/outcomes"));
const ProcessSteps = dynamic(() => import("@/components/process-steps"));
const WhatsIncluded = dynamic(() => import("@/components/whats-included"));
const Pricing = dynamic(() => import("@/components/pricing"));
const TrustPrivacy = dynamic(() => import("@/components/trust-privacy"));
const WhoItsFor = dynamic(() => import("@/components/who-its-for"));
const AboutSection = dynamic(() => import("@/components/about-section"));
const FounderSection = dynamic(() => import("@/components/founder-section"));
const FAQ = dynamic(() => import("@/components/faq"));
const Cta = dynamic(() => import("@/components/cta"));

export default function Home() {
  return (
    <>
      <Hero />
      <TheProblem />
      <TheSolution />
      <UseCase />
      <Outcomes />
      <ProcessSteps />
      <WhatsIncluded />
      <Pricing />
      <TrustPrivacy />
      <WhoItsFor />
      <AboutSection />
      <FounderSection />
      <FAQ />
      <Cta />
    </>
  );
}
