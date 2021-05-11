import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (

        <nav className="navbar navbar-expand-md theme-color navbar-dark">
            <Link className="navbar-brand" to="https://github.com/Robbie-Bridgwater/Portfolio">Robert Bridgwater</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
                        >
                            About Me
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/discover"
                            className={window.location.pathname === "/" || window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/search"
                            className={window.location.pathname === "/" || window.location.pathname === "/contactMe" ? "nav-link active" : "nav-link"}
                        >
                            Contact Me
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

    );
}
export default Navbar;