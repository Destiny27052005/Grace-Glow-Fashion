import NavLink from "./NavLink";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


function Navbar() {
    useGSAP(() => {
        gsap.to('#nav', {
            backgroundColor: 'white',
            borderBottom: "1px solid #d1d5dc ",
            scrollTrigger: {
                trigger: 'body',
                start: 'top -10%',
                end: 'top -20%',
                scrub: true,
            }
        });
    });

    return (
        <nav id="nav" className="nav flex justify-between place-items-center p-4 fixed w-full z-10 ">
            <h1 className="font-bold text-3xl">Serenite</h1>
            <NavLink />
        </nav>
    );
}

export default Navbar;