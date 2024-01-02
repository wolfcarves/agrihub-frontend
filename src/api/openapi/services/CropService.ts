/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NewCropReportRequest } from '../models/NewCropReportRequest';
import type { NewCropReportResponse } from '../models/NewCropReportResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CropService {

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
