/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NewCropReportRequest } from '../models/NewCropReportRequest';
import type { NewCropReportResponse } from '../models/NewCropReportResponse';
import type { NewCropRequest } from '../models/NewCropRequest';
import type { NewCropResponse } from '../models/NewCropResponse';
import type { UpdateCropRequest } from '../models/UpdateCropRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CropService {

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
     * Create a new crop report
     * @returns NewCropResponse Crop report created successfully
     * @throws ApiError
     */
    public static putApiFarmCropUpdate({
id,
formData,
}: {
/**
 * The ID of the crop
 */
id: string,
formData: UpdateCropRequest,
}): CancelablePromise<NewCropResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/farm/crop/update/{id}',
            path: {
                'id': id,
            },
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
     * Create a new crop report
     * @returns UpdateCropRequest Crop report created successfully
     * @throws ApiError
     */
    public static getApiFarmCropView({
id,
}: {
/**
 * The ID of the crop
 */
id: string,
}): CancelablePromise<UpdateCropRequest> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/farm/crop/view/{id}',
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
     * Create a new crop report
     * @returns NewCropReportResponse Crop report created successfully
     * @throws ApiError
     */
    public static postCropReport({
farmid,
userid,
requestBody,
}: {
/**
 * The ID of the farm
 */
farmid: string,
/**
 * The ID of the user
 */
userid: string,
requestBody: NewCropReportRequest,
}): CancelablePromise<NewCropReportResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/crop/report/{farmid}/{userid}',
            path: {
                'farmid': farmid,
                'userid': userid,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                500: `Server Error`,
            },
        });
    }

}
