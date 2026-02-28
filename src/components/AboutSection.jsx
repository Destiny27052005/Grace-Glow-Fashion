import AboutSpa from "../assets/images/about-spa.jpg"

function AboutSection() {
    return (
        <section id="about" className="md:flex place-items-center gap-20 p-12">
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