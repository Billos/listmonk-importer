/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TransactionalMessage } from '../models/TransactionalMessage';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TransactionalService {
    /**
     * send message to a subscriber
     * @param requestBody email message to a subscriber
     * @returns any OK
     * @throws ApiError
     */
    public static transactWithSubscriber(
        requestBody?: TransactionalMessage,
    ): CancelablePromise<{
        data?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tx',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
