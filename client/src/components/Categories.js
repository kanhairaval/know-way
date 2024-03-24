import React from "react";
import { Link } from 'react-router-dom';
import "../style/Categories.css";
import { useCategoriesAndStartContext } from "../utils/eventHandlersProvider";
import { useGetIndividualCategoryContext } from "../utils/eventHandlersProvider";

const Categories = () => {

    const arrayOfCategories = ["Technology", "Science", "Sports", "Politics", "Business & Finance", "Travel", "Entertainment", "Food & Drink", "Health", "Fashion"];
    const { onOtherClick } = useCategoriesAndStartContext();
    const { onIndividualCategoryClick } = useGetIndividualCategoryContext();

    return (
        <section className = "categories">
            <div className = "categories-container">
                <ul className = "categories-list">
                    <Link to="/articleslist">
                        <li onClick = {(e) => { onOtherClick(); onIndividualCategoryClick(e);}} className = "categories-items">Technology</li>
                    </Link>
                    <Link to="/articleslist">
                        <li onClick = {(e) => { onOtherClick(); onIndividualCategoryClick(e);}} className = "categories-items">Science</li>
                    </Link>
                    <Link to="/articleslist">
                        <li onClick = {(e) => { onOtherClick(); onIndividualCategoryClick(e);}} className = "categories-items">Sports</li>
                    </Link>
                    <Link to="/articleslist">
                        <li onClick = {(e) => { onOtherClick(); onIndividualCategoryClick(e);}} className = "categories-items">Politics</li>
                    </Link>
                    <Link to="/articleslist">
                        <li onClick = {(e) => { onOtherClick(); onIndividualCategoryClick(e);}} className = "categories-items">Business & Finance</li>
                    </Link>
                    <Link to="/articleslist">
                        <li onClick = {(e) => { onOtherClick(); onIndividualCategoryClick(e);}} className = "categories-items">Travel</li>
                    </Link>
                    <Link to="/articleslist">
                        <li onClick = {(e) => { onOtherClick(); onIndividualCategoryClick(e);}} className = "categories-items">Entertainment</li>
                    </Link>
                    <Link to="/articleslist">
                        <li onClick = {(e) => { onOtherClick(); onIndividualCategoryClick(e);}} className = "categories-items">Food & Drink</li>
                    </Link>
                    <Link to="/articleslist">
                        <li onClick = {(e) => { onOtherClick(); onIndividualCategoryClick(e);}} className = "categories-items">Health</li>
                    </Link>
                    <Link to="/articleslist">
                        <li onClick = {(e) => { onOtherClick(); onIndividualCategoryClick(e);}} className = "categories-items">Fashion</li>
                    </Link>
                </ul>
            </div>
        </section>
    );
};

export default Categories;