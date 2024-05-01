/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommunityEvent } from '../models/CommunityEvent';
import type { CommunityEventsResponse } from '../models/CommunityEventsResponse';
import type { CreateCommunityEventFormData } from '../models/CreateCommunityEventFormData';
import type { EventAction } from '../models/EventAction';
import type { MessageResponse } from '../models/MessageResponse';
import type { UpdateCommunityEventFormData } from '../models/UpdateCommunityEventFormData';

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
     * Update a community event
     * @returns MessageResponse Event updated successfully
     * @throws ApiError
     */
    public static putApiCommunityFarmEventUpdate({
id,
formData,
}: {
/**
 * ID of the event to update
 */
id: string,
formData: UpdateCommunityEventFormData,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/community-farm/event/update/{id}',
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
filter,
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
type?: 'private' | 'public',
/**
 * Filter by event type (optional)
 */
filter?: 'upcoming' | 'previous',
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
     * Get list of public community events
     * @returns CommunityEventsResponse List of community events
     * @throws ApiError
     */
    public static getApiCommunityFarmEventList1({
id,
search,
page,
perpage,
type,
filter,
}: {
/**
 * ID of the community
 */
id?: string,
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
type?: 'private' | 'public',
/**
 * Filter by event type (optional)
 */
filter?: 'upcoming' | 'previous',
}): CancelablePromise<CommunityEventsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/community-farm/event/list',
            path: {
                'id': id,
            },
            query: {
                'search': search,
                'page': page,
                'perpage': perpage,
                'type': type,
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
     * Get list of community events
     * @returns CommunityEvent List of community events
     * @throws ApiError
     */
    public static getApiCommunityFarmEventView({
id,
}: {
/**
 * ID of the community
 */
id: string,
}): CancelablePromise<CommunityEvent> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/community-farm/event/view/{id}',
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

    /**
     * Perform an action on a community event
     * @returns MessageResponse Action performed successfully
     * @throws ApiError
     */
    public static postApiCommunityFarmEventAction({
id,
requestBody,
}: {
/**
 * ID of the event to perform action on
 */
id: string,
requestBody: EventAction,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/community-farm/event/action/{id}',
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
     * Remove existing engagement
     * @returns MessageResponse Report removed successfully
     * @throws ApiError
     */
    public static deleteApiCommunityFarmRemoveEngagement({
id,
}: {
/**
 * ID of the engagement to remove
 */
id: string,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/community-farm/remove/engagement/{id}',
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
