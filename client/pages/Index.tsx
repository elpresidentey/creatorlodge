import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-brand-dark font-lato">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TeamSection />
    </div>
  );
}
