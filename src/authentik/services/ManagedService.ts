/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BlueprintFile } from '../models/BlueprintFile';
import type { BlueprintInstance } from '../models/BlueprintInstance';
import type { BlueprintInstanceRequest } from '../models/BlueprintInstanceRequest';
import type { PaginatedBlueprintInstanceList } from '../models/PaginatedBlueprintInstanceList';
import type { PatchedBlueprintInstanceRequest } from '../models/PatchedBlueprintInstanceRequest';
import type { UsedBy } from '../models/UsedBy';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ManagedService {
    /**
     * Blueprint instances
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param path
     * @param search A search term.
     * @returns PaginatedBlueprintInstanceList
     * @throws ApiError
     */
    public static managedBlueprintsList(
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        path?: string,
        search?: string,
    ): CancelablePromise<PaginatedBlueprintInstanceList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/managed/blueprints/',
            query: {
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'path': path,
                'search': search,
            },
        });
    }
    /**
     * Blueprint instances
     * @param requestBody
     * @returns BlueprintInstance
     * @throws ApiError
     */
    public static managedBlueprintsCreate(
        requestBody: BlueprintInstanceRequest,
    ): CancelablePromise<BlueprintInstance> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/managed/blueprints/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Blueprint instances
     * @param instanceUuid A UUID string identifying this Blueprint Instance.
     * @returns BlueprintInstance
     * @throws ApiError
     */
    public static managedBlueprintsRetrieve(
        instanceUuid: string,
    ): CancelablePromise<BlueprintInstance> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/managed/blueprints/{instance_uuid}/',
            path: {
                'instance_uuid': instanceUuid,
            },
        });
    }
    /**
     * Blueprint instances
     * @param instanceUuid A UUID string identifying this Blueprint Instance.
     * @param requestBody
     * @returns BlueprintInstance
     * @throws ApiError
     */
    public static managedBlueprintsUpdate(
        instanceUuid: string,
        requestBody: BlueprintInstanceRequest,
    ): CancelablePromise<BlueprintInstance> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/managed/blueprints/{instance_uuid}/',
            path: {
                'instance_uuid': instanceUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Blueprint instances
     * @param instanceUuid A UUID string identifying this Blueprint Instance.
     * @param requestBody
     * @returns BlueprintInstance
     * @throws ApiError
     */
    public static managedBlueprintsPartialUpdate(
        instanceUuid: string,
        requestBody?: PatchedBlueprintInstanceRequest,
    ): CancelablePromise<BlueprintInstance> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/managed/blueprints/{instance_uuid}/',
            path: {
                'instance_uuid': instanceUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Blueprint instances
     * @param instanceUuid A UUID string identifying this Blueprint Instance.
     * @returns void
     * @throws ApiError
     */
    public static managedBlueprintsDestroy(
        instanceUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/managed/blueprints/{instance_uuid}/',
            path: {
                'instance_uuid': instanceUuid,
            },
        });
    }
    /**
     * Apply a blueprint
     * @param instanceUuid A UUID string identifying this Blueprint Instance.
     * @returns BlueprintInstance
     * @throws ApiError
     */
    public static managedBlueprintsApplyCreate(
        instanceUuid: string,
    ): CancelablePromise<BlueprintInstance> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/managed/blueprints/{instance_uuid}/apply/',
            path: {
                'instance_uuid': instanceUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param instanceUuid A UUID string identifying this Blueprint Instance.
     * @returns UsedBy
     * @throws ApiError
     */
    public static managedBlueprintsUsedByList(
        instanceUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/managed/blueprints/{instance_uuid}/used_by/',
            path: {
                'instance_uuid': instanceUuid,
            },
        });
    }
    /**
     * Get blueprints
     * @returns BlueprintFile
     * @throws ApiError
     */
    public static managedBlueprintsAvailableList(): CancelablePromise<Array<BlueprintFile>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/managed/blueprints/available/',
        });
    }
}
