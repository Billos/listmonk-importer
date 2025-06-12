/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Settings } from '../models/Settings';
import type { SMTPTest } from '../models/SMTPTest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SettingsService {
    /**
     * returns settings from DB
     * @returns any settings object
     * @throws ApiError
     */
    public static getSettings(): CancelablePromise<{
        data?: Settings;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/settings',
        });
    }
    /**
     * returns updated settings from the DB.
     * @param requestBody updated settings field values
     * @returns any updated settings object
     * @throws ApiError
     */
    public static updateSettings(
        requestBody?: Settings,
    ): CancelablePromise<{
        data?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/settings',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * test smtp settings
     * @param requestBody updated SMTP settings field values
     * @returns any updated SMTP test settings
     * @throws ApiError
     */
    public static testSmtpSettings(
        requestBody?: SMTPTest,
    ): CancelablePromise<{
        data?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/settings/smtp/test',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
