import React from "react";
import Categories from "./Categories";
import { useCategoriesAndStartContext } from "../utils/eventHandlersProvider";
import "../style/Home.css";

const Home = () => {

    const { showCategories, onStartCategoriesClick } = useCategoriesAndStartContext();

    return (
        <section className = "home-section">
            <img className = "bg-image" alt = "foggy-background" src = "home-page-bg-img.svg"/>
            <img className = "home-logo" alt = "big-logo" src = "homepage-logo.png"/>
            <button onClick = {onStartCategoriesClick} className = "start-reading">Start Reading →</button>
            {showCategories && <Categories />}
        </section>
    );
};

export default Home;