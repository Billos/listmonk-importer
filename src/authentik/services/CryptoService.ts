/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CertificateData } from '../models/CertificateData';
import type { CertificateGenerationRequest } from '../models/CertificateGenerationRequest';
import type { CertificateKeyPair } from '../models/CertificateKeyPair';
import type { CertificateKeyPairRequest } from '../models/CertificateKeyPairRequest';
import type { PaginatedCertificateKeyPairList } from '../models/PaginatedCertificateKeyPairList';
import type { PatchedCertificateKeyPairRequest } from '../models/PatchedCertificateKeyPairRequest';
import type { UsedBy } from '../models/UsedBy';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CryptoService {
    /**
     * CertificateKeyPair Viewset
     * @param hasKey Only return certificate-key pairs with keys
     * @param includeDetails
     * @param managed
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedCertificateKeyPairList
     * @throws ApiError
     */
    public static cryptoCertificatekeypairsList(
        hasKey?: boolean,
        includeDetails: boolean = true,
        managed?: string,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedCertificateKeyPairList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/crypto/certificatekeypairs/',
            query: {
                'has_key': hasKey,
                'include_details': includeDetails,
                'managed': managed,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
            },
        });
    }
    /**
     * CertificateKeyPair Viewset
     * @param requestBody
     * @returns CertificateKeyPair
     * @throws ApiError
     */
    public static cryptoCertificatekeypairsCreate(
        requestBody: CertificateKeyPairRequest,
    ): CancelablePromise<CertificateKeyPair> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/crypto/certificatekeypairs/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * CertificateKeyPair Viewset
     * @param kpUuid A UUID string identifying this Certificate-Key Pair.
     * @returns CertificateKeyPair
     * @throws ApiError
     */
    public static cryptoCertificatekeypairsRetrieve(
        kpUuid: string,
    ): CancelablePromise<CertificateKeyPair> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/crypto/certificatekeypairs/{kp_uuid}/',
            path: {
                'kp_uuid': kpUuid,
            },
        });
    }
    /**
     * CertificateKeyPair Viewset
     * @param kpUuid A UUID string identifying this Certificate-Key Pair.
     * @param requestBody
     * @returns CertificateKeyPair
     * @throws ApiError
     */
    public static cryptoCertificatekeypairsUpdate(
        kpUuid: string,
        requestBody: CertificateKeyPairRequest,
    ): CancelablePromise<CertificateKeyPair> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/crypto/certificatekeypairs/{kp_uuid}/',
            path: {
                'kp_uuid': kpUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * CertificateKeyPair Viewset
     * @param kpUuid A UUID string identifying this Certificate-Key Pair.
     * @param requestBody
     * @returns CertificateKeyPair
     * @throws ApiError
     */
    public static cryptoCertificatekeypairsPartialUpdate(
        kpUuid: string,
        requestBody?: PatchedCertificateKeyPairRequest,
    ): CancelablePromise<CertificateKeyPair> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/crypto/certificatekeypairs/{kp_uuid}/',
            path: {
                'kp_uuid': kpUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * CertificateKeyPair Viewset
     * @param kpUuid A UUID string identifying this Certificate-Key Pair.
     * @returns void
     * @throws ApiError
     */
    public static cryptoCertificatekeypairsDestroy(
        kpUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/crypto/certificatekeypairs/{kp_uuid}/',
            path: {
                'kp_uuid': kpUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param kpUuid A UUID string identifying this Certificate-Key Pair.
     * @returns UsedBy
     * @throws ApiError
     */
    public static cryptoCertificatekeypairsUsedByList(
        kpUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/crypto/certificatekeypairs/{kp_uuid}/used_by/',
            path: {
                'kp_uuid': kpUuid,
            },
        });
    }
    /**
     * Return certificate-key pairs certificate and log access
     * @param kpUuid A UUID string identifying this Certificate-Key Pair.
     * @param download
     * @returns CertificateData
     * @throws ApiError
     */
    public static cryptoCertificatekeypairsViewCertificateRetrieve(
        kpUuid: string,
        download?: boolean,
    ): CancelablePromise<CertificateData> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/crypto/certificatekeypairs/{kp_uuid}/view_certificate/',
            path: {
                'kp_uuid': kpUuid,
            },
            query: {
                'download': download,
            },
        });
    }
    /**
     * Return certificate-key pairs private key and log access
     * @param kpUuid A UUID string identifying this Certificate-Key Pair.
     * @param download
     * @returns CertificateData
     * @throws ApiError
     */
    public static cryptoCertificatekeypairsViewPrivateKeyRetrieve(
        kpUuid: string,
        download?: boolean,
    ): CancelablePromise<CertificateData> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/crypto/certificatekeypairs/{kp_uuid}/view_private_key/',
            path: {
                'kp_uuid': kpUuid,
            },
            query: {
                'download': download,
            },
        });
    }
    /**
     * Generate a new, self-signed certificate-key pair
     * @param requestBody
     * @returns CertificateKeyPair
     * @throws ApiError
     */
    public static cryptoCertificatekeypairsGenerateCreate(
        requestBody: CertificateGenerationRequest,
    ): CancelablePromise<CertificateKeyPair> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/crypto/certificatekeypairs/generate/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
}
