import { gql } from 'apollo-server-express';

const courseTypeDefs = gql`
  extend type Query {
    courseList(page: Int, size: Int): CourseList!
    majorList(page: Int!, size: Int!): MajorList!
    majorResultList(page: Int!, size: Int!): MajorResultList!
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
