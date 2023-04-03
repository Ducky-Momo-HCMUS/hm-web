import { gql } from 'apollo-server-express';

const courseTypeDefs = gql`
  extend type Query {
    courseList(page: Int, size: Int): CourseList!
    majorResultList(page: Int!, size: Int!): MajorResultList!
    majorList(page: Int!, size: Int!): MajorList!
  }

  extend type Mutation {
    courseEdit(
      courseId: String!
      payload: CourseEditInput!
    ): CourseEditResponse!
  }

  input CourseEditInput {
    name: String!
  }

  type CourseEditResponse {
    maMH: String!
  }

  type MajorResultList {
    data: [MajorResultListItem!]!
    total: Int!
  }

  type MajorResultListItem {
    maSV: String!
    tenSV: String!
    tenCN: String!
  }

  type MajorList {
    data: [MajorListItem!]!
    total: Int!
  }

  type MajorListItem {
    maCN: Int!
    tenCN: String!
    tenVietTat: String!
  }

  type CourseList {
    data: [CourseListItem!]!
    total: Int!
  }

  type CourseListItem {
    maMH: String!
    tenMH: String!
    soTinChi: Int!
    maCN: String
    loaiMonHoc: String!
    chuyenNganh: String
    tenCN: String
  }
`;

export default courseTypeDefs;
