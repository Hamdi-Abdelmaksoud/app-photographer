import Contact from "@/components/contact";
import FirstSection from "@/components/FirstSection";
import Hero from "@/components/hero";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <FirstSection />
      <Contact />
     <Hero />
     <Slider />
    </div>
  );
}
