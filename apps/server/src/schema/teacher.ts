import { gql } from 'apollo-server-express';

const teacherTypeDefs = gql`
  extend type Query {
    teacherList(year: Int!, page: Int!, size: Int!): TeacherList!
    allTeacherList: AllTeacherList!
    yearList: YearList!
  }

  type AllTeacherList {
    total: Int!
    
  }

  type AllTeacherListItem {
    
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
