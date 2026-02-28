import NavLink from "./NavLink";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


function Navbar() {
    useGSAP(() => {
        gsap.to('#nav', {
            backgroundColor: 'white',
            scrollTrigger: {
                trigger: 'body',
                start: 'top -10%',
                end: 'top -20%',
                scrub: true,
            }
        });
    });

    return (
        <nav id="nav" className="nav flex justify-between place-items-center p-4 fixed w-full">
            <h1 className="font-bold text-3xl">Serenite</h1>
            <NavLink />
        </nav>
    );
}

export default Navbar;