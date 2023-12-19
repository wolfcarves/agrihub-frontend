/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VoteAnswerSchema = {
    /**
     * The type of vote (required)
     */
    type?: VoteAnswerSchema.type;
};

export namespace VoteAnswerSchema {

    /**
     * The type of vote (required)
     */
    export enum type {
        UPVOTE = 'upvote',
        DOWNVOTE = 'downvote',
    }


}
