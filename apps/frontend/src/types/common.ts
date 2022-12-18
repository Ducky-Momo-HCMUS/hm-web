export type GenericObject<T = any> = Record<string, T>;
export type Order = 'asc' | 'desc';
export interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'left';
  format?: (value: number) => string;
}
