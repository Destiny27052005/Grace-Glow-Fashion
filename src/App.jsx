import { gsap } from "gsap";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServiceSection from "./components/ServicesSection";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {

  return (
    <div className="relative">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServiceSection />

      </main>
    </div>

  )
}

export default App
