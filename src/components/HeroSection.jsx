import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function HeroSection() {
    useGSAP(() => {
        gsap.fromTo('.heroSection h1', {
            y: 50,
            opacity: 0
        }, {
            opacity: 1,
            y: 0,
            duration: 2,
        });
        gsap.fromTo('.heroSection p', {
            y: 30,
            opacity: 0
        }, {
            opacity: 1,
            y: 0,
            delay: 2,
            duration: 2,
        });
    gsap.fromTo('.heroSection button', {
            y: 30,
            opacity: 0
        }, {
            opacity: 1,
            y: 0,
            delay: 3,
            duration: 1,
        });
    }
    )

    return (
        <section id="home" className="heroSection h-screen w-screen object-center text-white grid place-content-center text-center">
            <h1 className="hero-title text-6xl font-extrabold mb-6">Beauty in <br />Simplicity</h1>
            <p className="hero-text mb-6">A sanctuary of calm where modern beauty meets timeless elegence</p>
            <button className="font-medium border-white place-self-center border w-35 px-5 py-3 transition-all hover:bg-white hover:text-black cursor-pointer"><a href="#contact">BOOK NOW</a></button>
        </section>
    );
}

export default HeroSection;