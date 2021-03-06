const { ApolloServer } = require('apollo-server');


const typeDefs = require('./schemas/');
const resolvers = require('./resolvers');











const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
