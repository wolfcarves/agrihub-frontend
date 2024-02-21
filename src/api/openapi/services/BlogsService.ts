/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BlogDraft } from '../models/BlogDraft';
import type { BlogViewResponse } from '../models/BlogViewResponse';
import type { CreateBlogImageResponse } from '../models/CreateBlogImageResponse';
import type { CreateBlogTagsResponse } from '../models/CreateBlogTagsResponse';
import type { CreateEventTagsRequest } from '../models/CreateEventTagsRequest';
import type { DraftBlogListResponse } from '../models/DraftBlogListResponse';
import type { MessageResponse } from '../models/MessageResponse';
import type { PublishedBlogListResponse } from '../models/PublishedBlogListResponse';
import type { PublishedBlogResponse } from '../models/PublishedBlogResponse';
import type { UpdateBlogRequest } from '../models/UpdateBlogRequest';
import type { UpdateBlogResponse } from '../models/UpdateBlogResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BlogsService {

    /**
     * Create a new draft blog
     * @returns any Blog created successfully
     * @throws ApiError
     */
    public static postApiBlogsCreateDraft({
requestBody,
}: {
requestBody: {
title?: string;
},
}): CancelablePromise<{
message?: string;
data?: BlogDraft;
}> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/blogs/create/draft',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Update a draft blog
     * @returns UpdateBlogResponse Blog updated successfully
     * @throws ApiError
     */
    public static putApiBlogsUpdateDraft({
id,
requestBody,
}: {
/**
 * The ID of the blog to be updated
 */
id: string,
requestBody: UpdateBlogRequest,
}): CancelablePromise<UpdateBlogResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/blogs/update/draft/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Remove a draft blog
     * @returns MessageResponse Blog deleted successfully
     * @throws ApiError
     */
    public static deleteApiBlogsRemoveDraft({
id,
}: {
id: string,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/blogs/remove/draft/{id}',
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
     * Create an image for a blog
     * @returns CreateBlogImageResponse Image created successfully
     * @throws ApiError
     */
    public static postApiBlogsCreateImage({
id,
formData,
}: {
id: string,
formData: {
image?: Blob;
},
}): CancelablePromise<CreateBlogImageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/blogs/create/image/{id}',
            path: {
                'id': id,
            },
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
     * Remove an image from blog
     * @returns MessageResponse Image deleted successfully
     * @throws ApiError
     */
    public static deleteApiBlogsRemoveImage({
id,
}: {
id: string,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/blogs/remove/image/{id}',
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
     * Add tags to a blog
     * @returns CreateBlogTagsResponse Tags added successfully
     * @throws ApiError
     */
    public static postApiBlogsCreateTags({
id,
requestBody,
}: {
id: string,
requestBody: CreateEventTagsRequest,
}): CancelablePromise<CreateBlogTagsResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/blogs/create/tags/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Remove a tag from blog
     * @returns MessageResponse Tag deleted successfully
     * @throws ApiError
     */
    public static deleteApiBlogsRemoveTags({
id,
}: {
id: string,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/blogs/remove/tags/{id}',
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
     * Retrieve a list of draft blogs
     * @returns DraftBlogListResponse List of draft blogs retrieved successfully
     * @throws ApiError
     */
    public static getApiBlogsDraftList({
search,
page,
perpage,
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
 * Number of items per page
 */
perpage?: string,
}): CancelablePromise<DraftBlogListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/blogs/draft/list',
            query: {
                'search': search,
                'page': page,
                'perpage': perpage,
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
     * Retrieve a list of archived blogs
     * @returns DraftBlogListResponse List of archived blogs retrieved successfully
     * @throws ApiError
     */
    public static getApiBlogsArchivedList({
search,
page,
perpage,
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
 * Number of items per page
 */
perpage?: string,
}): CancelablePromise<DraftBlogListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/blogs/archived/list',
            query: {
                'search': search,
                'page': page,
                'perpage': perpage,
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
     * Retrieve a specific blog by ID
     * @returns BlogViewResponse Blog retrieved successfully
     * @throws ApiError
     */
    public static getApiBlogsView({
id,
}: {
/**
 * ID of the blog to retrieve
 */
id: string,
}): CancelablePromise<BlogViewResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/blogs/view/{id}',
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
     * Archive a blog
     * @returns MessageResponse Blog Archive successfully
     * @throws ApiError
     */
    public static deleteApiBlogsArchive({
id,
}: {
id: string,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/blogs/archive/{id}',
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
     * Unarchive a blog
     * @returns MessageResponse Blog Unarchive successfully
     * @throws ApiError
     */
    public static putApiBlogsUnarchive({
id,
}: {
id: string,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/blogs/unarchive/{id}',
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
     * Publish a blog
     * @returns MessageResponse Blog Published Successfully
     * @throws ApiError
     */
    public static putApiBlogsPublish({
id,
}: {
id: string,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/blogs/publish/{id}',
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
     * Unpublish a blog
     * @returns MessageResponse Blog Unpublished Successfully
     * @throws ApiError
     */
    public static putApiBlogsUnpublish({
id,
}: {
id: string,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/blogs/unpublish/{id}',
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
     * Retrieve a specific published blog by ID
     * @returns PublishedBlogResponse Published blog retrieved successfully
     * @throws ApiError
     */
    public static getApiBlogsPublished({
id,
}: {
/**
 * ID of the published blog to retrieve
 */
id: string,
}): CancelablePromise<PublishedBlogResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/blogs/published/{id}',
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
     * Retrieve a list of published blogs
     * @returns PublishedBlogListResponse List of published blogs retrieved successfully
     * @throws ApiError
     */
    public static getApiBlogsPublishedList({
search,
page,
perpage,
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
 * Number of items per page
 */
perpage?: string,
}): CancelablePromise<PublishedBlogListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/blogs/published/list',
            query: {
                'search': search,
                'page': page,
                'perpage': perpage,
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
     * Update thumbnail for a blog
     * @returns MessageResponse Thumbnail updated successfully
     * @throws ApiError
     */
    public static putApiBlogsThumbnail({
id,
blogId,
}: {
/**
 * The ID of the thumbnail to update
 */
id: string,
/**
 * The ID of the blog associated with the thumbnail
 */
blogId: string,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/blogs/thumbnail/{id}/{blog_id}',
            path: {
                'id': id,
                'blog_id': blogId,
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
