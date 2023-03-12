import { gql } from 'apollo-server-express';

const courseTypeDefs = gql`
  extend type Query {
    courseList(page: Int, size: Int): CourseList!
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
  }
`;

export default courseTypeDefs;
