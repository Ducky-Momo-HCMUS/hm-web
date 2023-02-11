import {
  HomeroomAllList,
  HomeroomExamAbsentList,
  HomeroomExamPostponedList,
  HomeroomFinalResultList,
  HomeroomNotEnrolledList,
  HomeroomNotEnrolledListItem,
  HomeroomOverviewReport,
  HomeroomPostponeExamList,
  HomeroomPostponeExamListItem,
  HomeroomTermList,
  HomeroomTermListItem,
} from '../generated-types';

export const HOMEROOM_ALL_LIST = {
  danhSachLopSH: ['19CLC1', '19CLC2', '19CLC3'],
} as HomeroomAllList;

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
    {
      maHK: 4,
      hocKy: 1,
      namHocBD: 2020,
    },
    {
      maHK: 5,
      hocKy: 2,
      namHocBD: 2020,
    },
  ] as HomeroomTermListItem[],
} as HomeroomTermList;

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

export const HOMEROOM_OVERVIEW_REPORT_BY_TERM = {
  siSo: {
    tong: 46,
    nam: 23,
    nu: 23,
  },
  hocTap: {
    xuatSac: 5,
    gioi: 25,
    kha: 10,
    trungBinhKha: 4,
    trungBinh: 1,
    yeu: 1,
    chungChiNgoaiNgu: 12,
  },
  drl: {
    xuatSac: 5,
    gioi: 25,
    kha: 10,
    trungBinhKha: 4,
    trungBinh: 1,
    yeu: 1,
  },
} as HomeroomOverviewReport;

export const HOMEROOM_FINAL_RESULT_LIST_BY_TERM = {
  danhSachKetQua: [
    {
      maSV: '19127001',
      hoTen: 'Nguyễn Văn A',
      dtb: 7.1,
      xepLoai: 'Khá',
    },
    {
      maSV: '19127001',
      hoTen: 'Nguyễn Văn A',
      dtb: 7.1,
      xepLoai: 'Khá',
    },
    {
      maSV: '19127001',
      hoTen: 'Nguyễn Văn A',
      dtb: 7.1,
      xepLoai: 'Khá',
    },
    {
      maSV: '19127001',
      hoTen: 'Nguyễn Văn A',
      dtb: 7.1,
      xepLoai: 'Khá',
    },
  ],
} as HomeroomFinalResultList;

export const HOMEROOM_EXAM_ABSENT_LIST_BY_TERM = {
  danhSachVangThi: [
    {
      maSV: '19127001',
      hoTen: 'Nguyễn Văn A',
      monHoc: 'Kỹ năng mềm',
      lopHP: '19CLC1',
    },
    {
      maSV: '19127001',
      hoTen: 'Nguyễn Văn A',
      monHoc: 'Kỹ năng mềm',
      lopHP: '19CLC1',
    },
    {
      maSV: '19127001',
      hoTen: 'Nguyễn Văn A',
      monHoc: 'Kỹ năng mềm',
      lopHP: '19CLC1',
    },
    {
      maSV: '19127001',
      hoTen: 'Nguyễn Văn A',
      monHoc: 'Kỹ năng mềm',
      lopHP: '19CLC1',
    },
  ],
} as HomeroomExamAbsentList;

export const HOMEROOM_EXAM_POSTPONED_LIST_BY_TERM = {
  danhSachHoanThi: [
    {
      maSV: '19127001',
      hoTen: 'Nguyễn Văn A',
      monHoc: 'Kỹ năng mềm',
      lopHP: '19CLC1',
    },
    {
      maSV: '19127001',
      hoTen: 'Nguyễn Văn A',
      monHoc: 'Kỹ năng mềm',
      lopHP: '19CLC1',
    },
    {
      maSV: '19127001',
      hoTen: 'Nguyễn Văn A',
      monHoc: 'Kỹ năng mềm',
      lopHP: '19CLC1',
    },
    {
      maSV: '19127001',
      hoTen: 'Nguyễn Văn A',
      monHoc: 'Kỹ năng mềm',
      lopHP: '19CLC1',
    },
  ],
} as HomeroomExamPostponedList;
