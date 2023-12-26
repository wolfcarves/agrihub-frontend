/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VoteAnswerSuccessResponse = {
    /**
     * A message indicating the success of the vote
     */
    message?: string;
    data?: {
/**
 * The ID of the vote record
 */
id?: string;
/**
 * The ID of the voted answer
 */
answerid?: string;
/**
 * The ID of the user who voted
 */
userid?: string;
/**
 * The type of vote
 */
type?: VoteAnswerSuccessResponse.type;
/**
 * The timestamp when the vote was created
 */
createdat?: string;
/**
 * The timestamp when the vote was last updated
 */
updatedat?: string;
};
};

export namespace VoteAnswerSuccessResponse {

    /**
     * The type of vote
     */
    export enum type {
        UPVOTE = 'upvote',
        DOWNVOTE = 'downvote',
    }


}
