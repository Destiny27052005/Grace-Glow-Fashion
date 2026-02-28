import Gallery1 from "../assets/images/gallery-1.jpg"
import Gallery2 from "../assets/images/gallery-2.jpg"
import Gallery3 from "../assets/images/gallery-3.jpg"
import Gallery4 from "../assets/images/gallery-4.jpg"
import Gallery5 from "../assets/images/gallery-5.jpg"
import Gallery6 from "../assets/images/gallery-6.jpg"

function GallerySection() {
    return (
        <section id="gallery" className="p-12">
            <h1 className="text-gray-400 mb-4 text-center">PORTFOLIO</h1>
            <h2 className="text-4xl font-bold mb-8 text-center">Our Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <img src={Gallery1} alt="Gallery 1" className="transform hover:scale-105" />
                <img src={Gallery2} alt="Gallery 2" className="transform hover:scale-105" />
                <img src={Gallery3} alt="Gallery 3" className="transform hover:scale-105" />
                <img src={Gallery4} alt="Gallery 4" className="transform hover:scale-105" />
                <img src={Gallery5} alt="Gallery 5" className="transform hover:scale-105" />
                <img src={Gallery6} alt="Gallery 6" className="transform hover:scale-105" />
            </div>
        </section>
    );
}

export default GallerySection;