import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ImpactStrip from "@/components/ImpactStrip";
import ActiveCampaigns from "@/components/ActiveCampaigns";
import AboutUs from "@/components/AboutUs";
import Programs from "@/components/Programs";
import Gallery from "@/components/Gallery";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Primary header/navigation */}
      <Navigation />

      {/* Main page content sections */}
      <main className="flex-1">
        {/* Hero introduction section */}
        <Hero />

        {/* Dynamic impact numbers strip */}
        <ImpactStrip />

        {/* Fundraising campaigns cards */}
        <ActiveCampaigns />

        {/* History and mission details */}
        <AboutUs />

        {/* Core programs grid (Bento) */}
        <Programs />

        {/* Activity photos grid */}
        <Gallery />
      </main>

      {/* Secondary contact and footer actions */}
      <ContactFooter />
    </div>
  );
}
