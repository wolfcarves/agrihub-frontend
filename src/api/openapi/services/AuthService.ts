/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserAuthResponse } from '../models/UserAuthResponse';
import type { UserLoginSchema } from '../models/UserLoginSchema';
import type { UserSchema } from '../models/UserSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthService {

    /**
     * Authenticate
     * @returns UserAuthResponse Success
     * @throws ApiError
     */
    public static postApiAuthLogin({
requestBody,
}: {
requestBody: UserLoginSchema,
}): CancelablePromise<UserAuthResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Get current user from session
     * @returns UserSchema Success
     * @throws ApiError
     */
    public static getApiAuthMe(): CancelablePromise<UserSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/auth/me',
            errors: {
                401: `Unauthorized`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Delete session token form
     * @returns any Unauthorized
     * @throws ApiError
     */
    public static deleteApiAuthLogout(): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/auth/logout',
            errors: {
                500: `Server Error`,
            },
        });
    }

}
