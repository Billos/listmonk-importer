/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ImportStatus } from '../models/ImportStatus';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ImportService {
    /**
     * returns import status.
     * @returns any import status
     * @throws ApiError
     */
    public static getImportSubscribers(): CancelablePromise<{
        data?: ImportStatus;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/import/subscribers',
        });
    }
    /**
     * handles the uploading and bulk importing of a ZIP file of one or more CSV files.
     * @param formData uploads and bulk imports of compressed CSV files
     * @returns any updated import status
     * @throws ApiError
     */
    public static importSubscribers(
        formData?: {
            /**
             * JSON string containing import parameters for more detail https://listmonk.app/docs/apis/import/#params-json-string
             */
            params?: string;
            /**
             * File for upload.
             */
            file?: Blob;
        },
    ): CancelablePromise<{
        data?: ImportStatus;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/import/subscribers',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * sends a stop signal to the importer.
     * @returns any response
     * @throws ApiError
     */
    public static stopImportSubscribers(): CancelablePromise<{
        data?: ImportStatus;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/import/subscribers',
        });
    }
    /**
     * returns import statistics
     * @returns any import statistics
     * @throws ApiError
     */
    public static getImportSubscriberStats(): CancelablePromise<{
        data?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/import/subscribers/logs',
        });
    }
}
