/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuditLog } from '../models/AuditLog';
import type { PaginationData } from '../models/PaginationData';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuditLogsService {

    /**
     * Get Audit Logs
     * @returns any Successful response
     * @throws ApiError
     */
    public static getApiAuditLogs({
search,
page,
perpage,
}: {
/**
 * Search term
 */
search?: string,
/**
 * Page number
 */
page?: string,
/**
 * Number of items per page
 */
perpage?: string,
}): CancelablePromise<{
data?: Array<AuditLog>;
pagination?: PaginationData;
}> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/audit-logs',
            query: {
                'search': search,
                'page': page,
                'perpage': perpage,
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
