import NavLink from "./NavLink";

function Navbar() {
    return (
        <nav className="flex justify-between place-items-center p-4">
            <h1 className="font-bold text-3xl">Serenite</h1>
            <NavLink />
        </nav>
    );
}

export default Navbar;