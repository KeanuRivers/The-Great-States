const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type myth {
        _id: ID
        mythText: String
        mythState: String
    }
    type comment {
        _id: ID
        commentText: String 
        createdAt: String
        commentAuthor: String
    }
    type Query {
        myth:[Myth]!
        myth(mythID: ID!): Myth
    }
    type Mutation {
        addMyth(mythText: String!): Myth
        removeMyth(mythId: ID!): Myth
        addComment(mythId: ID!, commentText: String!): Myth
        removeComment(mythId: ID!, commentId: ID!): Myth
    }
`;

module.exports = typeDefs;