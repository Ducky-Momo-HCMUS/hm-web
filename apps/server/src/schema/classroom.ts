import { gql } from 'apollo-server-express';

const classroomTypeDefs = gql`
  extend type Query {
    classroomList(termId: Int!, subjectId: String): [ClassroomListItem!]!
    classroomScoreList(
      id: Int!
      termId: Int!
      page: Int!
      size: Int!
    ): ClassroomScoreList!
  }

  type ClassroomListItem {
    maHP: Int!
    tenLopHP: String!
    monHoc: ClassroomCourseItem
  }

  type ClassroomCourseItem {
    maMH: String!
    tenMH: String!
  }

  type ClassroomScoreList {
    data: [ClassroomScoreListItem!]!
    total: Int!
  }

  type ClassroomScoreListItem {
    maSV: String!
    tenSV: String!
    diemGK: Float
    diemTH: Float
    diemCong: Float
    diemCK: Float
    dtb: Float
    diemKhac: Float
  }
`;

export default classroomTypeDefs;
