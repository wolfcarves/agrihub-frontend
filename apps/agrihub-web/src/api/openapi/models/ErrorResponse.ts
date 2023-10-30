/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ZodValidationError } from './ZodValidationError';

export type ErrorResponse = {
    error?: boolean;
    message?: string;
    validationErrors?: Array<ZodValidationError>;
};
