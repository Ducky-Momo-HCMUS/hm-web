import { gql } from 'apollo-server-express';

const accountTypeDefs = gql`
  extend type Query {
    accountList: AccountList!
  }

  extend type Mutation {
    accountAdd(payload: AccountAddInput!): AccountAddResponse!
    accountEdit(
      accountId: Int!
      payload: AccountEditInput!
    ): AccountEditResponse!
    accountDelete(accountId: Int!): AccountDeleteResponse!
  }

  type AccountList {
    danhSachTaiKhoan: [AccountListItem!]!
  }

  type AccountListItem {
    maTK: Int!
    email: String!
    tenGV: String!
    gvcn: Boolean!
    gvu: Boolean!
    hoatDong: Boolean!
  }

  input AccountAddInput {
    email: String!
    tenGV: String!
    gvcn: Boolean!
    gvu: Boolean!
    hoatDong: Boolean!
  }

  input AccountEditInput {
    email: String!
    tenGV: String!
    gvcn: Boolean!
    gvu: Boolean!
    hoatDong: Boolean!
  }

  type AccountAddResponse {
    status: Int!
  }

  type AccountEditResponse {
    status: Int!
  }

  type AccountDeleteResponse {
    status: Int!
  }
`;

export default accountTypeDefs;
