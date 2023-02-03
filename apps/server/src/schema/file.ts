import { gql } from 'apollo-server-express';

const fileTypeDefs = gql`
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

  type UploadDocumentResponse {
    code: String!
    success: Boolean!
    message: String!
    documentUniqueId: String!
  }
`;

export default fileTypeDefs;
