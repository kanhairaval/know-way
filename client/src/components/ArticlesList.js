import React from "react";
import "../style/ArticlesList.css";

const ArticlesList = () => {
    return (
        <section className = "articles-view">

            <div className = "category-title">
                <h1 id = "category-title">Technology</h1>
            </div>

            <div className="articles-list">
                <h2 id = "article-title">Will AI lead to terminator?</h2>
                <div className = "details">
                <h4>Category</h4> <h4>Username</h4> <h4>Date</h4>
                </div>
                <p id = "article-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis....</p>
            </div>

            <div className="articles-list">
                <h2>Article Title</h2>
                <div className = "details">
                <h4>Category</h4> <h4>Username</h4> <h4>Date</h4>
                </div>
                <p id = "article-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis....</p>
            </div>

            <div className="articles-list">
                <h2>Article Title</h2>
                <div className = "details">
                <h4>Category</h4> <h4>Username</h4> <h4>Date</h4>
                </div>
                <p id = "article-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis....</p>
            </div>

            <div className="articles-list">
                <h2>Article Title</h2>
                <div className = "details">
                <h4>Category</h4> <h4>Username</h4> <h4>Date</h4>
                </div>
                <p id = "article-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis....</p>
            </div>

            <div className="articles-list">
                <h2>Article Title</h2>
                <div className = "details">
                <h4>Category</h4> <h4>Username</h4> <h4>Date</h4>
                </div>
                <p id = "article-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis....</p>
            </div>
        </section>
    );
};

export default ArticlesList;