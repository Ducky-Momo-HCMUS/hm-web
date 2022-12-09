import { gql } from 'apollo-server-express';

const homeroomTypeDefs = gql`
  extend type Query {
    homeroomList: HomeroomList!
    homeroomStudentList(homeroomId: String!): [HomeroomStudentListItem!]
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
`;

export default homeroomTypeDefs;
