import React from "react";
import "../style/ArticleView.css";
import { useGetIndividualArticleContext } from "../utils/eventHandlersProvider";
import { useQuery } from "@apollo/client";
import { QUERY_ARTICLE } from "../utils/queries";

const ArticleView = () => {

    const { individualArticle } = useGetIndividualArticleContext();
    console.log(individualArticle);
    const { loading, error, data } = useQuery(QUERY_ARTICLE, {
        variables: { title: individualArticle },
    });

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
    

    const createArticleView = (data) => {
        if (!data || !data.article) {
            return null;
        }
        console.log(data);
        console.log(data.article.title);
        console.log(data.article.content);
    
        const { title, author, publicationDate, content, categoryName, isOpinion, isFact, articleImage } = data.article;
        let articleTag = isOpinion ? "Opinion" : "Fact";
        const formattedContent = content.replace(/\\n\\n/g, "<br/>").replace(/\\n/g, "<br/>");

        const formattedDate = formatDate(publicationDate);
        return (
            <section className="view-article">
                <div className="master-header-div">
                    <div className="article-header-div">
                        <div className="article-header-sub-div">
                            <h2 className="title-details" id="title">{title}</h2>
                            <h4 className="title-details" id="fact-opinion">{articleTag}</h4>
                        </div>
                        <div className="article-header-sub-div-2">
                            <h4>{categoryName}</h4> <h4>{author}</h4> <h4>{formattedDate}</h4>
                        </div>
                    </div>
                    <div className="article-image-div">
                        <img id="article-image" alt="article-image" src={articleImage}/>
                    </div>
                </div>
                <div className="article-content" dangerouslySetInnerHTML={{__html: formattedContent}}>
                </div>
            </section>
        );
    };


    return (

        <div>

        {createArticleView(data)}

        </div>
    );
};

export default ArticleView;