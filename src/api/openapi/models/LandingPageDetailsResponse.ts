/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Approach } from './Approach';
import type { CMSImage } from './CMSImage';

export type LandingPageDetailsResponse = {
    id?: string;
    cta_header?: string;
    cta_description?: string;
    approach?: string;
    updatedat?: string;
    createdat?: string;
    images?: Array<CMSImage>;
    approach_items?: Array<Approach>;
};
