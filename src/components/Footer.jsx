import { FaInstagram, FaFacebook, FaCopyright } from "react-icons/fa6";

function Footer() {
    return (
        <section className="px-12 py-16 md:flex justify-between">
            <h1 className="font-bold sm:mb-4">Serenite</h1>
            <div className="flex gap-3 sm:mb-4">
                <FaInstagram />
                <FaFacebook />
            </div>
            <p className="text-gray-500"><FaCopyright /> 2026 Serenite. All rights reserved.</p>
        </section>
    );
}

export default Footer;