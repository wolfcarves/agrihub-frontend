/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Answer } from './Answer';
import type { Pagination } from './Pagination';
import type { QuestionTags } from './QuestionTags';
import type { UserObject } from './UserObject';

export type QuestionViewSchema = {
    question?: {
/**
 * The ID of the question
 */
id?: string;
user?: UserObject;
tags?: Array<QuestionTags>;
answers?: Array<Answer>;
/**
 * The title of the question
 */
title?: string;
/**
 * The HTML content of the question
 */
question?: string;
/**
 * The array of image URLs associated with the question
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
/**
 * The number of views for the question
 */
views?: string;
/**
 * The count of answers for the question
 */
answer_count?: string;
/**
 * The total count of votes for the question
 */
vote_count?: string;
/**
 * The vote information (null in the provided example)
 */
vote?: {
id?: string;
type?: string;
};
};
    pagination?: Pagination;
};
