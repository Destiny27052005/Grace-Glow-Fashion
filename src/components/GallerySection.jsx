import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Gallery1 from "../assets/images/gallery-1.jpg";
import Gallery2 from "../assets/images/gallery-2.jpg";
import Gallery3 from "../assets/images/gallery-3.jpg";
import Gallery4 from "../assets/images/gallery-4.jpg";
import Gallery5 from "../assets/images/gallery-5.jpg";
import Gallery6 from "../assets/images/gallery-6.jpg";

function GallerySection() {
    const { contextSafe } = useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.gallery',
                start: 'top 80%',
                end: 'top 30%',
                scrub: 1,
                toggleActions: "play none none reverse",
            }
        })
        tl.fromTo('.gallery .heading', {
            y: 50,
            opacity: 0
        }, {

            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out"
        })
            .fromTo('.gallery .image', {
                y: 50,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: "power2.out"
            }, "+=0.2")
    })

    const OnEnter = contextSafe(({ currentTarget }) => {
        gsap.to(currentTarget, {
            scale: 1.05,
            duration: 0.4,
            ease: "power2.out"
        })
    })

    const OnLeave = contextSafe(({ currentTarget }) => {
        gsap.to(currentTarget, {
            scale: 1,
            duration: 0.4,
            ease: "power2.inOut"
        })
    })


    return (
        <section id="gallery" className="gallery px-12 py-18">
            <div className="heading">
                <h1 className="text-gray-400 mb-4 text-center">PORTFOLIO</h1>
                <h2 className="text-4xl font-bold mb-8 text-center">Our Gallery</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <img src={Gallery1} alt="Gallery 1" className="image" onMouseEnter={OnEnter} onMouseLeave={OnLeave} />
                <img src={Gallery2} alt="Gallery 2" className="image" onMouseEnter={OnEnter} onMouseLeave={OnLeave} />
                <img src={Gallery3} alt="Gallery 3" className="image" onMouseEnter={OnEnter} onMouseLeave={OnLeave} />
                <img src={Gallery4} alt="Gallery 4" className="image" onMouseEnter={OnEnter} onMouseLeave={OnLeave} />
                <img src={Gallery5} alt="Gallery 5" className="image" onMouseEnter={OnEnter} onMouseLeave={OnLeave} />
                <img src={Gallery6} alt="Gallery 6" className="image" onMouseEnter={OnEnter} onMouseLeave={OnLeave} />
            </div>
        </section>
    );
}

export default GallerySection;