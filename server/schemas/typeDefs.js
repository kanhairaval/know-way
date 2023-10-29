const { gql } = require("apollo-server-express");

// input UserInput {
//     firstName: String!
//     lastName: String!
//     userName: String!
//     email: String!
//     password: String!
//     dOfb: String!
//     profilePicture: String
//   }  

const typeDefs = gql`
type User {
    _id: ID!
    firstName: String!
    lastName: String!
    userName: String!
    email: String!
    password: String!
    dOfb: String!
    profilePicture: String
}

type Category {
    _id: ID!
    categoryName: String!
    description: String
}

type Articles {
    _id: ID!
    title: String!
    content: String!
    author: String
    publicationDate: String
    isFact: Boolean
    isOpinion: Boolean
    siteSources: [String]
    articleImage: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    articles(categoryName: String!): [Articles]
    article(title: String!): Articles
}

type Mutation {
    addUser(firstName: String!, lastName: String!, userName: String!, email: String!, password: String!, dOfb: String!, profilePicture: String): Auth
    login(email: String!, password: String!): Auth
    createArticle(title: String!, content: String!, author: String, isFact: Boolean, isOpinion: Boolean, siteSources: [String], articleImage: String): Articles
    updateArticle(_id: ID!, title: String!, content: String!, siteSources: [String], articleImage: String!): Articles
    deleteArticle(_id: ID!): Articles
}
`;

module.exports = typeDefs;