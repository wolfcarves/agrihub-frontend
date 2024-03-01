/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NewAdminRequestBody } from '../models/NewAdminRequestBody';
import type { NewAdminResponseData } from '../models/NewAdminResponseData';
import type { UpdateAccessControl } from '../models/UpdateAccessControl';
import type { UserSchema } from '../models/UserSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AccessService {

    /**
     * Create a new admin
     * @returns any Success message
     * @throws ApiError
     */
    public static postApiAccessCreateAdmin({
requestBody,
}: {
requestBody: NewAdminRequestBody,
}): CancelablePromise<{
message?: string;
data?: NewAdminResponseData;
}> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/access/create/admin',
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
     * Update access control for a user
     * @returns any Success message
     * @throws ApiError
     */
    public static putApiAccessUpdateAccess({
id,
requestBody,
}: {
id: string,
requestBody: UpdateAccessControl,
}): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/access/update/access/{id}',
            path: {
                'id': id,
            },
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
     * View access control for a user
     * @returns UserSchema User access control details
     * @throws ApiError
     */
    public static getApiAccessViewAccess({
id,
}: {
id: string,
}): CancelablePromise<UserSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/access/view/access/{id}',
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

}
