import { ApolloError } from 'apollo-server-express';
import FormData from 'form-data';

import { MutationUploadDocumentArgs } from '../generated-types';
import { BASE_URL } from '../utils/config';

import { BaseDataSource } from './base-data-source';

class FileAPI extends BaseDataSource {
  public baseURL = BASE_URL;

  public async uploadDocument(
    payload: MutationUploadDocumentArgs,
    accessToken: string
  ) {
    console.log('access token', accessToken);
    const { file } = payload;

    const { createReadStream, filename, mimetype, size } = await file;

    const stream = createReadStream();

    await new Promise((resolve) => {
      stream.on('data', (data) => {
        console.log('DATA**********************');
        console.log(data);
        resolve(() => {
          console.log('done');
        });
      });
    });

    const formData = new FormData();
    formData.append('file', createReadStream(), {
      filename,
      contentType: mimetype,
      knownLength: size,
    });

    // const headers = this.getHeaders(accessToken);

    try {
      const uploadedPhoto = await this.post(
        'http://localhost:3001/v1/actors/files/upload',
        formData,
        {
          headers: formData.getHeaders(),
        }
      );
      return {
        code: '200',
        success: true,
        message: 'Upload photo successfully',
        documentUniqueId: uploadedPhoto.id,
      };
    } catch (error) {
      console.error('errorrr', error);
      console.error('Error: cannot upload document');
      return await this.handleError(error as ApolloError);
    }
  }

  private getHeaders(accessToken: string) {
    const requestHeaders = {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    };

    return requestHeaders;
  }
}

export default FileAPI;
