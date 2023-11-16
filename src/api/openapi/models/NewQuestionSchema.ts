/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NewQuestionSchema = {
    /**
     * The unique identifier for the new question
     */
    id?: string;
    /**
     * The user ID associated with the question
     */
    userid?: string;
    /**
     * The title of the new question
     */
    title?: string;
    /**
     * The content of the new question
     */
    question?: string;
    /**
     * Array of image URLs associated with the question
     */
    imagesrc?: Array<string>;
    /**
     * The timestamp when the question was created
     */
    createdat?: string;
    /**
     * The timestamp when the question was last updated
     */
    updatedat?: string;
};
