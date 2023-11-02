import React from "react";
import { Link } from 'react-router-dom';
import "../style/NavBar.css";

const NavBar = () => {
    return (
        <nav className = "nav-bar">
            <img className = "nav-logo-img" alt = "logo" src = "nav-logo.png"/>
            <ul className = "nav-list">
                <li className = "nav-items">Categories</li>
                <li className = "nav-items">Search</li>
                <li className = "nav-items">About</li>
                <li className = "nav-items">Log In</li>
                <li className = "nav-items">Register</li>
            </ul>
        </nav>
    );
};

export default NavBar;