/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommunityCropReportsResponseV2 } from '../models/CommunityCropReportsResponseV2';
import type { HarvestedCropReportFormData } from '../models/HarvestedCropReportFormData';
import type { MessageResponse } from '../models/MessageResponse';
import type { PlantedCropReportFormData } from '../models/PlantedCropReportFormData';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CommunityFarmReportsService {

    /**
     * Submit planted crop report
     * @returns MessageResponse Submitted successfully
     * @throws ApiError
     */
    public static postApiCommunityFarmCropReportPlanted({
id,
formData,
}: {
/**
 * ID of the community farm
 */
id: string,
formData: PlantedCropReportFormData,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/community-farm/crop/report/planted/{id}',
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
     * Submit harvested crop report
     * @returns MessageResponse Submitted successfully
     * @throws ApiError
     */
    public static postApiCommunityFarmCropReportHarvested({
id,
formData,
}: {
/**
 * ID of the harvested crop report
 */
id: string,
formData: HarvestedCropReportFormData,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/community-farm/crop/report/harvested/{id}',
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
     * Get planted crop reports by Farm id
     * @returns CommunityCropReportsResponseV2 Successful response
     * @throws ApiError
     */
    public static getApiCommunityFarmCropReports({
id,
search,
month,
page,
perpage,
filter,
status,
order,
previousId,
}: {
/**
 * ID of the farm
 */
id: string,
/**
 * Search term
 */
search?: string,
/**
 * Month Term (1-12)
 */
month?: string,
/**
 * Page number
 */
page?: string,
/**
 * Records per page
 */
perpage?: string,
/**
 * Array of filters
 */
filter?: Array<string>,
status?: 'planted' | 'harvested',
order?: 'asc' | 'desc',
/**
 * Page number
 */
previousId?: string,
}): CancelablePromise<CommunityCropReportsResponseV2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/community-farm/crop/reports/{id}',
            path: {
                'id': id,
            },
            query: {
                'search': search,
                'month': month,
                'page': page,
                'perpage': perpage,
                'filter': filter,
                'status': status,
                'order': order,
                'previous_id': previousId,
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
     * Remove existing report
     * @returns MessageResponse Report removed successfully
     * @throws ApiError
     */
    public static deleteApiCommunityFarmRemoveExistingReport({
id,
}: {
/**
 * ID of the report to remove
 */
id: string,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/community-farm/remove/existing/report/{id}',
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
