import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MissionVision from "@/components/MissionVision";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessWorkflow from "@/components/ProcessWorkflow";
import LaunchPlan from "@/components/LaunchPlan";
import GlobalFootprint from "@/components/GlobalFootprint";
import LeadershipTeam from "@/components/LeadershipTeam";
import AuditForm from "@/components/AuditForm";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <ScrollRevealProvider />
      <Header />
      <main className="w-full bg-[#100B06] min-h-screen flex-1 text-[#F5E4C7]">
        <div className="flex flex-col w-full selection:bg-[#BE8D3F] selection:text-[#100B06]">
          <Hero />
          <MissionVision />
          <WhyChooseUs />
          <ProcessWorkflow />
          <LaunchPlan />
          <GlobalFootprint />
          <LeadershipTeam />
          <AuditForm />
        </div>
      </main>
      <Footer />
    </>
  );
}