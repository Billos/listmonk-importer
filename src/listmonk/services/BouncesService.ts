/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Bounce } from '../models/Bounce';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BouncesService {
    /**
     * handles retrieval of bounce records.
     * @param campaignId Numeric identifier for retrieving bounce records associated with a specific campaign
     * @param page Page number for paginated results. Start from 1 for the first page
     * @param perPage Number of items per page. Use an integer for specific page size or 'all' to retrieve all results
     * @param source Filter bounce records by their source of origin
     * @param orderBy Specifies the field by which to sort the bounce records. Available options are 'email', 'campaign_name', 'source', and 'created_at'
     * @param order Determines the sort order of results. Use 'asc' for ascending or 'desc' for descending order
     * @returns any list of bounce records
     * @throws ApiError
     */
    public static getBounces(
        campaignId?: number,
        page?: number,
        perPage?: (number | 'all'),
        source?: string,
        orderBy?: 'email' | 'campaign_name' | 'source' | 'created_at',
        order?: 'asc' | 'desc',
    ): CancelablePromise<{
        data?: {
            results?: Array<Bounce>;
            query?: string;
            total?: number;
            per_page?: number;
            page?: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bounces',
            query: {
                'campaign_id': campaignId,
                'page': page,
                'per_page': perPage,
                'source': source,
                'order_by': orderBy,
                'order': order,
            },
        });
    }
    /**
     * handles retrieval of bounce records.
     * @param all flag for multiple bounce record deletion
     * @param id list of bounce ids to delete
     * @returns any OK
     * @throws ApiError
     */
    public static deleteBounces(
        all?: boolean,
        id?: string,
    ): CancelablePromise<{
        data?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/bounces',
            query: {
                'all': all,
                'id': id,
            },
        });
    }
    /**
     * handles retrieval of bounce record by id
     * @param id The id value of the bounce you want to retreive.
     * @returns any bounce object
     * @throws ApiError
     */
    public static getBounceById(
        id: number,
    ): CancelablePromise<{
        data?: Bounce;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bounces/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * handles bounce deletion, either a single one (ID in the URI), or a list.
     * @param id The id value of the bounce you want to delete.
     * @returns any OK
     * @throws ApiError
     */
    public static deleteBounceById(
        id: number,
    ): CancelablePromise<{
        data?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/bounces/{id}',
            path: {
                'id': id,
            },
        });
    }
}
