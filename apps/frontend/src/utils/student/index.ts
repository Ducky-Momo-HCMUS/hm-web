import _groupBy from 'lodash/groupBy';

import {
  HomeroomListItem,
  HomeroomStudentListItem,
  StudentTerm,
} from '../../generated-types';
import { HomeroomStudentListData } from '../../types';

export const mapStudentDataToTable = (data: HomeroomStudentListItem) => {
  return {
    ...data,
    contact: {
      sdt: data.sdt,
      lienHe: data.lienHe,
    },
  } as HomeroomStudentListData;
};

export const mapMajorIdToName = (maCN: string) => {
  switch (maCN) {
    case 'KTPM':
      return 'Kỹ thuật phần mềm';
    case 'HTTT':
      return 'Hệ thống thông tin';
    case 'KHMT':
      return 'Khoa học máy tính';
    case 'MMT':
      return 'Mạng máy tính';
    case 'CNTT':
      return 'Công nghệ tri thức';
    default:
      return '';
  }
};

export const groupClassesByYear = (homeroomList: HomeroomListItem[]) => {
  return _groupBy(homeroomList, (homeroom) => homeroom.khoa);
};

export const groupTermsByYear = (termList: StudentTerm[]) => {
  return _groupBy(termList, (term) => term.namHocBD);
};
