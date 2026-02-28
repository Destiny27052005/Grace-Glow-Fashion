import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function ServiceSection() {
    useGSAP(() => {
        gsap.fromTo('.services .heading', {
            y: 80,
            opacity: 0
        }, {
            scrollTrigger: {
                trigger: '.services',
                start: 'top 80%',
                end: 'top 20%',
                scrub: true,
                toggleActions: "play none none reverse",
                markers: true,
            },
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out"
        });
        gsap.fromTo('.services .service', {
            y: 80,
            opacity: 0
        }, {
            scrollTrigger: {
                trigger: '.services',
                start: 'top 80%',
                end: 'top 20%',
                scrub: true,
                toggleActions: "play none none reverse",
            },
            y: 0,
            opacity: 1,
            duration: 2.5,
            delay:1.7,
            stagger: 2.5,
        })

    })

    return (
        <section className="services px-12 py-15 bg-[#f2f0ed]" id="services">
            <div className="heading">
                <h1 className="text-center text-green-500">TREATMENTS</h1>
                <h2 className="text-4xl font-bold text-center">Our Services</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 my-6" >
                <div className="service bg-white p-8 transform transition-transform hover:scale-105">
                    <div className="flex place-items-center justify-between">
                        <h3 className="font-semibold text-xl">Signature Facial</h3>
                        <span>$120</span>
                    </div>
                    <p className="text-gray-500 mt-5 mb-4 font-medium">Deep cleaning & hydration therapy</p>
                    <p className="text-gray-400">60 MIN</p>
                </div>
                <div className="service bg-white p-8 transform transition-transform hover:scale-105">
                    <div className="flex place-items-center justify-between">
                        <h3 className="font-semibold text-xl">Hot Stone Massage</h3>
                        <span>$150</span>
                    </div>
                    <p className="text-gray-500 mt-5 mb-4 font-medium">Volcanic stone deep tissue release</p>
                    <p className="text-gray-400">90 MIN</p>
                </div>
                <div className="service bg-white p-8 transform transition-transform hover:scale-105">
                    <div className="flex place-items-center justify-between">
                        <h3 className="font-semibold text-xl">Aromatherapy</h3>
                        <span>$130</span>
                    </div>
                    <p className="text-gray-500 mt-5 mb-4 font-medium">Essential oil relaxation journey</p>
                    <p className="text-gray-400">75 MIN</p>
                </div>
                <div className="service bg-white p-8 transform transition-transform hover:scale-105">
                    <div className="flex place-items-center justify-between">
                        <h3 className="font-semibold text-xl">Body Scrub & Wrap</h3>
                        <span>$140</span>
                    </div>
                    <p className="text-gray-500 mt-5 mb-4 font-medium">Exfoliation & nourishing cocoon</p>
                    <p className="text-gray-400">80 MIN</p>
                </div>
                <div className="service bg-white p-8 transform transition-transform hover:scale-105">
                    <div className="flex place-items-center justify-between">
                        <h3 className="font-semibold text-xl">Manicure & Pedicure</h3>
                        <span>$85</span>
                    </div>
                    <p className="text-gray-500 mt-5 mb-4 font-medium">Luxury nail care with organic polish</p>
                    <p className="text-gray-400">60 MIN</p>
                </div>
                <div className="service bg-white p-8 transform transition-transform hover:scale-105">
                    <div className="flex place-items-center justify-between">
                        <h3 className="font-semibold text-xl">Hair Styling</h3>
                        <span>$95+</span>
                    </div>
                    <p className="text-gray-500 mt-5 mb-4 font-medium">Cut, color & styling consultation</p>
                    <p className="text-gray-400">60-120 MIN</p>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;