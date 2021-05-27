import { Link } from "react-router-dom";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
    AiOutlineUser,
    AiOutlineProject,
    AiOutlineMail,
} from 'react-icons/ai';
import "./style.css";

const NavBar = () => {
    return (
        <div>
            <Navbar className="nav" bg="dark" variant="dark" expand="lg">
                <Navbar.Brand className="navItems" href="https://github.com/Robbie-Bridgwater/react-portfolio">Robert Bridgwater</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" variant="dark">
                    <Nav.Item>
                        <Link
                            to="/"
                            className={window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
                        >
                            <AiOutlineUser style={{ marginBottom: '2px' }} />
                            About Me
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link
                            to="/portfolio"
                            className={window.location.pathname === "/" || window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                        >
                            <AiOutlineProject style={{ marginBottom: '2px' }} />
                            Portfolio
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link
                            to="/contactMe"
                            className={window.location.pathname === "/" || window.location.pathname === "/contactMe" ? "nav-link active" : "nav-link"}
                        >
                            <AiOutlineMail style={{ marginBottom: '2px' }} />
                            Contact Me
                        </Link>          
                    </Nav.Item>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;