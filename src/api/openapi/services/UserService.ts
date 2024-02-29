/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminListResponse } from '../models/AdminListResponse';
import type { ListMemberResponse } from '../models/ListMemberResponse';
import type { ListUserResponse } from '../models/ListUserResponse';
import type { MessageResponse } from '../models/MessageResponse';
import type { UserSchema } from '../models/UserSchema';
import type { UserUpdateProfile } from '../models/UserUpdateProfile';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * Get a list of administrators
     * @returns AdminListResponse A list of administrators
     * @throws ApiError
     */
    public static getApiUserAdmins({
search,
page,
perpage,
filter,
}: {
/**
 * Search query string
 */
search?: string,
/**
 * Page number
 */
page?: string,
/**
 * Number of items per page
 */
perpage?: string,
/**
 * Filter by banned or active administrators
 */
filter?: 'active' | 'banned',
}): CancelablePromise<AdminListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/admins',
            query: {
                'search': search,
                'page': page,
                'perpage': perpage,
                'filter': filter,
            },
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Disable Admin Account
     * @returns any Account disabled successfully
     * @throws ApiError
     */
    public static deleteApiUserAdminDisable({
id,
}: {
/**
 * The ID of the event to be archived
 */
id: string,
}): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/user/admin/disable/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Disable Admin Account
     * @returns any Account disabled successfully
     * @throws ApiError
     */
    public static postApiUserAdminEnable({
id,
}: {
/**
 * The ID of the event to be archived
 */
id: string,
}): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/admin/enable/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Get a list of users
     * @returns ListUserResponse Success. Returns a list of users.
     * @throws ApiError
     */
    public static getApiUserList({
search,
page,
perpage,
filter,
}: {
/**
 * Search term for filtering users
 */
search?: string,
/**
 * Page number for pagination
 */
page?: string,
/**
 * Number of records per page
 */
perpage?: string,
/**
 * Filter criteria for users
 */
filter?: string,
}): CancelablePromise<ListUserResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/list',
            query: {
                'search': search,
                'page': page,
                'perpage': perpage,
                'filter': filter,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Search User
     * @returns UserSchema Success
     * @throws ApiError
     */
    public static getApiUserProfile({
username,
}: {
/**
 * Search key
 */
username: string,
}): CancelablePromise<UserSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/profile/{username}',
            path: {
                'username': username,
            },
            errors: {
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Update user profile
     * @returns MessageResponse Success
     * @throws ApiError
     */
    public static putApiUserProfile({
id,
formData,
}: {
/**
 * User ID
 */
id: string,
formData: UserUpdateProfile,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/user/profile/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                401: `Unauthorized`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns ListMemberResponse Successful response
     * @throws ApiError
     */
    public static getApiUserSearchMembers({
search = '',
page,
perpage = '20',
filter = '',
}: {
/**
 * Search term
 */
search?: string,
/**
 * Page number
 */
page?: string,
/**
 * Items per page
 */
perpage?: string,
/**
 * Filter criteria
 */
filter?: string,
}): CancelablePromise<ListMemberResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/search/members',
            query: {
                'search': search,
                'page': page,
                'perpage': perpage,
                'filter': filter,
            },
            errors: {
                401: `Unauthorized`,
                500: `Server Error`,
            },
        });
    }

}
