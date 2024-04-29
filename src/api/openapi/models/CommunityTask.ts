/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CommunityTask = {
    id?: string;
    farmid?: string;
    assigned_to?: string;
    report_id?: string | null;
    crop_id?: string;
    due_date?: string;
    task_type?: CommunityTask.task_type;
    message?: string;
    action_message?: string;
    status?: string;
    crop_name?: string;
    username?: string;
    firstname?: string;
    lastname?: string;
    role?: string;
};

export namespace CommunityTask {

    export enum task_type {
        PLANT = 'plant',
        HARVEST = 'harvest',
    }


}
