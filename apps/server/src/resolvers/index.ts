import merge from 'lodash.merge';

import { authResolvers } from './auth-resolvers';
import { homeroomResolver } from './homeroom-resolvers';

export default merge(authResolvers, homeroomResolver);
