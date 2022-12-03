import HomeroomAPI from './homeroom-api';

export interface DataSources {
  homeroomAPI: HomeroomAPI;
}

function getDataSources() {
  const dataSources = {
    homeroomAPI: new HomeroomAPI(),
  };

  return dataSources;
}

export default getDataSources;
