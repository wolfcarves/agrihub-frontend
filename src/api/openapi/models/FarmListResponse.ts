/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FarmData } from './FarmData';
import type { PaginationData } from './PaginationData';

export type FarmListResponse = {
    /**
     * List of farms
     */
    farms?: Array<FarmData>;
    pagination?: PaginationData;
};
