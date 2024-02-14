/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LearningCredit } from './LearningCredit';
import type { LearningResource } from './LearningResource';
import type { LearningTag } from './LearningTag';

export type LearningMaterialViewResponse = {
    id: string;
    title: string;
    content?: string;
    type?: string;
    language?: string;
    status: string;
    published_date?: string;
    createdat: string;
    updatedat: string;
    learning_resource?: Array<LearningResource>;
    learning_credits?: Array<LearningCredit>;
    tags?: Array<LearningTag>;
};
