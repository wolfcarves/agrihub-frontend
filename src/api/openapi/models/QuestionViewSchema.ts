/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type QuestionViewSchema = {
    id: string;
    user: {
avatar: string;
id: number;
username: string;
};
    tags: Array<{
tag: string;
}>;
    answers: Array<{
answer: string;
id: number;
isaccepted: boolean;
user: {
avatar: string;
id: number;
username: string;
};
}>;
    title: string;
    question: string;
    imagesrc: Array<string>;
    createdat: string;
    updatedat: string;
    views?: string;
    answer_count: string;
    vote_count: string;
    latest_answer_createdat: string;
};
