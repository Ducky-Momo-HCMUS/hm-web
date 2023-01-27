import { ApolloError } from 'apollo-server-express';

import {
  MutationNoteAddArgs,
  MutationNoteDeleteArgs,
  MutationNoteEditArgs,
  QueryNoteDetailArgs,
} from '../generated-types';
import { NOTE_DETAIL, NOTE_LIST } from '../mocks/note';
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

  public async getNoteList() {
    try {
      // const noteList = await this.get(
      //   'v1/notes',
      // );

      return NOTE_LIST;
    } catch (error) {
      console.error('Error: cannot fetch note list');
      throw this.handleError(error as ApolloError);
    }
  }

  public async addNote({ payload }: MutationNoteAddArgs) {
    try {
      // const res = await this.post(`v1/notes`, payload);
      console.log('payload', payload);
      return { status: 200 };
    } catch (error) {
      console.error('Error: cannot add new note');
      throw this.handleError(error as ApolloError);
    }
  }

  public async editNote({ noteId, payload }: MutationNoteEditArgs) {
    try {
      // const response = await this.put(
      //   `v1/notes/${noteId}`,
      //   {
      //     payload
      //   },
      // );
      console.log('params', noteId, payload);
      return { status: 200 };
    } catch (error) {
      console.error('Error: cannot edit note');
      throw this.handleError(error as ApolloError);
    }
  }

  public async deleteNote({ noteId }: MutationNoteDeleteArgs) {
    try {
      // const response = await this.delete(
      //   `v1/notes/${noteId}`,
      // );
      console.log('params', noteId);
      return { status: 200 };
    } catch (error) {
      console.error('Error: cannot delete note');
      throw this.handleError(error as ApolloError);
    }
  }
}

export default NoteAPI;
