/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PublishedLearningMaterial = {
    id: string;
    title: string;
    content?: string;
    type?: string;
    language?: string;
    status: string;
    createdat: string;
    updatedat: string;
    thumbnail: {
id: string;
resource: string;
type: string;
};
    tags: Array<{
tag?: string;
}>;
};
