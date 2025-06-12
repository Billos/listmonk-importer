/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConnectionToken } from '../models/ConnectionToken';
import type { ConnectionTokenRequest } from '../models/ConnectionTokenRequest';
import type { Endpoint } from '../models/Endpoint';
import type { EndpointRequest } from '../models/EndpointRequest';
import type { PaginatedConnectionTokenList } from '../models/PaginatedConnectionTokenList';
import type { PaginatedEndpointList } from '../models/PaginatedEndpointList';
import type { PatchedConnectionTokenRequest } from '../models/PatchedConnectionTokenRequest';
import type { PatchedEndpointRequest } from '../models/PatchedEndpointRequest';
import type { UsedBy } from '../models/UsedBy';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RacService {
    /**
     * ConnectionToken Viewset
     * @param endpoint
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param provider
     * @param search A search term.
     * @param sessionUser
     * @returns PaginatedConnectionTokenList
     * @throws ApiError
     */
    public static racConnectionTokensList(
        endpoint?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        provider?: number,
        search?: string,
        sessionUser?: number,
    ): CancelablePromise<PaginatedConnectionTokenList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/rac/connection_tokens/',
            query: {
                'endpoint': endpoint,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'provider': provider,
                'search': search,
                'session__user': sessionUser,
            },
        });
    }
    /**
     * ConnectionToken Viewset
     * @param connectionTokenUuid A UUID string identifying this RAC Connection token.
     * @returns ConnectionToken
     * @throws ApiError
     */
    public static racConnectionTokensRetrieve(
        connectionTokenUuid: string,
    ): CancelablePromise<ConnectionToken> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/rac/connection_tokens/{connection_token_uuid}/',
            path: {
                'connection_token_uuid': connectionTokenUuid,
            },
        });
    }
    /**
     * ConnectionToken Viewset
     * @param connectionTokenUuid A UUID string identifying this RAC Connection token.
     * @param requestBody
     * @returns ConnectionToken
     * @throws ApiError
     */
    public static racConnectionTokensUpdate(
        connectionTokenUuid: string,
        requestBody: ConnectionTokenRequest,
    ): CancelablePromise<ConnectionToken> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/rac/connection_tokens/{connection_token_uuid}/',
            path: {
                'connection_token_uuid': connectionTokenUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * ConnectionToken Viewset
     * @param connectionTokenUuid A UUID string identifying this RAC Connection token.
     * @param requestBody
     * @returns ConnectionToken
     * @throws ApiError
     */
    public static racConnectionTokensPartialUpdate(
        connectionTokenUuid: string,
        requestBody?: PatchedConnectionTokenRequest,
    ): CancelablePromise<ConnectionToken> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/rac/connection_tokens/{connection_token_uuid}/',
            path: {
                'connection_token_uuid': connectionTokenUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * ConnectionToken Viewset
     * @param connectionTokenUuid A UUID string identifying this RAC Connection token.
     * @returns void
     * @throws ApiError
     */
    public static racConnectionTokensDestroy(
        connectionTokenUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/rac/connection_tokens/{connection_token_uuid}/',
            path: {
                'connection_token_uuid': connectionTokenUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param connectionTokenUuid A UUID string identifying this RAC Connection token.
     * @returns UsedBy
     * @throws ApiError
     */
    public static racConnectionTokensUsedByList(
        connectionTokenUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/rac/connection_tokens/{connection_token_uuid}/used_by/',
            path: {
                'connection_token_uuid': connectionTokenUuid,
            },
        });
    }
    /**
     * List accessible endpoints
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param provider
     * @param search
     * @param superuserFullList
     * @returns PaginatedEndpointList
     * @throws ApiError
     */
    public static racEndpointsList(
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        provider?: number,
        search?: string,
        superuserFullList?: boolean,
    ): CancelablePromise<PaginatedEndpointList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/rac/endpoints/',
            query: {
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'provider': provider,
                'search': search,
                'superuser_full_list': superuserFullList,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Endpoint Viewset
     * @param requestBody
     * @returns Endpoint
     * @throws ApiError
     */
    public static racEndpointsCreate(
        requestBody: EndpointRequest,
    ): CancelablePromise<Endpoint> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/rac/endpoints/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Endpoint Viewset
     * @param pbmUuid A UUID string identifying this RAC Endpoint.
     * @returns Endpoint
     * @throws ApiError
     */
    public static racEndpointsRetrieve(
        pbmUuid: string,
    ): CancelablePromise<Endpoint> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/rac/endpoints/{pbm_uuid}/',
            path: {
                'pbm_uuid': pbmUuid,
            },
        });
    }
    /**
     * Endpoint Viewset
     * @param pbmUuid A UUID string identifying this RAC Endpoint.
     * @param requestBody
     * @returns Endpoint
     * @throws ApiError
     */
    public static racEndpointsUpdate(
        pbmUuid: string,
        requestBody: EndpointRequest,
    ): CancelablePromise<Endpoint> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/rac/endpoints/{pbm_uuid}/',
            path: {
                'pbm_uuid': pbmUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Endpoint Viewset
     * @param pbmUuid A UUID string identifying this RAC Endpoint.
     * @param requestBody
     * @returns Endpoint
     * @throws ApiError
     */
    public static racEndpointsPartialUpdate(
        pbmUuid: string,
        requestBody?: PatchedEndpointRequest,
    ): CancelablePromise<Endpoint> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/rac/endpoints/{pbm_uuid}/',
            path: {
                'pbm_uuid': pbmUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Endpoint Viewset
     * @param pbmUuid A UUID string identifying this RAC Endpoint.
     * @returns void
     * @throws ApiError
     */
    public static racEndpointsDestroy(
        pbmUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/rac/endpoints/{pbm_uuid}/',
            path: {
                'pbm_uuid': pbmUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param pbmUuid A UUID string identifying this RAC Endpoint.
     * @returns UsedBy
     * @throws ApiError
     */
    public static racEndpointsUsedByList(
        pbmUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/rac/endpoints/{pbm_uuid}/used_by/',
            path: {
                'pbm_uuid': pbmUuid,
            },
        });
    }
}
