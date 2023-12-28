import React from "react";
import { Link } from 'react-router-dom';
import "../style/LoggedInNavBar.css";
import AuthService from "../utils/auth";

const LoggedInNavBar = () => {

    const isLoggedIn = AuthService.loggedIn();

    return (
        <div>
            {isLoggedIn && (
                <nav className = "nav-bar">
                    <img className = "nav-logo-img" alt = "logo" src = "nav-logo.png"/>
                    <ul className = "nav-list">
                        <li className = "nav-items">Categories</li>
                        <li className = "nav-items">Search</li>
                        <li className = "nav-items">About</li>
                        <li className = "nav-items">Publish Article</li>
                        <li className = "nav-items">Logout</li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default LoggedInNavBar;