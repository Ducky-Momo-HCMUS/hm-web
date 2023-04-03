import { gql } from 'apollo-server-express';

const accountTypeDefs = gql`
  extend type Query {
    accountList(page: Int!, size: Int!): AccountList!
  }

  extend type Mutation {
    accountAdd(payload: AccountAddInput!): AccountAddResponse!
    accountEdit(payload: AccountEditInput!): AccountEditResponse!
    accountDelete(payload: AccountDeleteInput!): AccountDeleteResponse!
    accountActivate(payload: AccountActivateInput!): AccountActivateResponse!
  }

  type AccountList {
    total: Int!
    data: [AccountListItem!]!
  }

  type AccountListItem {
    maTK: Int!
    email: String!
    tenGV: String
    gvcn: Boolean!
    gvu: Boolean!
    hoatDong: Boolean!
  }

  input AccountAddInput {
    email: String!
    name: String!
    isTeacher: Boolean!
    isStaff: Boolean!
  }

  input AccountDeleteInput {
    email: String!
  }

  input AccountActivateInput {
    email: String!
  }

  input AccountEditInput {
    email: String!
    name: String!
    isTeacher: Boolean!
    isStaff: Boolean!
  }

  type AccountAddResponse {
    maTK: Int!
    email: String!
    matKhau: String
  }

  type AccountEditResponse {
    maTK: Int!
    tenGV: String!
  }

  type AccountDeleteResponse {
    maTK: Int!
    email: String!
  }

  type AccountActivateResponse {
    maTK: Int!
    email: String!
  }
`;

export default accountTypeDefs;
