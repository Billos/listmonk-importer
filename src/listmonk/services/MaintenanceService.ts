/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MaintenanceService {
    /**
     * garbage collects (deletes) orphaned or blocklisted subscribers.
     * @param type type of GC collected subscribers
     * @returns any response
     * @throws ApiError
     */
    public static deleteGcSubscribers(
        type: string,
    ): CancelablePromise<{
        data?: {
            count?: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/maintenance/subscribers/{type}',
            path: {
                'type': type,
            },
        });
    }
    /**
     * garbage collects (deletes) campaign analytics.
     * @param type type of GC collected subscribers
     * @param formData date parameter
     * @returns any response
     * @throws ApiError
     */
    public static deleteCampaignAnalyticsByType(
        type: string,
        formData: {
            before_date?: string;
        },
    ): CancelablePromise<{
        data?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/maintenance/analytics/{type}',
            path: {
                'type': type,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }
    /**
     * garbage collects (deletes) orphaned or blocklisted subscribers.
     * @param formData date parameter
     * @returns any response
     * @throws ApiError
     */
    public static deleteUnconfirmedSubscriptions(
        formData: {
            before_date?: string;
        },
    ): CancelablePromise<{
        data?: {
            count?: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/maintenance/subscriptions/unconfirmed',
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }
}
