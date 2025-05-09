import Contact from "@/components/contact";
import FirstSection from "@/components/FirstSection";
import Hero from "@/components/hero";
import AutoSlider from "@/components/AutoSlider";
import Slide from "@/components/Slide";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <FirstSection />
      <Contact />
     <Hero />
     <Slide />
     <AutoSlider />

    </div>
  );
}
