import merge from 'lodash.merge';

import { accountResolver } from './account-resolvers';
import { authResolvers } from './auth-resolvers';
import { classroomResolver } from './classroom-resolvers';
import { courseResolver } from './course-resolvers';
import { fileResolver } from './file-resolvers';
import { homeroomResolver } from './homeroom-resolvers';
import { noteResolver } from './note-resolvers';
import { studentResolver } from './student-resolvers';
import { tagResolver } from './tag-resolvers';
import { teacherResolver } from './teacher-resolvers';

export default merge(
  authResolvers,
  homeroomResolver,
  studentResolver,
  noteResolver,
  tagResolver,
  accountResolver,
  fileResolver,
  teacherResolver,
  courseResolver,
  classroomResolver
);
