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

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const seconds = date.getTime() / 1000;
        const newDate = new Date(0);
        newDate.setUTCSeconds(seconds);
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            timeZone: 'UTC'
        };
        return newDate.toLocaleDateString('en-US', options);
    };

    const createArticlesList = (data) => {
        if (!data || !data.articles) {
            return null;
        }
    
        const articlesList = data.articles.map((article, index) => (
            <div key={index} className="articles-list">
                <h2 id="article-title">{article.title}</h2>
                <div className="details">
                    <h4>{article.categoryName}</h4>
                    <h4>{article.author}</h4>
                    <h4>{formatDate(article.publicationDate)}</h4>
                </div>
                <p id="article-info">{article.content.substring(0, 235)}....</p>
            </div>
        ));
    
        return articlesList;
    };    

    return (
        <section className = "articles-view">

            <div className = "category-title">
                <h1 id = "category-title">{individualCategory}</h1>
            </div>

            {createArticlesList(data)}

        </section>
    );
};

export default ArticlesList;