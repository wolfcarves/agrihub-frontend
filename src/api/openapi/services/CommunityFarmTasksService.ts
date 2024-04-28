/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessageResponse } from '../models/MessageResponse';
import type { NewHarvestTask } from '../models/NewHarvestTask';
import type { NewPlantTask } from '../models/NewPlantTask';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CommunityFarmTasksService {

    /**
     * Create new plant task
     * @returns MessageResponse Submitted successfully
     * @throws ApiError
     */
    public static postApiCommunityFarmTaskPlanted({
id,
requestBody,
}: {
/**
 * ID of the plant task
 */
id: string,
requestBody: NewPlantTask,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/community-farm/task/planted/{id}',
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
     * Create new harvest task
     * @returns MessageResponse Submitted successfully
     * @throws ApiError
     */
    public static postApiCommunityFarmTaskHarvest({
id,
requestBody,
}: {
/**
 * ID of the harvest task
 */
id: string,
requestBody: NewHarvestTask,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/community-farm/task/harvest/{id}',
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

}
