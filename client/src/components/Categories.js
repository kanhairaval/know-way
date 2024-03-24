import React from "react";
import { Link } from 'react-router-dom';
import "../style/Categories.css";
import { useCategoriesAndStartContext } from "../utils/eventHandlersProvider";
import { useGetIndividualCategoryContext } from "../utils/eventHandlersProvider";

const Categories = () => {

    const arrayOfCategories = ["Technology", "Science", "Sports", "Politics", "Business & Finance", "Travel", "Entertainment", "Food & Drink", "Health", "Fashion"];
    const { onOtherClick } = useCategoriesAndStartContext();
    const { onIndividualCategoryClick } = useGetIndividualCategoryContext();

    const createCategoryList = (arrayOfCategories) => {
        const categoryList = arrayOfCategories.map((category, index) => (
            <li key = {index} onClick = {(e) => { onOtherClick(); onIndividualCategoryClick(e);}} className = "categories-items">
                <Link to="/articleslist">{category}</Link>
            </li>
        ));
    
        return categoryList;
    };

    return (
        <section className = "categories">
            <div className = "categories-container">
                <ul className = "categories-list">
                    {createCategoryList(arrayOfCategories)}
                </ul>
            </div>
        </section>
    );
};

export default Categories;