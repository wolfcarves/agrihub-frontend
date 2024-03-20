/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NewTagRequestBody } from '../models/NewTagRequestBody';
import type { NewTagResponse } from '../models/NewTagResponse';
import type { TagList } from '../models/TagList';
import type { TagSchema } from '../models/TagSchema';
import type { TagsSchema } from '../models/TagsSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TagsService {

    /**
     * Create a new tag
     * @returns NewTagResponse Successful response
     * @throws ApiError
     */
    public static postApiTagsCreate({
requestBody,
}: {
requestBody: NewTagRequestBody,
}): CancelablePromise<NewTagResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/tags/create',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Get tag by ID
     * @returns TagSchema Successful response
     * @throws ApiError
     */
    public static getApiTags({
id,
}: {
/**
 * ID of the tag to retrieve
 */
id: string,
}): CancelablePromise<TagSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/tags/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Delete a tag
     * @returns any Tag Deleted Successfully
     * @throws ApiError
     */
    public static deleteApiTags({
id,
}: {
/**
 * The ID of the tag to be deleted
 */
id: string,
}): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/tags/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Search tags
     * @returns TagsSchema Success
     * @throws ApiError
     */
    public static getApiTagsSearch({
key,
}: {
/**
 * Search key
 */
key?: string,
}): CancelablePromise<TagsSchema> {
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
     * @returns TagList Success. Returns a list of tags.
     * @throws ApiError
     */
    public static getApiTags1({
search,
page,
perpage,
filter,
}: {
/**
 * Search term for tags (optional)
 */
search?: string,
/**
 * Page number (optional)
 */
page?: string,
/**
 * Number of tags per page (optional)
 */
perpage?: string,
/**
 * Sorting filter for tags (optional, default 'name')
 */
filter?: string,
}): CancelablePromise<TagList> {
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
