import { ExpressContext } from 'apollo-server-express';

import type { RequestContext } from './types';

export default async function context({
  req,
}: ExpressContext): Promise<RequestContext> {
  const { authorization } = req.headers;

  return {
    authorization,
  };
}
