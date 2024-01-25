/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CropReportResponse } from '../models/CropReportResponse';
import type { NewCommunityCropReport } from '../models/NewCommunityCropReport';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ReportsService {

    /**
     * Submit a community crop report
     * @returns CropReportResponse Report submitted successfully
     * @throws ApiError
     */
    public static postApiReportsCrop({
formData,
}: {
formData: NewCommunityCropReport,
}): CancelablePromise<CropReportResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/reports/crop',
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

}
