import BackgroundOverlay from "@/components/sections/background-overlay";
import AnnouncementBar from "@/components/sections/announcement-bar";
import MainLogo from "@/components/sections/main-logo";
import HeroBranding from "@/components/sections/hero-branding";
import InstructionSteps from "@/components/sections/instruction-steps";
import CTAButton from "@/components/sections/cta-button";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden">
      <BackgroundOverlay />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <AnnouncementBar />
        
        <main className="flex flex-col items-center pt-3 pb-0">
          <div className="w-full max-w-[512px] px-4">
            <MainLogo />
            <HeroBranding />
            <InstructionSteps />
            <CTAButton />
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
