import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AboutSpa from "../assets/images/about-spa.jpg"

function AboutSection() {
    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".about",
                start: 'top 70%',
                end: "top bottom",
                toggleActions: "play none none reverse",
            }
        })
        tl.fromTo('.about img',
            {
                x: -100, opacity: 0
            }, {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out"
        })
        tl.fromTo(".about div", {
            x: 500,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out"
        }, "-=0.5")
    })
    return (
        <section id="about" className="about md:flex place-items-center gap-20 p-12 overflow-hidden">
            <img src={AboutSpa} alt="About Spa" className="md:h-150" />
            <div>
                <h1 className="font-medium text-xl">OUR STORY</h1>
                <h2 className="text-6xl font-bold">Where Wellness <br />Meets Artistry</h2>
                <p className="my-10 text-gray-500">At Serenité, we believe beauty is a ritual - not a rush. Nestled in
                    the heart of the city, our sanctuary blends modern techniques
                    with ancient healing traditions to create an experience that
                    nourishes body, mind, and spirit.</p>
                <p className=" text-gray-500">Every treatment is thoughtfully curated using organic,
                    sustainably sourced products. Our skilled therapists bring years
                    of expertise and genuine care to every session, ensuring you
                    leave feeling renewed and radiant.</p>
            </div>
        </section>
    );
}

export default AboutSection;