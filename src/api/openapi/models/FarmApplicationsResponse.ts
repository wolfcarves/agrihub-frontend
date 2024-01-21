/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FarmApplicationData } from './FarmApplicationData';
import type { PaginationData } from './PaginationData';

export type FarmApplicationsResponse = {
    /**
     * The array of farm applications
     */
    applications: Array<FarmApplicationData>;
    pagination: PaginationData;
};
