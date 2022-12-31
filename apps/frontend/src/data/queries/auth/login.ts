import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      maGC
      tag
      tieuDe
      noiDung
      thoiGianTao
      thoiGianSua
      hinhAnh {
        stt
        url
      }
    }
  }
`;
