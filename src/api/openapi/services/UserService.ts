/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TagsSchema } from '../models/TagsSchema';
import type { UserSchema } from '../models/UserSchema';
import type { UserUpdateProfile } from '../models/UserUpdateProfile';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * Search User
     * @param username Search key
     * @returns UserSchema Success
     * @throws ApiError
     */
    public static getApiUserProfile(
username: string,
): CancelablePromise<UserSchema> {
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

    /**
     * Update user profile
     * @param id User ID
     * @param formData 
     * @returns TagsSchema Success
     * @throws ApiError
     */
    public static putApiUserProfile(
id: string,
formData: UserUpdateProfile,
): CancelablePromise<TagsSchema> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/user/profile/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                401: `Unauthorized`,
                500: `Server Error`,
            },
        });
    }

}
