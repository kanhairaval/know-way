import React from "react";
import "../style/ArticlesList.css";
import { useGetIndividualCategoryContext } from "../utils/eventHandlersProvider";
import { useQuery } from "@apollo/client";
import { QUERY_CATEGORIES } from "../utils/queries";

const ArticlesList = () => {

    const { individualCategory } = useGetIndividualCategoryContext();
    console.log(individualCategory);
    const { loading, error, data } = useQuery(QUERY_CATEGORIES, {
        variables: { categoryName: individualCategory },
    });

    console.log(data);

    if (!data) {
        console.log("No data to be retrieved.");
    } else {
        console.log(data.articles);
        console.log(data.articles[0].title);
        console.log(data.articles[0].categoryName);
        console.log(data.articles.author);
        console.log(data.articles[0].publicationDate);
    }

    const arrayofArticles = [data];
    const createArticlesList = (arrayofArticles) => {
        const articlesList = arrayofArticles.map((data, index) => (
            <div key={index} className="articles-list">
                <h2 id="article-title">{data.article.title}</h2>
                <div className="details">
                    <h4>{data.article.categoryName}</h4>
                    <h4>{data.article.author}</h4>
                    <h4>{data.article.publicationDate}</h4>
                </div>
                <p id="article-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis....</p>
            </div>
        ));

        return articlesList;
    };

    return (
        <section className = "articles-view">

            <div className = "category-title">
                <h1 id = "category-title">{individualCategory}</h1>
            </div>

            {createArticlesList(arrayofArticles)}

            {/* <div className="articles-list">
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
            </div> */}
        </section>
    );
};

export default ArticlesList;