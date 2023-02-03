import { gql } from 'apollo-server-express';

const teacherTypeDefs = gql`
  extend type Query {
    teacherList(year: String!): TeacherList!
  }

  type TeacherList {
    danhSachGVCN: [TeacherListItem!]!
  }

  type TeacherListItem {
    tenGVCN: String!
    maSH: String!
    email: String!
  }
`;

export default teacherTypeDefs;
