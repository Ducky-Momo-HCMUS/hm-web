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

export interface DataSourceResponse<T = object> {
  data: T;
}

interface HREF {
  href: string;
}

export interface DataSourcePaginatedResponse<T = any[]>
  extends DataSourceResponse<T> {
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

export interface DataSourceGenericResponse<TSuccess = object>
  extends Partial<DataSourceResponse<TSuccess>>,
    Partial<DataSourceErrorResponse> {}

export interface MutationStatusReponse
  extends DataSourceResponse<{ status: number }> {}
