import { gql } from 'apollo-server-express';

const classroomTypeDefs = gql`
  extend type Query {
    classroomList(termId: Int!, courseId: String): [ClassroomListItem!]!
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
  }

  type ClassroomScoreList {
    data: [ClassroomScoreListItem!]!
    total: Int!
  }

  type ClassroomScoreListItem {
    maSV: String!
    tenSV: String!
    diemGK: Float!
    diemTH: Float!
    diemCong: Float!
    diemCK: Float!
    dtb: Float!
    diemKhac: Float!
  }
`;

export default classroomTypeDefs;