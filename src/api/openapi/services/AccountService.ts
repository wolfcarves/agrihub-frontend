/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserAuthResponse } from '../models/UserAuthResponse';
import type { UserCompletionSchema } from '../models/UserCompletionSchema';
import type { UserProfile } from '../models/UserProfile';
import type { UserRegisterSchema } from '../models/UserRegisterSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AccountService {

    /**
     * Register a user
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiAccountSignup(
requestBody: UserRegisterSchema,
): CancelablePromise<{
message?: string;
user?: {
id?: string;
message?: string;
};
}> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/account/signup',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Validation Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Register a user
     * @returns any Success
     * @throws ApiError
     */
    public static postApiAccountSendVerification(): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/account/send-verification',
            errors: {
                401: `Unauthorized`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @deprecated
     * verify email
     * @param id 
     * @returns any Success
     * @throws ApiError
     */
    public static getApiAccountVerifyEmail(
id: string,
): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/account/verify-email/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Token Expired`,
                500: `Server Error`,
            },
        });
    }

    /**
     * complete user details
     * @param requestBody 
     * @returns UserAuthResponse Success
     * @throws ApiError
     */
    public static postApiAccountProfileCompletion(
requestBody: UserCompletionSchema,
): CancelablePromise<UserAuthResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/account/profile-completion',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Validation Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Setup username and tags
     * @param formData 
     * @returns UserAuthResponse Success
     * @throws ApiError
     */
    public static postApiAccountSetupProfile(
formData: UserProfile,
): CancelablePromise<UserAuthResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/account/setup-profile',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Validation Error`,
                500: `Server Error`,
            },
        });
    }

}
