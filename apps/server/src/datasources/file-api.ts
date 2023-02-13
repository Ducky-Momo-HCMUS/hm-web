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

    const { createReadStream, filename, mimetype, size } = await file.file;

    const stream = createReadStream();

    await new Promise((resolve) => {
      stream.on('data', (data: any) => {
        console.log('DATA**********************');
        console.log(data);
        resolve(() => {
          console.log('done');
        });
      });
    });

    const formData = new FormData();
    formData.append('file', createReadStream(), filename);

    try {
      const uploadedPhoto = await this.post(
        'http://localhost:3001/v1/actors/files/upload',
        formData
      );
      return {
        code: '200',
        success: true,
        message: 'Upload document successfully',
        documentUniqueId: 'DOC1',
      };
    } catch (error) {
      console.error('errorrr', error);
      console.error('Error: cannot upload document');
      throw this.handleError(error as ApolloError);
    }
  }
}

export default FileAPI;
