const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    email: String
  }


type Procedure {
    _id: ID
    Id: Int
    Procedure: String
    CPTCode: String
    Price: String
    FacilityId: Int
    bodypart: String
    facilities: [Facility]
    
}

type Provider {
    _id: ID
    Id: Int
    name: String
    FacilityId: Int
    facilities: [Facility]
}
  type Auth {
    token: ID
    user: User
  }
  type Facility {
    _id: ID
    FacilityId : Int
    name: String
    address: String
}
  type Query {

    me: User
    user: [User]
    providers: [Provider]

    facilities: [Facility]
    procedures: [Procedure]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!, password: String!): Auth
  }

`

module.exports = typeDefs;