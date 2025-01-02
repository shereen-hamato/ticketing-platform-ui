import React from 'react';
import '../../styles/Header.css';
import { FaHome, FaCalendarAlt, FaSignInAlt } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="header">
            <div className="logodd">
                <h1>Tickify</h1>
            </div>
            <nav className="nav">
                <ul>
                    <li>
                        <a href="/">
                            <FaHome className="nav-icon" /> Home
                        </a>
                    </li>
                    <li>
                        <a href="/events">
                            <FaCalendarAlt className="nav-icon" /> Events
                        </a>
                    </li>
                    <li>
                        <a href="/login">
                            <FaSignInAlt className="nav-icon" /> Login
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
