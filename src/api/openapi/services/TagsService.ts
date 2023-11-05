/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TagsSchema } from '../models/TagsSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TagsService {

    /**
     * Search tags
     * @param key Search key'
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

}
