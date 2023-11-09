import React from "react";
import Categories from "./Categories";
import { Link } from "react-router-dom";
import RenderingCategories from "../utils/categoryEventHandler";
import "../style/Home.css";

const Home = () => {

    const { showCategories, onStartCategoriesClick } = RenderingCategories();

    return (
        <section className = "home-section">
            <img className = "bg-image" alt = "foggy-background" src = "home-page-bg-img.svg"/>
            <img className = "home-logo" alt = "big-logo" src = "home-logo.png"/>
            <button onClick = {onStartCategoriesClick} className = "start-reading">Start Reading</button>
            {showCategories && <Categories />}
        </section>
    );
};

export default Home;