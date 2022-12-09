import AuthAPI from './auth-api';
import HomeroomAPI from './homeroom-api';

export interface DataSources {
  homeroomAPI: HomeroomAPI;
  authAPI: AuthAPI;
}

function getDataSources() {
  const dataSources: DataSources = {
    homeroomAPI: new HomeroomAPI(),
    authAPI: new AuthAPI(),
  };

  return dataSources;
}

export default getDataSources;
