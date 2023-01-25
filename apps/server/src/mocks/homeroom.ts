import {
  HomeroomDetail,
  HomeroomFailList,
  HomeroomFailListItem,
  HomeroomNotEnrolledList,
  HomeroomNotEnrolledListItem,
  HomeroomPostponeExamList,
  HomeroomPostponeExamListItem,
  HomeroomStudentListItem,
  HomeroomTermList,
  HomeroomTermListItem,
} from '../generated-types';

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

export const HOMEROOM_DETAIL = {
  tenGV: 'Hồ Tuấn Thanh',
  soLuongSV: 40,
} as HomeroomDetail;

export const HOMEROOM_TERM_LIST = {
  hocKyNamHoc: [
    {
      maHK: 1,
      hocKy: 1,
      namHocBD: 2019,
    },
    {
      maHK: 2,
      hocKy: 2,
      namHocBD: 2019,
    },
    {
      maHK: 3,
      hocKy: 3,
      namHocBD: 2019,
    },
  ] as HomeroomTermListItem[],
} as HomeroomTermList;

export const HOMEROOM_FAIL_LIST_BY_TERM = {
  dsRotMon: [
    {
      maSV: '19127000',
      tenSV: 'Nguyễn Văn A',
      tenMH: 'Nhập môn lập trình',
      tenLopHP: '19clc4',
      dtb: 4.75,
      vang: false,
    },
    {
      maSV: '19127000',
      tenSV: 'Nguyễn Văn A',
      tenMH: 'Nhập môn công nghệ thông tin',
      tenLopHP: '19clc4',
      dtb: 4.75,
      vang: false,
    },
    {
      maSV: '19127000',
      tenSV: 'Nguyễn Văn A',
      tenMH: 'Cơ sở dữ liệu',
      tenLopHP: '19clc4',
      dtb: 0,
      vang: true,
    },
  ] as HomeroomFailListItem[],
} as HomeroomFailList;

export const HOMEROOM_FAIL_LIST = {
  dsRotMon: [
    {
      maSV: '19127000',
      tenSV: 'Nguyễn Văn A',
      tenMH: 'Nhập môn lập trình',
      tenLopHP: '19clc4',
      dtb: 4.75,
      vang: false,
    },
    {
      maSV: '19127000',
      tenSV: 'Nguyễn Văn A',
      tenMH: 'Nhập môn công nghệ thông tin',
      tenLopHP: '19clc4',
      dtb: 4.75,
      vang: false,
    },
  ] as HomeroomFailListItem[],
} as HomeroomFailList;

export const HOMEROOM_NOT_ENROLLED_LIST_BY_TERM = {
  khongDangKy: [
    {
      maSV: '19127000',
      tenSV: 'Nguyễn Văn A',
    },
    {
      maSV: '19127000',
      tenSV: 'Nguyễn Văn A',
    },
    {
      maSV: '19127000',
      tenSV: 'Nguyễn Văn A',
    },
    {
      maSV: '19127000',
      tenSV: 'Nguyễn Văn A',
    },
  ] as HomeroomNotEnrolledListItem[],
} as HomeroomNotEnrolledList;

export const HOMEROOM_NOT_ENROLLED_LIST = {
  khongDangKy: [
    {
      maSV: '19127000',
      tenSV: 'Nguyễn Văn A',
    },
    {
      maSV: '19127000',
      tenSV: 'Nguyễn Văn A',
    },
  ] as HomeroomNotEnrolledListItem[],
} as HomeroomNotEnrolledList;

export const HOMEROOM_POSTPONE_EXAM_LIST_BY_TERM = {
  hoanThi: [
    {
      maSV: '19127000',
      tenSV: 'Nguyễn Văn A',
      tenLopHP: '19clc3',
      tenMH: 'Chủ nghĩa xã hội khoa học',
    },
    {
      maSV: '19127000',
      tenSV: 'Nguyễn Văn A',
      tenLopHP: '19clc3',
      tenMH: 'Chủ nghĩa xã hội khoa học',
    },
    {
      maSV: '19127000',
      tenSV: 'Nguyễn Văn A',
      tenLopHP: '19clc3',
      tenMH: 'Chủ nghĩa xã hội khoa học',
    },
    {
      maSV: '19127000',
      tenSV: 'Nguyễn Văn A',
      tenLopHP: '19clc3',
      tenMH: 'Chủ nghĩa xã hội khoa học',
    },
  ] as HomeroomPostponeExamListItem[],
} as HomeroomPostponeExamList;

export const HOMEROOM_POSTPONE_EXAM_LIST = {
  hoanThi: [
    {
      maSV: '19127000',
      tenSV: 'Nguyễn Văn A',
      tenLopHP: '19clc3',
      tenMH: 'Chủ nghĩa xã hội khoa học',
    },
    {
      maSV: '19127000',
      tenSV: 'Nguyễn Văn A',
      tenLopHP: '19clc3',
      tenMH: 'Chủ nghĩa xã hội khoa học',
    },
    {
      maSV: '19127000',
      tenSV: 'Nguyễn Văn A',
      tenLopHP: '19clc3',
      tenMH: 'Chủ nghĩa xã hội khoa học',
    },
  ] as HomeroomPostponeExamListItem[],
} as HomeroomPostponeExamList;
