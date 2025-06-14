/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LogsService {
    /**
     * returns the log entries stored in the log buffer
     * @returns any stored log entries
     * @throws ApiError
     */
    public static getLogs(): CancelablePromise<{
        data?: Array<string>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/logs',
        });
    }
}
