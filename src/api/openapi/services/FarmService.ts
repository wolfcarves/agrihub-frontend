/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CropData } from '../models/CropData';
import type { FarmListResponse } from '../models/FarmListResponse';
import type { NewCropRequest } from '../models/NewCropRequest';
import type { NewCropResponse } from '../models/NewCropResponse';
import type { NewFarmRequest } from '../models/NewFarmRequest';
import type { NewFarmResponse } from '../models/NewFarmResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FarmService {

    /**
     * Create a new farm
     * @param formData 
     * @returns NewFarmResponse Farm created successfully
     * @throws ApiError
     */
    public static postApiFarm(
formData: NewFarmRequest,
): CancelablePromise<NewFarmResponse> {
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
     * @param search Search query for farms (optional, default is an empty string)
     * @param page Page number (optional)
     * @param perpage Number of farms per page (optional, default is 20)
     * @returns FarmListResponse List of farms
     * @throws ApiError
     */
    public static getApiFarm(
search?: string,
page?: string,
perpage?: string,
): CancelablePromise<FarmListResponse> {
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
     * @param formData 
     * @returns NewCropResponse Crop created successfully
     * @throws ApiError
     */
    public static postApiFarmCrop(
formData: NewCropRequest,
): CancelablePromise<NewCropResponse> {
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

}
