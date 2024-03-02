/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ReportedUser = {
    id?: string;
    reason?: string;
    evidence?: Array<string>;
    notes?: string;
    createdat?: string;
    status?: string;
    reported?: {
id?: string;
email?: string;
firstname?: string;
lastname?: string;
username?: string;
};
    reported_by?: {
id?: string;
email?: string;
firstname?: string;
lastname?: string;
username?: string;
};
};
