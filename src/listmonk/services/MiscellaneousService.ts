/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DashboardChart } from '../models/DashboardChart';
import type { DashboardCount } from '../models/DashboardCount';
import type { LanguagePack } from '../models/LanguagePack';
import type { ServerConfig } from '../models/ServerConfig';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MiscellaneousService {
    /**
     * healthcheck endpoint
     * @returns any OK
     * @throws ApiError
     */
    public static getHealthCheck(): CancelablePromise<{
        data?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/health',
        });
    }
    /**
     * returns general server config.
     * @returns any A server config object
     * @throws ApiError
     */
    public static getServerConfig(): CancelablePromise<{
        data?: ServerConfig;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/config',
        });
    }
    /**
     * returns the JSON language pack given the language code
     * @param lang JSON language pack required
     * @returns any requested language pack
     * @throws ApiError
     */
    public static getI18NLang(
        lang: string,
    ): CancelablePromise<{
        data?: LanguagePack;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lang/{lang}',
            path: {
                'lang': lang,
            },
        });
    }
    /**
     * returns chart data points to render on the dashboard.
     * @returns any chart data points
     * @throws ApiError
     */
    public static getDashboardCharts(): CancelablePromise<{
        data?: DashboardChart;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/charts',
        });
    }
    /**
     * returns stats counts to show on the dashboard
     * @returns any stat counts
     * @throws ApiError
     */
    public static getDashboardCounts(): CancelablePromise<{
        data?: DashboardCount;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/counts',
        });
    }
}
