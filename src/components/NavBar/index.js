import { Link } from "react-router-dom";
import "./style.css";
import React, { useState } from 'react';

function Navbar() {
    
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (

        <nav className="navbar navbar-expand-md theme-color navbar-dark">
            <a className="navbar-brand" href="https://github.com/Robbie-Bridgwater/react-portfolio">Robert Bridgwater</a>

            <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
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
                            to="/portfolio"
                            className={window.location.pathname === "/" || window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/contactMe"
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