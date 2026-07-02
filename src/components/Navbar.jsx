import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return ( 
        <header className="navbar">
            <Link to="/" className="navbar-brand">
                🩺 MediBook
            </Link>
            <nav className="navbar-links">
                <Link to="/">Find a Doctor</Link>
                <link to="/appointments">My Appointments</link>
            </nav>
        </header>
    );
}

export default Navbar;