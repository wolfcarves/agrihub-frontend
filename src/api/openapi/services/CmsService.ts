/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientDetailsResponse } from '../models/ClientDetailsResponse';
import type { LandingPageDetailsResponse } from '../models/LandingPageDetailsResponse';
import type { LandingPageImageResponse } from '../models/LandingPageImageResponse';
import type { MessageResponse } from '../models/MessageResponse';
import type { UpdateApproachRequest } from '../models/UpdateApproachRequest';
import type { UpdateApproachResponse } from '../models/UpdateApproachResponse';
import type { UpdateLandingRequest } from '../models/UpdateLandingRequest';
import type { UpdateLandingResponse } from '../models/UpdateLandingResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CmsService {

    /**
     * Retrieve client details from the CMS
     * @returns ClientDetailsResponse Successful response
     * @throws ApiError
     */
    public static getApiCmsClientDetails(): CancelablePromise<ClientDetailsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/cms/client-details',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Retrieve landing page details
     * @returns LandingPageDetailsResponse Landing page details retrieved successfully
     * @throws ApiError
     */
    public static getApiCmsLandingDetails(): CancelablePromise<LandingPageDetailsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/cms/landing/details',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Add image to landing page
     * @returns LandingPageImageResponse Image successfully added
     * @throws ApiError
     */
    public static postApiCmsLandingCreateImage({
formData,
}: {
formData: {
image?: Blob;
},
}): CancelablePromise<LandingPageImageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/cms/landing/create/image',
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
     * Delete image from landing page
     * @returns MessageResponse Image successfully deleted
     * @throws ApiError
     */
    public static deleteApiCmsLandingDeleteImage({
id,
}: {
id: string,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/cms/landing/delete/image/{id}',
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
     * Update landing page details
     * @returns UpdateLandingResponse Landing page details updated successfully
     * @throws ApiError
     */
    public static putApiCmsLandingUpdate({
requestBody,
}: {
requestBody: UpdateLandingRequest,
}): CancelablePromise<UpdateLandingResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/cms/landing/update',
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
     * Update landing page approach section
     * @returns UpdateApproachResponse Approach section updated successfully
     * @throws ApiError
     */
    public static postApiCmsLandingUpdateApproach({
requestBody,
}: {
requestBody: UpdateApproachRequest,
}): CancelablePromise<UpdateApproachResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/cms/landing/update/approach',
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
     * Delete approach from landing page
     * @returns MessageResponse Approach successfully deleted
     * @throws ApiError
     */
    public static deleteApiCmsLandingDeleteApproach({
id,
}: {
id: string,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/cms/landing/delete/approach/{id}',
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
