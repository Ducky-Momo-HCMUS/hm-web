import { ApolloError } from 'apollo-server-express';
import FormData from 'form-data';

import { MutationUploadDocumentArgs } from '../generated-types';
import { SERVICES_BASE_URL } from '../utils/config';
import { logger } from '../utils/logger';

import { BaseDataSource } from './base-data-source';

class FileAPI extends BaseDataSource {
  constructor(baseUrl: string = SERVICES_BASE_URL) {
    super();
    this.baseURL = baseUrl;
  }

  public async uploadDocument(payload: MutationUploadDocumentArgs) {
    const { file, input } = payload;
    const { createReadStream, filename } = await file.file;
    const formData = new FormData();
    formData.append('file', createReadStream(), { filename });

    try {
      const uploadedDocument = await this.post(
        `v1/files/${input.type}`,
        formData,
        {}
      );
      return uploadedDocument;
    } catch (error) {
      logger.error('Error: cannot upload document', error);
      throw this.handleError(error as ApolloError);
    }
  }
}

export default FileAPI;
