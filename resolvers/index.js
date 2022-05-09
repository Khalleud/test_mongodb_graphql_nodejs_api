
const {villes, departement} = require('../data/')


const resolvers = {
  Query: {


    ville (root, { nom }, context) {
    for (let item of villes) {
       if (item.nom == nom)  return item;

    }
    },

    departement(root, {numero}, context) {
      //return departement[0].villes;
      for (let item of departement) {
       if (item.numero == numero)  return item.villes;

      }

    }


  },
};

module.exports = resolvers;
