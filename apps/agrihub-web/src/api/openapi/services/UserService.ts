/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserAuthResponse } from '../models/UserAuthResponse';
import type { UserAuthSchema } from '../models/UserAuthSchema';
import type { UserRegisterSchema } from '../models/UserRegisterSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * Authenticate a User
     * @param requestBody 
     * @returns UserAuthResponse Success
     * @throws ApiError
     */
    public static postV1ApiAuthLogin(
requestBody: UserAuthSchema,
): CancelablePromise<UserAuthResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/api/auth/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Authorized`,
                403: `Authorized`,
            },
        });
    }

    /**
     * Register a user
     * @param requestBody 
     * @returns UserAuthResponse Success
     * @throws ApiError
     */
    public static postV1ApiAuthRegister(
requestBody: UserRegisterSchema,
): CancelablePromise<UserAuthResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/api/auth/register',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Validation Error`,
            },
        });
    }

}
