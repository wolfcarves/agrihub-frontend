/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UploaderService {

    /**
     * Upload a file
     * @returns any Successful response
     * @throws ApiError
     */
    public static postApiUpload({
formData,
}: {
formData: {
image?: Blob;
},
}): CancelablePromise<{
file?: string;
}> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/upload',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Delete a file
     * @returns any Successful response
     * @throws ApiError
     */
    public static deleteApiUpload({
file,
}: {
file: string,
}): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/upload/{file}',
            path: {
                'file': file,
            },
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

}
