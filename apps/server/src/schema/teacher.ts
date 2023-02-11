import { gql } from 'apollo-server-express';

const teacherTypeDefs = gql`
  extend type Query {
    teacherList(year: String!): TeacherList!
    yearList: YearList!
  }

  type TeacherList {
    danhSachGVCN: [TeacherListItem!]!
  }

  type TeacherListItem {
    tenGVCN: String!
    maSH: String!
    email: String!
  }

  type YearList {
    danhSachKhoa: [Int!]!
  }
`;

export default teacherTypeDefs;
