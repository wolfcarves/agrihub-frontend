/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListUserResponse } from '../models/ListUserResponse';
import type { UserSchema } from '../models/UserSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * Get a list of users
     * @returns ListUserResponse Success. Returns a list of users.
     * @throws ApiError
     */
    public static getApiUserList({
search,
page,
perpage,
filter,
}: {
/**
 * Search term for filtering users
 */
search?: string,
/**
 * Page number for pagination
 */
page?: string,
/**
 * Number of records per page
 */
perpage?: string,
/**
 * Filter criteria for users
 */
filter?: string,
}): CancelablePromise<ListUserResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/list',
            query: {
                'search': search,
                'page': page,
                'perpage': perpage,
                'filter': filter,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Search User
     * @returns UserSchema Success
     * @throws ApiError
     */
    public static getApiUserProfile({
username,
}: {
/**
 * Search key
 */
username: string,
}): CancelablePromise<UserSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/profile/{username}',
            path: {
                'username': username,
            },
            errors: {
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

}
