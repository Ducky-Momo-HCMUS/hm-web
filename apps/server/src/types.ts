import { IncomingHttpHeaders } from 'http';

export interface RequestContext {
  headers: IncomingHttpHeaders;
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
