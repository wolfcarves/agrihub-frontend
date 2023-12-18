/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NewQuestionSchema } from '../models/NewQuestionSchema';
import type { QuestionSchema } from '../models/QuestionSchema';
import type { QuestionsResponse } from '../models/QuestionsResponse';
import type { QuestionViewSchema } from '../models/QuestionViewSchema';
import type { VoteResponseSchema } from '../models/VoteResponseSchema';

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
     * @param profile profile query
     * @returns QuestionsResponse Success
     * @throws ApiError
     */
    public static getApiForums(
search?: string,
page?: string,
perpage?: string,
filter?: 'newest' | 'active' | 'trending',
profile?: string,
): CancelablePromise<QuestionsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/forums',
            query: {
                'search': search,
                'page': page,
                'perpage': perpage,
                'filter': filter,
                'profile': profile,
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
                429: `Too much request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Get Question Details
     * @param id Question ID
     * @param page Page number (optional)
     * @returns QuestionViewSchema Successful response
     * @throws ApiError
     */
    public static getApiForums1(
id: string,
page?: string,
): CancelablePromise<QuestionViewSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/forums/{id}',
            path: {
                'id': id,
            },
            query: {
                'page': page,
            },
        });
    }

    /**
     * Upvote or Downvote Question
     * @param id 
     * @param requestBody 
     * @returns VoteResponseSchema Successful vote
     * @throws ApiError
     */
    public static postApiForumsVote(
id: string,
requestBody: {
type: 'upvote' | 'downvote';
},
): CancelablePromise<VoteResponseSchema> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/forums/vote/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
