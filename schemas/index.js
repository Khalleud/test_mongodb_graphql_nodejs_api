const {gql} = require('apollo-server');

const typeDefs = gql`



  type Ville {
    nom: String!
    superficie: Int,
    nombre_habitant: Float
    departement: Departement
  }

  type Departement {
    nom: String
    numero: Int!
    villes: [Ville]
  }


  type Query {
    ville(nom: String!): Ville
    departement(numero: Int!): [Ville]

  }
`;



module.exports = typeDefs;
