
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


module.exports = resolvers;
