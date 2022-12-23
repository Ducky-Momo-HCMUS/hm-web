import { gql } from 'apollo-server-express';

const homeroomTypeDefs = gql`
  extend type Query {
    homeroomList: HomeroomList!
    homeroomStudentList(homeroomId: String!): [HomeroomStudentListItem!]
    homeroomTermList(homeroomId: String!): HomeroomTermList!
    homeroomFailList(homeroomId: String!, term: Int!): HomeroomFailList!
    homeroomNotEnrolledList(
      homeroomId: String!
      term: Int!
    ): HomeroomNotEnrolledList!
    homeroomPostponeExamList(
      homeroomId: String!
      term: Int!
    ): HomeroomPostponeExamList!
  }

  type HomeroomList {
    lopSinhHoat: [HomeroomListItem!]!
  }

  type HomeroomListItem {
    maSH: String!
    heDaoTao: String!
    khoa: Int!
  }

  type HomeroomStudentListItem {
    maSV: String!
    tenSV: String!
    maCN: String!
    tinhTrang: String!
    gpa4: Float!
    gpa10: Float!
    sdt: String!
    lienHe: [Contact!]!
  }

  type Contact {
    mxh: String!
    url: String!
  }

  type HomeroomTermList {
    hocKyNamHoc: [HomeroomTermListItem!]!
  }

  type HomeroomTermListItem {
    maHK: Int!
    hocKy: Int!
    namHocBD: Int!
  }

  type HomeroomFailList {
    dsRotMon: [HomeroomFailListItem!]!
  }

  type HomeroomFailListItem {
    maSV: String!
    tenSV: String!
    tenMH: String!
    tenLopHP: String!
    dtb: Float!
    vang: Boolean!
  }

  type HomeroomNotEnrolledList {
    khongDangKy: [HomeroomNotEnrolledListItem!]!
  }

  type HomeroomNotEnrolledListItem {
    maSV: String!
    tenSV: String!
  }

  type HomeroomPostponeExamList {
    hoanThi: [HomeroomPostponeExamListItem!]!
  }

  type HomeroomPostponeExamListItem {
    maSV: String!
    tenSV: String!
    tenMH: String!
    tenLopHP: String!
  }
`;

export default homeroomTypeDefs;
