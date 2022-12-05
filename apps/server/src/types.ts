import { IncomingHttpHeaders } from 'http';

export interface RequestContext {
  headers: IncomingHttpHeaders;
}
