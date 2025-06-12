/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GoogleWorkspaceProviderMapping } from '../models/GoogleWorkspaceProviderMapping';
import type { GoogleWorkspaceProviderMappingRequest } from '../models/GoogleWorkspaceProviderMappingRequest';
import type { KerberosSourcePropertyMapping } from '../models/KerberosSourcePropertyMapping';
import type { KerberosSourcePropertyMappingRequest } from '../models/KerberosSourcePropertyMappingRequest';
import type { LDAPSourcePropertyMapping } from '../models/LDAPSourcePropertyMapping';
import type { LDAPSourcePropertyMappingRequest } from '../models/LDAPSourcePropertyMappingRequest';
import type { MicrosoftEntraProviderMapping } from '../models/MicrosoftEntraProviderMapping';
import type { MicrosoftEntraProviderMappingRequest } from '../models/MicrosoftEntraProviderMappingRequest';
import type { NotificationWebhookMapping } from '../models/NotificationWebhookMapping';
import type { NotificationWebhookMappingRequest } from '../models/NotificationWebhookMappingRequest';
import type { OAuthSourcePropertyMapping } from '../models/OAuthSourcePropertyMapping';
import type { OAuthSourcePropertyMappingRequest } from '../models/OAuthSourcePropertyMappingRequest';
import type { PaginatedGoogleWorkspaceProviderMappingList } from '../models/PaginatedGoogleWorkspaceProviderMappingList';
import type { PaginatedKerberosSourcePropertyMappingList } from '../models/PaginatedKerberosSourcePropertyMappingList';
import type { PaginatedLDAPSourcePropertyMappingList } from '../models/PaginatedLDAPSourcePropertyMappingList';
import type { PaginatedMicrosoftEntraProviderMappingList } from '../models/PaginatedMicrosoftEntraProviderMappingList';
import type { PaginatedNotificationWebhookMappingList } from '../models/PaginatedNotificationWebhookMappingList';
import type { PaginatedOAuthSourcePropertyMappingList } from '../models/PaginatedOAuthSourcePropertyMappingList';
import type { PaginatedPlexSourcePropertyMappingList } from '../models/PaginatedPlexSourcePropertyMappingList';
import type { PaginatedPropertyMappingList } from '../models/PaginatedPropertyMappingList';
import type { PaginatedRACPropertyMappingList } from '../models/PaginatedRACPropertyMappingList';
import type { PaginatedRadiusProviderPropertyMappingList } from '../models/PaginatedRadiusProviderPropertyMappingList';
import type { PaginatedSAMLPropertyMappingList } from '../models/PaginatedSAMLPropertyMappingList';
import type { PaginatedSAMLSourcePropertyMappingList } from '../models/PaginatedSAMLSourcePropertyMappingList';
import type { PaginatedSCIMMappingList } from '../models/PaginatedSCIMMappingList';
import type { PaginatedSCIMSourcePropertyMappingList } from '../models/PaginatedSCIMSourcePropertyMappingList';
import type { PaginatedScopeMappingList } from '../models/PaginatedScopeMappingList';
import type { PatchedGoogleWorkspaceProviderMappingRequest } from '../models/PatchedGoogleWorkspaceProviderMappingRequest';
import type { PatchedKerberosSourcePropertyMappingRequest } from '../models/PatchedKerberosSourcePropertyMappingRequest';
import type { PatchedLDAPSourcePropertyMappingRequest } from '../models/PatchedLDAPSourcePropertyMappingRequest';
import type { PatchedMicrosoftEntraProviderMappingRequest } from '../models/PatchedMicrosoftEntraProviderMappingRequest';
import type { PatchedNotificationWebhookMappingRequest } from '../models/PatchedNotificationWebhookMappingRequest';
import type { PatchedOAuthSourcePropertyMappingRequest } from '../models/PatchedOAuthSourcePropertyMappingRequest';
import type { PatchedPlexSourcePropertyMappingRequest } from '../models/PatchedPlexSourcePropertyMappingRequest';
import type { PatchedRACPropertyMappingRequest } from '../models/PatchedRACPropertyMappingRequest';
import type { PatchedRadiusProviderPropertyMappingRequest } from '../models/PatchedRadiusProviderPropertyMappingRequest';
import type { PatchedSAMLPropertyMappingRequest } from '../models/PatchedSAMLPropertyMappingRequest';
import type { PatchedSAMLSourcePropertyMappingRequest } from '../models/PatchedSAMLSourcePropertyMappingRequest';
import type { PatchedSCIMMappingRequest } from '../models/PatchedSCIMMappingRequest';
import type { PatchedSCIMSourcePropertyMappingRequest } from '../models/PatchedSCIMSourcePropertyMappingRequest';
import type { PatchedScopeMappingRequest } from '../models/PatchedScopeMappingRequest';
import type { PlexSourcePropertyMapping } from '../models/PlexSourcePropertyMapping';
import type { PlexSourcePropertyMappingRequest } from '../models/PlexSourcePropertyMappingRequest';
import type { PropertyMapping } from '../models/PropertyMapping';
import type { PropertyMappingTestRequest } from '../models/PropertyMappingTestRequest';
import type { PropertyMappingTestResult } from '../models/PropertyMappingTestResult';
import type { RACPropertyMapping } from '../models/RACPropertyMapping';
import type { RACPropertyMappingRequest } from '../models/RACPropertyMappingRequest';
import type { RadiusProviderPropertyMapping } from '../models/RadiusProviderPropertyMapping';
import type { RadiusProviderPropertyMappingRequest } from '../models/RadiusProviderPropertyMappingRequest';
import type { SAMLPropertyMapping } from '../models/SAMLPropertyMapping';
import type { SAMLPropertyMappingRequest } from '../models/SAMLPropertyMappingRequest';
import type { SAMLSourcePropertyMapping } from '../models/SAMLSourcePropertyMapping';
import type { SAMLSourcePropertyMappingRequest } from '../models/SAMLSourcePropertyMappingRequest';
import type { SCIMMapping } from '../models/SCIMMapping';
import type { SCIMMappingRequest } from '../models/SCIMMappingRequest';
import type { SCIMSourcePropertyMapping } from '../models/SCIMSourcePropertyMapping';
import type { SCIMSourcePropertyMappingRequest } from '../models/SCIMSourcePropertyMappingRequest';
import type { ScopeMapping } from '../models/ScopeMapping';
import type { ScopeMappingRequest } from '../models/ScopeMappingRequest';
import type { TypeCreate } from '../models/TypeCreate';
import type { UsedBy } from '../models/UsedBy';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PropertymappingsService {
    /**
     * PropertyMapping Viewset
     * @param managed
     * @param managedIsnull
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedPropertyMappingList
     * @throws ApiError
     */
    public static propertymappingsAllList(
        managed?: Array<string>,
        managedIsnull?: boolean,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedPropertyMappingList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/all/',
            query: {
                'managed': managed,
                'managed__isnull': managedIsnull,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
            },
        });
    }
    /**
     * PropertyMapping Viewset
     * @param pmUuid A UUID string identifying this Property Mapping.
     * @returns PropertyMapping
     * @throws ApiError
     */
    public static propertymappingsAllRetrieve(
        pmUuid: string,
    ): CancelablePromise<PropertyMapping> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/all/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * PropertyMapping Viewset
     * @param pmUuid A UUID string identifying this Property Mapping.
     * @returns void
     * @throws ApiError
     */
    public static propertymappingsAllDestroy(
        pmUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/propertymappings/all/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * Test Property Mapping
     * @param pmUuid A UUID string identifying this Property Mapping.
     * @param formatResult
     * @param requestBody
     * @returns PropertyMappingTestResult
     * @throws ApiError
     */
    public static propertymappingsAllTestCreate(
        pmUuid: string,
        formatResult?: boolean,
        requestBody?: PropertyMappingTestRequest,
    ): CancelablePromise<PropertyMappingTestResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/propertymappings/all/{pm_uuid}/test/',
            path: {
                'pm_uuid': pmUuid,
            },
            query: {
                'format_result': formatResult,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid parameters`,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param pmUuid A UUID string identifying this Property Mapping.
     * @returns UsedBy
     * @throws ApiError
     */
    public static propertymappingsAllUsedByList(
        pmUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/all/{pm_uuid}/used_by/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * Get all creatable types
     * @returns TypeCreate
     * @throws ApiError
     */
    public static propertymappingsAllTypesList(): CancelablePromise<Array<TypeCreate>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/all/types/',
        });
    }
    /**
     * NotificationWebhookMapping Viewset
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedNotificationWebhookMappingList
     * @throws ApiError
     */
    public static propertymappingsNotificationList(
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedNotificationWebhookMappingList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/notification/',
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
     * NotificationWebhookMapping Viewset
     * @param requestBody
     * @returns NotificationWebhookMapping
     * @throws ApiError
     */
    public static propertymappingsNotificationCreate(
        requestBody: NotificationWebhookMappingRequest,
    ): CancelablePromise<NotificationWebhookMapping> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/propertymappings/notification/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * NotificationWebhookMapping Viewset
     * @param pmUuid A UUID string identifying this Webhook Mapping.
     * @returns NotificationWebhookMapping
     * @throws ApiError
     */
    public static propertymappingsNotificationRetrieve(
        pmUuid: string,
    ): CancelablePromise<NotificationWebhookMapping> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/notification/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * NotificationWebhookMapping Viewset
     * @param pmUuid A UUID string identifying this Webhook Mapping.
     * @param requestBody
     * @returns NotificationWebhookMapping
     * @throws ApiError
     */
    public static propertymappingsNotificationUpdate(
        pmUuid: string,
        requestBody: NotificationWebhookMappingRequest,
    ): CancelablePromise<NotificationWebhookMapping> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/propertymappings/notification/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * NotificationWebhookMapping Viewset
     * @param pmUuid A UUID string identifying this Webhook Mapping.
     * @param requestBody
     * @returns NotificationWebhookMapping
     * @throws ApiError
     */
    public static propertymappingsNotificationPartialUpdate(
        pmUuid: string,
        requestBody?: PatchedNotificationWebhookMappingRequest,
    ): CancelablePromise<NotificationWebhookMapping> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/propertymappings/notification/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * NotificationWebhookMapping Viewset
     * @param pmUuid A UUID string identifying this Webhook Mapping.
     * @returns void
     * @throws ApiError
     */
    public static propertymappingsNotificationDestroy(
        pmUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/propertymappings/notification/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param pmUuid A UUID string identifying this Webhook Mapping.
     * @returns UsedBy
     * @throws ApiError
     */
    public static propertymappingsNotificationUsedByList(
        pmUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/notification/{pm_uuid}/used_by/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * GoogleWorkspaceProviderMapping Viewset
     * @param expression
     * @param managed
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param pmUuid
     * @param search A search term.
     * @returns PaginatedGoogleWorkspaceProviderMappingList
     * @throws ApiError
     */
    public static propertymappingsProviderGoogleWorkspaceList(
        expression?: string,
        managed?: Array<string>,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        pmUuid?: string,
        search?: string,
    ): CancelablePromise<PaginatedGoogleWorkspaceProviderMappingList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/provider/google_workspace/',
            query: {
                'expression': expression,
                'managed': managed,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'pm_uuid': pmUuid,
                'search': search,
            },
        });
    }
    /**
     * GoogleWorkspaceProviderMapping Viewset
     * @param requestBody
     * @returns GoogleWorkspaceProviderMapping
     * @throws ApiError
     */
    public static propertymappingsProviderGoogleWorkspaceCreate(
        requestBody: GoogleWorkspaceProviderMappingRequest,
    ): CancelablePromise<GoogleWorkspaceProviderMapping> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/propertymappings/provider/google_workspace/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * GoogleWorkspaceProviderMapping Viewset
     * @param pmUuid A UUID string identifying this Google Workspace Provider Mapping.
     * @returns GoogleWorkspaceProviderMapping
     * @throws ApiError
     */
    public static propertymappingsProviderGoogleWorkspaceRetrieve(
        pmUuid: string,
    ): CancelablePromise<GoogleWorkspaceProviderMapping> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/provider/google_workspace/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * GoogleWorkspaceProviderMapping Viewset
     * @param pmUuid A UUID string identifying this Google Workspace Provider Mapping.
     * @param requestBody
     * @returns GoogleWorkspaceProviderMapping
     * @throws ApiError
     */
    public static propertymappingsProviderGoogleWorkspaceUpdate(
        pmUuid: string,
        requestBody: GoogleWorkspaceProviderMappingRequest,
    ): CancelablePromise<GoogleWorkspaceProviderMapping> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/propertymappings/provider/google_workspace/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * GoogleWorkspaceProviderMapping Viewset
     * @param pmUuid A UUID string identifying this Google Workspace Provider Mapping.
     * @param requestBody
     * @returns GoogleWorkspaceProviderMapping
     * @throws ApiError
     */
    public static propertymappingsProviderGoogleWorkspacePartialUpdate(
        pmUuid: string,
        requestBody?: PatchedGoogleWorkspaceProviderMappingRequest,
    ): CancelablePromise<GoogleWorkspaceProviderMapping> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/propertymappings/provider/google_workspace/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * GoogleWorkspaceProviderMapping Viewset
     * @param pmUuid A UUID string identifying this Google Workspace Provider Mapping.
     * @returns void
     * @throws ApiError
     */
    public static propertymappingsProviderGoogleWorkspaceDestroy(
        pmUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/propertymappings/provider/google_workspace/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param pmUuid A UUID string identifying this Google Workspace Provider Mapping.
     * @returns UsedBy
     * @throws ApiError
     */
    public static propertymappingsProviderGoogleWorkspaceUsedByList(
        pmUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/provider/google_workspace/{pm_uuid}/used_by/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * MicrosoftEntraProviderMapping Viewset
     * @param expression
     * @param managed
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param pmUuid
     * @param search A search term.
     * @returns PaginatedMicrosoftEntraProviderMappingList
     * @throws ApiError
     */
    public static propertymappingsProviderMicrosoftEntraList(
        expression?: string,
        managed?: Array<string>,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        pmUuid?: string,
        search?: string,
    ): CancelablePromise<PaginatedMicrosoftEntraProviderMappingList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/provider/microsoft_entra/',
            query: {
                'expression': expression,
                'managed': managed,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'pm_uuid': pmUuid,
                'search': search,
            },
        });
    }
    /**
     * MicrosoftEntraProviderMapping Viewset
     * @param requestBody
     * @returns MicrosoftEntraProviderMapping
     * @throws ApiError
     */
    public static propertymappingsProviderMicrosoftEntraCreate(
        requestBody: MicrosoftEntraProviderMappingRequest,
    ): CancelablePromise<MicrosoftEntraProviderMapping> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/propertymappings/provider/microsoft_entra/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * MicrosoftEntraProviderMapping Viewset
     * @param pmUuid A UUID string identifying this Microsoft Entra Provider Mapping.
     * @returns MicrosoftEntraProviderMapping
     * @throws ApiError
     */
    public static propertymappingsProviderMicrosoftEntraRetrieve(
        pmUuid: string,
    ): CancelablePromise<MicrosoftEntraProviderMapping> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/provider/microsoft_entra/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * MicrosoftEntraProviderMapping Viewset
     * @param pmUuid A UUID string identifying this Microsoft Entra Provider Mapping.
     * @param requestBody
     * @returns MicrosoftEntraProviderMapping
     * @throws ApiError
     */
    public static propertymappingsProviderMicrosoftEntraUpdate(
        pmUuid: string,
        requestBody: MicrosoftEntraProviderMappingRequest,
    ): CancelablePromise<MicrosoftEntraProviderMapping> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/propertymappings/provider/microsoft_entra/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * MicrosoftEntraProviderMapping Viewset
     * @param pmUuid A UUID string identifying this Microsoft Entra Provider Mapping.
     * @param requestBody
     * @returns MicrosoftEntraProviderMapping
     * @throws ApiError
     */
    public static propertymappingsProviderMicrosoftEntraPartialUpdate(
        pmUuid: string,
        requestBody?: PatchedMicrosoftEntraProviderMappingRequest,
    ): CancelablePromise<MicrosoftEntraProviderMapping> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/propertymappings/provider/microsoft_entra/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * MicrosoftEntraProviderMapping Viewset
     * @param pmUuid A UUID string identifying this Microsoft Entra Provider Mapping.
     * @returns void
     * @throws ApiError
     */
    public static propertymappingsProviderMicrosoftEntraDestroy(
        pmUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/propertymappings/provider/microsoft_entra/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param pmUuid A UUID string identifying this Microsoft Entra Provider Mapping.
     * @returns UsedBy
     * @throws ApiError
     */
    public static propertymappingsProviderMicrosoftEntraUsedByList(
        pmUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/provider/microsoft_entra/{pm_uuid}/used_by/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * RACPropertyMapping Viewset
     * @param managed
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedRACPropertyMappingList
     * @throws ApiError
     */
    public static propertymappingsProviderRacList(
        managed?: Array<string>,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedRACPropertyMappingList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/provider/rac/',
            query: {
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
     * RACPropertyMapping Viewset
     * @param requestBody
     * @returns RACPropertyMapping
     * @throws ApiError
     */
    public static propertymappingsProviderRacCreate(
        requestBody: RACPropertyMappingRequest,
    ): CancelablePromise<RACPropertyMapping> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/propertymappings/provider/rac/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * RACPropertyMapping Viewset
     * @param pmUuid A UUID string identifying this RAC Provider Property Mapping.
     * @returns RACPropertyMapping
     * @throws ApiError
     */
    public static propertymappingsProviderRacRetrieve(
        pmUuid: string,
    ): CancelablePromise<RACPropertyMapping> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/provider/rac/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * RACPropertyMapping Viewset
     * @param pmUuid A UUID string identifying this RAC Provider Property Mapping.
     * @param requestBody
     * @returns RACPropertyMapping
     * @throws ApiError
     */
    public static propertymappingsProviderRacUpdate(
        pmUuid: string,
        requestBody: RACPropertyMappingRequest,
    ): CancelablePromise<RACPropertyMapping> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/propertymappings/provider/rac/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * RACPropertyMapping Viewset
     * @param pmUuid A UUID string identifying this RAC Provider Property Mapping.
     * @param requestBody
     * @returns RACPropertyMapping
     * @throws ApiError
     */
    public static propertymappingsProviderRacPartialUpdate(
        pmUuid: string,
        requestBody?: PatchedRACPropertyMappingRequest,
    ): CancelablePromise<RACPropertyMapping> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/propertymappings/provider/rac/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * RACPropertyMapping Viewset
     * @param pmUuid A UUID string identifying this RAC Provider Property Mapping.
     * @returns void
     * @throws ApiError
     */
    public static propertymappingsProviderRacDestroy(
        pmUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/propertymappings/provider/rac/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param pmUuid A UUID string identifying this RAC Provider Property Mapping.
     * @returns UsedBy
     * @throws ApiError
     */
    public static propertymappingsProviderRacUsedByList(
        pmUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/provider/rac/{pm_uuid}/used_by/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * RadiusProviderPropertyMapping Viewset
     * @param managed
     * @param managedIsnull
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedRadiusProviderPropertyMappingList
     * @throws ApiError
     */
    public static propertymappingsProviderRadiusList(
        managed?: Array<string>,
        managedIsnull?: boolean,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedRadiusProviderPropertyMappingList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/provider/radius/',
            query: {
                'managed': managed,
                'managed__isnull': managedIsnull,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
            },
        });
    }
    /**
     * RadiusProviderPropertyMapping Viewset
     * @param requestBody
     * @returns RadiusProviderPropertyMapping
     * @throws ApiError
     */
    public static propertymappingsProviderRadiusCreate(
        requestBody: RadiusProviderPropertyMappingRequest,
    ): CancelablePromise<RadiusProviderPropertyMapping> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/propertymappings/provider/radius/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * RadiusProviderPropertyMapping Viewset
     * @param pmUuid A UUID string identifying this Radius Provider Property Mapping.
     * @returns RadiusProviderPropertyMapping
     * @throws ApiError
     */
    public static propertymappingsProviderRadiusRetrieve(
        pmUuid: string,
    ): CancelablePromise<RadiusProviderPropertyMapping> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/provider/radius/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * RadiusProviderPropertyMapping Viewset
     * @param pmUuid A UUID string identifying this Radius Provider Property Mapping.
     * @param requestBody
     * @returns RadiusProviderPropertyMapping
     * @throws ApiError
     */
    public static propertymappingsProviderRadiusUpdate(
        pmUuid: string,
        requestBody: RadiusProviderPropertyMappingRequest,
    ): CancelablePromise<RadiusProviderPropertyMapping> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/propertymappings/provider/radius/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * RadiusProviderPropertyMapping Viewset
     * @param pmUuid A UUID string identifying this Radius Provider Property Mapping.
     * @param requestBody
     * @returns RadiusProviderPropertyMapping
     * @throws ApiError
     */
    public static propertymappingsProviderRadiusPartialUpdate(
        pmUuid: string,
        requestBody?: PatchedRadiusProviderPropertyMappingRequest,
    ): CancelablePromise<RadiusProviderPropertyMapping> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/propertymappings/provider/radius/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * RadiusProviderPropertyMapping Viewset
     * @param pmUuid A UUID string identifying this Radius Provider Property Mapping.
     * @returns void
     * @throws ApiError
     */
    public static propertymappingsProviderRadiusDestroy(
        pmUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/propertymappings/provider/radius/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param pmUuid A UUID string identifying this Radius Provider Property Mapping.
     * @returns UsedBy
     * @throws ApiError
     */
    public static propertymappingsProviderRadiusUsedByList(
        pmUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/provider/radius/{pm_uuid}/used_by/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * SAMLPropertyMapping Viewset
     * @param friendlyName
     * @param managed
     * @param managedIsnull
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param samlName
     * @param search A search term.
     * @returns PaginatedSAMLPropertyMappingList
     * @throws ApiError
     */
    public static propertymappingsProviderSamlList(
        friendlyName?: string,
        managed?: Array<string>,
        managedIsnull?: boolean,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        samlName?: string,
        search?: string,
    ): CancelablePromise<PaginatedSAMLPropertyMappingList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/provider/saml/',
            query: {
                'friendly_name': friendlyName,
                'managed': managed,
                'managed__isnull': managedIsnull,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'saml_name': samlName,
                'search': search,
            },
        });
    }
    /**
     * SAMLPropertyMapping Viewset
     * @param requestBody
     * @returns SAMLPropertyMapping
     * @throws ApiError
     */
    public static propertymappingsProviderSamlCreate(
        requestBody: SAMLPropertyMappingRequest,
    ): CancelablePromise<SAMLPropertyMapping> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/propertymappings/provider/saml/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SAMLPropertyMapping Viewset
     * @param pmUuid A UUID string identifying this SAML Provider Property Mapping.
     * @returns SAMLPropertyMapping
     * @throws ApiError
     */
    public static propertymappingsProviderSamlRetrieve(
        pmUuid: string,
    ): CancelablePromise<SAMLPropertyMapping> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/provider/saml/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * SAMLPropertyMapping Viewset
     * @param pmUuid A UUID string identifying this SAML Provider Property Mapping.
     * @param requestBody
     * @returns SAMLPropertyMapping
     * @throws ApiError
     */
    public static propertymappingsProviderSamlUpdate(
        pmUuid: string,
        requestBody: SAMLPropertyMappingRequest,
    ): CancelablePromise<SAMLPropertyMapping> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/propertymappings/provider/saml/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SAMLPropertyMapping Viewset
     * @param pmUuid A UUID string identifying this SAML Provider Property Mapping.
     * @param requestBody
     * @returns SAMLPropertyMapping
     * @throws ApiError
     */
    public static propertymappingsProviderSamlPartialUpdate(
        pmUuid: string,
        requestBody?: PatchedSAMLPropertyMappingRequest,
    ): CancelablePromise<SAMLPropertyMapping> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/propertymappings/provider/saml/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SAMLPropertyMapping Viewset
     * @param pmUuid A UUID string identifying this SAML Provider Property Mapping.
     * @returns void
     * @throws ApiError
     */
    public static propertymappingsProviderSamlDestroy(
        pmUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/propertymappings/provider/saml/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param pmUuid A UUID string identifying this SAML Provider Property Mapping.
     * @returns UsedBy
     * @throws ApiError
     */
    public static propertymappingsProviderSamlUsedByList(
        pmUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/provider/saml/{pm_uuid}/used_by/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * SCIMMapping Viewset
     * @param managed
     * @param managedIsnull
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedSCIMMappingList
     * @throws ApiError
     */
    public static propertymappingsProviderScimList(
        managed?: Array<string>,
        managedIsnull?: boolean,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedSCIMMappingList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/provider/scim/',
            query: {
                'managed': managed,
                'managed__isnull': managedIsnull,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
            },
        });
    }
    /**
     * SCIMMapping Viewset
     * @param requestBody
     * @returns SCIMMapping
     * @throws ApiError
     */
    public static propertymappingsProviderScimCreate(
        requestBody: SCIMMappingRequest,
    ): CancelablePromise<SCIMMapping> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/propertymappings/provider/scim/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SCIMMapping Viewset
     * @param pmUuid A UUID string identifying this SCIM Provider Mapping.
     * @returns SCIMMapping
     * @throws ApiError
     */
    public static propertymappingsProviderScimRetrieve(
        pmUuid: string,
    ): CancelablePromise<SCIMMapping> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/provider/scim/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * SCIMMapping Viewset
     * @param pmUuid A UUID string identifying this SCIM Provider Mapping.
     * @param requestBody
     * @returns SCIMMapping
     * @throws ApiError
     */
    public static propertymappingsProviderScimUpdate(
        pmUuid: string,
        requestBody: SCIMMappingRequest,
    ): CancelablePromise<SCIMMapping> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/propertymappings/provider/scim/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SCIMMapping Viewset
     * @param pmUuid A UUID string identifying this SCIM Provider Mapping.
     * @param requestBody
     * @returns SCIMMapping
     * @throws ApiError
     */
    public static propertymappingsProviderScimPartialUpdate(
        pmUuid: string,
        requestBody?: PatchedSCIMMappingRequest,
    ): CancelablePromise<SCIMMapping> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/propertymappings/provider/scim/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SCIMMapping Viewset
     * @param pmUuid A UUID string identifying this SCIM Provider Mapping.
     * @returns void
     * @throws ApiError
     */
    public static propertymappingsProviderScimDestroy(
        pmUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/propertymappings/provider/scim/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param pmUuid A UUID string identifying this SCIM Provider Mapping.
     * @returns UsedBy
     * @throws ApiError
     */
    public static propertymappingsProviderScimUsedByList(
        pmUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/provider/scim/{pm_uuid}/used_by/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * ScopeMapping Viewset
     * @param managed
     * @param managedIsnull
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param scopeName
     * @param search A search term.
     * @returns PaginatedScopeMappingList
     * @throws ApiError
     */
    public static propertymappingsProviderScopeList(
        managed?: Array<string>,
        managedIsnull?: boolean,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        scopeName?: string,
        search?: string,
    ): CancelablePromise<PaginatedScopeMappingList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/provider/scope/',
            query: {
                'managed': managed,
                'managed__isnull': managedIsnull,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'scope_name': scopeName,
                'search': search,
            },
        });
    }
    /**
     * ScopeMapping Viewset
     * @param requestBody
     * @returns ScopeMapping
     * @throws ApiError
     */
    public static propertymappingsProviderScopeCreate(
        requestBody: ScopeMappingRequest,
    ): CancelablePromise<ScopeMapping> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/propertymappings/provider/scope/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * ScopeMapping Viewset
     * @param pmUuid A UUID string identifying this Scope Mapping.
     * @returns ScopeMapping
     * @throws ApiError
     */
    public static propertymappingsProviderScopeRetrieve(
        pmUuid: string,
    ): CancelablePromise<ScopeMapping> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/provider/scope/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * ScopeMapping Viewset
     * @param pmUuid A UUID string identifying this Scope Mapping.
     * @param requestBody
     * @returns ScopeMapping
     * @throws ApiError
     */
    public static propertymappingsProviderScopeUpdate(
        pmUuid: string,
        requestBody: ScopeMappingRequest,
    ): CancelablePromise<ScopeMapping> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/propertymappings/provider/scope/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * ScopeMapping Viewset
     * @param pmUuid A UUID string identifying this Scope Mapping.
     * @param requestBody
     * @returns ScopeMapping
     * @throws ApiError
     */
    public static propertymappingsProviderScopePartialUpdate(
        pmUuid: string,
        requestBody?: PatchedScopeMappingRequest,
    ): CancelablePromise<ScopeMapping> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/propertymappings/provider/scope/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * ScopeMapping Viewset
     * @param pmUuid A UUID string identifying this Scope Mapping.
     * @returns void
     * @throws ApiError
     */
    public static propertymappingsProviderScopeDestroy(
        pmUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/propertymappings/provider/scope/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param pmUuid A UUID string identifying this Scope Mapping.
     * @returns UsedBy
     * @throws ApiError
     */
    public static propertymappingsProviderScopeUsedByList(
        pmUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/provider/scope/{pm_uuid}/used_by/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * KerberosSource PropertyMapping Viewset
     * @param managed
     * @param managedIsnull
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedKerberosSourcePropertyMappingList
     * @throws ApiError
     */
    public static propertymappingsSourceKerberosList(
        managed?: Array<string>,
        managedIsnull?: boolean,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedKerberosSourcePropertyMappingList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/source/kerberos/',
            query: {
                'managed': managed,
                'managed__isnull': managedIsnull,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
            },
        });
    }
    /**
     * KerberosSource PropertyMapping Viewset
     * @param requestBody
     * @returns KerberosSourcePropertyMapping
     * @throws ApiError
     */
    public static propertymappingsSourceKerberosCreate(
        requestBody: KerberosSourcePropertyMappingRequest,
    ): CancelablePromise<KerberosSourcePropertyMapping> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/propertymappings/source/kerberos/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * KerberosSource PropertyMapping Viewset
     * @param pmUuid A UUID string identifying this Kerberos Source Property Mapping.
     * @returns KerberosSourcePropertyMapping
     * @throws ApiError
     */
    public static propertymappingsSourceKerberosRetrieve(
        pmUuid: string,
    ): CancelablePromise<KerberosSourcePropertyMapping> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/source/kerberos/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * KerberosSource PropertyMapping Viewset
     * @param pmUuid A UUID string identifying this Kerberos Source Property Mapping.
     * @param requestBody
     * @returns KerberosSourcePropertyMapping
     * @throws ApiError
     */
    public static propertymappingsSourceKerberosUpdate(
        pmUuid: string,
        requestBody: KerberosSourcePropertyMappingRequest,
    ): CancelablePromise<KerberosSourcePropertyMapping> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/propertymappings/source/kerberos/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * KerberosSource PropertyMapping Viewset
     * @param pmUuid A UUID string identifying this Kerberos Source Property Mapping.
     * @param requestBody
     * @returns KerberosSourcePropertyMapping
     * @throws ApiError
     */
    public static propertymappingsSourceKerberosPartialUpdate(
        pmUuid: string,
        requestBody?: PatchedKerberosSourcePropertyMappingRequest,
    ): CancelablePromise<KerberosSourcePropertyMapping> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/propertymappings/source/kerberos/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * KerberosSource PropertyMapping Viewset
     * @param pmUuid A UUID string identifying this Kerberos Source Property Mapping.
     * @returns void
     * @throws ApiError
     */
    public static propertymappingsSourceKerberosDestroy(
        pmUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/propertymappings/source/kerberos/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param pmUuid A UUID string identifying this Kerberos Source Property Mapping.
     * @returns UsedBy
     * @throws ApiError
     */
    public static propertymappingsSourceKerberosUsedByList(
        pmUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/source/kerberos/{pm_uuid}/used_by/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * LDAP PropertyMapping Viewset
     * @param managed
     * @param managedIsnull
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedLDAPSourcePropertyMappingList
     * @throws ApiError
     */
    public static propertymappingsSourceLdapList(
        managed?: Array<string>,
        managedIsnull?: boolean,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedLDAPSourcePropertyMappingList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/source/ldap/',
            query: {
                'managed': managed,
                'managed__isnull': managedIsnull,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
            },
        });
    }
    /**
     * LDAP PropertyMapping Viewset
     * @param requestBody
     * @returns LDAPSourcePropertyMapping
     * @throws ApiError
     */
    public static propertymappingsSourceLdapCreate(
        requestBody: LDAPSourcePropertyMappingRequest,
    ): CancelablePromise<LDAPSourcePropertyMapping> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/propertymappings/source/ldap/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * LDAP PropertyMapping Viewset
     * @param pmUuid A UUID string identifying this LDAP Source Property Mapping.
     * @returns LDAPSourcePropertyMapping
     * @throws ApiError
     */
    public static propertymappingsSourceLdapRetrieve(
        pmUuid: string,
    ): CancelablePromise<LDAPSourcePropertyMapping> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/source/ldap/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * LDAP PropertyMapping Viewset
     * @param pmUuid A UUID string identifying this LDAP Source Property Mapping.
     * @param requestBody
     * @returns LDAPSourcePropertyMapping
     * @throws ApiError
     */
    public static propertymappingsSourceLdapUpdate(
        pmUuid: string,
        requestBody: LDAPSourcePropertyMappingRequest,
    ): CancelablePromise<LDAPSourcePropertyMapping> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/propertymappings/source/ldap/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * LDAP PropertyMapping Viewset
     * @param pmUuid A UUID string identifying this LDAP Source Property Mapping.
     * @param requestBody
     * @returns LDAPSourcePropertyMapping
     * @throws ApiError
     */
    public static propertymappingsSourceLdapPartialUpdate(
        pmUuid: string,
        requestBody?: PatchedLDAPSourcePropertyMappingRequest,
    ): CancelablePromise<LDAPSourcePropertyMapping> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/propertymappings/source/ldap/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * LDAP PropertyMapping Viewset
     * @param pmUuid A UUID string identifying this LDAP Source Property Mapping.
     * @returns void
     * @throws ApiError
     */
    public static propertymappingsSourceLdapDestroy(
        pmUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/propertymappings/source/ldap/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param pmUuid A UUID string identifying this LDAP Source Property Mapping.
     * @returns UsedBy
     * @throws ApiError
     */
    public static propertymappingsSourceLdapUsedByList(
        pmUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/source/ldap/{pm_uuid}/used_by/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * OAuthSourcePropertyMapping Viewset
     * @param managed
     * @param managedIsnull
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedOAuthSourcePropertyMappingList
     * @throws ApiError
     */
    public static propertymappingsSourceOauthList(
        managed?: Array<string>,
        managedIsnull?: boolean,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedOAuthSourcePropertyMappingList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/source/oauth/',
            query: {
                'managed': managed,
                'managed__isnull': managedIsnull,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
            },
        });
    }
    /**
     * OAuthSourcePropertyMapping Viewset
     * @param requestBody
     * @returns OAuthSourcePropertyMapping
     * @throws ApiError
     */
    public static propertymappingsSourceOauthCreate(
        requestBody: OAuthSourcePropertyMappingRequest,
    ): CancelablePromise<OAuthSourcePropertyMapping> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/propertymappings/source/oauth/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * OAuthSourcePropertyMapping Viewset
     * @param pmUuid A UUID string identifying this OAuth Source Property Mapping.
     * @returns OAuthSourcePropertyMapping
     * @throws ApiError
     */
    public static propertymappingsSourceOauthRetrieve(
        pmUuid: string,
    ): CancelablePromise<OAuthSourcePropertyMapping> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/source/oauth/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * OAuthSourcePropertyMapping Viewset
     * @param pmUuid A UUID string identifying this OAuth Source Property Mapping.
     * @param requestBody
     * @returns OAuthSourcePropertyMapping
     * @throws ApiError
     */
    public static propertymappingsSourceOauthUpdate(
        pmUuid: string,
        requestBody: OAuthSourcePropertyMappingRequest,
    ): CancelablePromise<OAuthSourcePropertyMapping> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/propertymappings/source/oauth/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * OAuthSourcePropertyMapping Viewset
     * @param pmUuid A UUID string identifying this OAuth Source Property Mapping.
     * @param requestBody
     * @returns OAuthSourcePropertyMapping
     * @throws ApiError
     */
    public static propertymappingsSourceOauthPartialUpdate(
        pmUuid: string,
        requestBody?: PatchedOAuthSourcePropertyMappingRequest,
    ): CancelablePromise<OAuthSourcePropertyMapping> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/propertymappings/source/oauth/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * OAuthSourcePropertyMapping Viewset
     * @param pmUuid A UUID string identifying this OAuth Source Property Mapping.
     * @returns void
     * @throws ApiError
     */
    public static propertymappingsSourceOauthDestroy(
        pmUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/propertymappings/source/oauth/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param pmUuid A UUID string identifying this OAuth Source Property Mapping.
     * @returns UsedBy
     * @throws ApiError
     */
    public static propertymappingsSourceOauthUsedByList(
        pmUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/source/oauth/{pm_uuid}/used_by/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * PlexSourcePropertyMapping Viewset
     * @param managed
     * @param managedIsnull
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedPlexSourcePropertyMappingList
     * @throws ApiError
     */
    public static propertymappingsSourcePlexList(
        managed?: Array<string>,
        managedIsnull?: boolean,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedPlexSourcePropertyMappingList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/source/plex/',
            query: {
                'managed': managed,
                'managed__isnull': managedIsnull,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
            },
        });
    }
    /**
     * PlexSourcePropertyMapping Viewset
     * @param requestBody
     * @returns PlexSourcePropertyMapping
     * @throws ApiError
     */
    public static propertymappingsSourcePlexCreate(
        requestBody: PlexSourcePropertyMappingRequest,
    ): CancelablePromise<PlexSourcePropertyMapping> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/propertymappings/source/plex/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * PlexSourcePropertyMapping Viewset
     * @param pmUuid A UUID string identifying this Plex Source Property Mapping.
     * @returns PlexSourcePropertyMapping
     * @throws ApiError
     */
    public static propertymappingsSourcePlexRetrieve(
        pmUuid: string,
    ): CancelablePromise<PlexSourcePropertyMapping> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/source/plex/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * PlexSourcePropertyMapping Viewset
     * @param pmUuid A UUID string identifying this Plex Source Property Mapping.
     * @param requestBody
     * @returns PlexSourcePropertyMapping
     * @throws ApiError
     */
    public static propertymappingsSourcePlexUpdate(
        pmUuid: string,
        requestBody: PlexSourcePropertyMappingRequest,
    ): CancelablePromise<PlexSourcePropertyMapping> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/propertymappings/source/plex/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * PlexSourcePropertyMapping Viewset
     * @param pmUuid A UUID string identifying this Plex Source Property Mapping.
     * @param requestBody
     * @returns PlexSourcePropertyMapping
     * @throws ApiError
     */
    public static propertymappingsSourcePlexPartialUpdate(
        pmUuid: string,
        requestBody?: PatchedPlexSourcePropertyMappingRequest,
    ): CancelablePromise<PlexSourcePropertyMapping> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/propertymappings/source/plex/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * PlexSourcePropertyMapping Viewset
     * @param pmUuid A UUID string identifying this Plex Source Property Mapping.
     * @returns void
     * @throws ApiError
     */
    public static propertymappingsSourcePlexDestroy(
        pmUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/propertymappings/source/plex/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param pmUuid A UUID string identifying this Plex Source Property Mapping.
     * @returns UsedBy
     * @throws ApiError
     */
    public static propertymappingsSourcePlexUsedByList(
        pmUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/source/plex/{pm_uuid}/used_by/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * SAMLSourcePropertyMapping Viewset
     * @param managed
     * @param managedIsnull
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedSAMLSourcePropertyMappingList
     * @throws ApiError
     */
    public static propertymappingsSourceSamlList(
        managed?: Array<string>,
        managedIsnull?: boolean,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedSAMLSourcePropertyMappingList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/source/saml/',
            query: {
                'managed': managed,
                'managed__isnull': managedIsnull,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
            },
        });
    }
    /**
     * SAMLSourcePropertyMapping Viewset
     * @param requestBody
     * @returns SAMLSourcePropertyMapping
     * @throws ApiError
     */
    public static propertymappingsSourceSamlCreate(
        requestBody: SAMLSourcePropertyMappingRequest,
    ): CancelablePromise<SAMLSourcePropertyMapping> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/propertymappings/source/saml/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SAMLSourcePropertyMapping Viewset
     * @param pmUuid A UUID string identifying this SAML Source Property Mapping.
     * @returns SAMLSourcePropertyMapping
     * @throws ApiError
     */
    public static propertymappingsSourceSamlRetrieve(
        pmUuid: string,
    ): CancelablePromise<SAMLSourcePropertyMapping> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/source/saml/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * SAMLSourcePropertyMapping Viewset
     * @param pmUuid A UUID string identifying this SAML Source Property Mapping.
     * @param requestBody
     * @returns SAMLSourcePropertyMapping
     * @throws ApiError
     */
    public static propertymappingsSourceSamlUpdate(
        pmUuid: string,
        requestBody: SAMLSourcePropertyMappingRequest,
    ): CancelablePromise<SAMLSourcePropertyMapping> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/propertymappings/source/saml/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SAMLSourcePropertyMapping Viewset
     * @param pmUuid A UUID string identifying this SAML Source Property Mapping.
     * @param requestBody
     * @returns SAMLSourcePropertyMapping
     * @throws ApiError
     */
    public static propertymappingsSourceSamlPartialUpdate(
        pmUuid: string,
        requestBody?: PatchedSAMLSourcePropertyMappingRequest,
    ): CancelablePromise<SAMLSourcePropertyMapping> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/propertymappings/source/saml/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SAMLSourcePropertyMapping Viewset
     * @param pmUuid A UUID string identifying this SAML Source Property Mapping.
     * @returns void
     * @throws ApiError
     */
    public static propertymappingsSourceSamlDestroy(
        pmUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/propertymappings/source/saml/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param pmUuid A UUID string identifying this SAML Source Property Mapping.
     * @returns UsedBy
     * @throws ApiError
     */
    public static propertymappingsSourceSamlUsedByList(
        pmUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/source/saml/{pm_uuid}/used_by/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * SCIMSourcePropertyMapping Viewset
     * @param managed
     * @param managedIsnull
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedSCIMSourcePropertyMappingList
     * @throws ApiError
     */
    public static propertymappingsSourceScimList(
        managed?: Array<string>,
        managedIsnull?: boolean,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedSCIMSourcePropertyMappingList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/source/scim/',
            query: {
                'managed': managed,
                'managed__isnull': managedIsnull,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
            },
        });
    }
    /**
     * SCIMSourcePropertyMapping Viewset
     * @param requestBody
     * @returns SCIMSourcePropertyMapping
     * @throws ApiError
     */
    public static propertymappingsSourceScimCreate(
        requestBody: SCIMSourcePropertyMappingRequest,
    ): CancelablePromise<SCIMSourcePropertyMapping> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/propertymappings/source/scim/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SCIMSourcePropertyMapping Viewset
     * @param pmUuid A UUID string identifying this SCIM Source Property Mapping.
     * @returns SCIMSourcePropertyMapping
     * @throws ApiError
     */
    public static propertymappingsSourceScimRetrieve(
        pmUuid: string,
    ): CancelablePromise<SCIMSourcePropertyMapping> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/source/scim/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * SCIMSourcePropertyMapping Viewset
     * @param pmUuid A UUID string identifying this SCIM Source Property Mapping.
     * @param requestBody
     * @returns SCIMSourcePropertyMapping
     * @throws ApiError
     */
    public static propertymappingsSourceScimUpdate(
        pmUuid: string,
        requestBody: SCIMSourcePropertyMappingRequest,
    ): CancelablePromise<SCIMSourcePropertyMapping> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/propertymappings/source/scim/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SCIMSourcePropertyMapping Viewset
     * @param pmUuid A UUID string identifying this SCIM Source Property Mapping.
     * @param requestBody
     * @returns SCIMSourcePropertyMapping
     * @throws ApiError
     */
    public static propertymappingsSourceScimPartialUpdate(
        pmUuid: string,
        requestBody?: PatchedSCIMSourcePropertyMappingRequest,
    ): CancelablePromise<SCIMSourcePropertyMapping> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/propertymappings/source/scim/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SCIMSourcePropertyMapping Viewset
     * @param pmUuid A UUID string identifying this SCIM Source Property Mapping.
     * @returns void
     * @throws ApiError
     */
    public static propertymappingsSourceScimDestroy(
        pmUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/propertymappings/source/scim/{pm_uuid}/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param pmUuid A UUID string identifying this SCIM Source Property Mapping.
     * @returns UsedBy
     * @throws ApiError
     */
    public static propertymappingsSourceScimUsedByList(
        pmUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/propertymappings/source/scim/{pm_uuid}/used_by/',
            path: {
                'pm_uuid': pmUuid,
            },
        });
    }
}
