const { ApolloServer } = require('apollo-server');


const typeDefs = require('./schemas/');
//const resolvers = require('./resolvers');





const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];


const villes = [
  {
    nom: 'Rennes',
    superficie: 30000,
    nombre_habitant: 30000,
    departement: '25'

  },
  {
    nom: 'Bordeaux',
    superficie: 76200,
    nombre_habitant: 30000,
    departement: '82'

  }
];




const departement = [
  {
    nom: 'Rennes',
    numero: 55,
    villes: villes

  },
  {
    nom: 'Bordeaux',
    numero: 56,
    villes: villes

  }
];


// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.



const resolvers = {
  Query: {
  books: () => books,

    ville (root, { nom }, context) {
      return villes[0];
    },

    departement(root, {numero}, context) {
      return departement[0].villes;
    }


  },
};




const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
