/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FarmerApplication } from './FarmerApplication';
import type { PaginationData } from './PaginationData';

export type ListApplicationsResponse = {
    /**
     * List of farmer applications
     */
    data?: Array<FarmerApplication>;
    pagination?: PaginationData;
};
