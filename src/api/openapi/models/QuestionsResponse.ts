/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type QuestionsResponse = {
    questions?: Array<{
id?: string;
user?: {
avatar?: string;
id?: string;
username?: string;
role?: string;
district?: string;
farm_name?: string;
};
tags?: Array<{
tag?: string;
}>;
title?: string;
question?: string;
imagesrc?: Array<string>;
createdat?: string;
updatedat?: string;
answer_count?: string;
vote_count?: string;
vote?: {
id?: string;
type?: string;
};
}>;
    pagination?: {
page?: number;
per_page?: number;
total_pages?: number;
total_records?: number;
};
};
