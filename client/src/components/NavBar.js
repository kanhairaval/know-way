import React from "react";
import RenderingCategories from "../utils/categoryEventHandler";
import Categories from "./Categories";
import { Link } from 'react-router-dom';
import "../style/NavBar.css";

const NavBar = () => {

    const { showCategories, onStartCategoriesClick } = RenderingCategories();

    return (
        <div>
            <nav className = "nav-bar">
            <Link to = "/">
                <img className = "nav-logo-img" alt = "logo" src = "nav-logo.png"/>
            </Link>
                <ul className = "nav-list">
                    <li onClick = {onStartCategoriesClick} className = "nav-items">Categories</li>
                    <li className = "nav-items">Search</li>
                    <li className = "nav-items">About</li>
                    <li className = "nav-items">Log In</li>
                    <li className = "nav-items">Register</li>
                </ul>
            </nav>
                {showCategories && <Categories />}
        </div>
    );
};

export default NavBar;