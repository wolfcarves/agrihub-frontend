/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AcceptSeedlingRequest } from '../models/AcceptSeedlingRequest';
import type { FarmOverview } from '../models/FarmOverview';
import type { ListToolRequestResponse } from '../models/ListToolRequestResponse';
import type { MessageResponse } from '../models/MessageResponse';
import type { NewSeedlingRequest } from '../models/NewSeedlingRequest';
import type { NewSeedlingResponse } from '../models/NewSeedlingResponse';
import type { NewToolRequest } from '../models/NewToolRequest';
import type { RequestCount } from '../models/RequestCount';
import type { SeedlingRequestListAllResponse } from '../models/SeedlingRequestListAllResponse';

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
     * @returns SeedlingRequestListAllResponse A list of all seedling requests
     * @throws ApiError
     */
    public static getApiRequestSeedlingList({
id,
search,
page,
perpage,
filter,
}: {
/**
 * The ID of the community farm
 */
id: string,
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
            url: '/api/request/seedling/list/{id}',
            path: {
                'id': id,
            },
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
     * Submit Tool Request
     * @returns MessageResponse Successful response
     * @throws ApiError
     */
    public static postApiRequestToolRequest({
requestBody,
}: {
requestBody: NewToolRequest,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/request/tool-request',
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
     * List Tool Requests
     * @returns ListToolRequestResponse Successful response
     * @throws ApiError
     */
    public static getApiRequestToolRequest({
search,
page,
perpage,
filter,
farmid,
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
 * Items per page
 */
perpage?: string,
/**
 * Filter by status
 */
filter?: 'pending' | 'accepted' | 'communicating' | 'rejected' | 'forwarded' | 'completed',
/**
 * Filter by farm ID
 */
farmid?: string,
}): CancelablePromise<ListToolRequestResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/request/tool-request',
            query: {
                'search': search,
                'page': page,
                'perpage': perpage,
                'filter': filter,
                'farmid': farmid,
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
