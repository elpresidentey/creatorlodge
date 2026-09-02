import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";
import ServicesSection from "@/components/ServicesSection";
import HousesPreview from "@/components/HousesPreview";
import SpacesPreview from "@/components/SpacesPreview";
import EventsPreview from "@/components/EventsPreview";
import MembershipPreview from "@/components/MembershipPreview";
import CreatorsStrip from "@/components/CreatorsStrip";
import TeamSection from "@/components/TeamSection";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";
import { useTitle } from "@/hooks/useTitle";

export default function Index() {
  useTitle("Dine. Wine. & Create. Lagos");
  return (
    <div className="min-h-screen bg-brand-dark">
      <Navbar />
      <HeroSection />
      <ManifestoSection />
      <ServicesSection />
      <HousesPreview />
      <SpacesPreview />
      <EventsPreview />
      <MembershipPreview />
      <CreatorsStrip />
      <TeamSection />
      <ClosingCTA />
      <Footer />
    </div>
  );
}
