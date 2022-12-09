import AuthAPI from './auth-api';
import HomeroomAPI from './homeroom-api';

export interface DataSources {
  homeroomAPI: HomeroomAPI;
  authAPI: AuthAPI;
}

function dataSources() {
  return {
    homeroomAPI: new HomeroomAPI(),
    authAPI: new AuthAPI(),
  };
}

export default dataSources;
