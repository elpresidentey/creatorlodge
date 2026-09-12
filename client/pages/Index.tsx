import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GoldTicker from "@/components/GoldTicker";
import ManifestoSection from "@/components/ManifestoSection";
import ServicesSection from "@/components/ServicesSection";
import HousesPreview from "@/components/HousesPreview";
import SpacesPreview from "@/components/SpacesPreview";
import EventsPreview from "@/components/EventsPreview";
import GalleryPreview from "@/components/GalleryPreview";
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
      <GoldTicker />
      <ManifestoSection />
      <ServicesSection />
      <HousesPreview />
      <SpacesPreview />
      <EventsPreview />
      <GalleryPreview />
      <MembershipPreview />
      <CreatorsStrip />
      <TeamSection />
      <ClosingCTA />
      <Footer />
    </div>
  );
}
