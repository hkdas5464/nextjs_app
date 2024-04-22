import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import Wychooseus from "@/components/ui/Wychooseus";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      < HeroSection/>
      <FeaturedSection/>
      <Wychooseus/>
      <TestimonialCards/>
      <UpcomingWebinar/>
    </main>
  );
}
