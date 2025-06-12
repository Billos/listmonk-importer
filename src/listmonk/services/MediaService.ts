/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MediaFileObject } from '../models/MediaFileObject';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MediaService {
    /**
     * handles retrieval of uploaded media.
     * @returns any response
     * @throws ApiError
     */
    public static getMedia(): CancelablePromise<{
        data?: Array<MediaFileObject>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/media',
        });
    }
    /**
     * handles media file uploads.
     * @param formData upload media file
     * @returns any response
     * @throws ApiError
     */
    public static uploadMedia(
        formData?: Blob,
    ): CancelablePromise<{
        data?: MediaFileObject;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/media',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * handles retrieval of uploaded media.
     * @param id media file id
     * @returns any response
     * @throws ApiError
     */
    public static getMediaById(
        id: number,
    ): CancelablePromise<{
        data?: MediaFileObject;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/media/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * handles deletion of uploaded media.
     * @param id The id value of the list you want to delete.
     * @returns any response
     * @throws ApiError
     */
    public static deleteMediaById(
        id: number,
    ): CancelablePromise<{
        data?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/media/{id}',
            path: {
                'id': id,
            },
        });
    }
}
