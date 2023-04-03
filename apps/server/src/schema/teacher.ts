import { gql } from 'apollo-server-express';

const teacherTypeDefs = gql`
  extend type Query {
    teacherList(year: Int!, page: Int!, size: Int!): TeacherList!
    allTeacherList(page: Int!, size: Int!): AllTeacherList!
    yearList: [YearListItem!]!
    teacherSearchStudentList(maSV: String, tenSV: String): TeacherStudentList!
  }

  extend type Mutation {
    teacherEdit(
      teacherId: Int!
      payload: TeacherEditInput!
    ): AllTeacherListItem!
    teacherDelete(teacherId: Int!): AllTeacherListItem!
  }

  type TeacherStudentList {
    total: Int!
    data: [TeacherSearchStudentListItem!]!
  }

  type TeacherSearchStudentListItem {
    maSV: String!
    tenSV: String!
    tenCN: String
    tinhTrang: String!
    gpa4: Float
    gpa10: Float
  }

  input TeacherEditInput {
    lopSH: [String!]!
  }

  type AllTeacherList {
    total: Int!
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

  type YearListItem {
    khoa: Int!
  }
`;

export default teacherTypeDefs;
