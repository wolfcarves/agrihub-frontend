/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProblemMaterials } from './ProblemMaterials';

export type FarmProblemResponse = {
    id?: string;
    problem?: string;
    description?: string;
    createdat?: string;
    updatedat?: string;
    common?: boolean;
    learning_materials?: Array<ProblemMaterials>;
};
