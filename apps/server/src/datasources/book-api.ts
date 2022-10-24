import { BaseDataSource } from './base-data-source';

class BookApi extends BaseDataSource {
  public getBooks() {
    try {
      const books = [
        {
          title: 'The Awakening',
          author: 'Kate Chopin',
        },
        {
          title: 'City of Glass',
          author: 'Paul Auster',
        },
      ];
      return books;
    } catch (error) {
      console.error('Error: cannot fetch books');
      return error;
    }
  }
}

export default BookApi;
