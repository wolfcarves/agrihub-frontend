/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TagList } from '../models/TagList';
import type { TagsSchema } from '../models/TagsSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TagsService {

    /**
     * Search tags
     * @param key Search key
     * @returns TagsSchema Success
     * @throws ApiError
     */
    public static getApiTagsSearch(
key?: string,
): CancelablePromise<TagsSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/tags/search',
            query: {
                'key': key,
            },
            errors: {
                500: `Server Error`,
            },
        });
    }

    /**
     * Get a list of tags
     * @param search Search term for tags (optional)
     * @param page Page number (optional)
     * @param perpage Number of tags per page (optional)
     * @param filter Sorting filter for tags (optional, default 'name')
     * @returns TagList Success. Returns a list of tags.
     * @throws ApiError
     */
    public static getApiTags(
search?: string,
page?: string,
perpage?: string,
filter?: string,
): CancelablePromise<TagList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/tags',
            query: {
                'search': search,
                'page': page,
                'perpage': perpage,
                'filter': filter,
            },
            errors: {
                500: `Server Error`,
            },
        });
    }

}
