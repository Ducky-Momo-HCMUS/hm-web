export type Order = 'asc' | 'desc';
export type TeacherProperty = 'tenGVCN' | 'maSH' | 'email';
export type StudentProperty =
  | 'maSV'
  | 'tenSV'
  | 'maCN'
  | 'tinhTrang'
  | 'sdt'
  | 'emailSV';
export type GenericObject<T = any> = Record<string, T>;
