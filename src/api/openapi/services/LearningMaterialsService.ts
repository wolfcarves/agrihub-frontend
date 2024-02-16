/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateDraftResponse } from '../models/CreateDraftResponse';
import type { CreateLearningCreditsResponse } from '../models/CreateLearningCreditsResponse';
import type { CreateLearningTagsResponse } from '../models/CreateLearningTagsResponse';
import type { CreateResourceResponse } from '../models/CreateResourceResponse';
import type { DeleteDraftLearningMaterialResponse } from '../models/DeleteDraftLearningMaterialResponse';
import type { LearningMaterialViewResponse } from '../models/LearningMaterialViewResponse';
import type { ListDraftLearningMaterialsResponse } from '../models/ListDraftLearningMaterialsResponse';
import type { ListPublishedLearningMaterialsResponse } from '../models/ListPublishedLearningMaterialsResponse';
import type { MessageResponse } from '../models/MessageResponse';
import type { NewLearningCredits } from '../models/NewLearningCredits';
import type { NewLearningMaterial } from '../models/NewLearningMaterial';
import type { NewLearningResource } from '../models/NewLearningResource';
import type { NewLearningTags } from '../models/NewLearningTags';
import type { PublishLearningMaterialResponse } from '../models/PublishLearningMaterialResponse';
import type { RemoveLearningCreditsResponse } from '../models/RemoveLearningCreditsResponse';
import type { RemoveLearningTagsResponse } from '../models/RemoveLearningTagsResponse';
import type { RemoveResourceResponse } from '../models/RemoveResourceResponse';
import type { SetFeaturedLearningMaterialResponse } from '../models/SetFeaturedLearningMaterialResponse';
import type { UnpublishLearningMaterialResponse } from '../models/UnpublishLearningMaterialResponse';
import type { UpdateDraftResponse } from '../models/UpdateDraftResponse';
import type { UpdateLearningMaterial } from '../models/UpdateLearningMaterial';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LearningMaterialsService {

    /**
     * Create a draft learning material
     * @returns CreateDraftResponse Successful response
     * @throws ApiError
     */
    public static postApiLearningCreateDraft({
requestBody,
}: {
requestBody: NewLearningMaterial,
}): CancelablePromise<CreateDraftResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/learning/create/draft',
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
     * Update a draft learning material
     * @returns UpdateDraftResponse Successful response
     * @throws ApiError
     */
    public static putApiLearningUpdateDraft({
id,
requestBody,
}: {
/**
 * The ID of the learning resource
 */
id: string,
requestBody: UpdateLearningMaterial,
}): CancelablePromise<UpdateDraftResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/learning/update/draft/{id}',
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
     * Create a resource for a learning material
     * @returns CreateResourceResponse Successful response
     * @throws ApiError
     */
    public static postApiLearningCreateResource({
id,
formData,
}: {
/**
 * ID of the learning material
 */
id: string,
formData: NewLearningResource,
}): CancelablePromise<CreateResourceResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/learning/create/resource/{id}',
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
     * Update a resource for a learning material
     * @returns CreateResourceResponse Successful response
     * @throws ApiError
     */
    public static putApiLearningUpdateResource({
id,
formData,
}: {
/**
 * ID of the learning material
 */
id: string,
formData: NewLearningResource,
}): CancelablePromise<CreateResourceResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/learning/update/resource/{id}',
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
     * Remove a resource from a learning material
     * @returns RemoveResourceResponse Successful response
     * @throws ApiError
     */
    public static deleteApiLearningRemoveResource({
id,
}: {
/**
 * ID of the resource
 */
id: string,
}): CancelablePromise<RemoveResourceResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/learning/remove/resource/{id}',
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
     * Create learning credits
     * @returns CreateLearningCreditsResponse Successful response
     * @throws ApiError
     */
    public static postApiLearningCreateCredits({
id,
requestBody,
}: {
/**
 * ID of the learning material
 */
id: string,
requestBody: NewLearningCredits,
}): CancelablePromise<CreateLearningCreditsResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/learning/create/credits/{id}',
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
     * Update learning credits
     * @returns CreateLearningCreditsResponse Successful response
     * @throws ApiError
     */
    public static putApiLearningUpdateCredits({
id,
requestBody,
}: {
/**
 * ID of the learning material
 */
id: string,
requestBody: NewLearningCredits,
}): CancelablePromise<CreateLearningCreditsResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/learning/update/credits/{id}',
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
     * Remove learning credits
     * @returns RemoveLearningCreditsResponse Successful response
     * @throws ApiError
     */
    public static deleteApiLearningRemoveCredits({
id,
}: {
/**
 * ID of the learning credits
 */
id: string,
}): CancelablePromise<RemoveLearningCreditsResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/learning/remove/credits/{id}',
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
     * Remove tags from learning material
     * @returns CreateLearningTagsResponse Successful response
     * @throws ApiError
     */
    public static postApiLearningCreateTags({
id,
requestBody,
}: {
/**
 * ID of the learning material
 */
id: string,
requestBody: NewLearningTags,
}): CancelablePromise<CreateLearningTagsResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/learning/create/tags/{id}',
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
     * Remove tags from learning material
     * @returns RemoveLearningTagsResponse Successful response
     * @throws ApiError
     */
    public static deleteApiLearningRemoveTags({
id,
}: {
/**
 * ID of the learning material
 */
id: string,
}): CancelablePromise<RemoveLearningTagsResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/learning/remove/tags/{id}',
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
     * View a learning material by ID
     * @returns LearningMaterialViewResponse Successful response
     * @throws ApiError
     */
    public static getApiLearningView({
id,
}: {
id: string,
}): CancelablePromise<LearningMaterialViewResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/learning/view/{id}',
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
     * List draft learning materials
     * @returns ListDraftLearningMaterialsResponse Successful response
     * @throws ApiError
     */
    public static getApiLearningDraft({
search,
page,
perpage,
}: {
/**
 * Search query string (optional)
 */
search?: string,
/**
 * Page number (optional)
 */
page?: string,
/**
 * Number of items per page (optional)
 */
perpage?: string,
}): CancelablePromise<ListDraftLearningMaterialsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/learning/draft',
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
     * List archived learning materials
     * @returns ListDraftLearningMaterialsResponse Successful response
     * @throws ApiError
     */
    public static getApiLearningArchiveList({
search,
page,
perpage,
}: {
/**
 * Search query string (optional)
 */
search?: string,
/**
 * Page number (optional)
 */
page?: string,
/**
 * Number of items per page (optional)
 */
perpage?: string,
}): CancelablePromise<ListDraftLearningMaterialsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/learning/archive/list',
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
     * List published learning materials
     * @returns ListPublishedLearningMaterialsResponse Successful response
     * @throws ApiError
     */
    public static getApiLearningPublished({
search,
page,
perpage,
}: {
/**
 * Search query string (optional)
 */
search?: string,
/**
 * Page number (optional)
 */
page?: string,
/**
 * Number of items per page (optional)
 */
perpage?: string,
}): CancelablePromise<ListPublishedLearningMaterialsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/learning/published',
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
     * Publish a learning material
     * @returns PublishLearningMaterialResponse Successful response
     * @throws ApiError
     */
    public static putApiLearningPublish({
id,
}: {
/**
 * ID of the learning material to publish
 */
id: string,
}): CancelablePromise<PublishLearningMaterialResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/learning/publish/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Set a learning material as featured
     * @returns SetFeaturedLearningMaterialResponse Successful response
     * @throws ApiError
     */
    public static putApiLearningFeatured({
materialId,
id,
}: {
/**
 * ID of the learning material
 */
materialId: string,
/**
 * ID of the featured item
 */
id: string,
}): CancelablePromise<SetFeaturedLearningMaterialResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/learning/featured/{materialId}/{id}',
            path: {
                'materialId': materialId,
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
     * Unpublish a learning material
     * @returns UnpublishLearningMaterialResponse Successful response
     * @throws ApiError
     */
    public static deleteApiLearningUnpublish({
id,
}: {
/**
 * ID of the learning material to be unpublished
 */
id: string,
}): CancelablePromise<UnpublishLearningMaterialResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/learning/unpublish/{id}',
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
     * Delete a draft learning material
     * @returns DeleteDraftLearningMaterialResponse Successful response
     * @throws ApiError
     */
    public static deleteApiLearningDraftDelete({
id,
}: {
/**
 * ID of the draft learning material to be deleted
 */
id: string,
}): CancelablePromise<DeleteDraftLearningMaterialResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/learning/draft/delete/{id}',
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
     * Archive a learning material
     * @returns MessageResponse Successful response
     * @throws ApiError
     */
    public static deleteApiLearningArchive({
id,
}: {
/**
 * ID of the learning material to be archived
 */
id: string,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/learning/archive/{id}',
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
     * Unarchive a learning material
     * @returns MessageResponse Successful response
     * @throws ApiError
     */
    public static putApiLearningUnarchive({
id,
}: {
/**
 * ID of the learning material to be archived
 */
id: string,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/learning/unarchive/{id}',
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

}
