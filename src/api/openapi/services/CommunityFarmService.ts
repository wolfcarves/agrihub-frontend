/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExistingFarmerApplication } from '../models/ExistingFarmerApplication';
import type { FarmMemberApplication } from '../models/FarmMemberApplication';
import type { FarmQuestion } from '../models/FarmQuestion';
import type { FarmQuestionItem } from '../models/FarmQuestionItem';
import type { ListApplicationsResponse } from '../models/ListApplicationsResponse';
import type { MessageResponse } from '../models/MessageResponse';
import type { UpdateApplicationStatusRequest } from '../models/UpdateApplicationStatusRequest';
import type { ViewApplicationResponse } from '../models/ViewApplicationResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CommunityFarmService {

    /**
     * Create Community Farm Application Questions
     * @returns MessageResponse Successful response
     * @throws ApiError
     */
    public static postApiCommunityFarmQuestions({
requestBody,
}: {
requestBody: FarmQuestion,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/community-farm/questions',
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
     * Get Community Farm Questions by ID
     * @returns FarmQuestionItem Successful response
     * @throws ApiError
     */
    public static getApiCommunityFarmQuestions({
id,
}: {
/**
 * ID of the community farm
 */
id: string,
}): CancelablePromise<Array<FarmQuestionItem>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/community-farm/questions/{id}',
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
     * Delete Community Farm Question by ID
     * @returns MessageResponse Successful response
     * @throws ApiError
     */
    public static deleteApiCommunityFarmQuestions({
id,
}: {
/**
 * ID of the question to delete
 */
id: string,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/community-farm/questions/{id}',
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
     * Submit Membership Application for Community Farm
     * @returns MessageResponse Successful response
     * @throws ApiError
     */
    public static postApiCommunityFarmMemberApplication({
id,
formData,
}: {
/**
 * ID of the community farm
 */
id: string,
formData: FarmMemberApplication,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/community-farm/member/application/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Get Membership Applications for Community Farm
     * @returns ListApplicationsResponse Successful response
     * @throws ApiError
     */
    public static getApiCommunityFarmMemberApplications({
id,
search,
page,
perpage,
filter,
}: {
/**
 * ID of the community farm
 */
id: string,
/**
 * Search query (optional)
 */
search?: string,
/**
 * Page number (optional)
 */
page?: string,
/**
 * Number of items per page (optional)
 */
perpage?: string,
filter?: 'pending' | 'accepted' | 'rejected',
}): CancelablePromise<ListApplicationsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/community-farm/member/applications/{id}',
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
     * Update Membership Application Status for Community Farm
     * @returns MessageResponse Successful response
     * @throws ApiError
     */
    public static putApiCommunityFarmMemberApplicationUpdate({
id,
requestBody,
}: {
/**
 * ID of the membership application
 */
id: string,
requestBody: UpdateApplicationStatusRequest,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/community-farm/member/application/update/{id}',
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
     * View Membership Application for Community Farm
     * @returns ViewApplicationResponse Successful response
     * @throws ApiError
     */
    public static getApiCommunityFarmMemberApplicationView({
id,
}: {
/**
 * ID of the membership application
 */
id: string,
}): CancelablePromise<ViewApplicationResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/community-farm/member/application/view/{id}',
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
     * Delete Community Farmer Application by ID
     * @returns MessageResponse Successful response
     * @throws ApiError
     */
    public static deleteApiCommunityFarmMemberApplicationCancel({
id,
}: {
/**
 * ID of the application to delete
 */
id: string,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/community-farm/member/application/cancel/{id}',
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
     * Get Existing Membership Application
     * @returns ExistingFarmerApplication Successful response
     * @throws ApiError
     */
    public static getApiCommunityFarmMemberApplicationExisting(): CancelablePromise<ExistingFarmerApplication> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/community-farm/member/application/existing',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

}
