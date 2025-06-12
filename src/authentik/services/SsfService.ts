/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedSSFStreamList } from '../models/PaginatedSSFStreamList';
import type { SSFStream } from '../models/SSFStream';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SsfService {
    /**
     * SSFStream Viewset
     * @param deliveryMethod
     * @param endpointUrl
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param provider
     * @param search A search term.
     * @returns PaginatedSSFStreamList
     * @throws ApiError
     */
    public static ssfStreamsList(
        deliveryMethod?: 'https://schemas.openid.net/secevent/risc/delivery-method/poll' | 'https://schemas.openid.net/secevent/risc/delivery-method/push',
        endpointUrl?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        provider?: number,
        search?: string,
    ): CancelablePromise<PaginatedSSFStreamList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ssf/streams/',
            query: {
                'delivery_method': deliveryMethod,
                'endpoint_url': endpointUrl,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'provider': provider,
                'search': search,
            },
        });
    }
    /**
     * SSFStream Viewset
     * @param uuid A UUID string identifying this SSF Stream.
     * @returns SSFStream
     * @throws ApiError
     */
    public static ssfStreamsRetrieve(
        uuid: string,
    ): CancelablePromise<SSFStream> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ssf/streams/{uuid}/',
            path: {
                'uuid': uuid,
            },
        });
    }
}
