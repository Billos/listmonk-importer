/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { App } from '../models/App';
import type { LoginMetrics } from '../models/LoginMetrics';
import type { PatchedSettingsRequest } from '../models/PatchedSettingsRequest';
import type { Settings } from '../models/Settings';
import type { SettingsRequest } from '../models/SettingsRequest';
import type { SystemInfo } from '../models/SystemInfo';
import type { Version } from '../models/Version';
import type { VersionHistory } from '../models/VersionHistory';
import type { Worker } from '../models/Worker';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminService {
    /**
     * Read-only view list all installed apps
     * @returns App
     * @throws ApiError
     */
    public static adminAppsList(): CancelablePromise<Array<App>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/apps/',
        });
    }
    /**
     * Login Metrics per 1h
     * @returns LoginMetrics
     * @throws ApiError
     */
    public static adminMetricsRetrieve(): CancelablePromise<LoginMetrics> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/metrics/',
        });
    }
    /**
     * Read-only view list all installed models
     * @returns App
     * @throws ApiError
     */
    public static adminModelsList(): CancelablePromise<Array<App>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/models/',
        });
    }
    /**
     * Settings view
     * @returns Settings
     * @throws ApiError
     */
    public static adminSettingsRetrieve(): CancelablePromise<Settings> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/settings/',
        });
    }
    /**
     * Settings view
     * @param requestBody
     * @returns Settings
     * @throws ApiError
     */
    public static adminSettingsUpdate(
        requestBody?: SettingsRequest,
    ): CancelablePromise<Settings> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/settings/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Settings view
     * @param requestBody
     * @returns Settings
     * @throws ApiError
     */
    public static adminSettingsPartialUpdate(
        requestBody?: PatchedSettingsRequest,
    ): CancelablePromise<Settings> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/admin/settings/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get system information.
     * @returns SystemInfo
     * @throws ApiError
     */
    public static adminSystemRetrieve(): CancelablePromise<SystemInfo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/system/',
        });
    }
    /**
     * Get system information.
     * @returns SystemInfo
     * @throws ApiError
     */
    public static adminSystemCreate(): CancelablePromise<SystemInfo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/system/',
        });
    }
    /**
     * Get running and latest version.
     * @returns Version
     * @throws ApiError
     */
    public static adminVersionRetrieve(): CancelablePromise<Version> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/version/',
        });
    }
    /**
     * VersionHistory Viewset
     * @param build
     * @param ordering Which field to use when ordering the results.
     * @param search A search term.
     * @param version
     * @returns VersionHistory
     * @throws ApiError
     */
    public static adminVersionHistoryList(
        build?: string,
        ordering?: string,
        search?: string,
        version?: string,
    ): CancelablePromise<Array<VersionHistory>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/version/history/',
            query: {
                'build': build,
                'ordering': ordering,
                'search': search,
                'version': version,
            },
        });
    }
    /**
     * VersionHistory Viewset
     * @param id A unique integer value identifying this Version history.
     * @returns VersionHistory
     * @throws ApiError
     */
    public static adminVersionHistoryRetrieve(
        id: number,
    ): CancelablePromise<VersionHistory> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/version/history/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get currently connected worker count.
     * @returns Worker
     * @throws ApiError
     */
    public static adminWorkersList(): CancelablePromise<Array<Worker>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/workers/',
        });
    }
}
