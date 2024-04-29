/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommunityEventsResponse } from '../models/CommunityEventsResponse';
import type { CreateCommunityEventFormData } from '../models/CreateCommunityEventFormData';
import type { MessageResponse } from '../models/MessageResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CommunityFarmEventsService {

    /**
     * Create a community event
     * @returns MessageResponse Event created successfully
     * @throws ApiError
     */
    public static postApiCommunityFarmEventCreate({
formData,
}: {
formData: CreateCommunityEventFormData,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/community-farm/event/create',
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
     * Get list of community events
     * @returns CommunityEventsResponse List of community events
     * @throws ApiError
     */
    public static getApiCommunityFarmEventList({
id,
search,
page,
perpage,
type,
}: {
/**
 * ID of the community
 */
id: string,
/**
 * Search term (optional)
 */
search?: string,
/**
 * Page number (optional)
 */
page?: string,
/**
 * Number of events per page (optional)
 */
perpage?: string,
/**
 * Filter by event type (optional)
 */
type?: 'private' | 'public',
}): CancelablePromise<CommunityEventsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/community-farm/event/list/{id}',
            path: {
                'id': id,
            },
            query: {
                'search': search,
                'page': page,
                'perpage': perpage,
                'type': type,
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
     * Delete a community event
     * @returns MessageResponse Event deleted successfully
     * @throws ApiError
     */
    public static deleteApiCommunityFarmEventDelete({
id,
}: {
/**
 * ID of the event to delete
 */
id: string,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/community-farm/event/delete/{id}',
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
