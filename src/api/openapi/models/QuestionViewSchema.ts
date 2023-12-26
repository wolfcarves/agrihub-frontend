/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type QuestionViewSchema = {
    question?: {
/**
 * The ID of the question
 */
id?: string;
user?: {
/**
 * The URL of the user's avatar
 */
avatar?: string;
/**
 * The ID of the user
 */
id?: string;
/**
 * The username of the user
 */
username?: string;
};
tags?: Array<{
/**
 * The tag associated with the question
 */
tag?: string;
}>;
answers?: Array<{
/**
 * The answer text
 */
answer?: string;
comments?: Array<{
/**
 * The comment text
 */
comment?: string;
createdat?: string;
user?: {
/**
 * The URL of the user's avatar
 */
avatar?: string;
/**
 * The ID of the user
 */
id?: string;
/**
 * The username of the user
 */
username?: string;
};
}>;
/**
 * The ID of the answer
 */
id?: string;
/**
 * Indicates whether the answer is accepted
 */
isaccepted?: boolean;
/**
 * The total count of votes for the answer
 */
total_vote_count?: number;
/**
 * The count of upvotes for the answer
 */
upvote_count?: number;
createdat?: string;
user?: {
/**
 * The URL of the user's avatar
 */
avatar?: string;
/**
 * The ID of the user
 */
id?: string;
/**
 * The username of the user
 */
username?: string;
};
}>;
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
vote?: {
type?: string;
};
};
    pagination?: {
/**
 * The current page number
 */
page?: number;
/**
 * The number of records per page
 */
per_page?: number;
/**
 * The total number of pages
 */
total_pages?: number;
/**
 * The total number of records
 */
total_records?: number;
};
};
