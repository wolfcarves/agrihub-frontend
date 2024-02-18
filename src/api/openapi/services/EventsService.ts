/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateDraftEventResponse } from '../models/CreateDraftEventResponse';
import type { CreateEventTagsRequest } from '../models/CreateEventTagsRequest';
import type { CreateEventTagsResponse } from '../models/CreateEventTagsResponse';
import type { EventDetails } from '../models/EventDetails';
import type { EventDetailsResponse } from '../models/EventDetailsResponse';
import type { EventSpeakerResponse } from '../models/EventSpeakerResponse';
import type { MessageResponse } from '../models/MessageResponse';
import type { NewDraftEvent } from '../models/NewDraftEvent';
import type { NewEventPartnership } from '../models/NewEventPartnership';
import type { NewEventPartnershipResponse } from '../models/NewEventPartnershipResponse';
import type { NewEventSpeaker } from '../models/NewEventSpeaker';
import type { NewEventSpeakerResponse } from '../models/NewEventSpeakerResponse';
import type { PaginationData } from '../models/PaginationData';
import type { UpdateDraftEvent } from '../models/UpdateDraftEvent';
import type { UpdateDraftEventResponse } from '../models/UpdateDraftEventResponse';
import type { UpdateEventPartnershipResponse } from '../models/UpdateEventPartnershipResponse';
import type { UpdateEventSpeaker } from '../models/UpdateEventSpeaker';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EventsService {

    /**
     * Create a draft event
     * @returns CreateDraftEventResponse Successful response
     * @throws ApiError
     */
    public static postApiEventsCreateDraft({
requestBody,
}: {
requestBody: NewDraftEvent,
}): CancelablePromise<CreateDraftEventResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/events/create/draft',
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
     * Update a draft event
     * @returns UpdateDraftEventResponse Successful response
     * @throws ApiError
     */
    public static putApiEventsUpdateDraft({
id,
formData,
}: {
id: string,
formData: UpdateDraftEvent,
}): CancelablePromise<UpdateDraftEventResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/events/update/draft/{id}',
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
     * Create a partnership for an event
     * @returns NewEventPartnershipResponse Successful response
     * @throws ApiError
     */
    public static postApiEventsCreatePartnership({
id,
formData,
}: {
id: string,
formData: NewEventPartnership,
}): CancelablePromise<NewEventPartnershipResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/events/create/partnership/{id}',
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
     * Update partnership details of an event
     * @returns UpdateEventPartnershipResponse Successful response
     * @throws ApiError
     */
    public static putApiEventsUpdatePartnership({
id,
formData,
}: {
id: string,
formData: {
name?: string;
organizer?: string;
type?: string;
logo?: Blob;
},
}): CancelablePromise<UpdateEventPartnershipResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/events/update/partnership/{id}',
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
     * Delete partnership details of an event
     * @returns MessageResponse Successful response
     * @throws ApiError
     */
    public static deleteApiEventsDeletePartnership({
id,
}: {
id: string,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/events/delete/partnership/{id}',
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
     * Add a speaker to an event
     * @returns NewEventSpeakerResponse Successful response
     * @throws ApiError
     */
    public static postApiEventsCreateSpeaker({
id,
formData,
}: {
id: string,
formData: NewEventSpeaker,
}): CancelablePromise<NewEventSpeakerResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/events/create/speaker/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Update a speaker of an event
     * @returns EventSpeakerResponse Successful response
     * @throws ApiError
     */
    public static putApiEventsUpdateSpeaker({
id,
formData,
}: {
id: string,
formData: UpdateEventSpeaker,
}): CancelablePromise<EventSpeakerResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/events/update/speaker/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Remove a speaker from an event
     * @returns MessageResponse Successful response
     * @throws ApiError
     */
    public static deleteApiEventsRemoveSpeaker({
id,
}: {
id: string,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/events/remove/speaker/{id}',
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
     * Create tags for an event
     * @returns CreateEventTagsResponse Successful response
     * @throws ApiError
     */
    public static postApiEventsCreateTags({
id,
requestBody,
}: {
id: string,
requestBody: CreateEventTagsRequest,
}): CancelablePromise<CreateEventTagsResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/events/create/tags/{id}',
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
     * View details of an event
     * @returns EventDetailsResponse Successful response
     * @throws ApiError
     */
    public static getApiEventsView({
id,
}: {
id: string,
}): CancelablePromise<EventDetailsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/events/view/{id}',
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
     * Retrieve a list of draft events
     * @returns any Successful response with a list of draft events
     * @throws ApiError
     */
    public static getApiEventsDraft({
search,
page,
perpage,
}: {
/**
 * Search keyword for events
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
}): CancelablePromise<{
data?: Array<EventDetails>;
pagination?: PaginationData;
}> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/events/draft',
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

    /**
     * Archive an event
     * @returns any Event archived successfully
     * @throws ApiError
     */
    public static deleteApiEventsArchive({
id,
}: {
/**
 * The ID of the event to be archived
 */
id: string,
}): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/events/archive/{id}',
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
     * Archive an event
     * @returns any Event archived successfully
     * @throws ApiError
     */
    public static putApiEventsUnarchive({
id,
}: {
/**
 * The ID of the event to be archived
 */
id: string,
}): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/events/unarchive/{id}',
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
     * Retrieve a list of archived events
     * @returns any Successful response with a list of archived events
     * @throws ApiError
     */
    public static getApiEventsArchivedList({
search,
page,
perpage,
}: {
/**
 * Search keyword for events
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
}): CancelablePromise<{
data?: Array<EventDetails>;
pagination?: PaginationData;
}> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/events/archived/list',
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

    /**
     * Delete a draft event
     * @returns any Event deleted successfully
     * @throws ApiError
     */
    public static deleteApiEventsDeleteDraft({
id,
}: {
/**
 * The ID of the event to be archived
 */
id: string,
}): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/events/delete/draft/{id}',
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
     * Publish an event
     * @returns any Event published successfully
     * @throws ApiError
     */
    public static putApiEventsPublish({
id,
}: {
/**
 * The ID of the event to be archived
 */
id: string,
}): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/events/publish/{id}',
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
     * Unpublish an event
     * @returns any Event Unpublished successfully
     * @throws ApiError
     */
    public static putApiEventsUnpublish({
id,
}: {
/**
 * The ID of the event to be Unpublished
 */
id: string,
}): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/events/unpublish/{id}',
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
     * View details of an event
     * @returns EventDetailsResponse Successful response
     * @throws ApiError
     */
    public static getApiEventsPublished({
id,
}: {
id: string,
}): CancelablePromise<EventDetailsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/events/published/{id}',
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
     * Retrieve a list of published events
     * @returns any Successful response with a list of published events
     * @throws ApiError
     */
    public static getApiEventsPublishedList({
search,
page,
perpage,
filter,
}: {
/**
 * Search keyword for events
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
 * Filter criteria
 */
filter?: 'upcoming' | 'previous',
}): CancelablePromise<{
data?: Array<EventDetails>;
pagination?: PaginationData;
}> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/events/published/list',
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
