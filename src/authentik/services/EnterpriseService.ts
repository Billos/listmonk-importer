/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InstallID } from '../models/InstallID';
import type { License } from '../models/License';
import type { LicenseForecast } from '../models/LicenseForecast';
import type { LicenseRequest } from '../models/LicenseRequest';
import type { LicenseSummary } from '../models/LicenseSummary';
import type { PaginatedLicenseList } from '../models/PaginatedLicenseList';
import type { PatchedLicenseRequest } from '../models/PatchedLicenseRequest';
import type { UsedBy } from '../models/UsedBy';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class EnterpriseService {
    /**
     * License Viewset
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedLicenseList
     * @throws ApiError
     */
    public static enterpriseLicenseList(
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedLicenseList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/enterprise/license/',
            query: {
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
            },
        });
    }
    /**
     * License Viewset
     * @param requestBody
     * @returns License
     * @throws ApiError
     */
    public static enterpriseLicenseCreate(
        requestBody: LicenseRequest,
    ): CancelablePromise<License> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/enterprise/license/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * License Viewset
     * @param licenseUuid A UUID string identifying this License.
     * @returns License
     * @throws ApiError
     */
    public static enterpriseLicenseRetrieve(
        licenseUuid: string,
    ): CancelablePromise<License> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/enterprise/license/{license_uuid}/',
            path: {
                'license_uuid': licenseUuid,
            },
        });
    }
    /**
     * License Viewset
     * @param licenseUuid A UUID string identifying this License.
     * @param requestBody
     * @returns License
     * @throws ApiError
     */
    public static enterpriseLicenseUpdate(
        licenseUuid: string,
        requestBody: LicenseRequest,
    ): CancelablePromise<License> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/enterprise/license/{license_uuid}/',
            path: {
                'license_uuid': licenseUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * License Viewset
     * @param licenseUuid A UUID string identifying this License.
     * @param requestBody
     * @returns License
     * @throws ApiError
     */
    public static enterpriseLicensePartialUpdate(
        licenseUuid: string,
        requestBody?: PatchedLicenseRequest,
    ): CancelablePromise<License> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/enterprise/license/{license_uuid}/',
            path: {
                'license_uuid': licenseUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * License Viewset
     * @param licenseUuid A UUID string identifying this License.
     * @returns void
     * @throws ApiError
     */
    public static enterpriseLicenseDestroy(
        licenseUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/enterprise/license/{license_uuid}/',
            path: {
                'license_uuid': licenseUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param licenseUuid A UUID string identifying this License.
     * @returns UsedBy
     * @throws ApiError
     */
    public static enterpriseLicenseUsedByList(
        licenseUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/enterprise/license/{license_uuid}/used_by/',
            path: {
                'license_uuid': licenseUuid,
            },
        });
    }
    /**
     * Forecast how many users will be required in a year
     * @returns LicenseForecast
     * @throws ApiError
     */
    public static enterpriseLicenseForecastRetrieve(): CancelablePromise<LicenseForecast> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/enterprise/license/forecast/',
        });
    }
    /**
     * Get install_id
     * @returns InstallID
     * @throws ApiError
     */
    public static enterpriseLicenseInstallIdRetrieve(): CancelablePromise<InstallID> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/enterprise/license/install_id/',
        });
    }
    /**
     * Get the total license status
     * @param cached
     * @returns LicenseSummary
     * @throws ApiError
     */
    public static enterpriseLicenseSummaryRetrieve(
        cached: boolean = true,
    ): CancelablePromise<LicenseSummary> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/enterprise/license/summary/',
            query: {
                'cached': cached,
            },
        });
    }
}
