/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Template } from '../models/Template';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TemplatesService {
    /**
     * handles retrieval of templates
     * @param noBody boolean flag for response with/without body
     * @returns any response
     * @throws ApiError
     */
    public static getTemplates(
        noBody: boolean,
    ): CancelablePromise<{
        data?: Array<Template>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/templates',
            query: {
                'no_body': noBody,
            },
        });
    }
    /**
     * handles retrieval of templates
     * @param id The id value of the template you want to get.
     * @param noBody boolean flag for response with/without body
     * @returns any response
     * @throws ApiError
     */
    public static getTemplateById(
        id: number,
        noBody?: boolean,
    ): CancelablePromise<{
        data?: Template;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/templates/{id}',
            path: {
                'id': id,
            },
            query: {
                'no_body': noBody,
            },
        });
    }
    /**
     * handles deletion of templates
     * @param id The id value of the template you want to delete.
     * @returns any response
     * @throws ApiError
     */
    public static deleteTemplateById(
        id: number,
    ): CancelablePromise<{
        data?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/templates/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * get the HTML preview of a template.
     * @param formData template parameters
     * @returns string response
     * @throws ApiError
     */
    public static previewTemplate(
        formData: {
            /**
             * type of template
             */
            template_type?: string;
            /**
             * template body
             */
            body?: string;
        },
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/templates/preview',
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }
    /**
     * renders the HTML preview of a template.
     * @param id The id value of the template you want to get.
     * @param formData template parameters
     * @returns string response
     * @throws ApiError
     */
    public static previewTemplateById(
        id: number,
        formData: {
            /**
             * type of template
             */
            template_type?: string;
            /**
             * template body
             */
            body?: string;
        },
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/templates/{id}/preview',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }
    /**
     * handles template modification.
     * @param id The id value of the template you want to set to the default template.
     * @returns Template response
     * @throws ApiError
     */
    public static updateTemplateById(
        id: number,
    ): CancelablePromise<Template> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/templates/{id}/default',
            path: {
                'id': id,
            },
        });
    }
}
