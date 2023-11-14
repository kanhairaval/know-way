import React from "react";
import { useCategoriesAndStartContext, useRegisterModalContext, useLoginModalContext } from "../utils/eventHandlersProvider";
import Categories from "./Categories";
import Search from "./Search";
import Login from "./Login";
import Register from "./Register";
import { Link } from 'react-router-dom';
import "../style/NavBar.css";

const NavBar = () => {

    const { showCategories, onStartCategoriesClick, showSearch, onSearchClick, onOtherClick } = useCategoriesAndStartContext();

    const { showRegisterModal, onClickOpenRegisterModal } = useRegisterModalContext();

    const { showLoginModal, onClickOpenLoginModal } = useLoginModalContext();

    return (
        <div>
            <nav className = "nav-bar">
            <Link to = "/">
                <img onClick = {onOtherClick} className = "nav-logo-img" alt = "logo" src = "navbar-logo.png"/>
            </Link>
                <ul className = "nav-list">
                    <a><li onClick = {onStartCategoriesClick} className = "nav-items">Categories</li></a>
                    <a><li onClick = {onSearchClick} className = "nav-items">Search</li></a>
                    <Link to="/about">
                        <li onClick = {onOtherClick} className="nav-items">About</li>
                    </Link>
                    <a><li onClick = {onClickOpenLoginModal} className = "nav-items">Log In</li></a>
                    <a><li onClick = {onClickOpenRegisterModal} className = "nav-items">Register</li></a>
                </ul>
            </nav>
                {showCategories && <Categories />}
                {showSearch && <Search />}
                {showLoginModal && <Login/>}
                {showRegisterModal && <Register />}
        </div>
    );
};

export default NavBar;