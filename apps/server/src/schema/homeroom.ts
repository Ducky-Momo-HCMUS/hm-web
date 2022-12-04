import { gql } from 'apollo-server-express';

const typeDefs = gql`
  extend type Query {
    homeroomList: [HomeroomListItem!]
    homeroomStudentList(homeroomId: String!): [HomeroomStudentListItem!]
  }

  type HomeroomListItem {
    maSH: String!
    heDaoTao: String!
    khoa: Int!
    maGV: String!
  }

  type HomeroomStudentListItem {
    maSV: String!
    tenSV: String!
    maCN: String!
    tinhTrang: String!
    gpa4: Float!
    gpa10: Float!
    sdt: String!
    lienHe: [Contact!]
  }

  type Contact {
    mxh: String!
    url: String!
  }
`;

export { typeDefs };
