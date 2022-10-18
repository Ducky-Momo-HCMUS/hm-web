import BookApi from './book-api';

export interface DataSources {
  bookAPI: BookApi;
}

function getDataSources() {
  const dataSources = {
    bookApi: new BookApi(),
  };

  return dataSources;
}

export default getDataSources;
