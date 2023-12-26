/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NewCommentResponse = {
    /**
     * A message indicating the success of the comment creation
     */
    message?: string;
    newComment?: {
/**
 * The ID of the created comment
 */
id?: string;
/**
 * The ID of the user who posted the comment
 */
userid?: string;
/**
 * The ID of the answer to which the comment belongs
 */
answerid?: string;
/**
 * The comment text
 */
comment?: string;
/**
 * The timestamp when the comment was created
 */
createdat?: string;
/**
 * The timestamp when the comment was last updated
 */
updatedat?: string;
};
};
