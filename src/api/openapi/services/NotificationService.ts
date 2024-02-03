/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginationData } from '../models/PaginationData';
import type { UserNotificationResponse } from '../models/UserNotificationResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NotificationService {

    /**
     * Get user notifications
     * @returns any Success response
     * @throws ApiError
     */
    public static getApiNotificationUser({
search,
page,
perpage,
filter,
}: {
/**
 * Search query
 */
search?: string,
/**
 * Page number
 */
page?: string,
/**
 * Items per page
 */
perpage?: string,
/**
 * Filter criteria
 */
filter?: string,
}): CancelablePromise<{
notifications?: Array<UserNotificationResponse>;
pagination?: PaginationData;
}> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/notification/user',
            query: {
                'search': search,
                'page': page,
                'perpage': perpage,
                'filter': filter,
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
