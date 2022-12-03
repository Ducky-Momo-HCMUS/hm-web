import { gql } from 'apollo-server-express';

const typeDefs = gql`
  extend type Query {
    homeroomList: [HomeroomListItem!]
  }

  type HomeroomListItem {
    name: String!
    type: String!
    year: Int!
    teacherId: String!
  }
`;

export { typeDefs };
