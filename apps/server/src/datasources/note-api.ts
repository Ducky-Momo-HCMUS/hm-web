import { ApolloError } from 'apollo-server-express';

import { QueryNoteDetailArgs } from '../generated-types';
import { NOTE_DETAIL } from '../mocks/note';
import { CORE_BASE_URL } from '../utils/config';

import { BaseDataSource } from './base-data-source';

class NoteAPI extends BaseDataSource {
  constructor(baseUrl: string = CORE_BASE_URL) {
    super();
    this.baseURL = baseUrl;
  }

  public async getNoteDetail({ noteId }: QueryNoteDetailArgs) {
    try {
      // const noteDetail = await this.get(
      //   `v1/notes/:id`,
      //   {
      //     id: noteId,
      //   },
      // );
      console.log('params', noteId);
      return NOTE_DETAIL;
    } catch (error) {
      console.error('Error: cannot fetch note detail');
      throw this.handleError(error as ApolloError);
    }
  }
}

export default NoteAPI;
