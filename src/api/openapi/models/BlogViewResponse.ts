/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BlogImage } from './BlogImage';
import type { BlogTag } from './BlogTag';

export type BlogViewResponse = {
    id?: string;
    title?: string;
    category?: string;
    content?: string;
    author?: string;
    author_title?: string;
    status?: string;
    userid?: string;
    is_archived?: boolean;
    createdat?: string;
    updatedat?: string;
    images?: Array<BlogImage>;
    tags?: Array<BlogTag>;
};
