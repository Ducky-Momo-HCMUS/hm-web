import { gql } from 'apollo-server-express';

const typeDefs = gql`
  scalar UploadFile

  extend type Query {
    documents: [Document!]!
  }

  extend type Mutation {
    uploadDocument(
      input: UploadDocumentInput!
      file: UploadFile!
    ): UploadDocumentResponse!
  }

  input UploadDocumentInput {
    name: String!
  }

  type Document {
    id: ID!
    name: String!
    url: String!
  }

  type UploadDocumentResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    documentUniqueId: String!
  }
`;

export { typeDefs };
