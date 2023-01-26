import { ApolloError } from 'apollo-server-express';

import { CORE_BASE_URL } from '../utils/config';

import { BaseDataSource } from './base-data-source';

class TagAPI extends BaseDataSource {
  constructor(baseUrl: string = CORE_BASE_URL) {
    super();
    this.baseURL = baseUrl;
  }

  public async getTagList() {
    try {
      const tagList = await this.get('v1/tags');
      return tagList;
    } catch (error) {
      console.error('Error: cannot fetch tag list');
      throw this.handleError(error as ApolloError);
    }
  }
}

export default TagAPI;
