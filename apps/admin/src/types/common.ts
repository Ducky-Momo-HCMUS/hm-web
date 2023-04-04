export type GenericObject<T = any> = Record<string, T>;
export interface FileHandlingError {
  message: string;
  details: FileErrorDetails;
}

interface FileErrorDetails {
  index: number;
  headers: { key: string; value: string; index: number }[];
  row: any[];
  fieldErrors?: { [key: string]: string[] };
  formErrors?: string[];
}
