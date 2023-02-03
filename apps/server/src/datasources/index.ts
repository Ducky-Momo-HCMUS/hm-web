import AccountAPI from './account-api';
import AuthAPI from './auth-api';
import FileAPI from './file-api';
import HomeroomAPI from './homeroom-api';
import NoteAPI from './note-api';
import StudentAPI from './student-api';
import TagAPI from './tag-api';
import TeacherAPI from './teacher-api';

export interface DataSources {
  homeroomAPI: HomeroomAPI;
  studentAPI: StudentAPI;
  authAPI: AuthAPI;
  noteAPI: NoteAPI;
  tagAPI: TagAPI;
  accountAPI: AccountAPI;
  fileAPI: FileAPI;
  teacherAPI: TeacherAPI;
}

function dataSources() {
  return {
    homeroomAPI: new HomeroomAPI(),
    authAPI: new AuthAPI(),
    studentAPI: new StudentAPI(),
    noteAPI: new NoteAPI(),
    tagAPI: new TagAPI(),
    accountAPI: new AccountAPI(),
    fileAPI: new FileAPI(),
    teacherAPI: new TeacherAPI(),
  };
}

export default dataSources;
