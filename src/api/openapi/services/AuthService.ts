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
     * authenticate
     * @param requestBody 
     * @returns UserAuthResponse Success
     * @throws ApiError
     */
    public static postApiAuthLogin(requestBody: UserLoginSchema,): CancelablePromise<UserAuthResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Validation Error`,
                401: `Authorized`,
                500: `Server Error`,
            },
        });
    }

    /**
     * get current user from session
     * @returns UserSchema Success
     * @throws ApiError
     */
    public static getApiAuthMe(): CancelablePromise<UserSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/auth/me',
            errors: {
                401: `Authorized`,
                500: `Server Error`,
            },
        });
    }

}
