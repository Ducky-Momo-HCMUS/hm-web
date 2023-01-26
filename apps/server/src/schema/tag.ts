import { gql } from 'apollo-server-express';

const tagTypeDefs = gql`
  extend type Query {
    tagList: TagList!
  }

  type TagList {
    tags: [Tag!]!
  }

  type Tag {
    maTag: Int!
    tenTag: String!
  }
`;

export default tagTypeDefs;
