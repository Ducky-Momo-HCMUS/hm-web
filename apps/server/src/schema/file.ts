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
    type: String!
    namHoc: Int
    hocKy: Int
    maMH: String
    tenLopHP: String
  }

  type Document {
    id: ID!
    name: String!
    url: String!
  }

  type UploadDocumentResponse {
    status: Int!
  }
`;

export default fileTypeDefs;
