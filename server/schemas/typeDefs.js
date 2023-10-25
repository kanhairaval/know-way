const typeDefs = `
type User {
    firstName: String!
    lastName: String!
    userName: String!
    email: String!
    password: String!
    dOfb: String!
    profilePicture: String
}

type Category {
    categoryName: String!
    description: String
}

enum FactOpinion {
    FACT
    OPINION
}

type Articles {
    title: String!
    content: String!
    author: User!
    publicationDate: String
    isFact: FactOpinion!
    isOpinion: FactOpinion
    siteSources: [String]
    articleImage: String
    _id: ID!
}

type Auth {
    token: String!
    user: User
}

type Query {
    articles(category: String!): [Articles]
}

type Mutation {
    addUser(firstName: String!, lastName: String!, userName: String!, email: String!, password: String!, dOfb: String!, profilePicture: String): Auth
    login(email: String!, password: String!): Auth
    createArticle(title: String!, content: String!, author: String!, publicationDate: String, isFact: FactOpinion, isOpinion: FactOpinion, siteSources: [String], articleImage: String): Articles
    updateArticle(_id: ID!, title: String!, content: String!, siteSources: [String], articleImage: String!): Articles
    deleteArticle(_id: ID!): Articles
}
`;

module.exports = typeDefs;