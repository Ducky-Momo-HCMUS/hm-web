import { gql } from 'apollo-server-express';

const teacherTypeDefs = gql`
  extend type Query {
    teacherList(year: Int!, page: Int!, size: Int!): TeacherList!
    allTeacherList: AllTeacherList!
    yearList: YearList!
  }

  extend type Mutation {
    teacherEdit(
      teacherId: Int!
      payload: TeacherEditInput!
    ): AllTeacherListItem!
    teacherDelete(teacherId: Int!): AllTeacherListItem!
  }

  input TeacherEditInput {
    lopSH: [String!]!
  }

  type AllTeacherList {
    data: [AllTeacherListItem!]!
  }

  type AllTeacherListItem {
    maGV: Int!
    tenGV: String!
    email: String!
    lopSinhHoat: [HomeroomInfo!]!
  }

  type HomeroomInfo {
    maSH: String!
  }

  type TeacherList {
    total: Int!
    data: [TeacherListItem!]!
  }

  type TeacherListItem {
    tenGV: String!
    maSH: String!
    email: String!
  }

  type YearList {
    danhSachKhoa: [Int!]!
  }
`;

export default teacherTypeDefs;
