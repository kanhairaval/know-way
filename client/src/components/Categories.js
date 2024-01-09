import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import ArticlesList from "./ArticlesList";
import "../style/Categories.css";
import { useCategoriesAndStartContext, GetIndividualCategory } from "../utils/eventHandlersProvider";

const Categories = () => {

    const { onOtherClick } = useCategoriesAndStartContext();
    const { showIndividualCategory, onIndividualCategoryClick } = GetIndividualCategory();

    console.log(showIndividualCategory);

    return (
        <section className = "categories">
            <div className = "categories-container">
                <ul className = "categories-list">
                            <li onClick = {(event) => { onOtherClick(); onIndividualCategoryClick(event); }} className = "categories-items">Technology</li>
                            <li onClick = {(event) => { onOtherClick(); }} className = "categories-items">Science</li>
                            <li onClick = {(event) => { onOtherClick(); }} className = "categories-items">Sports</li>
                            <li onClick = {(event) => { onOtherClick(); }} className = "categories-items">Politics</li>
                            <li onClick = {(event) => { onOtherClick(); }} className = "categories-items">Business & Finance</li>
                            <li onClick = {(event) => { onOtherClick(); }} className = "categories-items">Travel</li>
                        <Link to = "/articleslist">
                            <li onClick = {(event) => onIndividualCategoryClick(event)} className = "categories-items">Entertainment</li>
                        </Link>
                            <li onClick = {(event) => { onOtherClick(); }} className = "categories-items">Food & Drink</li>
                            <li onClick = {(event) => { onOtherClick(); }} className = "categories-items">Health</li>
                            <li onClick = {(event) => { onOtherClick(); }} className = "categories-items">Fashion</li>
                </ul>
            </div>
        </section>
    );
};

export default Categories;