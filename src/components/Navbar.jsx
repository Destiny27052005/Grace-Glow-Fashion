import NavLink from "./NavLink";

function Navbar() {
    return (
        <nav id="nav" className="flex justify-between place-items-center p-4 fixed w-full">
            <h1 className="font-bold text-3xl">Serenite</h1>
            <NavLink />
        </nav>
    );
}

export default Navbar;