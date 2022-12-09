import { JwtPayload as _JwtPayload } from 'jsonwebtoken';

export interface RequestContext {
  authorization?: string;
  user?: { id: string; email: string };
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

interface Object {
  [key: string]: any;
}

export interface DataSourceResponse {
  data: Object;
}

interface HREF {
  href: string;
}

export interface DataSourcePaginatedResponse extends DataSourceResponse {
  data: any[];
  page: number;
  total: number;
  size: number;
  links: {
    self: HREF;
    next: HREF;
    last: HREF;
  };
}
