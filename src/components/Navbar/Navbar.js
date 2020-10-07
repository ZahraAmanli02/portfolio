import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
            <nav className="navbar">
                <NavLink exact to="/" className="navbar__title navbar__item">Portfolio</NavLink>
                <NavLink exact to="/" className="navbar__item">Home</NavLink>
                <NavLink exact to="/about" className="navbar__item">About</NavLink>
                <NavLink exact to="/resume" className="navbar__item">Resume</NavLink>
                <NavLink exact to="/projects" className="navbar__item">Projects</NavLink>
                <NavLink exact to="/contact" className="navbar__item">Contact</NavLink>
            </nav>
    );
}

export default Navbar;
