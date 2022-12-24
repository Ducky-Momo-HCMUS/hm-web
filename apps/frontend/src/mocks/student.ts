import { Contact } from '../generated-types';
import { AcademicResultDetail, RegisteredSubjectsData } from '../types';

export const REGISTERED_SUBJECTS_DATA: RegisteredSubjectsData[] = [
  {
    subjectId: 'BAA00102',
    subjectName: 'Kinh tế chính trị Mác - Lênin',
    subjectClass: '19CLC3',
    status: 'Đang học',
    averagePoint: null,
    theoryTeacher: 'Nguyễn Tri Phương',
    practiceTeacher: 'Nguyễn Lê Hoàng Dũng',
  },
  {
    subjectId: 'BAA00103',
    subjectName: 'Chủ nghĩa xã hội khoa học',
    subjectClass: '19CLC3',
    status: 'Rớt môn',
    averagePoint: 4.5,
    theoryTeacher: 'Đinh Bá Tiến',
    practiceTeacher: 'Nguyễn Lê Hoàng Dũng',
  },
  {
    subjectId: 'CSC10003',
    subjectName: 'Chủ nghĩa xã hội khoa học',
    subjectClass: '19CLC3',
    status: 'Qua môn',
    averagePoint: 5.6,
    theoryTeacher: 'Nguyễn Tiến Trung',
    practiceTeacher: 'Trần Khả Hân',
  },
];

export const STUDENT_CONTACTS_DATA: Contact[] = [
  {
    mxh: 'Nguyen Huy Anh Thu - Facebook',
    url: 'fb',
  },
  {
    mxh: 'Nguyen Huy Anh Thu - Instagram',
    url: 'ins',
  },
];

export const ACADEMIC_INFO = [
  {
    title: 'Chuyên ngành',
    content: 'Kỹ thuật phần mềm',
  },
  {
    title: 'Giáo dục đại cương',
    content: '56/56',
  },
  {
    title: 'Kiến thức cơ sở ngành',
    content: '38/38',
  },
  {
    title: 'Kiến thức bắt buộc ngành',
    content: '12/16',
  },
  {
    title: 'Kiến thức tự chọn ngành',
    content: '8/8',
  },
  {
    title: 'Kiến thức tự chọn tự do',
    content: '4',
  },

  {
    title: 'Kiến thức tốt nghiệp',
    content: '0/10',
  },
  {
    title: 'Tổng tín chỉ tích luỹ',
    content: '124/138',
  },
  {
    title: 'Điểm trung bình',
    content: 7.68,
  },
];

export const LY_LUAN_CHINH_TRI_DATA = [
  {
    maMH: 'BAA00101',
    tenMH: 'Triết học Mác-Lênin',
    soTC: 3,
    namHocBD: 2019,
    hocKy: 2,
    dtb: 8,
  },
  {
    maMH: 'BAA00101',
    tenMH: 'Triết học Mác-Lênin',
    soTC: 3,
    namHocBD: 2019,
    hocKy: 2,
    dtb: 8,
  },
  {
    maMH: 'BAA00101',
    tenMH: 'Triết học Mác-Lênin',
    soTC: 3,
    namHocBD: 2019,
    hocKy: 2,
    dtb: 8,
  },
  {
    maMH: 'BAA00101',
    tenMH: 'Triết học Mác-Lênin',
    soTC: 3,
    namHocBD: 2019,
    hocKy: 2,
    dtb: 8,
  },
] as AcademicResultDetail[];

export const KHOA_HOC_XA_HOI_DATA = [
  {
    maMH: 'BAA00004',
    tenMH: 'Pháp luật đại cương',
    soTC: 3,
    namHocBD: 2019,
    hocKy: 2,
    dtb: 8,
  },
  {
    maMH: 'BAA00005',
    tenMH: 'Kinh tế đại cương',
    soTC: 2,
    namHocBD: 2019,
    hocKy: 2,
    dtb: 8,
  },
] as AcademicResultDetail[];

export const KHOA_HOC_TU_NHIEN_DATA = [
  {
    maMH: 'BAA00101',
    tenMH: 'Vật lý đại cương 1',
    soTC: 2,
    namHocBD: 2019,
    hocKy: 2,
    dtb: 8,
  },
  {
    maMH: 'BAA00101',
    tenMH: 'Vật lý đại cương 1',
    soTC: 2,
    namHocBD: 2019,
    hocKy: 2,
    dtb: 8,
  },
  {
    maMH: 'BAA00101',
    tenMH: 'Vật lý đại cương 1',
    soTC: 2,
    namHocBD: 2019,
    hocKy: 2,
    dtb: 8,
  },
  {
    maMH: 'BAA00101',
    tenMH: 'Vật lý đại cương 1',
    soTC: 2,
    namHocBD: 2019,
    hocKy: 2,
    dtb: 8,
  },
  {
    maMH: 'BAA00101',
    tenMH: 'Vật lý đại cương 1',
    soTC: 2,
    namHocBD: 2019,
    hocKy: 2,
    dtb: 8,
  },
] as AcademicResultDetail[];

export const GIAO_DUC_THE_CHAT_DATA = [
  {
    maMH: 'BAA00004',
    tenMH: 'Thể dục 1',
    soTC: 4,
    namHocBD: 2019,
    hocKy: 2,
    dtb: 8,
  },
  {
    maMH: 'BAA00005',
    tenMH: 'Thể dục 2',
    soTC: 4,
    namHocBD: 2019,
    hocKy: 2,
    dtb: 8,
  },
] as AcademicResultDetail[];

export const CO_SO_NGANH_DATA = [
  {
    maMH: 'BAA00004',
    tenMH: 'Cở sở trí tuệ nhân tạo',
    soTC: 4,
    namHocBD: 2019,
    hocKy: 2,
    dtb: 8,
  },
  {
    maMH: 'BAA00005',
    tenMH: 'Cơ sở dữ liệu',
    soTC: 4,
    namHocBD: 2019,
    hocKy: 2,
    dtb: 8,
  },
  {
    maMH: 'BAA00005',
    tenMH: 'Hệ điều hành',
    soTC: 4,
    namHocBD: 2019,
    hocKy: 2,
    dtb: 8,
  },
  {
    maMH: 'BAA00005',
    tenMH: 'Nhập môn công nghệ thông tin',
    soTC: 4,
    namHocBD: 2019,
    hocKy: 2,
    dtb: 8,
  },
] as AcademicResultDetail[];

export const BAT_BUOC_NGANH_DATA = [
  {
    maMH: 'BAA00004',
    tenMH: 'Phân tích thiết kế hệ thống thông tin',
    soTC: 4,
    namHocBD: 2019,
    hocKy: 2,
    dtb: 8,
  },
  {
    maMH: 'BAA00005',
    tenMH: 'Hệ quản trị cơ sở dữ liệu',
    soTC: 4,
    namHocBD: 2019,
    hocKy: 2,
    dtb: 8,
  },
  {
    maMH: 'BAA00005',
    tenMH: 'Cơ sở dữ liệu nâng cao',
    soTC: 4,
    namHocBD: 2019,
    hocKy: 2,
    dtb: 8,
  },
] as AcademicResultDetail[];

export const TU_CHON_NGANH_DATA = [
  {
    maMH: 'BAA00004',
    tenMH: 'Hệ thống thông tin doanh nghiệp',
    soTC: 4,
    namHocBD: 2019,
    hocKy: 2,
    dtb: 8,
  },
  {
    maMH: 'BAA00005',
    tenMH: 'Kỹ năng mềm',
    soTC: 4,
    namHocBD: 2019,
    hocKy: 2,
    dtb: 8,
  },
] as AcademicResultDetail[];

export const TU_CHON_TU_DO_DATA = [
  {
    maMH: 'BAA00004',
    tenMH: 'Phân tích quản lý yêu cầu phần mềm',
    soTC: 4,
    namHocBD: 2019,
    hocKy: 2,
    dtb: 8,
  },
] as AcademicResultDetail[];

export const TOT_NGHIEP_DATA = [] as AcademicResultDetail[];
