import React from 'react';
import "../style/CreateArticle.css";
import { CreateArticleHandler } from "../utils/eventHandlersProvider";

function CreateArticle() {

    const { opinionButton, onOpinionButtonClick, factButton, onFactButtonClick, categoriesButton, onCategoriesButtonClick } = CreateArticleHandler();
    const arrayOfCategories = ["Technology", "Science", "Sports", "Politics", "Business & Finance", "Travel", "Entertainment", "Food & Drink", "Health", "Fashion"];

    const createButtons = (arrayOfCategories) => {
        const buttons = arrayOfCategories.map((category, index) => (
            <button key={index} onClick={() => onCategoriesButtonClick(index)} className = {index === categoriesButton ? "active" : "q2-a2"}>{category}</button>
        ));
    
        return buttons;
    };

    return (
        <section className = "create-article">

            <p className = "q1">What type of article would you like to publish?</p>

            <div className = "q1-a1">
                <button onClick = {onFactButtonClick} id = "fact" className = {factButton ? "active" : ""}>Factual</button> <button onClick = {onOpinionButtonClick} id = "opinion" className = {opinionButton ? "active" : ""}>Opinionated</button>
            </div>

            <p className = "q2">Please, select a category for your article:</p>

            <div className = "q2-a2">
                {createButtons(arrayOfCategories)}
            </div>

            <p className = "q3">Please, provide a title for your article:</p>

            <div className = "q3-a3">
                <input id = "title-input" type = "text" name = "article-title"/>
            </div>

            <p className = "q4">Please, share your article content here:</p>

            <div className = "q4-a4">
                <textarea id = "article-text" type = "text" name = "article-content"/>
            </div>

            <p className = "q5">Would you like to upload an image to accompany your article?</p>

            {/* <div className = "q5-a5"> */}
                
                <label htmlFor = "upload-image"><input id = "upload-image" type = "file" name = "article-image" accept = "image/*"/><span>Image Upload</span></label>
            {/* </div> */}

            <button className = "publish-btn">Publish</button>
        </section>
    );
};

export default CreateArticle;