/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AcceptSeedlingRequest } from '../models/AcceptSeedlingRequest';
import type { FarmOverview } from '../models/FarmOverview';
import type { MessageResponse } from '../models/MessageResponse';
import type { NewSeedlingRequest } from '../models/NewSeedlingRequest';
import type { NewSeedlingResponse } from '../models/NewSeedlingResponse';
import type { RequestCount } from '../models/RequestCount';
import type { SeedlingRequestListAllResponse } from '../models/SeedlingRequestListAllResponse';
import type { SeedlingRequestListItem } from '../models/SeedlingRequestListItem';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FarmRequestService {

    /**
     * Create a new seedling request
     * @returns NewSeedlingResponse Seedling request created successfully
     * @throws ApiError
     */
    public static postApiRequestSeedling({
requestBody,
}: {
requestBody: NewSeedlingRequest,
}): CancelablePromise<NewSeedlingResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/request/seedling',
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
     * Cancel a seedling request
     * @returns any Request cancelled successfully
     * @throws ApiError
     */
    public static deleteApiRequestSeedlingCancel({
id,
}: {
/**
 * The ID of the seedling request to be deleted
 */
id: string,
}): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/request/seedling/cancel/{id}',
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
     * Retrieve a list of seedling requests by community farm
     * @returns SeedlingRequestListItem A list of seedling requests
     * @throws ApiError
     */
    public static getApiRequestSeedlingList(): CancelablePromise<Array<SeedlingRequestListItem>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/request/seedling/list',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Retrieve a list of all seedling requests
     * @returns SeedlingRequestListAllResponse A list of all seedling requests
     * @throws ApiError
     */
    public static getApiRequestSeedlingListAll({
search,
page,
perpage,
filter,
}: {
/**
 * Search keyword
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
/**
 * Filter by request status
 */
filter?: 'pending' | 'accepted' | 'rejected' | '',
}): CancelablePromise<SeedlingRequestListAllResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/request/seedling/list/all',
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

    /**
     * Accept a seedling request
     * @returns MessageResponse Seedling request accepted successfully
     * @throws ApiError
     */
    public static putApiRequestSeedlingAccept({
id,
requestBody,
}: {
/**
 * The ID of the seedling request to accept
 */
id: string,
requestBody: AcceptSeedlingRequest,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/request/seedling/accept/{id}',
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
     * Reject a seedling request
     * @returns any Request cancelled successfully
     * @throws ApiError
     */
    public static deleteApiRequestSeedlingReject({
id,
}: {
/**
 * The ID of the seedling request to be deleted
 */
id: string,
}): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/request/seedling/reject/{id}',
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
     * Get count of pending and accepted requests
     * @returns RequestCount Count of pending and accepted requests
     * @throws ApiError
     */
    public static getApiRequestCount(): CancelablePromise<RequestCount> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/request/count',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Get overview of farm reports
     * @returns FarmOverview Overview of farm reports
     * @throws ApiError
     */
    public static getApiReportsFarmsOverview(): CancelablePromise<FarmOverview> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reports/farms/overview',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

}
