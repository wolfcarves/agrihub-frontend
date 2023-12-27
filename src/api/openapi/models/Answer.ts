/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Comment } from './Comment';
import type { UserObject } from './UserObject';

export type Answer = {
    /**
     * The answer text
     */
    answer?: string;
    comments?: Array<Comment>;
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
    user?: UserObject;
    createdat?: string;
    vote?: {
id?: string;
type?: string;
};
};
