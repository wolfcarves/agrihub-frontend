/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AnswersSchema = {
    /**
     * The ID of the created answer
     */
    id?: string;
    /**
     * The ID of the user who posted the answer
     */
    userid?: string;
    /**
     * The ID of the forum post
     */
    forumid?: string;
    /**
     * The answer text
     */
    answer?: string;
    /**
     * Indicates whether the answer is accepted
     */
    isaccepted?: boolean;
    /**
     * The timestamp when the answer was created
     */
    createdat?: string;
    /**
     * The timestamp when the answer was last updated
     */
    updatedat?: string;
};
