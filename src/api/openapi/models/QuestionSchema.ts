/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type QuestionSchema = {
    /**
     * The title of the forum entry
     */
    title: string;
    /**
     * The question in the forum entry
     */
    question: string;
    /**
     * The question in the forum entry
     */
    privateForum?: boolean;
    imagesrc?: Array<Blob>;
    /**
     * One or more tags associated with the forum
     */
    tags?: Array<string>;
};
