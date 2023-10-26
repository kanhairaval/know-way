const { User, Articles, Category } = require('../models');
const { signToken, authMiddleware } = require('../utils/authmiddleware');
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

    Mutation: {
        addUser: async (parent, { firstName, lastNAme, userName, email, password, dOfb, profilePicture }) => {
            try {
                const newUser = await User.create({ firstName, lastNAme, userName, email, password, dOfb, profilePicture });
                const token = signToken(newUser);

                return { token, newUser };
            } catch (err) {
                throw new Error('Failed to sign up.');
            }
        },

        login: async (parent, { email, password }) => {
            try {
                const user = await User.findOne({ email });

                if (!user) {
                    throw AuthenticationError('User not found.');
                }

                const correctPw = await user.isCorrectPassword(password);

                if (!correctPw) {
                    throw AuthenticationError('Invalid password.');
                }

                const token = signToken(user);

                return { token, user };
            } catch (err) {
                throw new Error('Login failed.');
            }
        },

        createArticle: async (parent, { title, content, author, isFact, isOpinion, siteSources, articleImage }, context) => {

            if (context.user) {
            try {
                const newArtcile = await Articles.create({ title, content, author, isFact, isOpinion, siteSources, articleImage });
                return newArtcile;
            } catch (err) {
                throw new Error('Failed to create an article.');
            }
        } else {
            throw new AuthenticationError('Authentication required to create article.')
        }
        },

        updateArtcile: async (parent, { _id, title, content, siteSources, articleImage }, context) => {

            if (context.user) {
            try {
                const updatedArticle = await Articles.findByIdAndUpdate(_id, { title, content, siteSources, articleImage }, { new: true });
                return updatedArticle;
            } catch (err) {
                throw new Error('Failed to update article.');
            }
        } else {
            throw new AuthenticationError('Authentication required to update article.')
        }
        },

        deleteArtcile: async (parent, { _id }, context) => {

            if (context.user) {
            try {
                const deletedArticle = await Articles.findByIdAndDelete({ _id });
                return deletedArticle;
            } catch (err) {
                throw new Error('Failed to delete article.');
            }
        } else {
            throw new AuthenticationError('Authentication required to delete article.')
        }
        }
    }
};

module.exports = resolvers;