/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExpiringBaseGrantModel } from '../models/ExpiringBaseGrantModel';
import type { PaginatedExpiringBaseGrantModelList } from '../models/PaginatedExpiringBaseGrantModelList';
import type { PaginatedTokenModelList } from '../models/PaginatedTokenModelList';
import type { TokenModel } from '../models/TokenModel';
import type { UsedBy } from '../models/UsedBy';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class Oauth2Service {
    /**
     * AccessToken Viewset
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param provider
     * @param search A search term.
     * @param user
     * @returns PaginatedTokenModelList
     * @throws ApiError
     */
    public static oauth2AccessTokensList(
        ordering?: string,
        page?: number,
        pageSize?: number,
        provider?: number,
        search?: string,
        user?: number,
    ): CancelablePromise<PaginatedTokenModelList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/oauth2/access_tokens/',
            query: {
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'provider': provider,
                'search': search,
                'user': user,
            },
        });
    }
    /**
     * AccessToken Viewset
     * @param id A unique integer value identifying this OAuth2 Access Token.
     * @returns TokenModel
     * @throws ApiError
     */
    public static oauth2AccessTokensRetrieve(
        id: number,
    ): CancelablePromise<TokenModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/oauth2/access_tokens/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * AccessToken Viewset
     * @param id A unique integer value identifying this OAuth2 Access Token.
     * @returns void
     * @throws ApiError
     */
    public static oauth2AccessTokensDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/oauth2/access_tokens/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique integer value identifying this OAuth2 Access Token.
     * @returns UsedBy
     * @throws ApiError
     */
    public static oauth2AccessTokensUsedByList(
        id: number,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/oauth2/access_tokens/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * AuthorizationCode Viewset
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param provider
     * @param search A search term.
     * @param user
     * @returns PaginatedExpiringBaseGrantModelList
     * @throws ApiError
     */
    public static oauth2AuthorizationCodesList(
        ordering?: string,
        page?: number,
        pageSize?: number,
        provider?: number,
        search?: string,
        user?: number,
    ): CancelablePromise<PaginatedExpiringBaseGrantModelList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/oauth2/authorization_codes/',
            query: {
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'provider': provider,
                'search': search,
                'user': user,
            },
        });
    }
    /**
     * AuthorizationCode Viewset
     * @param id A unique integer value identifying this Authorization Code.
     * @returns ExpiringBaseGrantModel
     * @throws ApiError
     */
    public static oauth2AuthorizationCodesRetrieve(
        id: number,
    ): CancelablePromise<ExpiringBaseGrantModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/oauth2/authorization_codes/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * AuthorizationCode Viewset
     * @param id A unique integer value identifying this Authorization Code.
     * @returns void
     * @throws ApiError
     */
    public static oauth2AuthorizationCodesDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/oauth2/authorization_codes/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique integer value identifying this Authorization Code.
     * @returns UsedBy
     * @throws ApiError
     */
    public static oauth2AuthorizationCodesUsedByList(
        id: number,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/oauth2/authorization_codes/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * RefreshToken Viewset
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param provider
     * @param search A search term.
     * @param user
     * @returns PaginatedTokenModelList
     * @throws ApiError
     */
    public static oauth2RefreshTokensList(
        ordering?: string,
        page?: number,
        pageSize?: number,
        provider?: number,
        search?: string,
        user?: number,
    ): CancelablePromise<PaginatedTokenModelList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/oauth2/refresh_tokens/',
            query: {
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'provider': provider,
                'search': search,
                'user': user,
            },
        });
    }
    /**
     * RefreshToken Viewset
     * @param id A unique integer value identifying this OAuth2 Refresh Token.
     * @returns TokenModel
     * @throws ApiError
     */
    public static oauth2RefreshTokensRetrieve(
        id: number,
    ): CancelablePromise<TokenModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/oauth2/refresh_tokens/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * RefreshToken Viewset
     * @param id A unique integer value identifying this OAuth2 Refresh Token.
     * @returns void
     * @throws ApiError
     */
    public static oauth2RefreshTokensDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/oauth2/refresh_tokens/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique integer value identifying this OAuth2 Refresh Token.
     * @returns UsedBy
     * @throws ApiError
     */
    public static oauth2RefreshTokensUsedByList(
        id: number,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/oauth2/refresh_tokens/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
}
