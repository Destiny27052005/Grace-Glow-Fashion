import { useState } from "react";
import { FaBars } from "react-icons/fa";

function NavLink() {
    const [isMobile, setIsMobile] = useState(false);

    return (
        <div className="flex">
            <ul className="hidden md:flex space-x-4">
                <li className="text-gray-500 transition hover:text-black"><a href="#home">HOME</a></li>
                <li className="text-gray-500 transition hover:text-black"><a href="#about">ABOUT</a></li>
                <li className="text-gray-500 transition hover:text-black"><a href="#services">SERVICES</a></li>
                <li className="text-gray-500 transition hover:text-black"><a href="#gallery">GALLERY</a></li>
                <li className="text-gray-500 transition hover:text-black"><a href="#contact">CONTACT</a></li>
            </ul>
            <div className="md:hidden">
                <span onClick={() => setIsMobile(!isMobile)}>
                    <FaBars />
                </span>
                <ul className={`hidden ${isMobile ? "open" : ""}`}>
                    <li className="text-gray-500 transition hover:text-black"><a href="#home">HOME</a></li>
                    <li className="text-gray-500 transition hover:text-black"><a href="#about">ABOUT</a></li>
                    <li className="text-gray-500 transition hover:text-black"><a href="#services">SERVICES</a></li>
                    <li className="text-gray-500 transition hover:text-black"><a href="#gallery">GALLERY</a></li>
                    <li className="text-gray-500 transition hover:text-black"><a href="#contact">CONTACT</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavLink;