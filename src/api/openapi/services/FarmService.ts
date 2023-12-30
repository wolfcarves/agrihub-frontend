/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CropData } from '../models/CropData';
import type { CropReport } from '../models/CropReport';
import type { FarmListResponse } from '../models/FarmListResponse';
import type { NewCropRequest } from '../models/NewCropRequest';
import type { NewCropResponse } from '../models/NewCropResponse';
import type { NewFarmRequest } from '../models/NewFarmRequest';
import type { NewFarmResponse } from '../models/NewFarmResponse';
import type { SubfarmOverviewResponse } from '../models/SubfarmOverviewResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FarmService {

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

}
