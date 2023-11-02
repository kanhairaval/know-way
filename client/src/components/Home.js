import React from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";

const Home = () => {
    return (
        <section className = "home-section">
            <img className = "bg-image" alt = "foggy-background" src = "home-page-bg-img.svg"/>
            <img className = "home-logo" alt = "big-logo" src = "home-logo.png"/>
            <button className = "start-reading">Start Reading</button>
        </section>
    );
};

export default Home;