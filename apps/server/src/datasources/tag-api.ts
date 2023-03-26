import { ApolloError } from 'apollo-server-express';

import {
  MutationTagAddArgs,
  MutationTagDeleteArgs,
  MutationTagEditArgs,
  QueryTagListArgs,
} from '../generated-types';
import { SERVICES_BASE_URL } from '../utils/config';
import { logger } from '../utils/logger';

import { BaseDataSource } from './base-data-source';

class TagAPI extends BaseDataSource {
  constructor(baseUrl: string = SERVICES_BASE_URL) {
    super();
    this.baseURL = baseUrl;
  }

  public async getTagList({ page, size }: QueryTagListArgs) {
    const params = new URLSearchParams({
      page: page?.toString(),
      size: size?.toString(),
    } as Record<string, string>);

    try {
      const tagList = await this.get(`v1/tags?${params}`);
      return tagList;
    } catch (error) {
      logger.error('Error: cannot fetch tag list');
      throw this.handleError(error as ApolloError);
    }
  }

  public async addTag({ payload }: MutationTagAddArgs) {
    try {
      const tag = await this.post('v1/tags', payload);
      return tag;
    } catch (error) {
      logger.error('Error: cannot add new tag');
      throw this.handleError(error as ApolloError);
    }
  }

  public async editTag({ tagId, payload }: MutationTagEditArgs) {
    try {
      const tag = await this.patch(`v1/tags/${tagId}`, payload);
      return tag;
    } catch (error) {
      logger.error('Error: cannot edit tag');
      throw this.handleError(error as ApolloError);
    }
  }

  public async deleteTag({ tagId }: MutationTagDeleteArgs) {
    try {
      const tag = await this.delete(`v1/tags/${tagId}`);
      return tag;
    } catch (error) {
      logger.error('Error: cannot delete tag');
      throw this.handleError(error as ApolloError);
    }
  }
}

export default TagAPI;
