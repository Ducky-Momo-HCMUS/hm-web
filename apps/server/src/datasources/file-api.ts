import { ApolloError, UserInputError } from 'apollo-server-express';
import FormData from 'form-data';

import {
  MutationUploadDocumentArgs,
  QueryImportHistoryArgs,
  UploadDocumentInput,
} from '../generated-types';
import { SERVICES_BASE_URL } from '../utils/config';
import { logger } from '../utils/logger';

import { BaseDataSource } from './base-data-source';

class FileAPI extends BaseDataSource {
  constructor(baseUrl: string = SERVICES_BASE_URL) {
    super();
    this.baseURL = baseUrl;
  }

  public async getImportHistory({ fileType }: QueryImportHistoryArgs) {
    try {
      const res = await this.get(`v1/history-import/${fileType}`);
      return res;
    } catch (error) {
      logger.error('Error: cannot fetch note detail');
      throw this.handleError(error as ApolloError);
    }
  }

  public async uploadDocument(payload: MutationUploadDocumentArgs) {
    const { file, input } = payload;
    const awaitedFile = await file;
    const { createReadStream, filename } = awaitedFile;
    const formData = this.createFormData(input);
    if (!filename) {
      throw new UserInputError('Missing file');
    }
    formData.append('file', createReadStream(), filename);
    try {
      const uploadedDocument = await this.post(
        `v1/files/${input.type}`,
        formData
      );
      return uploadedDocument;
    } catch (error) {
      logger.error('Error: cannot import file');
      throw this.handleError(error as ApolloError);
    }
  }

  // TODO add typing for file
  private createFormData(input: UploadDocumentInput) {
    const formData = new FormData();
    Object.keys(input).forEach((key) => {
      if (!input[key]) {
        throw new UserInputError(`Missing ${key}`);
      }
      formData.append(key, input[key]);
    });
    return formData;
  }
}

export default FileAPI;
