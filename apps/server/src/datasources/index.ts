import FileAPI from './file-api';
import HomeroomAPI from './homeroom-api';

export interface DataSources {
  homeroomAPI: HomeroomAPI;
  fileAPI: FileAPI;
}

function getDataSources() {
  const dataSources = {
    homeroomAPI: new HomeroomAPI(),
    fileAPI: new FileAPI(),
  };

  return dataSources;
}

export default getDataSources;
