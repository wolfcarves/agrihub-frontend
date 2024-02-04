/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AcceptFarmApplicationResponse } from '../models/AcceptFarmApplicationResponse';
import type { AddFarmCropResponse } from '../models/AddFarmCropResponse';
import type { CheckExistingApplicationResponse } from '../models/CheckExistingApplicationResponse';
import type { CommunityFarmResponse } from '../models/CommunityFarmResponse';
import type { CommunityFarmsResponse } from '../models/CommunityFarmsResponse';
import type { CropData } from '../models/CropData';
import type { CropGalleryItem } from '../models/CropGalleryItem';
import type { CropItem } from '../models/CropItem';
import type { CropReport } from '../models/CropReport';
import type { DeleteSuccessMessage } from '../models/DeleteSuccessMessage';
import type { FarmApplicationData } from '../models/FarmApplicationData';
import type { FarmApplicationResponse } from '../models/FarmApplicationResponse';
import type { FarmApplicationsResponse } from '../models/FarmApplicationsResponse';
import type { FarmerInvitationResponse } from '../models/FarmerInvitationResponse';
import type { FarmListResponse } from '../models/FarmListResponse';
import type { NewCommunityFarmGallery } from '../models/NewCommunityFarmGallery';
import type { NewCropRequest } from '../models/NewCropRequest';
import type { NewCropResponse } from '../models/NewCropResponse';
import type { NewFarmApplication } from '../models/NewFarmApplication';
import type { NewFarmerInvitationRequest } from '../models/NewFarmerInvitationRequest';
import type { NewFarmRequest } from '../models/NewFarmRequest';
import type { NewFarmResponse } from '../models/NewFarmResponse';
import type { SubfarmOverviewResponse } from '../models/SubfarmOverviewResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FarmService {

    /**
     * Submit a new farm application
     * @returns FarmApplicationResponse Success. Farm application submitted successfully.
     * @throws ApiError
     */
    public static postApiFarmApply({
formData,
}: {
formData?: NewFarmApplication,
}): CancelablePromise<FarmApplicationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/farm/apply',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Get a list of community farms
     * @returns CommunityFarmsResponse Successful response
     * @throws ApiError
     */
    public static getApiFarmCommunityFarm({
search,
page,
perpage,
filter,
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
/**
 * Filter criteria
 */
filter?: 'District 1' | 'District 2' | 'District 3' | 'District 4' | 'District 5' | 'District 6',
}): CancelablePromise<CommunityFarmsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/farm/community-farm',
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
     * Get details for a community farm
     * @returns CommunityFarmResponse Success. Returns details for the community farm.
     * @throws ApiError
     */
    public static getApiFarmCommunityFarm1({
id,
}: {
/**
 * The ID of the community farm
 */
id: string,
}): CancelablePromise<CommunityFarmResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/farm/community-farm/{id}',
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
     * Add a new gallery item for a community farm
     * @returns CropGalleryItem Success. Returns the newly added gallery item.
     * @throws ApiError
     */
    public static postApiFarmCommunityFarmGallery({
formData,
}: {
formData: NewCommunityFarmGallery,
}): CancelablePromise<Array<CropGalleryItem>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/farm/community-farm/gallery',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Get gallery items for a specific community farm
     * @returns CropGalleryItem Success. Returns gallery items for the specified community farm.
     * @throws ApiError
     */
    public static getApiFarmCommunityFarmGallery({
id,
}: {
/**
 * The ID of the community farm
 */
id: string,
}): CancelablePromise<Array<CropGalleryItem>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/farm/community-farm/gallery/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Delete a gallery item
     * @returns DeleteSuccessMessage Success. Returns a message indicating the deletion was successful.
     * @throws ApiError
     */
    public static deleteApiFarmCommunityFarmGallery({
id,
}: {
/**
 * The ID of the gallery item to be deleted
 */
id: string,
}): CancelablePromise<DeleteSuccessMessage> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/farm/community-farm/gallery/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Accept a farm application
     * @returns AcceptFarmApplicationResponse Success. Returns details for the accepted farm application.
     * @throws ApiError
     */
    public static putApiFarmApplicationsAccept({
id,
}: {
/**
 * The ID of the farm application to accept
 */
id: string,
}): CancelablePromise<AcceptFarmApplicationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/farm/applications/accept/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Reject a farm application
     * @returns AcceptFarmApplicationResponse Success. Returns details for the rejected farm application.
     * @throws ApiError
     */
    public static putApiFarmApplicationsReject({
id,
}: {
/**
 * The ID of the farm application to accept
 */
id: string,
}): CancelablePromise<AcceptFarmApplicationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/farm/applications/reject/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Cancel a farm application
     * @returns any Success. Returns details for the rejected farm application.
     * @throws ApiError
     */
    public static deleteApiFarmApplicationsCancel({
id,
}: {
/**
 * The ID of the farm application to accept
 */
id: string,
}): CancelablePromise<{
message: string;
}> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/farm/applications/cancel/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Get a list of farm applications
     * @returns FarmApplicationsResponse Success. Returns a list of farm applications.
     * @throws ApiError
     */
    public static getApiFarmApplications({
search,
page,
filter,
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
 * Filter term
 */
filter?: 'pending' | 'rejected' | 'approved',
/**
 * Records per page
 */
perpage?: string,
}): CancelablePromise<FarmApplicationsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/farm/applications',
            query: {
                'search': search,
                'page': page,
                'filter': filter,
                'perpage': perpage,
            },
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Get details for a farm application
     * @returns FarmApplicationData Success. Returns details for the farm application.
     * @throws ApiError
     */
    public static getApiFarmApplications1({
id,
}: {
/**
 * The ID of the farm application
 */
id: string,
}): CancelablePromise<FarmApplicationData> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/farm/applications/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Get details for a farm application
     * @returns CheckExistingApplicationResponse Success. Returns details for the farm application.
     * @throws ApiError
     */
    public static getApiFarmApplicationsCheckExisting(): CancelablePromise<CheckExistingApplicationResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/farm/applications/check-existing',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Get crops for a community farm
     * @returns CropItem Success. Returns crops for the community farm.
     * @throws ApiError
     */
    public static getApiFarmCommunityFarmCrops({
id,
}: {
/**
 * The ID of the community farm
 */
id: string,
}): CancelablePromise<Array<CropItem>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/farm/community-farm/crops/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Add a crop to a community farm
     * @returns AddFarmCropResponse Success. Returns details for the added crop.
     * @throws ApiError
     */
    public static postApiFarmCommunityFarmCrop({
farmId,
cropId,
}: {
/**
 * The ID of the community farm
 */
farmId: string,
/**
 * The ID of the crop
 */
cropId: string,
}): CancelablePromise<AddFarmCropResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/farm/community-farm/crop/{farm_id}/{crop_id}',
            path: {
                'farm_id': farmId,
                'crop_id': cropId,
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
     * Create a new farm
     * @returns NewFarmResponse Farm created successfully
     * @throws ApiError
     */
    public static postApiFarm({
formData,
}: {
formData: NewFarmRequest,
}): CancelablePromise<NewFarmResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/farm',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                500: `Server Error`,
            },
        });
    }

    /**
     * List farms
     * @returns FarmListResponse List of farms
     * @throws ApiError
     */
    public static getApiFarm({
search,
page,
perpage,
}: {
/**
 * Search query for farms (optional, default is an empty string)
 */
search?: string,
/**
 * Page number (optional)
 */
page?: string,
/**
 * Number of farms per page (optional, default is 20)
 */
perpage?: string,
}): CancelablePromise<FarmListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/farm',
            query: {
                'search': search,
                'page': page,
                'perpage': perpage,
            },
            errors: {
                400: `Validation Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Retrieve a list of crops
     * @returns CropData List of crops
     * @throws ApiError
     */
    public static getApiFarmCropFind(): CancelablePromise<Array<CropData>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/farm/crop/find',
        });
    }

    /**
     * Create a new crop
     * @returns NewCropResponse Crop created successfully
     * @throws ApiError
     */
    public static postApiFarmCrop({
formData,
}: {
formData: NewCropRequest,
}): CancelablePromise<NewCropResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/farm/crop',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Get overview details for a subfarm
     * @returns SubfarmOverviewResponse Success. Returns overview details for the subfarm.
     * @throws ApiError
     */
    public static getApiFarmSubfarmOverview(): CancelablePromise<SubfarmOverviewResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/farm/subfarm/overview',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Get crop reports for a farm
     * @returns CropReport Success. Returns a list of crop reports for the farm.
     * @throws ApiError
     */
    public static getApiFarmCropReports(): CancelablePromise<Array<CropReport>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/farm/crop/reports',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Send a farmer invitation
     * @returns FarmerInvitationResponse Successful invitation
     * @throws ApiError
     */
    public static postApiFarmFarmerInvitation({
requestBody,
}: {
requestBody: NewFarmerInvitationRequest,
}): CancelablePromise<FarmerInvitationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/farm/farmer/invitation',
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
     * @returns any Successful response
     * @throws ApiError
     */
    public static postApiFarmFarmerInvitationAccept({
id,
}: {
/**
 * The ID of the invitation to accept.
 */
id: string,
}): CancelablePromise<{
/**
 * Success message indicating the invitation was accepted successfully.
 */
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/farm/farmer/invitation/accept/{id}',
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
     * @returns any Successful response
     * @throws ApiError
     */
    public static deleteApiFarmFarmerInvitationReject({
id,
}: {
/**
 * The ID of the invitation to accept.
 */
id: string,
}): CancelablePromise<{
/**
 * Success message indicating the invitation was accepted successfully.
 */
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/farm/farmer/invitation/reject/{id}',
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
