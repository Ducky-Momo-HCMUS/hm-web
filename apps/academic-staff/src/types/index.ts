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

export interface FileHandlingError {
  message: string;
  details: FileErrorDetails;
}

interface FileErrorDetails {
  expected: { key: string; value: string; index: number }[];
  received: any[];
  fieldErrors?: { [key: string]: string[] };
  formErrors?: string[];
}
