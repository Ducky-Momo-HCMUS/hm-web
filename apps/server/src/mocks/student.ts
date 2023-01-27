import {
  StudentAllSubjects,
  StudentAllTerms,
  StudentAveragePoint,
  StudentContactResponse,
  StudentParentInfo,
  StudentParentInfoList,
  StudentNoteList,
  StudentDetailSubjectsResult,
  StudentOverviewResult,
  StudentSubject,
  StudentSubjectsByTerm,
  StudentTerm,
  StudentTrainingPoint,
} from '../generated-types';

export const SUBJECTS_BY_TERM = {
  monhoc: [
    {
      maMH: 'BAA00102',
      tenMH: 'Kinh tế chính trị Mác - Lênin',
      tenLopHP: '19CLC3',
      dtb: 8.5,
      gvlt: 'Nguyễn Tri Phương',
      gvth: 'Nguyễn Lê Hoàng Dũng',
      tinhTrang: 'Qua môn',
    },
    {
      maMH: 'BAA00103',
      tenMH: 'Chủ nghĩa xã hội khoa học',
      tenLopHP: '19CLC3',
      dtb: 8.0,
      gvlt: 'Nguyễn Tri Phương',
      gvth: 'Nguyễn Lê Hoàng Dũng',
      tinhTrang: 'Qua môn',
    },
  ] as StudentSubject[],
} as StudentSubjectsByTerm;

export const ALL_SUBJECTS = {
  monhoc: [
    {
      maMH: 'BAA00102',
      tenMH: 'Kinh tế chính trị Mác - Lênin',
      tenLopHP: '19CLC3',
      dtb: 8.5,
      gvlt: 'Nguyễn Tri Phương',
      gvth: 'Nguyễn Lê Hoàng Dũng',
      tinhTrang: 'Qua môn',
    },
    {
      maMH: 'BAA00103',
      tenMH: 'Chủ nghĩa xã hội khoa học',
      tenLopHP: '19CLC3',
      dtb: null,
      gvlt: 'Nguyễn Tri Phương',
      gvth: 'Nguyễn Lê Hoàng Dũng',
      tinhTrang: 'Đang học',
    },
    {
      maMH: 'BAA00102',
      tenMH: 'Kinh tế chính trị Mác - Lênin',
      tenLopHP: '19CLC3',
      dtb: 8.5,
      gvlt: 'Nguyễn Tri Phương',
      gvth: 'Nguyễn Lê Hoàng Dũng',
      tinhTrang: 'Qua môn',
    },
    {
      maMH: 'BAA00103',
      tenMH: 'Chủ nghĩa xã hội khoa học',
      tenLopHP: '19CLC3',
      dtb: null,
      gvlt: 'Nguyễn Tri Phương',
      gvth: 'Nguyễn Lê Hoàng Dũng',
      tinhTrang: 'Đang học',
    },
  ] as StudentSubject[],
} as StudentAllSubjects;

export const TRAINING_POINT_BY_TERM = {
  drl: 8,
  xepLoai: 'Giỏi',
} as StudentTrainingPoint;

export const TRAINING_POINT = {
  drl: 9,
  xepLoai: 'Xuất sắc',
} as StudentTrainingPoint;

export const ALL_TERMS = {
  hocKyNamHoc: [
    { maHK: 1, hocKy: 1, namHocBD: 2019 },
    { maHK: 2, hocKy: 2, namHocBD: 2019 },
    { maHK: 3, hocKy: 3, namHocBD: 2019 },
    { maHK: 4, hocKy: 1, namHocBD: 2020 },
    { maHK: 5, hocKy: 2, namHocBD: 2020 },
  ] as StudentTerm[],
} as StudentAllTerms;

export const AVERAGE_POINT_BY_TERM = {
  dtbTong: 9.0,
  xepLoai: 'Xuất sắc',
} as StudentAveragePoint;

export const AVERAGE_POINT = {
  dtbTong: 8.5,
  xepLoai: 'Giỏi',
} as StudentAveragePoint;

export const STUDENT_PARENT_INFO_LIST = {
  dsPhuHuynh: [
    {
      maPH: 1,
      tenPH: 'Nguyễn Văn B',
      quanHe: 'Cha',
      sdt: '0123456789',
      sua: true,
      lienHePH: [
        {
          maLHPH: 1,
          mxh: 'Facebook',
          url: 'abc',
        },
      ],
    },
    {
      maPH: 2,
      tenPH: 'Nguyễn Thị C',
      quanHe: 'Mẹ',
      sdt: '0123456789',
      sua: true,
      lienHePH: [
        {
          maLHPH: 1,
          mxh: 'Facebook',
          url: 'abc',
        },
      ],
    },
  ],
} as StudentParentInfoList;

export const STUDENT_ADD_CONTACT_RESPONSE = {
  maLHSV: 1,
  maSV: '19127000',
  mxh: 'Facebook',
  url: 'abc',
} as StudentContactResponse;

export const STUDENT_EDIT_CONTACT_RESPONSE = {
  maLHSV: 1,
  maSV: '19127000',
  mxh: 'Facebook',
  url: 'abc',
} as StudentContactResponse;

export const STUDENT_PARENT_INFO_RESPONSE = {
  maPH: 1,
  tenPH: 'Nguyễn Văn B',
  quanHe: 'Cha',
  sdt: '0123456789',
  sua: true,
  lienHePH: [
    {
      maLHPH: 1,
      mxh: 'Facebook',
      url: 'abc',
    },
  ],
} as StudentParentInfo;
export const STUDENT_NOTE_LIST = {
  danhSachGhiChu: [
    {
      maGC: 1,
      tag: ['Học tập'],
      tieuDe: 'Ghi chú ngày 31/12/2022',
      noiDung: 'Cần cải thiện điểm số',
      thoiGianTao: '31/12/2022 15:11',
      thoiGianSua: '31/12/2022 15:11',
    },
    {
      maGC: 2,
      tag: ['Học tập', 'Chuyên cần'],
      tieuDe: 'Ghi chú ngày 31/12/2022',
      noiDung: 'Cần đi học nhiều hơn',
      thoiGianTao: '31/12/2022 15:11',
      thoiGianSua: '31/12/2022 15:11',
    },
    {
      maGC: 3,
      tag: ['Học tập'],
      tieuDe: 'Ghi chú ngày 31/12/2022',
      noiDung: 'Áp lực học tập',
      thoiGianTao: '31/12/2022 15:11',
      thoiGianSua: '31/12/2022 15:11',
    },
    {
      maGC: 4,
      tag: ['Phụ huynh'],
      tieuDe: 'Ghi chú ngày 31/12/2022',
      noiDung: 'Cần liên hệ phụ huynh',
      thoiGianTao: '31/12/2022 15:11',
      thoiGianSua: '31/12/2022 15:11',
    },
  ],
} as StudentNoteList;
export const STUDENT_OVERVIEW_RESULT = {
  tenCN: 'Kỹ thuật phần mềm',
  daiCuong: 56,
  coSoNganh: 38,
  chuyenNganh: 12,
  tuChonChuyenNganh: 8,
  tuChonTuDo: 4,
  totNghiep: 0,
  tongTC: 124,
  dtb: 7.68,
} as StudentOverviewResult;

export const STUDENT_DETAIL_SUBJECTS_RESULT = {
  tichLuy: 11,
  monHoc: [
    {
      maMH: 'BAA00101',
      tenMH: 'Triết học Mác-Lênin',
      soTC: 3,
      namHoc: 2019,
      hocKy: 2,
      diem: 7.5,
    },
    {
      maMH: 'BAA00101',
      tenMH: 'Triết học Mác-Lênin',
      soTC: 3,
      namHoc: 2019,
      hocKy: 2,
      diem: 7.5,
    },
    {
      maMH: 'BAA00101',
      tenMH: 'Triết học Mác-Lênin',
      soTC: 3,
      namHoc: 2019,
      hocKy: 2,
      diem: 7.5,
    },
    {
      maMH: 'BAA00101',
      tenMH: 'Triết học Mác-Lênin',
      soTC: 3,
      namHoc: 2019,
      hocKy: 2,
      diem: 7.5,
    },
  ],
} as StudentDetailSubjectsResult;
