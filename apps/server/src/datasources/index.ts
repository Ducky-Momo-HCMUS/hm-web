import AuthAPI from './auth-api';
import HomeroomAPI from './homeroom-api';
import NoteAPI from './note-api';
import StudentAPI from './student-api';
import TagAPI from './tag-api';

export interface DataSources {
  homeroomAPI: HomeroomAPI;
  studentAPI: StudentAPI;
  authAPI: AuthAPI;
  noteAPI: NoteAPI;
  tagAPI: TagAPI;
}

function dataSources() {
  return {
    homeroomAPI: new HomeroomAPI(),
    authAPI: new AuthAPI(),
    studentAPI: new StudentAPI(),
    noteAPI: new NoteAPI(),
    tagAPI: new TagAPI(),
  };
}

export default dataSources;
