import { JwtPayload as _JwtPayload } from 'jsonwebtoken';

export interface RolesContext {
  admin?: boolean;
  gvcn?: boolean;
  gvu?: boolean;
}

export interface UserContext extends RolesContext {
  id: string;
  email: string;
}

export interface RequestContext {
  authorization?: string;
  user?: UserContext;
}

export interface JwtPayload extends _JwtPayload {
  iss?: string | undefined;
  sub: string;
  aud?: string | string[] | undefined;
  exp?: number | undefined;
  nbf?: number | undefined;
  iat?: number | undefined;
  jti?: string | undefined;
  email: string;
}

export interface DataSourceResponse<T = object> {
  data: T;
}

interface HREF {
  href: string;
}

export interface DataSourcePaginatedResponse extends DataSourceResponse<any[]> {
  page: number;
  total: number;
  size: number;
  links: {
    self: HREF;
    next: HREF;
    last: HREF;
  };
}

export interface DataSourceErrorResponse {
  errorId: string;
  message: string;
  detail?: object;
}

export interface DataSourceGenericResponse<Success = object>
  extends Partial<DataSourceResponse<Success>>,
    Partial<DataSourceErrorResponse> {}
