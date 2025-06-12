/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Config } from '../models/Config';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RootService {
    /**
     * Retrieve public configuration options
     * @returns Config
     * @throws ApiError
     */
    public static rootConfigRetrieve(): CancelablePromise<Config> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/root/config/',
        });
    }
}
