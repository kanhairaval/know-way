import React from "react";
import { useEventHandler } from "../utils/eventHandlersProvider";
import Categories from "./Categories";
import Search from "./Search";
import { Link } from 'react-router-dom';
import "../style/NavBar.css";

const NavBar = () => {

    const { showCategories, onStartCategoriesClick, showSearch, onSearchClick, onOtherClick } = useEventHandler();

    return (
        <div>
            <nav className = "nav-bar">
            <Link to = "/">
                <img onClick = {onOtherClick} className = "nav-logo-img" alt = "logo" src = "nav-logo.png"/>
            </Link>
                <ul className = "nav-list">
                    <a><li onClick = {onStartCategoriesClick} className = "nav-items">Categories</li></a>
                    <a><li onClick = {onSearchClick} className = "nav-items">Search</li></a>
                    <Link to="/about">
                        <li onClick = {onOtherClick} className="nav-items">About</li>
                    </Link>
                    <a><li onClick = {onOtherClick} className = "nav-items">Log In</li></a>
                    <a><li className = "nav-items">Register</li></a>
                </ul>
            </nav>
                {showCategories && <Categories />}
                {showSearch && <Search />}
        </div>
    );
};

export default NavBar;