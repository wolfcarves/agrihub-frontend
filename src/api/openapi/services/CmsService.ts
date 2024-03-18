/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientDetailsResponse } from '../models/ClientDetailsResponse';
import type { LandingPageDetailsResponse } from '../models/LandingPageDetailsResponse';
import type { LandingPageImageResponse } from '../models/LandingPageImageResponse';
import type { MessageResponse } from '../models/MessageResponse';
import type { NewUserFeedback } from '../models/NewUserFeedback';
import type { PrivacyPolicyResponse } from '../models/PrivacyPolicyResponse';
import type { UpdateApproachRequest } from '../models/UpdateApproachRequest';
import type { UpdateApproachResponse } from '../models/UpdateApproachResponse';
import type { UpdateClientDetailsRequest } from '../models/UpdateClientDetailsRequest';
import type { UpdateClientDetailsResponse } from '../models/UpdateClientDetailsResponse';
import type { UpdateLandingRequest } from '../models/UpdateLandingRequest';
import type { UpdateLandingResponse } from '../models/UpdateLandingResponse';
import type { UpdatePrivacyPolicyRequest } from '../models/UpdatePrivacyPolicyRequest';
import type { UpdatePrivacyPolicyResponse } from '../models/UpdatePrivacyPolicyResponse';
import type { UserFeedback } from '../models/UserFeedback';
import type { UserFeedbackListResponse } from '../models/UserFeedbackListResponse';
import type { UserFeedbackResponse } from '../models/UserFeedbackResponse';
import type { VisionStatsResponse } from '../models/VisionStatsResponse';

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
     * Update client details in the CMS
     * @returns UpdateClientDetailsResponse Successful response
     * @throws ApiError
     */
    public static putApiCmsClientDetails({
requestBody,
}: {
requestBody: UpdateClientDetailsRequest,
}): CancelablePromise<UpdateClientDetailsResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/cms/client-details',
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
     * delete a social media in client details
     * @returns any Event Unpublished successfully
     * @throws ApiError
     */
    public static deleteApiCmsClientDetailsSocial({
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
            method: 'DELETE',
            url: '/api/cms/client-details/social/{id}',
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
     * delete a partner
     * @returns any Event Unpublished successfully
     * @throws ApiError
     */
    public static deleteApiCmsClientDetailsPartner({
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
            method: 'DELETE',
            url: '/api/cms/client-details/partner/{id}',
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
     * remove a member
     * @returns any Event Unpublished successfully
     * @throws ApiError
     */
    public static deleteApiCmsClientDetailsMember({
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
            method: 'DELETE',
            url: '/api/cms/client-details/member/{id}',
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
     * Update Privacy Policy
     * @returns UpdatePrivacyPolicyResponse Successful response
     * @throws ApiError
     */
    public static putApiPrivacyPolicyUpdate({
requestBody,
}: {
requestBody: UpdatePrivacyPolicyRequest,
}): CancelablePromise<UpdatePrivacyPolicyResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/privacy-policy/update',
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
     * Get Privacy Policy
     * @returns PrivacyPolicyResponse Successful response
     * @throws ApiError
     */
    public static getApiPrivacyPolicy(): CancelablePromise<PrivacyPolicyResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/privacy-policy',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Submit User Feedback
     * @returns UserFeedbackResponse Successful response
     * @throws ApiError
     */
    public static postApiCmsUserFeedback({
requestBody,
}: {
requestBody: NewUserFeedback,
}): CancelablePromise<UserFeedbackResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/cms/user-feedback',
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
     * Retrieve User Feedbacks
     * @returns UserFeedbackListResponse Successful response
     * @throws ApiError
     */
    public static getApiCmsUserFeedbacks({
search,
page,
perpage,
}: {
/**
 * Search query string
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
}): CancelablePromise<UserFeedbackListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/cms/user-feedbacks',
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
     * Retrieve User Feedback by ID
     * @returns UserFeedback Successful response
     * @throws ApiError
     */
    public static getApiCmsUserFeedbacks1({
id,
}: {
/**
 * ID of the user feedback to retrieve
 */
id: string,
}): CancelablePromise<UserFeedback> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/cms/user-feedbacks/{id}',
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
     * Retrieve Vision Statistics
     * @returns VisionStatsResponse Successful response
     * @throws ApiError
     */
    public static getApiCmsVisionStats(): CancelablePromise<VisionStatsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/cms/vision-stats',
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
