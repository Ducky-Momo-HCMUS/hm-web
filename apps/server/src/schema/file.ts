import { gql } from 'apollo-server-express';

const typeDefs = gql`
  scalar UploadFile

  extend type Query {
    photos: [Photo!]!
  }

  extend type Mutation {
    addPhoto(input: AddPhotoInput!, file: UploadFile!): UploadPhotoResponse!
  }

  input AddPhotoInput {
    name: String!
  }

  type Photo {
    id: ID!
    name: String!
    url: String!
  }

  type UploadPhotoResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    documentUniqueId: String!
  }
`;

export { typeDefs };
