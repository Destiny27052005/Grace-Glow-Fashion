

function HeroSection() {
    return ( 
    <section id="home" className="heroSection h-screen w-screen object-center text-white grid place-content-center text-center">
        <h1 className="text-6xl font-extrabold mb-6">Beauty in <br />Simplicity</h1>
        <p className="mb-6">A sanctuary of calm where modern beauty meets timeless elegence</p>
        <button className="font-medium border-white place-self-center border w-35 px-5 py-3 transition-all hover:bg-white hover:text-black cursor-pointer"><a href="#contact">BOOK NOW</a></button>
    </section>
     );
}

export default HeroSection;