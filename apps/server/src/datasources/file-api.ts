import { ApolloError } from 'apollo-server-express';
import FormData from 'form-data';

import { MutationUploadDocumentArgs } from '../generated-types';
import { SERVICES_BASE_URL } from '../utils/config';

import { BaseDataSource } from './base-data-source';

class FileAPI extends BaseDataSource {
  constructor(baseUrl: string = SERVICES_BASE_URL) {
    super();
    this.baseURL = baseUrl;
  }

  public async uploadDocument(payload: MutationUploadDocumentArgs) {
    const { file, input } = payload;
    const awaitedFile = await file;
    const { createReadStream, filename } = awaitedFile;
    const formData = new FormData();
    formData.append('file', createReadStream(), filename);
    formData.append('namHoc', input.namHoc ?? '');
    formData.append('hocKy', input.hocKy ?? '');
    formData.append('maMH', input.maMH ?? '');
    formData.append('tenLopHP', input.tenLopHP ?? '');
    try {
      const uploadedDocument = await this.post(
        `v1/files/${input.type}`,
        formData
      );
      return uploadedDocument;
    } catch (error) {
      throw this.handleError(error as ApolloError);
    }
  }
}

export default FileAPI;
