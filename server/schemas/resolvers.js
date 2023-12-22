const { User } = require('../models/User');
const { Articles } = require('../models/Articles');
const { signToken, authMiddleware } = require('../utils/authmiddleware');
const { AuthenticationError } = require('apollo-server');

const resolvers = {
    Query: {
        articles: async(parent, { categoryName }) => {
            try {
                
                const categoryArticles = await Articles.find({ categoryName });

                const categoryArticlesList = categoryArticles.map((article) => ({
                    title: article.title,
                    author: article.author,
                    publicationDate: article.publicationDate,
                    isFact: article.isFact,
                    isOpinion: article.isOpinion,
                    categoryName: article.categoryName,
                }));

                return categoryArticlesList;
            } catch (err) {
                throw new Error('Failed to fetch articles.');
            }
        },

        article: async(parent, { title }) => {
            try {
                const singleArticle = await Articles.findOne({ title });

                return singleArticle;
            } catch (err) {
                throw new Error('Failed to fetch article');
            }
        },
    },

    Mutation: {
        addUser: async (parent, { firstName, lastName, userName, email, password, dOfb }) => {
            console.log(firstName);
            try {
                const newUser = await User.create({ firstName, lastName, userName, email, password, dOfb });
                console.log(newUser);

                return { success: true, message: "User registered successfully." };
            } catch (err) {
                console.error("Failed to sign up", error.message);
                return { success: false, message: "Failed to sign up." };
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
                console.log(user);
                return { token, user };
            } catch (err) {
                throw new Error('Login failed.');
            }
        },

        createArticle: async (parent, { title, categoryName, content, author, isFact, isOpinion, siteSources, articleImage }, context) => {

            if (context.user) {
            try {
                const newArticle = await Articles.create({ title, categoryName, content, author, isFact, isOpinion, siteSources, articleImage });
                console.log(newArticle);
                return newArticle;
            } catch (err) {
                console.error(err);
                throw new Error('Failed to create an article.');
            }
        } else {
            throw new AuthenticationError('Authentication required to create article.')
        }
        },

        updateArticle: async (parent, { _id, title, content, siteSources, articleImage }, context) => {

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

        deleteArticle: async (parent, { _id }, context) => {

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