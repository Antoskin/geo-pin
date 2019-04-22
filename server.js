const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then( () => console.log('DB connected') )
    .catch( errr => console.error(errr) )

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

server.listen()
    .then(({url}) => console.log(`🚀  Server ready at ${url}`) );


    //antikart
    //ePvj!tNQj3j99.C