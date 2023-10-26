const { User, Articles, Category } = require('../models');
const { signToken, authMiddleware } = require('../utils');
const { AuthenticationError } = require('apollo-server');

const resolvers = {
    Query: {
        articles: async(parent, { categoryName }) => {
            try {
                const categoryArticles = await Articles.find({ categoryName });

                await Articles.populate(categoryArticles, 'author');

                const categoryArticlesList = categoryArticles.map((article) => ({
                    title: article.title,
                    author: article.author.user,
                    publicationDate: article.publicationDate,
                    isFact: article.isFact,
                    isOpinion: article.isOpinion,
                }));

                return categoryArticles;
            } catch (err) {
                throw new Error('Failed to fetch articles.');
            }
        },
    },
};

module.exports = resolvers;