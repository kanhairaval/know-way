const { User } = require('../models/User');
const { Articles } = require('../models/Articles');
const { signToken, authMiddleware } = require('../utils/authmiddleware');
const { AuthenticationError } = require('apollo-server');
const { error } = require('server/router');

const resolvers = {
    Query: {
        articles: async(parent, { categoryName }) => {
            try {
                
                console.log('Fetching articles...');
                const categoryArticles = await Articles.find({ categoryName });

                console.log(categoryArticles);

                const categoryArticlesList = categoryArticles.map((article) => ({
                    title: article.title,
                    author: article.author,
                    content: article.content,
                    publicationDate: article.publicationDate,
                    isFact: article.isFact,
                    isOpinion: article.isOpinion,
                    categoryName: article.categoryName,
                }));
                console.log(categoryArticles);

                return categoryArticlesList;
            } catch (err) {
                console.error(error);
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
                // console.log(user);
                return { token, user, success: true };
            } catch (err) {
                console.error('Login error:', err.message);
                throw new Error('Login failed.');
                return { success: false };
            }
        },

        createArticle: async (parent, { title, categoryName, content, author, isFact, isOpinion, articleImage }, context) => {
            if (context.user) {
                try {
                    const newArticle = await Articles.create({ title, categoryName, content, author, isFact, isOpinion, articleImage });
                    console.log(newArticle);
        
                    if (newArticle) {
                        console.log("Article published successfully.");
                        return { message: "Article published successfully.", success: true };
                    } else {
                        return { message: "Article could not be published.", success: false };
                    }
                } catch (err) {
                    console.error(err);
                    return { message: "Error creating article.", success: false };
                }
            } else {
                throw new AuthenticationError('Authentication required to create article.');
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