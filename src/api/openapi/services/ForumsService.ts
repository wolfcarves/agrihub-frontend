/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NewQuestionSchema } from '../models/NewQuestionSchema';
import type { QuestionSchema } from '../models/QuestionSchema';
import type { QuestionsResponse } from '../models/QuestionsResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ForumsService {

    /**
     * Get Questions Data
     * @param search Search term for forums (optional)
     * @param page Page number (optional)
     * @param perpage Number of items per page (optional, default 10)
     * @param filter Filter criteria (optional, default newest)
     * @returns QuestionsResponse Success
     * @throws ApiError
     */
    public static getApiForums(
search?: string,
page?: string,
perpage?: string,
filter?: string,
): CancelablePromise<QuestionsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/forums',
            query: {
                'search': search,
                'page': page,
                'perpage': perpage,
                'filter': filter,
            },
            errors: {
                400: `Validation Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Create Questions
     * Create new questions in the forum
     * @param formData 
     * @returns NewQuestionSchema Success
     * @throws ApiError
     */
    public static postApiForums(
formData: QuestionSchema,
): CancelablePromise<NewQuestionSchema> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/forums',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Validation Error`,
                500: `Server Error`,
            },
        });
    }

}
