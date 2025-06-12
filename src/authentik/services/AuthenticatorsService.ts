/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Device } from '../models/Device';
import type { DuoDevice } from '../models/DuoDevice';
import type { DuoDeviceRequest } from '../models/DuoDeviceRequest';
import type { EmailDevice } from '../models/EmailDevice';
import type { EmailDeviceRequest } from '../models/EmailDeviceRequest';
import type { EndpointDevice } from '../models/EndpointDevice';
import type { EndpointDeviceRequest } from '../models/EndpointDeviceRequest';
import type { PaginatedDuoDeviceList } from '../models/PaginatedDuoDeviceList';
import type { PaginatedEmailDeviceList } from '../models/PaginatedEmailDeviceList';
import type { PaginatedEndpointDeviceList } from '../models/PaginatedEndpointDeviceList';
import type { PaginatedSMSDeviceList } from '../models/PaginatedSMSDeviceList';
import type { PaginatedStaticDeviceList } from '../models/PaginatedStaticDeviceList';
import type { PaginatedTOTPDeviceList } from '../models/PaginatedTOTPDeviceList';
import type { PaginatedWebAuthnDeviceList } from '../models/PaginatedWebAuthnDeviceList';
import type { PatchedDuoDeviceRequest } from '../models/PatchedDuoDeviceRequest';
import type { PatchedEmailDeviceRequest } from '../models/PatchedEmailDeviceRequest';
import type { PatchedEndpointDeviceRequest } from '../models/PatchedEndpointDeviceRequest';
import type { PatchedSMSDeviceRequest } from '../models/PatchedSMSDeviceRequest';
import type { PatchedStaticDeviceRequest } from '../models/PatchedStaticDeviceRequest';
import type { PatchedTOTPDeviceRequest } from '../models/PatchedTOTPDeviceRequest';
import type { PatchedWebAuthnDeviceRequest } from '../models/PatchedWebAuthnDeviceRequest';
import type { SMSDevice } from '../models/SMSDevice';
import type { SMSDeviceRequest } from '../models/SMSDeviceRequest';
import type { StaticDevice } from '../models/StaticDevice';
import type { StaticDeviceRequest } from '../models/StaticDeviceRequest';
import type { TOTPDevice } from '../models/TOTPDevice';
import type { TOTPDeviceRequest } from '../models/TOTPDeviceRequest';
import type { UsedBy } from '../models/UsedBy';
import type { WebAuthnDevice } from '../models/WebAuthnDevice';
import type { WebAuthnDeviceRequest } from '../models/WebAuthnDeviceRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthenticatorsService {
    /**
     * Get all devices for current user
     * @param user
     * @returns Device
     * @throws ApiError
     */
    public static authenticatorsAdminAllList(
        user?: number,
    ): CancelablePromise<Array<Device>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/admin/all/',
            query: {
                'user': user,
            },
        });
    }
    /**
     * Viewset for Duo authenticator devices (for admins)
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedDuoDeviceList
     * @throws ApiError
     */
    public static authenticatorsAdminDuoList(
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedDuoDeviceList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/admin/duo/',
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
     * Viewset for Duo authenticator devices (for admins)
     * @param requestBody
     * @returns DuoDevice
     * @throws ApiError
     */
    public static authenticatorsAdminDuoCreate(
        requestBody: DuoDeviceRequest,
    ): CancelablePromise<DuoDevice> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/authenticators/admin/duo/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Viewset for Duo authenticator devices (for admins)
     * @param id A unique integer value identifying this Duo Device.
     * @returns DuoDevice
     * @throws ApiError
     */
    public static authenticatorsAdminDuoRetrieve(
        id: number,
    ): CancelablePromise<DuoDevice> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/admin/duo/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Viewset for Duo authenticator devices (for admins)
     * @param id A unique integer value identifying this Duo Device.
     * @param requestBody
     * @returns DuoDevice
     * @throws ApiError
     */
    public static authenticatorsAdminDuoUpdate(
        id: number,
        requestBody: DuoDeviceRequest,
    ): CancelablePromise<DuoDevice> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/authenticators/admin/duo/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Viewset for Duo authenticator devices (for admins)
     * @param id A unique integer value identifying this Duo Device.
     * @param requestBody
     * @returns DuoDevice
     * @throws ApiError
     */
    public static authenticatorsAdminDuoPartialUpdate(
        id: number,
        requestBody?: PatchedDuoDeviceRequest,
    ): CancelablePromise<DuoDevice> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/authenticators/admin/duo/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Viewset for Duo authenticator devices (for admins)
     * @param id A unique integer value identifying this Duo Device.
     * @returns void
     * @throws ApiError
     */
    public static authenticatorsAdminDuoDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/authenticators/admin/duo/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Viewset for email authenticator devices (for admins)
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedEmailDeviceList
     * @throws ApiError
     */
    public static authenticatorsAdminEmailList(
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedEmailDeviceList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/admin/email/',
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
     * Viewset for email authenticator devices (for admins)
     * @param requestBody
     * @returns EmailDevice
     * @throws ApiError
     */
    public static authenticatorsAdminEmailCreate(
        requestBody: EmailDeviceRequest,
    ): CancelablePromise<EmailDevice> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/authenticators/admin/email/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Viewset for email authenticator devices (for admins)
     * @param id A unique integer value identifying this Email Device.
     * @returns EmailDevice
     * @throws ApiError
     */
    public static authenticatorsAdminEmailRetrieve(
        id: number,
    ): CancelablePromise<EmailDevice> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/admin/email/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Viewset for email authenticator devices (for admins)
     * @param id A unique integer value identifying this Email Device.
     * @param requestBody
     * @returns EmailDevice
     * @throws ApiError
     */
    public static authenticatorsAdminEmailUpdate(
        id: number,
        requestBody: EmailDeviceRequest,
    ): CancelablePromise<EmailDevice> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/authenticators/admin/email/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Viewset for email authenticator devices (for admins)
     * @param id A unique integer value identifying this Email Device.
     * @param requestBody
     * @returns EmailDevice
     * @throws ApiError
     */
    public static authenticatorsAdminEmailPartialUpdate(
        id: number,
        requestBody?: PatchedEmailDeviceRequest,
    ): CancelablePromise<EmailDevice> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/authenticators/admin/email/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Viewset for email authenticator devices (for admins)
     * @param id A unique integer value identifying this Email Device.
     * @returns void
     * @throws ApiError
     */
    public static authenticatorsAdminEmailDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/authenticators/admin/email/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Viewset for Endpoint authenticator devices (for admins)
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedEndpointDeviceList
     * @throws ApiError
     */
    public static authenticatorsAdminEndpointList(
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedEndpointDeviceList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/admin/endpoint/',
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
     * Viewset for Endpoint authenticator devices (for admins)
     * @param requestBody
     * @returns EndpointDevice
     * @throws ApiError
     */
    public static authenticatorsAdminEndpointCreate(
        requestBody: EndpointDeviceRequest,
    ): CancelablePromise<EndpointDevice> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/authenticators/admin/endpoint/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Viewset for Endpoint authenticator devices (for admins)
     * @param uuid A UUID string identifying this Endpoint Device.
     * @returns EndpointDevice
     * @throws ApiError
     */
    public static authenticatorsAdminEndpointRetrieve(
        uuid: string,
    ): CancelablePromise<EndpointDevice> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/admin/endpoint/{uuid}/',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * Viewset for Endpoint authenticator devices (for admins)
     * @param uuid A UUID string identifying this Endpoint Device.
     * @param requestBody
     * @returns EndpointDevice
     * @throws ApiError
     */
    public static authenticatorsAdminEndpointUpdate(
        uuid: string,
        requestBody: EndpointDeviceRequest,
    ): CancelablePromise<EndpointDevice> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/authenticators/admin/endpoint/{uuid}/',
            path: {
                'uuid': uuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Viewset for Endpoint authenticator devices (for admins)
     * @param uuid A UUID string identifying this Endpoint Device.
     * @param requestBody
     * @returns EndpointDevice
     * @throws ApiError
     */
    public static authenticatorsAdminEndpointPartialUpdate(
        uuid: string,
        requestBody?: PatchedEndpointDeviceRequest,
    ): CancelablePromise<EndpointDevice> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/authenticators/admin/endpoint/{uuid}/',
            path: {
                'uuid': uuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Viewset for Endpoint authenticator devices (for admins)
     * @param uuid A UUID string identifying this Endpoint Device.
     * @returns void
     * @throws ApiError
     */
    public static authenticatorsAdminEndpointDestroy(
        uuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/authenticators/admin/endpoint/{uuid}/',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * Viewset for sms authenticator devices (for admins)
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedSMSDeviceList
     * @throws ApiError
     */
    public static authenticatorsAdminSmsList(
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedSMSDeviceList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/admin/sms/',
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
     * Viewset for sms authenticator devices (for admins)
     * @param requestBody
     * @returns SMSDevice
     * @throws ApiError
     */
    public static authenticatorsAdminSmsCreate(
        requestBody: SMSDeviceRequest,
    ): CancelablePromise<SMSDevice> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/authenticators/admin/sms/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Viewset for sms authenticator devices (for admins)
     * @param id A unique integer value identifying this SMS Device.
     * @returns SMSDevice
     * @throws ApiError
     */
    public static authenticatorsAdminSmsRetrieve(
        id: number,
    ): CancelablePromise<SMSDevice> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/admin/sms/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Viewset for sms authenticator devices (for admins)
     * @param id A unique integer value identifying this SMS Device.
     * @param requestBody
     * @returns SMSDevice
     * @throws ApiError
     */
    public static authenticatorsAdminSmsUpdate(
        id: number,
        requestBody: SMSDeviceRequest,
    ): CancelablePromise<SMSDevice> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/authenticators/admin/sms/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Viewset for sms authenticator devices (for admins)
     * @param id A unique integer value identifying this SMS Device.
     * @param requestBody
     * @returns SMSDevice
     * @throws ApiError
     */
    public static authenticatorsAdminSmsPartialUpdate(
        id: number,
        requestBody?: PatchedSMSDeviceRequest,
    ): CancelablePromise<SMSDevice> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/authenticators/admin/sms/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Viewset for sms authenticator devices (for admins)
     * @param id A unique integer value identifying this SMS Device.
     * @returns void
     * @throws ApiError
     */
    public static authenticatorsAdminSmsDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/authenticators/admin/sms/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Viewset for static authenticator devices (for admins)
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedStaticDeviceList
     * @throws ApiError
     */
    public static authenticatorsAdminStaticList(
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedStaticDeviceList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/admin/static/',
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
     * Viewset for static authenticator devices (for admins)
     * @param requestBody
     * @returns StaticDevice
     * @throws ApiError
     */
    public static authenticatorsAdminStaticCreate(
        requestBody: StaticDeviceRequest,
    ): CancelablePromise<StaticDevice> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/authenticators/admin/static/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Viewset for static authenticator devices (for admins)
     * @param id A unique integer value identifying this Static Device.
     * @returns StaticDevice
     * @throws ApiError
     */
    public static authenticatorsAdminStaticRetrieve(
        id: number,
    ): CancelablePromise<StaticDevice> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/admin/static/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Viewset for static authenticator devices (for admins)
     * @param id A unique integer value identifying this Static Device.
     * @param requestBody
     * @returns StaticDevice
     * @throws ApiError
     */
    public static authenticatorsAdminStaticUpdate(
        id: number,
        requestBody: StaticDeviceRequest,
    ): CancelablePromise<StaticDevice> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/authenticators/admin/static/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Viewset for static authenticator devices (for admins)
     * @param id A unique integer value identifying this Static Device.
     * @param requestBody
     * @returns StaticDevice
     * @throws ApiError
     */
    public static authenticatorsAdminStaticPartialUpdate(
        id: number,
        requestBody?: PatchedStaticDeviceRequest,
    ): CancelablePromise<StaticDevice> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/authenticators/admin/static/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Viewset for static authenticator devices (for admins)
     * @param id A unique integer value identifying this Static Device.
     * @returns void
     * @throws ApiError
     */
    public static authenticatorsAdminStaticDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/authenticators/admin/static/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Viewset for totp authenticator devices (for admins)
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedTOTPDeviceList
     * @throws ApiError
     */
    public static authenticatorsAdminTotpList(
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedTOTPDeviceList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/admin/totp/',
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
     * Viewset for totp authenticator devices (for admins)
     * @param requestBody
     * @returns TOTPDevice
     * @throws ApiError
     */
    public static authenticatorsAdminTotpCreate(
        requestBody: TOTPDeviceRequest,
    ): CancelablePromise<TOTPDevice> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/authenticators/admin/totp/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Viewset for totp authenticator devices (for admins)
     * @param id A unique integer value identifying this TOTP Device.
     * @returns TOTPDevice
     * @throws ApiError
     */
    public static authenticatorsAdminTotpRetrieve(
        id: number,
    ): CancelablePromise<TOTPDevice> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/admin/totp/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Viewset for totp authenticator devices (for admins)
     * @param id A unique integer value identifying this TOTP Device.
     * @param requestBody
     * @returns TOTPDevice
     * @throws ApiError
     */
    public static authenticatorsAdminTotpUpdate(
        id: number,
        requestBody: TOTPDeviceRequest,
    ): CancelablePromise<TOTPDevice> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/authenticators/admin/totp/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Viewset for totp authenticator devices (for admins)
     * @param id A unique integer value identifying this TOTP Device.
     * @param requestBody
     * @returns TOTPDevice
     * @throws ApiError
     */
    public static authenticatorsAdminTotpPartialUpdate(
        id: number,
        requestBody?: PatchedTOTPDeviceRequest,
    ): CancelablePromise<TOTPDevice> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/authenticators/admin/totp/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Viewset for totp authenticator devices (for admins)
     * @param id A unique integer value identifying this TOTP Device.
     * @returns void
     * @throws ApiError
     */
    public static authenticatorsAdminTotpDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/authenticators/admin/totp/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Viewset for WebAuthn authenticator devices (for admins)
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedWebAuthnDeviceList
     * @throws ApiError
     */
    public static authenticatorsAdminWebauthnList(
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedWebAuthnDeviceList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/admin/webauthn/',
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
     * Viewset for WebAuthn authenticator devices (for admins)
     * @param requestBody
     * @returns WebAuthnDevice
     * @throws ApiError
     */
    public static authenticatorsAdminWebauthnCreate(
        requestBody: WebAuthnDeviceRequest,
    ): CancelablePromise<WebAuthnDevice> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/authenticators/admin/webauthn/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Viewset for WebAuthn authenticator devices (for admins)
     * @param id A unique integer value identifying this WebAuthn Device.
     * @returns WebAuthnDevice
     * @throws ApiError
     */
    public static authenticatorsAdminWebauthnRetrieve(
        id: number,
    ): CancelablePromise<WebAuthnDevice> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/admin/webauthn/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Viewset for WebAuthn authenticator devices (for admins)
     * @param id A unique integer value identifying this WebAuthn Device.
     * @param requestBody
     * @returns WebAuthnDevice
     * @throws ApiError
     */
    public static authenticatorsAdminWebauthnUpdate(
        id: number,
        requestBody: WebAuthnDeviceRequest,
    ): CancelablePromise<WebAuthnDevice> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/authenticators/admin/webauthn/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Viewset for WebAuthn authenticator devices (for admins)
     * @param id A unique integer value identifying this WebAuthn Device.
     * @param requestBody
     * @returns WebAuthnDevice
     * @throws ApiError
     */
    public static authenticatorsAdminWebauthnPartialUpdate(
        id: number,
        requestBody?: PatchedWebAuthnDeviceRequest,
    ): CancelablePromise<WebAuthnDevice> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/authenticators/admin/webauthn/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Viewset for WebAuthn authenticator devices (for admins)
     * @param id A unique integer value identifying this WebAuthn Device.
     * @returns void
     * @throws ApiError
     */
    public static authenticatorsAdminWebauthnDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/authenticators/admin/webauthn/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get all devices for current user
     * @returns Device
     * @throws ApiError
     */
    public static authenticatorsAllList(): CancelablePromise<Array<Device>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/all/',
        });
    }
    /**
     * Viewset for Duo authenticator devices
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedDuoDeviceList
     * @throws ApiError
     */
    public static authenticatorsDuoList(
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedDuoDeviceList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/duo/',
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
     * Viewset for Duo authenticator devices
     * @param id A unique integer value identifying this Duo Device.
     * @returns DuoDevice
     * @throws ApiError
     */
    public static authenticatorsDuoRetrieve(
        id: number,
    ): CancelablePromise<DuoDevice> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/duo/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Viewset for Duo authenticator devices
     * @param id A unique integer value identifying this Duo Device.
     * @param requestBody
     * @returns DuoDevice
     * @throws ApiError
     */
    public static authenticatorsDuoUpdate(
        id: number,
        requestBody: DuoDeviceRequest,
    ): CancelablePromise<DuoDevice> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/authenticators/duo/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Viewset for Duo authenticator devices
     * @param id A unique integer value identifying this Duo Device.
     * @param requestBody
     * @returns DuoDevice
     * @throws ApiError
     */
    public static authenticatorsDuoPartialUpdate(
        id: number,
        requestBody?: PatchedDuoDeviceRequest,
    ): CancelablePromise<DuoDevice> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/authenticators/duo/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Viewset for Duo authenticator devices
     * @param id A unique integer value identifying this Duo Device.
     * @returns void
     * @throws ApiError
     */
    public static authenticatorsDuoDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/authenticators/duo/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique integer value identifying this Duo Device.
     * @returns UsedBy
     * @throws ApiError
     */
    public static authenticatorsDuoUsedByList(
        id: number,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/duo/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Viewset for email authenticator devices
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedEmailDeviceList
     * @throws ApiError
     */
    public static authenticatorsEmailList(
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedEmailDeviceList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/email/',
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
     * Viewset for email authenticator devices
     * @param id A unique integer value identifying this Email Device.
     * @returns EmailDevice
     * @throws ApiError
     */
    public static authenticatorsEmailRetrieve(
        id: number,
    ): CancelablePromise<EmailDevice> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/email/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Viewset for email authenticator devices
     * @param id A unique integer value identifying this Email Device.
     * @param requestBody
     * @returns EmailDevice
     * @throws ApiError
     */
    public static authenticatorsEmailUpdate(
        id: number,
        requestBody: EmailDeviceRequest,
    ): CancelablePromise<EmailDevice> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/authenticators/email/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Viewset for email authenticator devices
     * @param id A unique integer value identifying this Email Device.
     * @param requestBody
     * @returns EmailDevice
     * @throws ApiError
     */
    public static authenticatorsEmailPartialUpdate(
        id: number,
        requestBody?: PatchedEmailDeviceRequest,
    ): CancelablePromise<EmailDevice> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/authenticators/email/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Viewset for email authenticator devices
     * @param id A unique integer value identifying this Email Device.
     * @returns void
     * @throws ApiError
     */
    public static authenticatorsEmailDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/authenticators/email/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique integer value identifying this Email Device.
     * @returns UsedBy
     * @throws ApiError
     */
    public static authenticatorsEmailUsedByList(
        id: number,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/email/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Viewset for Endpoint authenticator devices
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedEndpointDeviceList
     * @throws ApiError
     */
    public static authenticatorsEndpointList(
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedEndpointDeviceList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/endpoint/',
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
     * Viewset for Endpoint authenticator devices
     * @param uuid A UUID string identifying this Endpoint Device.
     * @returns EndpointDevice
     * @throws ApiError
     */
    public static authenticatorsEndpointRetrieve(
        uuid: string,
    ): CancelablePromise<EndpointDevice> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/endpoint/{uuid}/',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param uuid A UUID string identifying this Endpoint Device.
     * @returns UsedBy
     * @throws ApiError
     */
    public static authenticatorsEndpointUsedByList(
        uuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/endpoint/{uuid}/used_by/',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * Viewset for sms authenticator devices
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedSMSDeviceList
     * @throws ApiError
     */
    public static authenticatorsSmsList(
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedSMSDeviceList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/sms/',
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
     * Viewset for sms authenticator devices
     * @param id A unique integer value identifying this SMS Device.
     * @returns SMSDevice
     * @throws ApiError
     */
    public static authenticatorsSmsRetrieve(
        id: number,
    ): CancelablePromise<SMSDevice> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/sms/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Viewset for sms authenticator devices
     * @param id A unique integer value identifying this SMS Device.
     * @param requestBody
     * @returns SMSDevice
     * @throws ApiError
     */
    public static authenticatorsSmsUpdate(
        id: number,
        requestBody: SMSDeviceRequest,
    ): CancelablePromise<SMSDevice> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/authenticators/sms/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Viewset for sms authenticator devices
     * @param id A unique integer value identifying this SMS Device.
     * @param requestBody
     * @returns SMSDevice
     * @throws ApiError
     */
    public static authenticatorsSmsPartialUpdate(
        id: number,
        requestBody?: PatchedSMSDeviceRequest,
    ): CancelablePromise<SMSDevice> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/authenticators/sms/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Viewset for sms authenticator devices
     * @param id A unique integer value identifying this SMS Device.
     * @returns void
     * @throws ApiError
     */
    public static authenticatorsSmsDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/authenticators/sms/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique integer value identifying this SMS Device.
     * @returns UsedBy
     * @throws ApiError
     */
    public static authenticatorsSmsUsedByList(
        id: number,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/sms/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Viewset for static authenticator devices
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedStaticDeviceList
     * @throws ApiError
     */
    public static authenticatorsStaticList(
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedStaticDeviceList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/static/',
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
     * Viewset for static authenticator devices
     * @param id A unique integer value identifying this Static Device.
     * @returns StaticDevice
     * @throws ApiError
     */
    public static authenticatorsStaticRetrieve(
        id: number,
    ): CancelablePromise<StaticDevice> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/static/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Viewset for static authenticator devices
     * @param id A unique integer value identifying this Static Device.
     * @param requestBody
     * @returns StaticDevice
     * @throws ApiError
     */
    public static authenticatorsStaticUpdate(
        id: number,
        requestBody: StaticDeviceRequest,
    ): CancelablePromise<StaticDevice> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/authenticators/static/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Viewset for static authenticator devices
     * @param id A unique integer value identifying this Static Device.
     * @param requestBody
     * @returns StaticDevice
     * @throws ApiError
     */
    public static authenticatorsStaticPartialUpdate(
        id: number,
        requestBody?: PatchedStaticDeviceRequest,
    ): CancelablePromise<StaticDevice> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/authenticators/static/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Viewset for static authenticator devices
     * @param id A unique integer value identifying this Static Device.
     * @returns void
     * @throws ApiError
     */
    public static authenticatorsStaticDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/authenticators/static/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique integer value identifying this Static Device.
     * @returns UsedBy
     * @throws ApiError
     */
    public static authenticatorsStaticUsedByList(
        id: number,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/static/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Viewset for totp authenticator devices
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedTOTPDeviceList
     * @throws ApiError
     */
    public static authenticatorsTotpList(
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedTOTPDeviceList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/totp/',
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
     * Viewset for totp authenticator devices
     * @param id A unique integer value identifying this TOTP Device.
     * @returns TOTPDevice
     * @throws ApiError
     */
    public static authenticatorsTotpRetrieve(
        id: number,
    ): CancelablePromise<TOTPDevice> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/totp/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Viewset for totp authenticator devices
     * @param id A unique integer value identifying this TOTP Device.
     * @param requestBody
     * @returns TOTPDevice
     * @throws ApiError
     */
    public static authenticatorsTotpUpdate(
        id: number,
        requestBody: TOTPDeviceRequest,
    ): CancelablePromise<TOTPDevice> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/authenticators/totp/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Viewset for totp authenticator devices
     * @param id A unique integer value identifying this TOTP Device.
     * @param requestBody
     * @returns TOTPDevice
     * @throws ApiError
     */
    public static authenticatorsTotpPartialUpdate(
        id: number,
        requestBody?: PatchedTOTPDeviceRequest,
    ): CancelablePromise<TOTPDevice> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/authenticators/totp/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Viewset for totp authenticator devices
     * @param id A unique integer value identifying this TOTP Device.
     * @returns void
     * @throws ApiError
     */
    public static authenticatorsTotpDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/authenticators/totp/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique integer value identifying this TOTP Device.
     * @returns UsedBy
     * @throws ApiError
     */
    public static authenticatorsTotpUsedByList(
        id: number,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/totp/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Viewset for WebAuthn authenticator devices
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedWebAuthnDeviceList
     * @throws ApiError
     */
    public static authenticatorsWebauthnList(
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedWebAuthnDeviceList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/webauthn/',
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
     * Viewset for WebAuthn authenticator devices
     * @param id A unique integer value identifying this WebAuthn Device.
     * @returns WebAuthnDevice
     * @throws ApiError
     */
    public static authenticatorsWebauthnRetrieve(
        id: number,
    ): CancelablePromise<WebAuthnDevice> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/webauthn/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Viewset for WebAuthn authenticator devices
     * @param id A unique integer value identifying this WebAuthn Device.
     * @param requestBody
     * @returns WebAuthnDevice
     * @throws ApiError
     */
    public static authenticatorsWebauthnUpdate(
        id: number,
        requestBody: WebAuthnDeviceRequest,
    ): CancelablePromise<WebAuthnDevice> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/authenticators/webauthn/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Viewset for WebAuthn authenticator devices
     * @param id A unique integer value identifying this WebAuthn Device.
     * @param requestBody
     * @returns WebAuthnDevice
     * @throws ApiError
     */
    public static authenticatorsWebauthnPartialUpdate(
        id: number,
        requestBody?: PatchedWebAuthnDeviceRequest,
    ): CancelablePromise<WebAuthnDevice> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/authenticators/webauthn/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Viewset for WebAuthn authenticator devices
     * @param id A unique integer value identifying this WebAuthn Device.
     * @returns void
     * @throws ApiError
     */
    public static authenticatorsWebauthnDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/authenticators/webauthn/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique integer value identifying this WebAuthn Device.
     * @returns UsedBy
     * @throws ApiError
     */
    public static authenticatorsWebauthnUsedByList(
        id: number,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authenticators/webauthn/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
}
