const { User, Articles, Category } = require('../models');
const { signToken, authMiddleware } = require('../utils');
const { AuthenticationError } = require('apollo-server');

const resolvers = {
    Query: {
        articles: async(parent, { category }) => {
            try {
                const categoryArticles = await Articles.find({ category });

                await Articles.populate(categoryArticles, 'author');

                const categoryArticlesList = categoryArticles.map((article) => ({
                    title: article.title,
                    author: article.author.user,
                    publicationDate: article.publicationDate,
                    isFact: article.isFact,
                    isOpinion: article.isOpinion,
                }));

                return categoryArticlesList;
            } catch (err) {
                throw new Error('Failed to fetch articles.');
            }
        },

        article: async(parent, { title }) => {
            try {
                const singleArticle = await Articles.findOne({ title });

                await Articles.populate(singleArticle, 'author');

                return singleArticle;
            } catch (err) {
                throw new Error('Failed to fetch article');
            }
        },
    },
};

module.exports = resolvers;