import React from "react";
import { Link } from 'react-router-dom';
import "../style/Categories.css";

const Categories = () => {
    return (
        <section className = "categories">
            <ul className = "categories-list">
                <li className = "categories-items">Technology</li>
                <li className = "categories-items">Science</li>
                <li className = "categories-items">Sports</li>
                <li className = "categories-items">Politics</li>
                <li className = "categories-items">Business & Finance</li>
                <li className = "categories-items">Travel</li>
                <li className = "categories-items">Entertainment</li>
                <li className = "categories-items">Food & Drink</li>
                <li className = "categories-items">Health</li>
                <li className = "categories-items">Fashion</li>
            </ul>
        </section>
    );
};

export default Categories;