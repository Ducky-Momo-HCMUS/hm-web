import merge from 'lodash.merge';

import { authResolvers } from './auth-resolvers';
import { homeroomResolver } from './homeroom-resolvers';
import { noteResolver } from './note-resolvers';
import { studentResolver } from './student-resolvers';

export default merge(
  authResolvers,
  homeroomResolver,
  studentResolver,
  noteResolver
);
