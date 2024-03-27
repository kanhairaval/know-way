import React from "react";
import "../style/ArticlesList.css";
import { Link } from 'react-router-dom';
import { useGetIndividualCategoryContext } from "../utils/eventHandlersProvider";
import { useQuery } from "@apollo/client";
import { QUERY_CATEGORIES } from "../utils/queries";
import { useGetIndividualArticleContext } from "../utils/eventHandlersProvider";

const ArticlesList = () => {

    const { individualCategory } = useGetIndividualCategoryContext();
    const { onIndividualArticleClick } = useGetIndividualArticleContext();
    console.log(individualCategory);
    const { loading, error, data } = useQuery(QUERY_CATEGORIES, {
        variables: { categoryName: individualCategory },
    });

    console.log(data);

    const formatDate = (timestamp) => {
        const date = new Date(parseInt(timestamp));
        const options = { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric',
            timeZone: 'UTC'
        };
        return date.toLocaleDateString('en-US', options);
    };

    const createArticlesList = (data) => {
        if (!data || !data.articles) {
            return null;
        }
    
        const articlesList = data.articles.map((article, index) => (
            <div key={index} className="articles-list">
                <Link to="/articleview">
                <h2 onClick = {(e) => { onIndividualArticleClick(e);}} id="article-title">{article.title}</h2>
                </Link>
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