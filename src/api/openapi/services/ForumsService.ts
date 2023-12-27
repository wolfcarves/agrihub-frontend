/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnswersSchema } from '../models/AnswersSchema';
import type { CommentsSchema } from '../models/CommentsSchema';
import type { DeleteVoteAnswerResponse } from '../models/DeleteVoteAnswerResponse';
import type { DeleteVoteForumResponse } from '../models/DeleteVoteForumResponse';
import type { NewAnswerResponse } from '../models/NewAnswerResponse';
import type { NewCommentResponse } from '../models/NewCommentResponse';
import type { NewQuestionSchema } from '../models/NewQuestionSchema';
import type { QuestionSchema } from '../models/QuestionSchema';
import type { QuestionsResponse } from '../models/QuestionsResponse';
import type { QuestionViewSchema } from '../models/QuestionViewSchema';
import type { VoteAnswerSchema } from '../models/VoteAnswerSchema';
import type { VoteAnswerSuccessResponse } from '../models/VoteAnswerSuccessResponse';
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
     * @param filter Filter criteria (optional, default newest)
     * @returns QuestionViewSchema Successful response
     * @throws ApiError
     */
    public static getApiForums1(
id: string,
page?: string,
filter?: 'newest' | 'top',
): CancelablePromise<QuestionViewSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/forums/{id}',
            path: {
                'id': id,
            },
            query: {
                'page': page,
                'filter': filter,
            },
            errors: {
                400: `Validation Error`,
                429: `Too much request`,
                500: `Server Error`,
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
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                429: `Too much request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Delete a vote for a forum
     * @param id The ID of the vote for a forum
     * @returns DeleteVoteForumResponse Success. Indicates that the vote for the forum has been deleted.
     * @throws ApiError
     */
    public static deleteApiForumsVoteDelete(
id: string,
): CancelablePromise<DeleteVoteForumResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/forums/vote/delete/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found`,
                429: `Too much request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Create a new answer in the forum
     * @param id The ID of the forum post
     * @param requestBody 
     * @returns NewAnswerResponse Answer created successfully
     * @throws ApiError
     */
    public static postApiForumsCreateAnswers(
id: string,
requestBody: AnswersSchema,
): CancelablePromise<NewAnswerResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/forums/create/answers/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                429: `Too much request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Create a comment for an answer in the forum
     * @param answerId The ID of the answer
     * @param requestBody 
     * @returns NewCommentResponse Comment created successfully
     * @throws ApiError
     */
    public static postApiForumsCreateComments(
answerId: string,
requestBody: CommentsSchema,
): CancelablePromise<NewCommentResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/forums/create/comments/{answerId}',
            path: {
                'answerId': answerId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                429: `Too much request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Vote for an answer in the forum
     * @param id The ID of the answer
     * @param requestBody 
     * @returns VoteAnswerSuccessResponse Voted Answer Successfully
     * @throws ApiError
     */
    public static postApiForumsVoteAnswer(
id: string,
requestBody: VoteAnswerSchema,
): CancelablePromise<VoteAnswerSuccessResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/forums/vote/answer/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                429: `Too much request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Delete a vote for an answer
     * @param id The ID of the vote for an answer
     * @returns DeleteVoteAnswerResponse Success. Indicates that the vote for the answer has been deleted.
     * @throws ApiError
     */
    public static deleteApiForumsDeleteVoteAnswer(
id: string,
): CancelablePromise<DeleteVoteAnswerResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/forums/delete/vote-answer/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Validation Error`,
                429: `Too much request`,
                500: `Server Error`,
            },
        });
    }

}
