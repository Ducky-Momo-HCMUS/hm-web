import { ApolloError } from 'apollo-server-express';
import FormData from 'form-data';

import { MutationAddPhotoArgs } from '../generated-types';
import { BASE_URL } from '../utils/config';

import { BaseDataSource } from './base-data-source';

class FileAPI extends BaseDataSource {
  public baseURL = BASE_URL;

  public async uploadPhoto(payload: MutationAddPhotoArgs, accessToken: string) {
    const { file } = payload;

    const { createReadStream, filename, mimetype, size } = await file;

    const formData = new FormData();
    formData.append('file', createReadStream(), {
      filename,
      contentType: mimetype,
      knownLength: size,
    });

    const headers = this.getHeaders(accessToken);

    try {
      const uploadedPhoto = await this.post('/v1/files', formData, {
        headers,
      });
      return {
        code: '200',
        success: true,
        message: 'Upload photo successfully',
        documentUniqueId: uploadedPhoto.id,
      };
    } catch (error) {
      console.error('Error: cannot upload photot');
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
