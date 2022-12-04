import { HomeroomListItem, HomeroomStudentListItem } from '../generated-types';

export const HOMEROOM_LIST = [
  {
    maSH: '19clc5',
    heDaoTao: 'Chương trình chất lượng cao',
    khoa: 2019,
    maGV: 'GV001',
  },
  {
    maSH: '19clc6',
    heDaoTao: 'Chương trình chất lượng cao',
    khoa: 2019,
    maGV: 'GV001',
  },
  {
    maSH: '20clc3',
    heDaoTao: 'Chương trình chất lượng cao',
    khoa: 2020,
    maGV: 'GV005',
  },
  {
    maSH: '21clc4',
    heDaoTao: 'Chương trình chất lượng cao',
    khoa: 2021,
    maGV: 'GV005',
  },
] as HomeroomListItem[];

export const HOMEROOM_STUDENT_LIST = [
  {
    maSV: '19127268',
    tenSV: 'Nguyễn Ngọc Thanh Tâm',
    maCN: 'KTPM',
    tinhTrang: 'Đang học',
    gpa4: 3.91,
    gpa10: 9.56,
    sdt: '0123456789',
    lienHe: [
      {
        mxh: 'Facebook',
        url: 'https://meet.google.com/nee-nrci-gjq',
      },
    ],
  },
  {
    maSV: '19127001',
    tenSV: 'Nguyễn Văn A',
    maCN: 'HTTT',
    tinhTrang: 'Bị buộc thôi học',
    gpa4: 3.69,
    gpa10: 8.77,
    sdt: '0382227891',
    lienHe: [
      {
        mxh: 'Zalo',
        url: 'https://meet.google.com/nee-nrci-gjq',
      },
    ],
  },
  {
    maSV: '19127002',
    tenSV: 'Nguyễn Văn B',
    maCN: 'MMT',
    tinhTrang: 'Đình chỉ học',
    gpa4: 3.12,
    gpa10: 7.67,
    sdt: '0123456789',
    lienHe: [
      {
        mxh: 'Facebook',
        url: 'https://meet.google.com/nee-nrci-gjq',
      },
    ],
  },
  {
    maSV: '19127003',
    tenSV: 'Nguyễn Văn D',
    maCN: 'KHMT',
    tinhTrang: 'Đã tốt nghiệp',
    gpa4: 3.94,
    gpa10: 9.69,
    sdt: '0123456789',
    lienHe: [
      {
        mxh: 'Facebook',
        url: 'https://meet.google.com/nee-nrci-gjq',
      },
    ],
  },
] as HomeroomStudentListItem[];
