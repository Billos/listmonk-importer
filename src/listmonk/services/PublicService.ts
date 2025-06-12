/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PublicService {
    /**
     * returns the list of public lists with minimal fields
     * @returns any response
     * @throws ApiError
     */
    public static getPublicLists(): CancelablePromise<Array<{
        uuid?: string;
        name?: string;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/public/lists',
        });
    }
    /**
     * handles subscription requests coming from public API calls.
     * @param requestBody subscription request parameters
     * @returns any response
     * @throws ApiError
     */
    public static handlePublicSubscription(
        requestBody?: {
            name?: string;
            email?: string;
            list_uuids?: Array<string>;
        },
    ): CancelablePromise<{
        has_optin?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/public/subscription',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
