const { gql } = require("apollo-server-express");

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

enum FactOpinion {
    FACT
    OPINION
}

type Articles {
    _id: ID!
    title: String!
    content: String!
    author(user: ID): User!
    publicationDate: String
    isFact: FactOpinion!
    isOpinion: FactOpinion
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
    createArticle(title: String!, content: String!, author: String!, isFact: FactOpinion, isOpinion: FactOpinion, siteSources: [String], articleImage: String): Articles
    updateArticle(_id: ID!, title: String!, content: String!, siteSources: [String], articleImage: String!): Articles
    deleteArticle(_id: ID!): Articles
}
`;

module.exports = typeDefs;