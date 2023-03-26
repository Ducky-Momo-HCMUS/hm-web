import { gql } from 'apollo-server-express';

const tagTypeDefs = gql`
  extend type Query {
    tagList(page: Int, size: Int): TagList!
  }

  extend type Mutation {
    tagAdd(payload: TagAddInput!): Tag!
    tagEdit(tagId: Int!, payload: TagEditInput!): Tag!
    tagDelete(tagId: Int!): TagDeleteResponse!
  }

  type TagList {
    data: [Tag!]!
    total: Int!
  }

  type Tag {
    maTag: Int!
    tenTag: String!
  }

  type TagDeleteResponse {
    status: Int!
  }

  input TagAddInput {
    tenTag: String!
  }

  input TagEditInput {
    tenTag: String!
  }
`;

export default tagTypeDefs;
