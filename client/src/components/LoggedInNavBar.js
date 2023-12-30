import React from "react";
import { Link } from 'react-router-dom';
import "../style/LoggedInNavBar.css";
import Categories from "./Categories";
import Search from "./Search";
import { useCategoriesAndStartContext } from "../utils/eventHandlersProvider";
import { onClickLogoutButton } from "../utils/eventHandlersProvider";

const LoggedInNavBar = () => {

    const { showCategories, onStartCategoriesClick, showSearch, onSearchClick, onOtherClick } = useCategoriesAndStartContext();

    return (
        <div>
            <nav className = "nav-bar">
                <Link to = "/">
                    <img onClick = {onOtherClick} className = "nav-logo-img" alt = "logo" src = "navbar-logo-white.png"/>
                </Link>
                <ul className = "nav-list">
                    <a><li onClick = {onStartCategoriesClick} className = "nav-items">Categories</li></a>
                    <a><li onClick = {onSearchClick} className = "nav-items">Search</li></a>
                    <Link to="/about">
                        <li onClick = {onOtherClick} className="nav-items">About</li>
                    </Link>
                    <Link to="createarticle">
                        <li onClick = {onOtherClick} className = "nav-items">Publish Article</li>
                    </Link>
                    <a><li onClick = {onClickLogoutButton} className = "nav-items">Logout</li></a>
                </ul>
            </nav>
            {showCategories && <Categories />}
            {showSearch && <Search />}
        </div>
    );
};

export default LoggedInNavBar;