/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminService {
    /**
     * restarts the app
     * @returns any OK
     * @throws ApiError
     */
    public static reloadApp(): CancelablePromise<{
        data?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/reload',
        });
    }
}
