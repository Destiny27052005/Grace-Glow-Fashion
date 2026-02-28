import { gsap } from "gsap";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServiceSection from "./components/ServicesSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

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
        <GallerySection />
        <ContactSection />
        <Footer />
      </main>
    </div>

  )
}

export default App
