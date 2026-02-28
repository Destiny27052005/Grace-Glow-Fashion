import { FaInstagram, FaFacebook, FaCopyright } from "react-icons/fa6";

function Footer() {
    return (
        <section className="px-12 py-16 md:flex justify-between">
            <h1 className="sm:text-center text-3xl font-bold sm:mb-4">Serenite</h1>
            <div className="flex gap-3 sm:mb-4 sm:place-self-center">
                <a href="http://" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-2xl" /></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-2xl" /></a>
            </div>
            <p className="text-gray-500 flex gap-2 place-items-center place-self-center"><FaCopyright /> 2026 Serenite. All rights reserved.</p>
        </section>
    );
}

export default Footer;