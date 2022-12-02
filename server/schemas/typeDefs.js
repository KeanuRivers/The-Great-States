const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    username: String
    email: String
    password: String
    comments: [comment]!
  }
    type myth {
        _id: ID
        mythText: String
        mythState: String
        comments: [comment]!
    }
    type comment {
        _id: ID
        commentText: String
        commentAuthor: String
        createdAt: String
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        users: [User]
        user(username: String!): User
        myth:[myth]!
        comments(_id: String): [myth]
        me: User
    }
    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addMyth(mythText: String!): myth
        removeMyth(mythId: ID!): myth
        addComment(mythId: ID!, commentText: String!): myth
        removeComment(mythId: ID!, commentId: ID!): myth
    }
`;

module.exports = typeDefs;