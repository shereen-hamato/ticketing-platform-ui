import React, { useState } from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src={logo} alt="Tickify Logo" className="logo"/>
            </div>
            <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/events">Events</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <div className="menu-toggle" onClick={handleToggle}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
};

export default Navbar;
