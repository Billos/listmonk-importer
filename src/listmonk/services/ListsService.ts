/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { List } from '../models/List';
import type { NewList } from '../models/NewList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ListsService {
    /**
     * retrieves lists with additional metadata like subscriber counts. This may be slow.
     * @param page total number of pages
     * @param perPage number of items per page
     * @param query Optional string to search a list by name.
     * @param orderBy Field to sort results by. name|status|created_at|updated_at
     * @param order ASC|DESC Sort by ascending or descending order.
     * @param minimal When set to true, returns response without body content
     * @param tag Tags to filter lists. Repeat in the query for multiple values.
     * @returns any list of metadata
     * @throws ApiError
     */
    public static getLists(
        page?: number,
        perPage?: (number | 'all'),
        query?: string,
        orderBy?: 'name' | 'status' | 'created_at' | 'updated_at',
        order?: 'ASC' | 'DESC',
        minimal?: boolean,
        tag?: Array<string>,
    ): CancelablePromise<{
        data?: {
            results?: Array<List>;
            total?: number;
            per_page?: number;
            page?: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lists',
            query: {
                'page': page,
                'per_page': perPage,
                'query': query,
                'order_by': orderBy,
                'order': order,
                'minimal': minimal,
                'tag': tag,
            },
        });
    }
    /**
     * handles list creation
     * @param requestBody new list info
     * @returns any updated list object
     * @throws ApiError
     */
    public static createList(
        requestBody?: NewList,
    ): CancelablePromise<{
        data?: List;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/lists',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * retrieves lists with additional metadata like subscriber counts. This may be slow.
     * @param listId The id value of the list you want to retreive.
     * @returns any list object
     * @throws ApiError
     */
    public static getListById(
        listId: number,
    ): CancelablePromise<{
        data?: List;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lists/{list_id}',
            path: {
                'list_id': listId,
            },
        });
    }
    /**
     * handles list modification
     * @param listId The id value of the list you want to update
     * @param requestBody updated list field values
     * @returns any updated list object
     * @throws ApiError
     */
    public static updateListById(
        listId: number,
        requestBody?: List,
    ): CancelablePromise<{
        data?: List;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/lists/{list_id}',
            path: {
                'list_id': listId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * handles list deletion, either a single one (ID in the URI), or a list.
     * @param listId The id value of the lists you want to delete.
     * @returns any OK
     * @throws ApiError
     */
    public static deleteListById(
        listId: number,
    ): CancelablePromise<{
        data?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/lists/{list_id}',
            path: {
                'list_id': listId,
            },
        });
    }
}
