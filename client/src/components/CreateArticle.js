import React from 'react';
import "../style/CreateArticle.css";
import { CreateArticleHandler } from "../utils/eventHandlersProvider";

function CreateArticle() {

    const arrayOfCategories = ["Technology", "Science", "Sports", "Politics", "Business & Finance", "Travel", "Entertainment", "Food & Drink", "Health", "Fashion"];
    const { opinionButton, onOpinionButtonClick, factButton, onFactButtonClick, categoriesButton, onCategoriesButtonClick, articleTitleText, handleArticleTitleInput, articleBodyText, handleArticleBody, articleImage, handleArticleImage, onClickPublishButton } = CreateArticleHandler();

    const createButtons = (arrayOfCategories) => {
        const buttons = arrayOfCategories.map((category, index) => (
            <button key = {index} onClick={onCategoriesButtonClick} className = {category === categoriesButton ? "active" : "q2-a2"}>{category}</button>
        ));
    
        return buttons;
    };

    return (
        <section className = "create-article">

            <h4>Factual publishing coming soon, please stay tuned.</h4>

            <p className = "q1">What type of article would you like to publish?</p>

            <div className = "q1-a1">
                <button id = "fact" className = {factButton ? "active" : ""}>Factual</button> <button onClick = {onOpinionButtonClick} id = "opinion" className = {opinionButton ? "active" : ""}>Opinionated</button>
            </div>

            <p className = "q2">Please, select a category for your article:</p>

            <div className = "q2-a2">
                {createButtons(arrayOfCategories)}
            </div>

            <p className = "q3">Please, provide a title for your article:</p>

            <div className = "q3-a3">
                <input id = "titleInput" type = "text" name = "article-title" value = {articleTitleText?.titleInput} onChange = {handleArticleTitleInput}/>
            </div>

            <p className = "q4">Please, share your article content here:</p>

            <div className = "q4-a4">
                <textarea value = {articleBodyText?.articleText} onChange = {handleArticleBody} id = "articleText" type = "text" name = "article-content"/>
            </div>

            <p className = "q5">Please, upload a image for your article.</p>

            {/* <div className = "q5-a5"> */}
                
                <label htmlFor = "uploadImage"><input onChange = {handleArticleImage} id = "uploadImage" type = "file" name = "article-image" accept = "image/*"/><span>Upload Article Image</span></label>
            {/* </div> */}

            <button onClick = {onClickPublishButton} className = "publish-btn">Publish</button>
        </section>
    );
};

export default CreateArticle;