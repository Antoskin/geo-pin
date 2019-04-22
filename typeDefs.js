const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        _id: ID
        name: String
        email: String
        avatar: String
    }

    type Query {
        me: User
    }
`

module.exports = typeDefs;
