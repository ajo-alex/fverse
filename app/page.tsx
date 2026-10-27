import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MissionVision from "@/components/MissionVision";
import LaunchPlan from "@/components/LaunchPlan";
import ProcessWorkflow from "@/components/ProcessWorkflow";
import WhyChooseUs from "@/components/WhyChooseUs";
import GlobalFootprint from "@/components/GlobalFootprint";
import LeadershipTeam from "@/components/LeadershipTeam";
import AuditForm from "@/components/AuditForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)] flex-1">
        <div className="flex flex-col w-full selection:bg-secondary-fixed selection:text-on-secondary-fixed">
          <Hero />
          <MissionVision />
          <LaunchPlan />
          <ProcessWorkflow />
          <WhyChooseUs />
          <GlobalFootprint />
          <LeadershipTeam />
          <AuditForm />
        </div>
      </main>
      <Footer />
    </>
  );
}