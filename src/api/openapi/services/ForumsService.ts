/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnswersSchema } from '../models/AnswersSchema';
import type { CommentsSchema } from '../models/CommentsSchema';
import type { DeleteVoteAnswerResponse } from '../models/DeleteVoteAnswerResponse';
import type { DeleteVoteForumResponse } from '../models/DeleteVoteForumResponse';
import type { MessageResponse } from '../models/MessageResponse';
import type { NewAnswerResponse } from '../models/NewAnswerResponse';
import type { NewCommentResponse } from '../models/NewCommentResponse';
import type { NewQuestionSchema } from '../models/NewQuestionSchema';
import type { QuestionSchema } from '../models/QuestionSchema';
import type { QuestionsResponse } from '../models/QuestionsResponse';
import type { QuestionViewSchema } from '../models/QuestionViewSchema';
import type { ReportQuestionRequestBody } from '../models/ReportQuestionRequestBody';
import type { SavedQuestionsResponse } from '../models/SavedQuestionsResponse';
import type { UpdateQuestionSchema } from '../models/UpdateQuestionSchema';
import type { VoteAnswerSchema } from '../models/VoteAnswerSchema';
import type { VoteAnswerSuccessResponse } from '../models/VoteAnswerSuccessResponse';
import type { VoteResponseSchema } from '../models/VoteResponseSchema';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ForumsService {

    /**
     * Get Questions Data
     * @returns QuestionsResponse Success
     * @throws ApiError
     */
    public static getApiForums({
search,
page,
perpage,
filter,
profile,
tag,
privateForum,
}: {
/**
 * Search term for forums (optional)
 */
search?: string,
/**
 * Page number (optional)
 */
page?: string,
/**
 * Number of items per page (optional, default 10)
 */
perpage?: string,
/**
 * Filter criteria (optional, default newest)
 */
filter?: 'newest' | 'active' | 'trending',
/**
 * profile query
 */
profile?: string,
/**
 * tag query
 */
tag?: string,
/**
 * tag query
 */
privateForum?: boolean,
}): CancelablePromise<QuestionsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/forums',
            query: {
                'search': search,
                'page': page,
                'perpage': perpage,
                'filter': filter,
                'profile': profile,
                'tag': tag,
                'privateForum': privateForum,
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
     * @returns NewQuestionSchema Success
     * @throws ApiError
     */
    public static postApiForums({
formData,
}: {
formData: QuestionSchema,
}): CancelablePromise<NewQuestionSchema> {
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
     * @returns QuestionViewSchema Successful response
     * @throws ApiError
     */
    public static getApiForums1({
id,
page,
filter,
}: {
/**
 * Question ID
 */
id: string,
/**
 * Page number (optional)
 */
page?: string,
/**
 * Filter criteria (optional, default newest)
 */
filter?: 'newest' | 'top',
}): CancelablePromise<QuestionViewSchema> {
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
     * Update Question Details
     * @returns MessageResponse Success
     * @throws ApiError
     */
    public static putApiForums({
id,
formData,
}: {
/**
 * Question ID
 */
id: string,
formData: UpdateQuestionSchema,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/forums/{id}',
            path: {
                'id': id,
            },
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
     * Upvote or Downvote Question
     * @returns VoteResponseSchema Successful vote
     * @throws ApiError
     */
    public static postApiForumsVote({
id,
requestBody,
}: {
id: string,
requestBody: {
type: 'upvote' | 'downvote';
},
}): CancelablePromise<VoteResponseSchema> {
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
     * @returns DeleteVoteForumResponse Success. Indicates that the vote for the forum has been deleted.
     * @throws ApiError
     */
    public static deleteApiForumsVoteDelete({
id,
}: {
/**
 * The ID of the vote for a forum
 */
id: string,
}): CancelablePromise<DeleteVoteForumResponse> {
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
     * @returns NewAnswerResponse Answer created successfully
     * @throws ApiError
     */
    public static postApiForumsCreateAnswers({
id,
requestBody,
}: {
/**
 * The ID of the forum post
 */
id: string,
requestBody: AnswersSchema,
}): CancelablePromise<NewAnswerResponse> {
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
     * @returns NewCommentResponse Comment created successfully
     * @throws ApiError
     */
    public static postApiForumsCreateComments({
answerId,
requestBody,
}: {
/**
 * The ID of the answer
 */
answerId: string,
requestBody: CommentsSchema,
}): CancelablePromise<NewCommentResponse> {
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
     * @returns VoteAnswerSuccessResponse Voted Answer Successfully
     * @throws ApiError
     */
    public static postApiForumsVoteAnswer({
id,
requestBody,
}: {
/**
 * The ID of the answer
 */
id: string,
requestBody: VoteAnswerSchema,
}): CancelablePromise<VoteAnswerSuccessResponse> {
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
     * @returns DeleteVoteAnswerResponse Success. Indicates that the vote for the answer has been deleted.
     * @throws ApiError
     */
    public static deleteApiForumsDeleteVoteAnswer({
id,
}: {
/**
 * The ID of the vote for an answer
 */
id: string,
}): CancelablePromise<DeleteVoteAnswerResponse> {
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

    /**
     * Save a question
     * @returns any Saved Question Successfully
     * @throws ApiError
     */
    public static postApiForumsSaveQuestion({
id,
}: {
/**
 * The ID of the question to be saved
 */
id: string,
}): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/forums/save/question/{id}',
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

    /**
     * Remove a  saved question
     * @returns any Removed Question Successfully
     * @throws ApiError
     */
    public static deleteApiForumsRemoveSavedQuestion({
id,
}: {
/**
 * The ID of the question to be removed
 */
id: string,
}): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/forums/remove/saved/question/{id}',
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

    /**
     * Delete a question
     * @returns any Deleted Question Successfully
     * @throws ApiError
     */
    public static deleteApiForumsDeleteQuestion({
id,
}: {
/**
 * The ID of the question to be deleted
 */
id: string,
}): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/forums/delete/question/{id}',
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

    /**
     * Get Saved Questions Data
     * @returns SavedQuestionsResponse Success
     * @throws ApiError
     */
    public static getApiForumsSavedQuestions({
search,
page,
perpage,
filter,
}: {
/**
 * Search term for forums (optional)
 */
search?: string,
/**
 * Page number (optional)
 */
page?: string,
/**
 * Number of items per page (optional, default 10)
 */
perpage?: string,
/**
 * Filter criteria (optional, default newest)
 */
filter?: 'newest' | 'active' | 'trending',
}): CancelablePromise<SavedQuestionsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/forums/saved/questions',
            query: {
                'search': search,
                'page': page,
                'perpage': perpage,
                'filter': filter,
            },
            errors: {
                400: `Validation Error`,
                401: `Unauthorized Error`,
                404: `Validation Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Report a question
     * @returns any Success message
     * @throws ApiError
     */
    public static postApiForumsReportQuestion({
id,
requestBody,
}: {
/**
 * ID of the question to report
 */
id: string,
requestBody: ReportQuestionRequestBody,
}): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/forums/report/question/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized Error`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Delete an answer
     * @returns any Answer Deleted Successfully
     * @throws ApiError
     */
    public static deleteApiForumsDeleteAnswer({
id,
}: {
/**
 * The ID of the answer to be deleted
 */
id: string,
}): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/forums/delete/answer/{id}',
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

    /**
     * Delete a comment
     * @returns any Comment Deleted successfully
     * @throws ApiError
     */
    public static deleteApiForumsDeleteComment({
id,
}: {
/**
 * The ID of the comment to be deleted
 */
id: string,
}): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/forums/delete/comment/{id}',
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

    /**
     * Update Forum Answer
     * @returns any Successful response
     * @throws ApiError
     */
    public static putApiForumsUpdateAnswer({
id,
requestBody,
}: {
/**
 * ID of the forum answer to update
 */
id: string,
requestBody: {
/**
 * The updated answer content
 */
answer: string;
},
}): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/forums/update/answer/{id}',
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
     * Update Forum Comment
     * @returns any Successful response
     * @throws ApiError
     */
    public static putApiForumsUpdateComment({
id,
requestBody,
}: {
/**
 * ID of the forum comment to update
 */
id: string,
requestBody: {
/**
 * The updated comment content
 */
comment: string;
},
}): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/forums/update/comment/{id}',
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
