import AuthAPI from './auth-api';
import HomeroomAPI from './homeroom-api';
import StudentAPI from './student-api';

export interface DataSources {
  homeroomAPI: HomeroomAPI;
  studentAPI: StudentAPI;
  authAPI: AuthAPI;
}

function dataSources() {
  return {
    homeroomAPI: new HomeroomAPI(),
    authAPI: new AuthAPI(),
    studentAPI: new StudentAPI(),
  };
}

export default dataSources;
