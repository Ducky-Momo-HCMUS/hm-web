import { DataSources } from '../datasources';
import { RequestContext } from '../types';

/**
 * Contain `dataSources` which are automatically assigned by Apollo
 */
export interface ResolverContext extends RequestContext {
  dataSources: DataSources;
}
