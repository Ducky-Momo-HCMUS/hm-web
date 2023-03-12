/* eslint-disable prefer-object-spread */
import { ApolloError, UserInputError } from 'apollo-server-express';
import FormData from 'form-data';

import {
  MutationNoteAddArgs,
  MutationNoteDeleteArgs,
  MutationNoteEditArgs,
  NoteAddInput,
  NoteEditInput,
  QueryNoteDetailArgs,
  QueryNoteSearchArgs,
} from '../generated-types';
import { SERVICES_BASE_URL } from '../utils/config';
import { logger } from '../utils/logger';

import { BaseDataSource } from './base-data-source';

class NoteAPI extends BaseDataSource {
  constructor(baseUrl: string = SERVICES_BASE_URL) {
    super();
    this.baseURL = baseUrl;
  }

  public async getNoteDetail({ noteId }: QueryNoteDetailArgs) {
    try {
      const res = await this.get(`v1/notes/${noteId}`);
      return res;
    } catch (error) {
      logger.error('Error: cannot fetch note detail');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getNoteList() {
    try {
      const res = await this.get('v1/notes');
      return res;
    } catch (error) {
      logger.error('Error: cannot fetch note list');
      throw this.handleError(error as ApolloError);
    }
  }

  public async searchNote({
    tieuDe,
    maSV,
    tenSV,
    start,
    end,
    maSH,
    maTag,
    page,
    size,
  }: QueryNoteSearchArgs) {
    try {
      const args = Object.assign(
        {},
        tieuDe && { tieuDe },
        maSV && { maSV },
        tenSV && { tenSV },
        start && { start },
        end && { end },
        maSH && { maSH },
        maTag && { maTag },
        { page },
        { size }
      );
      let queryString = '';
      Object.keys(args).forEach((arg, index) => {
        queryString += `${arg}=${args[arg]}`;

        if (index !== Object.keys(args).length - 1) {
          queryString += '&';
        }
      });

      const res = await this.get(
        `v1/notes${queryString ? `?${queryString}` : ''}`
      );
      return res;
    } catch (error) {
      logger.error('Error: cannot search note');
      throw this.handleError(error as ApolloError);
    }
  }

  public async addNote({ payload }: MutationNoteAddArgs) {
    const { images, ...other } = payload;
    const formData = this.createFormData(other);
    if (images) {
      const awaitedImages = await Promise.all(images as any);
      awaitedImages.forEach((image) => {
        const { createReadStream, filename } = image;
        if (!filename) {
          throw new UserInputError('Missing file');
        }
        formData.append('images', createReadStream(), filename);
      });
    }

    try {
      const res = await this.post(`v1/notes`, formData);
      return res;
    } catch (error) {
      logger.error('Error: cannot add new note');
      throw this.handleError(error as ApolloError);
    }
  }

  private createFormData(
    input: Omit<NoteAddInput, 'images'> | Omit<NoteEditInput, 'images'>
  ) {
    const formData = new FormData();
    Object.keys(input).forEach((key) => {
      if (!input[key]) {
        throw new UserInputError(`Missing ${key}`);
      }

      if (key === 'maTag') {
        input[key].forEach((tag) => {
          formData.append('maTag[]', tag);
        });
        return;
      }

      if (key === 'removeTagIds') {
        input[key].forEach((tag) => {
          formData.append('removeTagIds[]', tag);
        });
        return;
      }

      if (key === 'addTagIds') {
        input[key].forEach((tag) => {
          formData.append('addTagIds[]', tag);
        });
        return;
      }

      if (key === 'removeImageIds') {
        input[key].forEach((image) => {
          formData.append('removeImageIds[]', image);
        });
        return;
      }

      formData.append(key, input[key]);
    });
    return formData;
  }

  public async editNote({ noteId, payload }: MutationNoteEditArgs) {
    const { images, ...other } = payload;
    const formData = this.createFormData(other);
    if (images) {
      const awaitedImages = await Promise.all(images as any);
      awaitedImages.forEach((image) => {
        const { createReadStream, filename } = image;
        if (!filename) {
          throw new UserInputError('Missing file');
        }
        formData.append('images', createReadStream(), filename);
      });
    }

    try {
      const res = await this.patch(`v1/notes/${noteId}`, formData);
      return res;
    } catch (error) {
      logger.error('Error: cannot edit note');
      throw this.handleError(error as ApolloError);
    }
  }

  public async deleteNote({ noteId }: MutationNoteDeleteArgs) {
    try {
      const res = await this.delete(`v1/notes/${noteId}`);
      return res;
    } catch (error) {
      logger.error('Error: cannot delete note');
      throw this.handleError(error as ApolloError);
    }
  }
}

export default NoteAPI;
