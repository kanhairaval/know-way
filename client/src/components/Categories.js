import React from "react";
import { Link } from 'react-router-dom';
import "../style/Categories.css";
import { useCategoriesAndStartContext } from "../utils/eventHandlersProvider";
import { useGetIndividualCategoryContext } from "../utils/eventHandlersProvider";

const Categories = () => {

    const { onOtherClick } = useCategoriesAndStartContext();
    const { onIndividualCategoryClick } = useGetIndividualCategoryContext();

    return (
        <section className = "categories">
            <div className = "categories-container">
                <ul className = "categories-list">
                <Link to="/articleslist">
                            <li onClick = {(e) => { onOtherClick(); onIndividualCategoryClick(e);}} className = "categories-items">Technology</li>
                            </Link>
                            <li onClick = {onOtherClick} className = "categories-items">Science</li>
                            <li onClick = {onOtherClick} className = "categories-items">Sports</li>
                            <li onClick = {onOtherClick} className = "categories-items">Politics</li>
                            <li onClick = {onOtherClick} className = "categories-items">Business & Finance</li>
                            <li onClick = {onOtherClick} className = "categories-items">Travel</li>
                            <Link to="/articleslist">
                            <li onClick = {(e) => { onOtherClick(); onIndividualCategoryClick(e);}} className = "categories-items">Entertainment</li>
                            </Link>
                            <li onClick = {onOtherClick} className = "categories-items">Food & Drink</li>
                            <li onClick = {onOtherClick} className = "categories-items">Health</li>
                            <li onClick = {onOtherClick} className = "categories-items">Fashion</li>
                </ul>
            </div>
        </section>
    );
};

export default Categories;