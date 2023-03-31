import { ApolloError, UserInputError } from 'apollo-server-express';
import FormData from 'form-data';

import {
  MutationUploadDocumentArgs,
  QueryImportHistoryArgs,
  UploadDocumentInput,
  UploadFileConfig,
} from '../generated-types';
import { SERVICES_BASE_URL } from '../utils/config';
import { logger } from '../utils/logger';

import { BaseDataSource } from './base-data-source';

class FileAPI extends BaseDataSource {
  constructor(baseUrl: string = SERVICES_BASE_URL) {
    super();
    this.baseURL = baseUrl;
  }

  public async getTermList() {
    try {
      const res = await this.get('v1/terms');
      return res;
    } catch (error) {
      logger.error('Error: cannot fetch term list ');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getImportHistory({ fileType }: QueryImportHistoryArgs) {
    try {
      const res = await this.get(`v1/files/history/${fileType}`);
      return res;
    } catch (error) {
      logger.error('Error: cannot fetch import history');
      throw this.handleError(error as ApolloError);
    }
  }

  public async getColumnHeaderList({ fileType }: QueryImportHistoryArgs) {
    try {
      const res = await this.get(`v1/files/config/${fileType}`);

      return res;
    } catch (error) {
      logger.error('Error: cannot fetch column header list');
      throw this.handleError(error as ApolloError);
    }
  }

  public async uploadDocument(payload: MutationUploadDocumentArgs) {
    const { file, input, config } = payload;
    const awaitedFile = await file;
    const { createReadStream, filename } = awaitedFile;
    const formData = this.createFormData(input, config);
    if (!filename) {
      throw new UserInputError('Missing file');
    }
    formData.append('file', createReadStream(), filename);

    try {
      const uploadedDocument = await this.post(
        `v1/files/upload/${input.type}`,
        formData
      );
      return uploadedDocument;
    } catch (error) {
      logger.error('Error: cannot import file');
      throw this.handleError(error as ApolloError);
    }
  }

  // TODO add typing for file
  private createFormData(input: UploadDocumentInput, config: UploadFileConfig) {
    const formData = new FormData();

    Object.keys(input).forEach((key) => {
      if (input[key] === undefined) {
        throw new UserInputError(`Missing ${key}`);
      }
    });

    Object.keys(config).forEach((key) => {
      if (config[key] === undefined) {
        throw new UserInputError(`Missing ${key}`);
      }
    });

    const metadata = JSON.stringify({
      ...input,
      ...config,
    });

    formData.append('metadata', metadata);
    return formData;
  }
}

export default FileAPI;
