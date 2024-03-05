/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommunityFarmProblemListResponse } from '../models/CommunityFarmProblemListResponse';
import type { FarmProblemListResponse } from '../models/FarmProblemListResponse';
import type { FarmProblemPostResponse } from '../models/FarmProblemPostResponse';
import type { FarmProblemResponse } from '../models/FarmProblemResponse';
import type { MarkProblemAsResolvedRequest } from '../models/MarkProblemAsResolvedRequest';
import type { MessageResponse } from '../models/MessageResponse';
import type { NewFarmProblem } from '../models/NewFarmProblem';
import type { ReportRequestBody } from '../models/ReportRequestBody';
import type { ReportResponse } from '../models/ReportResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FarmProblemsService {

    /**
     * Retrieve farm problem details by ID
     * @returns FarmProblemResponse Successful response
     * @throws ApiError
     */
    public static getApiFarmProblems({
id,
}: {
/**
 * ID of the farm problem to retrieve
 */
id: string,
}): CancelablePromise<FarmProblemResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/farm/problems/{id}',
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
     * Create a new farm problem
     * @returns FarmProblemPostResponse Successful response
     * @throws ApiError
     */
    public static postApiFarmProblems({
requestBody,
}: {
requestBody: NewFarmProblem,
}): CancelablePromise<FarmProblemPostResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/farm/problems',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Archive a problems
     * @returns any Problem archived successfully
     * @throws ApiError
     */
    public static deleteApiFarmProblemsArchive({
id,
}: {
/**
 * The ID of the problem to be archived
 */
id: string,
}): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/farm/problems/archive/{id}',
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
     * Unarchive a problems
     * @returns any Event Problem successfully
     * @throws ApiError
     */
    public static putApiFarmProblemsUnarchive({
id,
}: {
/**
 * The ID of the problem to be unarchived
 */
id: string,
}): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/farm/problems/unarchive/{id}',
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
     * Delete a problem material
     * @returns any Event Problem successfully
     * @throws ApiError
     */
    public static deleteApiFarmProblemsMaterial({
id,
}: {
/**
 * The ID of the material to be deleted
 */
id: string,
}): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/farm/problems/material/{id}',
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
     * Get a list of farm problems
     * @returns FarmProblemListResponse Successful response
     * @throws ApiError
     */
    public static getApiFarmProblemsList({
search,
page,
perpage,
filter,
}: {
/**
 * Filter problems by search keyword
 */
search?: string,
/**
 * Page number for pagination
 */
page?: string,
/**
 * Number of items per page
 */
perpage?: string,
/**
 * Apply additional filters
 */
filter?: string,
}): CancelablePromise<FarmProblemListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/farm/problems/list',
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
     * Get a list of farm problems
     * @returns FarmProblemListResponse Successful response
     * @throws ApiError
     */
    public static getApiFarmProblemsArchivedList({
search,
page,
perpage,
filter,
}: {
/**
 * Filter problems by search keyword
 */
search?: string,
/**
 * Page number for pagination
 */
page?: string,
/**
 * Number of items per page
 */
perpage?: string,
/**
 * Apply additional filters
 */
filter?: string,
}): CancelablePromise<FarmProblemListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/farm/problems/archived/list',
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
     * Report a farm problem
     * @returns ReportResponse Successful response
     * @throws ApiError
     */
    public static postApiFarmProblemsReport({
requestBody,
}: {
requestBody: ReportRequestBody,
}): CancelablePromise<ReportResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/farm/problems/report',
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
     * List community farm problems
     * @returns CommunityFarmProblemListResponse Successful response
     * @throws ApiError
     */
    public static getApiFarmProblemsCommunityList({
search,
page,
perpage,
filter,
}: {
/**
 * Search term to filter problems
 */
search?: string,
/**
 * Page number for pagination
 */
page?: string,
/**
 * Number of items per page
 */
perpage?: string,
/**
 * Filter by problem status
 */
filter?: 'pending' | 'resolved',
}): CancelablePromise<CommunityFarmProblemListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/farm/problems/community/list',
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
     * List reported farm problems
     * @returns CommunityFarmProblemListResponse Successful response
     * @throws ApiError
     */
    public static getApiFarmProblemsReportedList({
search,
page,
perpage,
filter,
}: {
/**
 * Search term to filter problems
 */
search?: string,
/**
 * Page number for pagination
 */
page?: string,
/**
 * Number of items per page
 */
perpage?: string,
/**
 * Filter by problem status
 */
filter?: 'pending' | 'resolved',
}): CancelablePromise<CommunityFarmProblemListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/farm/problems/reported/list',
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
     * Mark community farm problem as resolved
     * @returns MessageResponse Successful response
     * @throws ApiError
     */
    public static postApiFarmProblemsCommunityResolve({
id,
requestBody,
}: {
/**
 * The ID of the problem to mark as resolved
 */
id: string,
requestBody: MarkProblemAsResolvedRequest,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/farm/problems/community/resolve/{id}',
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

}
