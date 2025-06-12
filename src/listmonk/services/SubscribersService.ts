/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Bounce } from '../models/Bounce';
import type { NewSubscriber } from '../models/NewSubscriber';
import type { Subscriber } from '../models/Subscriber';
import type { SubscriberData } from '../models/SubscriberData';
import type { SubscriberQueryRequest } from '../models/SubscriberQueryRequest';
import type { UpdateSubscriber } from '../models/UpdateSubscriber';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SubscribersService {
    /**
     * returns all subscribers.
     * @param page Page number for paginated results.
     * @param perPage Number of items per page. Use an integer for specific page size or 'all' to retrieve all results
     * @param query query subscribers with an SQL expression.
     * @param orderBy Result sorting field. Options are name, status, created_at, updated_at
     * @param order ASC|DESC Sort by ascending or descending order.
     * @param subscriptionStatus Subscription status to filter by if there are one or more list_ids.
     * @param listId ID of lists to filter by. Repeat in the query for multiple values.
     * @returns any subscribers list
     * @throws ApiError
     */
    public static getSubscribers(
        page?: number,
        perPage?: (number | 'all'),
        query?: string,
        orderBy?: 'name' | 'status' | 'created_at' | 'updated_at',
        order?: 'ASC' | 'DESC',
        subscriptionStatus?: string,
        listId?: Array<number>,
    ): CancelablePromise<{
        data?: {
            results?: Array<Subscriber>;
            query?: string;
            total?: number;
            per_page?: number;
            page?: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscribers',
            query: {
                'page': page,
                'per_page': perPage,
                'query': query,
                'order_by': orderBy,
                'order': order,
                'subscription_status': subscriptionStatus,
                'list_id': listId,
            },
        });
    }
    /**
     * handles creation of new subscriber
     * @param requestBody new subscriber info
     * @returns any subscriber object
     * @throws ApiError
     */
    public static createSubscriber(
        requestBody?: NewSubscriber,
    ): CancelablePromise<{
        data?: Subscriber;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscribers',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * handles subscribers deletion
     * @param id subscriber id/s to be deleted
     * @returns any OK
     * @throws ApiError
     */
    public static deleteSubscriberByList(
        id: string,
    ): CancelablePromise<{
        data?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/subscribers',
            query: {
                'id': id,
            },
        });
    }
    /**
     * handles the retrieval of a single subscriber by ID.
     * @param id The id value of the subscriber you want to get.
     * @returns any gets a single subscriber.
     * @throws ApiError
     */
    public static getSubscriberById(
        id: number,
    ): CancelablePromise<{
        data?: Subscriber;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscribers/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * modify subscriber data
     * @param id The id of subscriber to update
     * @param requestBody new subscriber info
     * @returns any returns updated subscriber.
     * @throws ApiError
     */
    public static updateSubscriberById(
        id: number,
        requestBody?: UpdateSubscriber,
    ): CancelablePromise<{
        data?: Subscriber;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subscribers/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * handles subscriber deletion based on id
     * @param id The id value of the subscriber you want to get.
     * @returns any OK
     * @throws ApiError
     */
    public static deleteSubscriberById(
        id: number,
    ): CancelablePromise<{
        data?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/subscribers/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * handles bulk addition or removal of subscribers
     * @param requestBody The list of subscribers details to add or remove
     * @returns any OK
     * @throws ApiError
     */
    public static manageSubscriberLists(
        requestBody?: SubscriberQueryRequest,
    ): CancelablePromise<{
        data?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subscribers/lists',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * handles bulk addition or removal of subscribers for a specified list id
     * @param id The id of list you want to update
     * @param requestBody The list of subscribers to add or remove
     * @returns any OK
     * @throws ApiError
     */
    public static manageSubscriberListById(
        id: number,
        requestBody?: SubscriberQueryRequest,
    ): CancelablePromise<{
        data?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subscribers/lists/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * handles blocklisting of subscriber list
     * @param requestBody The list of subscribers to blocklist
     * @returns any OK
     * @throws ApiError
     */
    public static manageBlocklistBySubscriberList(
        requestBody?: SubscriberQueryRequest,
    ): CancelablePromise<{
        data?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subscribers/blocklist',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * handles the blocklisting of one or more subscribers.
     * @param id The id value of the subscriber you want to blocklist.
     * @param requestBody The id of subscriber to add or remove
     * @returns any OK
     * @throws ApiError
     */
    public static manageBlocklistSubscribersById(
        id: number,
        requestBody?: SubscriberQueryRequest,
    ): CancelablePromise<{
        data?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subscribers/{id}/blocklist',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * retrieves a subscriber's profile
     * @param id The id value of subscriber profile you want to export
     * @returns SubscriberData subscriber data object
     * @throws ApiError
     */
    public static exportSubscriberDataById(
        id: number,
    ): CancelablePromise<SubscriberData> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscribers/{id}/export',
            path: {
                'id': id,
            },
        });
    }
    /**
     * retrieves a subscriber's bounce records
     * @param id subscriber id
     * @returns any list of bounce records of a subscriber
     * @throws ApiError
     */
    public static getSubscriberBouncesById(
        id: number,
    ): CancelablePromise<{
        data?: Array<Bounce>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscribers/{id}/bounces',
            path: {
                'id': id,
            },
        });
    }
    /**
     * deletes a subscriber's bounce records
     * @param id subscriber id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteSubscriberBouncesById(
        id: number,
    ): CancelablePromise<{
        data?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/subscribers/{id}/bounces',
            path: {
                'id': id,
            },
        });
    }
    /**
     * sends an optin confirmation e-mail to a subscriber.
     * @param id sends an optin confirmation e-mail to a subscriber
     * @returns any OK
     * @throws ApiError
     */
    public static subscriberSendOptinById(
        id: number,
    ): CancelablePromise<{
        data?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscribers/{id}/optin',
            path: {
                'id': id,
            },
        });
    }
    /**
     * bulk deletes based on an arbitrary SQL expression.
     * @param requestBody Arbitrary SQL expression.
     * @returns any OK
     * @throws ApiError
     */
    public static deleteSubscriberByQuery(
        requestBody?: string,
    ): CancelablePromise<{
        data?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscribers/query/delete',
            body: requestBody,
            mediaType: 'text/plain',
        });
    }
    /**
     * bulk blocklists subscribers based on an arbitrary SQL expression.
     * @param requestBody Arbitrary SQL expression.
     * @returns any OK
     * @throws ApiError
     */
    public static blocklistSubscribersQuery(
        requestBody?: string,
    ): CancelablePromise<{
        data?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subscribers/query/blocklist',
            body: requestBody,
            mediaType: 'text/plain',
        });
    }
    /**
     * bulk adds/removes/unsubscribes subscribers from one or more lists based on an arbitrary SQL expression.
     * @param requestBody Arbitrary SQL expression.
     * @returns any OK
     * @throws ApiError
     */
    public static manageSubscriberListsByQuery(
        requestBody?: string,
    ): CancelablePromise<{
        data?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subscribers/query/lists',
            body: requestBody,
            mediaType: 'text/plain',
        });
    }
}
