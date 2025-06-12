/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GoogleWorkspaceProvider } from '../models/GoogleWorkspaceProvider';
import type { GoogleWorkspaceProviderGroup } from '../models/GoogleWorkspaceProviderGroup';
import type { GoogleWorkspaceProviderGroupRequest } from '../models/GoogleWorkspaceProviderGroupRequest';
import type { GoogleWorkspaceProviderRequest } from '../models/GoogleWorkspaceProviderRequest';
import type { GoogleWorkspaceProviderUser } from '../models/GoogleWorkspaceProviderUser';
import type { GoogleWorkspaceProviderUserRequest } from '../models/GoogleWorkspaceProviderUserRequest';
import type { LDAPProvider } from '../models/LDAPProvider';
import type { LDAPProviderRequest } from '../models/LDAPProviderRequest';
import type { MicrosoftEntraProvider } from '../models/MicrosoftEntraProvider';
import type { MicrosoftEntraProviderGroup } from '../models/MicrosoftEntraProviderGroup';
import type { MicrosoftEntraProviderGroupRequest } from '../models/MicrosoftEntraProviderGroupRequest';
import type { MicrosoftEntraProviderRequest } from '../models/MicrosoftEntraProviderRequest';
import type { MicrosoftEntraProviderUser } from '../models/MicrosoftEntraProviderUser';
import type { MicrosoftEntraProviderUserRequest } from '../models/MicrosoftEntraProviderUserRequest';
import type { OAuth2Provider } from '../models/OAuth2Provider';
import type { OAuth2ProviderRequest } from '../models/OAuth2ProviderRequest';
import type { OAuth2ProviderSetupURLs } from '../models/OAuth2ProviderSetupURLs';
import type { PaginatedGoogleWorkspaceProviderGroupList } from '../models/PaginatedGoogleWorkspaceProviderGroupList';
import type { PaginatedGoogleWorkspaceProviderList } from '../models/PaginatedGoogleWorkspaceProviderList';
import type { PaginatedGoogleWorkspaceProviderUserList } from '../models/PaginatedGoogleWorkspaceProviderUserList';
import type { PaginatedLDAPProviderList } from '../models/PaginatedLDAPProviderList';
import type { PaginatedMicrosoftEntraProviderGroupList } from '../models/PaginatedMicrosoftEntraProviderGroupList';
import type { PaginatedMicrosoftEntraProviderList } from '../models/PaginatedMicrosoftEntraProviderList';
import type { PaginatedMicrosoftEntraProviderUserList } from '../models/PaginatedMicrosoftEntraProviderUserList';
import type { PaginatedOAuth2ProviderList } from '../models/PaginatedOAuth2ProviderList';
import type { PaginatedProviderList } from '../models/PaginatedProviderList';
import type { PaginatedProxyProviderList } from '../models/PaginatedProxyProviderList';
import type { PaginatedRACProviderList } from '../models/PaginatedRACProviderList';
import type { PaginatedRadiusProviderList } from '../models/PaginatedRadiusProviderList';
import type { PaginatedSAMLProviderList } from '../models/PaginatedSAMLProviderList';
import type { PaginatedSCIMProviderGroupList } from '../models/PaginatedSCIMProviderGroupList';
import type { PaginatedSCIMProviderList } from '../models/PaginatedSCIMProviderList';
import type { PaginatedSCIMProviderUserList } from '../models/PaginatedSCIMProviderUserList';
import type { PaginatedSSFProviderList } from '../models/PaginatedSSFProviderList';
import type { PatchedGoogleWorkspaceProviderRequest } from '../models/PatchedGoogleWorkspaceProviderRequest';
import type { PatchedLDAPProviderRequest } from '../models/PatchedLDAPProviderRequest';
import type { PatchedMicrosoftEntraProviderRequest } from '../models/PatchedMicrosoftEntraProviderRequest';
import type { PatchedOAuth2ProviderRequest } from '../models/PatchedOAuth2ProviderRequest';
import type { PatchedProxyProviderRequest } from '../models/PatchedProxyProviderRequest';
import type { PatchedRACProviderRequest } from '../models/PatchedRACProviderRequest';
import type { PatchedRadiusProviderRequest } from '../models/PatchedRadiusProviderRequest';
import type { PatchedSAMLProviderRequest } from '../models/PatchedSAMLProviderRequest';
import type { PatchedSCIMProviderRequest } from '../models/PatchedSCIMProviderRequest';
import type { PatchedSSFProviderRequest } from '../models/PatchedSSFProviderRequest';
import type { PropertyMappingPreview } from '../models/PropertyMappingPreview';
import type { Provider } from '../models/Provider';
import type { ProxyProvider } from '../models/ProxyProvider';
import type { ProxyProviderRequest } from '../models/ProxyProviderRequest';
import type { RACProvider } from '../models/RACProvider';
import type { RACProviderRequest } from '../models/RACProviderRequest';
import type { RadiusProvider } from '../models/RadiusProvider';
import type { RadiusProviderRequest } from '../models/RadiusProviderRequest';
import type { SAMLMetadata } from '../models/SAMLMetadata';
import type { SAMLProvider } from '../models/SAMLProvider';
import type { SAMLProviderImportRequest } from '../models/SAMLProviderImportRequest';
import type { SAMLProviderRequest } from '../models/SAMLProviderRequest';
import type { SCIMProvider } from '../models/SCIMProvider';
import type { SCIMProviderGroup } from '../models/SCIMProviderGroup';
import type { SCIMProviderGroupRequest } from '../models/SCIMProviderGroupRequest';
import type { SCIMProviderRequest } from '../models/SCIMProviderRequest';
import type { SCIMProviderUser } from '../models/SCIMProviderUser';
import type { SCIMProviderUserRequest } from '../models/SCIMProviderUserRequest';
import type { SSFProvider } from '../models/SSFProvider';
import type { SSFProviderRequest } from '../models/SSFProviderRequest';
import type { SyncObjectRequest } from '../models/SyncObjectRequest';
import type { SyncObjectResult } from '../models/SyncObjectResult';
import type { SyncStatus } from '../models/SyncStatus';
import type { TypeCreate } from '../models/TypeCreate';
import type { UsedBy } from '../models/UsedBy';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProvidersService {
    /**
     * Provider Viewset
     * @param applicationIsnull
     * @param backchannel When not set all providers are returned. When set to true, only backchannel providers are returned. When set to false, backchannel providers are excluded
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedProviderList
     * @throws ApiError
     */
    public static providersAllList(
        applicationIsnull?: boolean,
        backchannel?: boolean,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedProviderList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/all/',
            query: {
                'application__isnull': applicationIsnull,
                'backchannel': backchannel,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
            },
        });
    }
    /**
     * Provider Viewset
     * @param id A unique integer value identifying this provider.
     * @returns Provider
     * @throws ApiError
     */
    public static providersAllRetrieve(
        id: number,
    ): CancelablePromise<Provider> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/all/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Provider Viewset
     * @param id A unique integer value identifying this provider.
     * @returns void
     * @throws ApiError
     */
    public static providersAllDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/providers/all/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique integer value identifying this provider.
     * @returns UsedBy
     * @throws ApiError
     */
    public static providersAllUsedByList(
        id: number,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/all/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get all creatable types
     * @returns TypeCreate
     * @throws ApiError
     */
    public static providersAllTypesList(): CancelablePromise<Array<TypeCreate>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/all/types/',
        });
    }
    /**
     * GoogleWorkspaceProvider Viewset
     * @param delegatedSubject
     * @param excludeUsersServiceAccount
     * @param filterGroup
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedGoogleWorkspaceProviderList
     * @throws ApiError
     */
    public static providersGoogleWorkspaceList(
        delegatedSubject?: string,
        excludeUsersServiceAccount?: boolean,
        filterGroup?: string,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedGoogleWorkspaceProviderList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/google_workspace/',
            query: {
                'delegated_subject': delegatedSubject,
                'exclude_users_service_account': excludeUsersServiceAccount,
                'filter_group': filterGroup,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
            },
        });
    }
    /**
     * GoogleWorkspaceProvider Viewset
     * @param requestBody
     * @returns GoogleWorkspaceProvider
     * @throws ApiError
     */
    public static providersGoogleWorkspaceCreate(
        requestBody: GoogleWorkspaceProviderRequest,
    ): CancelablePromise<GoogleWorkspaceProvider> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/providers/google_workspace/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * GoogleWorkspaceProvider Viewset
     * @param id A unique integer value identifying this Google Workspace Provider.
     * @returns GoogleWorkspaceProvider
     * @throws ApiError
     */
    public static providersGoogleWorkspaceRetrieve(
        id: number,
    ): CancelablePromise<GoogleWorkspaceProvider> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/google_workspace/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * GoogleWorkspaceProvider Viewset
     * @param id A unique integer value identifying this Google Workspace Provider.
     * @param requestBody
     * @returns GoogleWorkspaceProvider
     * @throws ApiError
     */
    public static providersGoogleWorkspaceUpdate(
        id: number,
        requestBody: GoogleWorkspaceProviderRequest,
    ): CancelablePromise<GoogleWorkspaceProvider> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/providers/google_workspace/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * GoogleWorkspaceProvider Viewset
     * @param id A unique integer value identifying this Google Workspace Provider.
     * @param requestBody
     * @returns GoogleWorkspaceProvider
     * @throws ApiError
     */
    public static providersGoogleWorkspacePartialUpdate(
        id: number,
        requestBody?: PatchedGoogleWorkspaceProviderRequest,
    ): CancelablePromise<GoogleWorkspaceProvider> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/providers/google_workspace/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * GoogleWorkspaceProvider Viewset
     * @param id A unique integer value identifying this Google Workspace Provider.
     * @returns void
     * @throws ApiError
     */
    public static providersGoogleWorkspaceDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/providers/google_workspace/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Sync/Re-sync a single user/group object
     * @param id A unique integer value identifying this Google Workspace Provider.
     * @param requestBody
     * @returns SyncObjectResult
     * @throws ApiError
     */
    public static providersGoogleWorkspaceSyncObjectCreate(
        id: number,
        requestBody: SyncObjectRequest,
    ): CancelablePromise<SyncObjectResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/providers/google_workspace/{id}/sync/object/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get provider's sync status
     * @param id A unique integer value identifying this Google Workspace Provider.
     * @returns SyncStatus
     * @throws ApiError
     */
    public static providersGoogleWorkspaceSyncStatusRetrieve(
        id: number,
    ): CancelablePromise<SyncStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/google_workspace/{id}/sync/status/',
            path: {
                'id': id,
            },
            errors: {
                404: `Task not found`,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique integer value identifying this Google Workspace Provider.
     * @returns UsedBy
     * @throws ApiError
     */
    public static providersGoogleWorkspaceUsedByList(
        id: number,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/google_workspace/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * GoogleWorkspaceProviderGroup Viewset
     * @param groupGroupUuid
     * @param groupName
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param providerId
     * @param search A search term.
     * @returns PaginatedGoogleWorkspaceProviderGroupList
     * @throws ApiError
     */
    public static providersGoogleWorkspaceGroupsList(
        groupGroupUuid?: string,
        groupName?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        providerId?: number,
        search?: string,
    ): CancelablePromise<PaginatedGoogleWorkspaceProviderGroupList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/google_workspace_groups/',
            query: {
                'group__group_uuid': groupGroupUuid,
                'group__name': groupName,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'provider__id': providerId,
                'search': search,
            },
        });
    }
    /**
     * GoogleWorkspaceProviderGroup Viewset
     * @param requestBody
     * @returns GoogleWorkspaceProviderGroup
     * @throws ApiError
     */
    public static providersGoogleWorkspaceGroupsCreate(
        requestBody: GoogleWorkspaceProviderGroupRequest,
    ): CancelablePromise<GoogleWorkspaceProviderGroup> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/providers/google_workspace_groups/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * GoogleWorkspaceProviderGroup Viewset
     * @param id A UUID string identifying this Google Workspace Provider Group.
     * @returns GoogleWorkspaceProviderGroup
     * @throws ApiError
     */
    public static providersGoogleWorkspaceGroupsRetrieve(
        id: string,
    ): CancelablePromise<GoogleWorkspaceProviderGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/google_workspace_groups/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * GoogleWorkspaceProviderGroup Viewset
     * @param id A UUID string identifying this Google Workspace Provider Group.
     * @returns void
     * @throws ApiError
     */
    public static providersGoogleWorkspaceGroupsDestroy(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/providers/google_workspace_groups/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A UUID string identifying this Google Workspace Provider Group.
     * @returns UsedBy
     * @throws ApiError
     */
    public static providersGoogleWorkspaceGroupsUsedByList(
        id: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/google_workspace_groups/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * GoogleWorkspaceProviderUser Viewset
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param providerId
     * @param search A search term.
     * @param userId
     * @param userUsername
     * @returns PaginatedGoogleWorkspaceProviderUserList
     * @throws ApiError
     */
    public static providersGoogleWorkspaceUsersList(
        ordering?: string,
        page?: number,
        pageSize?: number,
        providerId?: number,
        search?: string,
        userId?: number,
        userUsername?: string,
    ): CancelablePromise<PaginatedGoogleWorkspaceProviderUserList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/google_workspace_users/',
            query: {
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'provider__id': providerId,
                'search': search,
                'user__id': userId,
                'user__username': userUsername,
            },
        });
    }
    /**
     * GoogleWorkspaceProviderUser Viewset
     * @param requestBody
     * @returns GoogleWorkspaceProviderUser
     * @throws ApiError
     */
    public static providersGoogleWorkspaceUsersCreate(
        requestBody: GoogleWorkspaceProviderUserRequest,
    ): CancelablePromise<GoogleWorkspaceProviderUser> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/providers/google_workspace_users/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * GoogleWorkspaceProviderUser Viewset
     * @param id A UUID string identifying this Google Workspace Provider User.
     * @returns GoogleWorkspaceProviderUser
     * @throws ApiError
     */
    public static providersGoogleWorkspaceUsersRetrieve(
        id: string,
    ): CancelablePromise<GoogleWorkspaceProviderUser> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/google_workspace_users/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * GoogleWorkspaceProviderUser Viewset
     * @param id A UUID string identifying this Google Workspace Provider User.
     * @returns void
     * @throws ApiError
     */
    public static providersGoogleWorkspaceUsersDestroy(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/providers/google_workspace_users/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A UUID string identifying this Google Workspace Provider User.
     * @returns UsedBy
     * @throws ApiError
     */
    public static providersGoogleWorkspaceUsersUsedByList(
        id: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/google_workspace_users/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * LDAPProvider Viewset
     * @param applicationIsnull
     * @param authorizationFlowSlugIexact
     * @param baseDnIexact
     * @param certificateKpUuidIexact
     * @param certificateNameIexact
     * @param gidStartNumberIexact
     * @param nameIexact
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param tlsServerNameIexact
     * @param uidStartNumberIexact
     * @returns PaginatedLDAPProviderList
     * @throws ApiError
     */
    public static providersLdapList(
        applicationIsnull?: boolean,
        authorizationFlowSlugIexact?: string,
        baseDnIexact?: string,
        certificateKpUuidIexact?: string,
        certificateNameIexact?: string,
        gidStartNumberIexact?: number,
        nameIexact?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        tlsServerNameIexact?: string,
        uidStartNumberIexact?: number,
    ): CancelablePromise<PaginatedLDAPProviderList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/ldap/',
            query: {
                'application__isnull': applicationIsnull,
                'authorization_flow__slug__iexact': authorizationFlowSlugIexact,
                'base_dn__iexact': baseDnIexact,
                'certificate__kp_uuid__iexact': certificateKpUuidIexact,
                'certificate__name__iexact': certificateNameIexact,
                'gid_start_number__iexact': gidStartNumberIexact,
                'name__iexact': nameIexact,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'tls_server_name__iexact': tlsServerNameIexact,
                'uid_start_number__iexact': uidStartNumberIexact,
            },
        });
    }
    /**
     * LDAPProvider Viewset
     * @param requestBody
     * @returns LDAPProvider
     * @throws ApiError
     */
    public static providersLdapCreate(
        requestBody: LDAPProviderRequest,
    ): CancelablePromise<LDAPProvider> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/providers/ldap/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * LDAPProvider Viewset
     * @param id A unique integer value identifying this LDAP Provider.
     * @returns LDAPProvider
     * @throws ApiError
     */
    public static providersLdapRetrieve(
        id: number,
    ): CancelablePromise<LDAPProvider> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/ldap/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * LDAPProvider Viewset
     * @param id A unique integer value identifying this LDAP Provider.
     * @param requestBody
     * @returns LDAPProvider
     * @throws ApiError
     */
    public static providersLdapUpdate(
        id: number,
        requestBody: LDAPProviderRequest,
    ): CancelablePromise<LDAPProvider> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/providers/ldap/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * LDAPProvider Viewset
     * @param id A unique integer value identifying this LDAP Provider.
     * @param requestBody
     * @returns LDAPProvider
     * @throws ApiError
     */
    public static providersLdapPartialUpdate(
        id: number,
        requestBody?: PatchedLDAPProviderRequest,
    ): CancelablePromise<LDAPProvider> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/providers/ldap/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * LDAPProvider Viewset
     * @param id A unique integer value identifying this LDAP Provider.
     * @returns void
     * @throws ApiError
     */
    public static providersLdapDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/providers/ldap/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique integer value identifying this LDAP Provider.
     * @returns UsedBy
     * @throws ApiError
     */
    public static providersLdapUsedByList(
        id: number,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/ldap/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * MicrosoftEntraProvider Viewset
     * @param excludeUsersServiceAccount
     * @param filterGroup
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedMicrosoftEntraProviderList
     * @throws ApiError
     */
    public static providersMicrosoftEntraList(
        excludeUsersServiceAccount?: boolean,
        filterGroup?: string,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedMicrosoftEntraProviderList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/microsoft_entra/',
            query: {
                'exclude_users_service_account': excludeUsersServiceAccount,
                'filter_group': filterGroup,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
            },
        });
    }
    /**
     * MicrosoftEntraProvider Viewset
     * @param requestBody
     * @returns MicrosoftEntraProvider
     * @throws ApiError
     */
    public static providersMicrosoftEntraCreate(
        requestBody: MicrosoftEntraProviderRequest,
    ): CancelablePromise<MicrosoftEntraProvider> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/providers/microsoft_entra/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * MicrosoftEntraProvider Viewset
     * @param id A unique integer value identifying this Microsoft Entra Provider.
     * @returns MicrosoftEntraProvider
     * @throws ApiError
     */
    public static providersMicrosoftEntraRetrieve(
        id: number,
    ): CancelablePromise<MicrosoftEntraProvider> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/microsoft_entra/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * MicrosoftEntraProvider Viewset
     * @param id A unique integer value identifying this Microsoft Entra Provider.
     * @param requestBody
     * @returns MicrosoftEntraProvider
     * @throws ApiError
     */
    public static providersMicrosoftEntraUpdate(
        id: number,
        requestBody: MicrosoftEntraProviderRequest,
    ): CancelablePromise<MicrosoftEntraProvider> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/providers/microsoft_entra/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * MicrosoftEntraProvider Viewset
     * @param id A unique integer value identifying this Microsoft Entra Provider.
     * @param requestBody
     * @returns MicrosoftEntraProvider
     * @throws ApiError
     */
    public static providersMicrosoftEntraPartialUpdate(
        id: number,
        requestBody?: PatchedMicrosoftEntraProviderRequest,
    ): CancelablePromise<MicrosoftEntraProvider> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/providers/microsoft_entra/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * MicrosoftEntraProvider Viewset
     * @param id A unique integer value identifying this Microsoft Entra Provider.
     * @returns void
     * @throws ApiError
     */
    public static providersMicrosoftEntraDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/providers/microsoft_entra/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Sync/Re-sync a single user/group object
     * @param id A unique integer value identifying this Microsoft Entra Provider.
     * @param requestBody
     * @returns SyncObjectResult
     * @throws ApiError
     */
    public static providersMicrosoftEntraSyncObjectCreate(
        id: number,
        requestBody: SyncObjectRequest,
    ): CancelablePromise<SyncObjectResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/providers/microsoft_entra/{id}/sync/object/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get provider's sync status
     * @param id A unique integer value identifying this Microsoft Entra Provider.
     * @returns SyncStatus
     * @throws ApiError
     */
    public static providersMicrosoftEntraSyncStatusRetrieve(
        id: number,
    ): CancelablePromise<SyncStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/microsoft_entra/{id}/sync/status/',
            path: {
                'id': id,
            },
            errors: {
                404: `Task not found`,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique integer value identifying this Microsoft Entra Provider.
     * @returns UsedBy
     * @throws ApiError
     */
    public static providersMicrosoftEntraUsedByList(
        id: number,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/microsoft_entra/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * MicrosoftEntraProviderGroup Viewset
     * @param groupGroupUuid
     * @param groupName
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param providerId
     * @param search A search term.
     * @returns PaginatedMicrosoftEntraProviderGroupList
     * @throws ApiError
     */
    public static providersMicrosoftEntraGroupsList(
        groupGroupUuid?: string,
        groupName?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        providerId?: number,
        search?: string,
    ): CancelablePromise<PaginatedMicrosoftEntraProviderGroupList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/microsoft_entra_groups/',
            query: {
                'group__group_uuid': groupGroupUuid,
                'group__name': groupName,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'provider__id': providerId,
                'search': search,
            },
        });
    }
    /**
     * MicrosoftEntraProviderGroup Viewset
     * @param requestBody
     * @returns MicrosoftEntraProviderGroup
     * @throws ApiError
     */
    public static providersMicrosoftEntraGroupsCreate(
        requestBody: MicrosoftEntraProviderGroupRequest,
    ): CancelablePromise<MicrosoftEntraProviderGroup> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/providers/microsoft_entra_groups/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * MicrosoftEntraProviderGroup Viewset
     * @param id A UUID string identifying this Microsoft Entra Provider Group.
     * @returns MicrosoftEntraProviderGroup
     * @throws ApiError
     */
    public static providersMicrosoftEntraGroupsRetrieve(
        id: string,
    ): CancelablePromise<MicrosoftEntraProviderGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/microsoft_entra_groups/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * MicrosoftEntraProviderGroup Viewset
     * @param id A UUID string identifying this Microsoft Entra Provider Group.
     * @returns void
     * @throws ApiError
     */
    public static providersMicrosoftEntraGroupsDestroy(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/providers/microsoft_entra_groups/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A UUID string identifying this Microsoft Entra Provider Group.
     * @returns UsedBy
     * @throws ApiError
     */
    public static providersMicrosoftEntraGroupsUsedByList(
        id: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/microsoft_entra_groups/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * MicrosoftEntraProviderUser Viewset
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param providerId
     * @param search A search term.
     * @param userId
     * @param userUsername
     * @returns PaginatedMicrosoftEntraProviderUserList
     * @throws ApiError
     */
    public static providersMicrosoftEntraUsersList(
        ordering?: string,
        page?: number,
        pageSize?: number,
        providerId?: number,
        search?: string,
        userId?: number,
        userUsername?: string,
    ): CancelablePromise<PaginatedMicrosoftEntraProviderUserList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/microsoft_entra_users/',
            query: {
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'provider__id': providerId,
                'search': search,
                'user__id': userId,
                'user__username': userUsername,
            },
        });
    }
    /**
     * MicrosoftEntraProviderUser Viewset
     * @param requestBody
     * @returns MicrosoftEntraProviderUser
     * @throws ApiError
     */
    public static providersMicrosoftEntraUsersCreate(
        requestBody: MicrosoftEntraProviderUserRequest,
    ): CancelablePromise<MicrosoftEntraProviderUser> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/providers/microsoft_entra_users/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * MicrosoftEntraProviderUser Viewset
     * @param id A UUID string identifying this Microsoft Entra Provider User.
     * @returns MicrosoftEntraProviderUser
     * @throws ApiError
     */
    public static providersMicrosoftEntraUsersRetrieve(
        id: string,
    ): CancelablePromise<MicrosoftEntraProviderUser> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/microsoft_entra_users/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * MicrosoftEntraProviderUser Viewset
     * @param id A UUID string identifying this Microsoft Entra Provider User.
     * @returns void
     * @throws ApiError
     */
    public static providersMicrosoftEntraUsersDestroy(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/providers/microsoft_entra_users/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A UUID string identifying this Microsoft Entra Provider User.
     * @returns UsedBy
     * @throws ApiError
     */
    public static providersMicrosoftEntraUsersUsedByList(
        id: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/microsoft_entra_users/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * OAuth2Provider Viewset
     * @param accessCodeValidity
     * @param accessTokenValidity
     * @param application
     * @param authorizationFlow
     * @param clientId
     * @param clientType Confidential clients are capable of maintaining the confidentiality of their credentials. Public clients are incapable
     *
     *
     * @param includeClaimsInIdToken
     * @param issuerMode Configure how the issuer field of the ID Token should be filled.
     *
     *
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param propertyMappings
     * @param refreshTokenValidity
     * @param search A search term.
     * @param signingKey
     * @param subMode Configure what data should be used as unique User Identifier. For most cases, the default should be fine.
     *
     *
     * @returns PaginatedOAuth2ProviderList
     * @throws ApiError
     */
    public static providersOauth2List(
        accessCodeValidity?: string,
        accessTokenValidity?: string,
        application?: string,
        authorizationFlow?: string,
        clientId?: string,
        clientType?: 'confidential' | 'public',
        includeClaimsInIdToken?: boolean,
        issuerMode?: 'global' | 'per_provider',
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        propertyMappings?: Array<string>,
        refreshTokenValidity?: string,
        search?: string,
        signingKey?: string,
        subMode?: 'hashed_user_id' | 'user_email' | 'user_id' | 'user_upn' | 'user_username' | 'user_uuid',
    ): CancelablePromise<PaginatedOAuth2ProviderList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/oauth2/',
            query: {
                'access_code_validity': accessCodeValidity,
                'access_token_validity': accessTokenValidity,
                'application': application,
                'authorization_flow': authorizationFlow,
                'client_id': clientId,
                'client_type': clientType,
                'include_claims_in_id_token': includeClaimsInIdToken,
                'issuer_mode': issuerMode,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'property_mappings': propertyMappings,
                'refresh_token_validity': refreshTokenValidity,
                'search': search,
                'signing_key': signingKey,
                'sub_mode': subMode,
            },
        });
    }
    /**
     * OAuth2Provider Viewset
     * @param requestBody
     * @returns OAuth2Provider
     * @throws ApiError
     */
    public static providersOauth2Create(
        requestBody: OAuth2ProviderRequest,
    ): CancelablePromise<OAuth2Provider> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/providers/oauth2/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * OAuth2Provider Viewset
     * @param id A unique integer value identifying this OAuth2/OpenID Provider.
     * @returns OAuth2Provider
     * @throws ApiError
     */
    public static providersOauth2Retrieve(
        id: number,
    ): CancelablePromise<OAuth2Provider> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/oauth2/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * OAuth2Provider Viewset
     * @param id A unique integer value identifying this OAuth2/OpenID Provider.
     * @param requestBody
     * @returns OAuth2Provider
     * @throws ApiError
     */
    public static providersOauth2Update(
        id: number,
        requestBody: OAuth2ProviderRequest,
    ): CancelablePromise<OAuth2Provider> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/providers/oauth2/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * OAuth2Provider Viewset
     * @param id A unique integer value identifying this OAuth2/OpenID Provider.
     * @param requestBody
     * @returns OAuth2Provider
     * @throws ApiError
     */
    public static providersOauth2PartialUpdate(
        id: number,
        requestBody?: PatchedOAuth2ProviderRequest,
    ): CancelablePromise<OAuth2Provider> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/providers/oauth2/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * OAuth2Provider Viewset
     * @param id A unique integer value identifying this OAuth2/OpenID Provider.
     * @returns void
     * @throws ApiError
     */
    public static providersOauth2Destroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/providers/oauth2/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Preview user data for provider
     * @param id A unique integer value identifying this OAuth2/OpenID Provider.
     * @param forUser
     * @returns PropertyMappingPreview
     * @throws ApiError
     */
    public static providersOauth2PreviewUserRetrieve(
        id: number,
        forUser?: number,
    ): CancelablePromise<PropertyMappingPreview> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/oauth2/{id}/preview_user/',
            path: {
                'id': id,
            },
            query: {
                'for_user': forUser,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Get Providers setup URLs
     * @param id A unique integer value identifying this OAuth2/OpenID Provider.
     * @returns OAuth2ProviderSetupURLs
     * @throws ApiError
     */
    public static providersOauth2SetupUrlsRetrieve(
        id: number,
    ): CancelablePromise<OAuth2ProviderSetupURLs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/oauth2/{id}/setup_urls/',
            path: {
                'id': id,
            },
            errors: {
                404: `Provider has no application assigned`,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique integer value identifying this OAuth2/OpenID Provider.
     * @returns UsedBy
     * @throws ApiError
     */
    public static providersOauth2UsedByList(
        id: number,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/oauth2/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * ProxyProvider Viewset
     * @param applicationIsnull
     * @param authorizationFlowSlugIexact
     * @param basicAuthEnabledIexact
     * @param basicAuthPasswordAttributeIexact
     * @param basicAuthUserAttributeIexact
     * @param certificateKpUuidIexact
     * @param certificateNameIexact
     * @param cookieDomainIexact
     * @param externalHostIexact
     * @param internalHostIexact
     * @param internalHostSslValidationIexact
     * @param modeIexact
     * @param nameIexact
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param propertyMappingsIexact
     * @param search A search term.
     * @param skipPathRegexIexact
     * @returns PaginatedProxyProviderList
     * @throws ApiError
     */
    public static providersProxyList(
        applicationIsnull?: boolean,
        authorizationFlowSlugIexact?: string,
        basicAuthEnabledIexact?: boolean,
        basicAuthPasswordAttributeIexact?: string,
        basicAuthUserAttributeIexact?: string,
        certificateKpUuidIexact?: string,
        certificateNameIexact?: string,
        cookieDomainIexact?: string,
        externalHostIexact?: string,
        internalHostIexact?: string,
        internalHostSslValidationIexact?: boolean,
        modeIexact?: string,
        nameIexact?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        propertyMappingsIexact?: Array<string>,
        search?: string,
        skipPathRegexIexact?: string,
    ): CancelablePromise<PaginatedProxyProviderList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/proxy/',
            query: {
                'application__isnull': applicationIsnull,
                'authorization_flow__slug__iexact': authorizationFlowSlugIexact,
                'basic_auth_enabled__iexact': basicAuthEnabledIexact,
                'basic_auth_password_attribute__iexact': basicAuthPasswordAttributeIexact,
                'basic_auth_user_attribute__iexact': basicAuthUserAttributeIexact,
                'certificate__kp_uuid__iexact': certificateKpUuidIexact,
                'certificate__name__iexact': certificateNameIexact,
                'cookie_domain__iexact': cookieDomainIexact,
                'external_host__iexact': externalHostIexact,
                'internal_host__iexact': internalHostIexact,
                'internal_host_ssl_validation__iexact': internalHostSslValidationIexact,
                'mode__iexact': modeIexact,
                'name__iexact': nameIexact,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'property_mappings__iexact': propertyMappingsIexact,
                'search': search,
                'skip_path_regex__iexact': skipPathRegexIexact,
            },
        });
    }
    /**
     * ProxyProvider Viewset
     * @param requestBody
     * @returns ProxyProvider
     * @throws ApiError
     */
    public static providersProxyCreate(
        requestBody: ProxyProviderRequest,
    ): CancelablePromise<ProxyProvider> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/providers/proxy/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * ProxyProvider Viewset
     * @param id A unique integer value identifying this Proxy Provider.
     * @returns ProxyProvider
     * @throws ApiError
     */
    public static providersProxyRetrieve(
        id: number,
    ): CancelablePromise<ProxyProvider> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/proxy/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * ProxyProvider Viewset
     * @param id A unique integer value identifying this Proxy Provider.
     * @param requestBody
     * @returns ProxyProvider
     * @throws ApiError
     */
    public static providersProxyUpdate(
        id: number,
        requestBody: ProxyProviderRequest,
    ): CancelablePromise<ProxyProvider> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/providers/proxy/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * ProxyProvider Viewset
     * @param id A unique integer value identifying this Proxy Provider.
     * @param requestBody
     * @returns ProxyProvider
     * @throws ApiError
     */
    public static providersProxyPartialUpdate(
        id: number,
        requestBody?: PatchedProxyProviderRequest,
    ): CancelablePromise<ProxyProvider> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/providers/proxy/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * ProxyProvider Viewset
     * @param id A unique integer value identifying this Proxy Provider.
     * @returns void
     * @throws ApiError
     */
    public static providersProxyDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/providers/proxy/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique integer value identifying this Proxy Provider.
     * @returns UsedBy
     * @throws ApiError
     */
    public static providersProxyUsedByList(
        id: number,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/proxy/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * RACProvider Viewset
     * @param applicationIsnull
     * @param nameIexact
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedRACProviderList
     * @throws ApiError
     */
    public static providersRacList(
        applicationIsnull?: boolean,
        nameIexact?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedRACProviderList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/rac/',
            query: {
                'application__isnull': applicationIsnull,
                'name__iexact': nameIexact,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
            },
        });
    }
    /**
     * RACProvider Viewset
     * @param requestBody
     * @returns RACProvider
     * @throws ApiError
     */
    public static providersRacCreate(
        requestBody: RACProviderRequest,
    ): CancelablePromise<RACProvider> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/providers/rac/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * RACProvider Viewset
     * @param id A unique integer value identifying this RAC Provider.
     * @returns RACProvider
     * @throws ApiError
     */
    public static providersRacRetrieve(
        id: number,
    ): CancelablePromise<RACProvider> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/rac/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * RACProvider Viewset
     * @param id A unique integer value identifying this RAC Provider.
     * @param requestBody
     * @returns RACProvider
     * @throws ApiError
     */
    public static providersRacUpdate(
        id: number,
        requestBody: RACProviderRequest,
    ): CancelablePromise<RACProvider> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/providers/rac/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * RACProvider Viewset
     * @param id A unique integer value identifying this RAC Provider.
     * @param requestBody
     * @returns RACProvider
     * @throws ApiError
     */
    public static providersRacPartialUpdate(
        id: number,
        requestBody?: PatchedRACProviderRequest,
    ): CancelablePromise<RACProvider> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/providers/rac/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * RACProvider Viewset
     * @param id A unique integer value identifying this RAC Provider.
     * @returns void
     * @throws ApiError
     */
    public static providersRacDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/providers/rac/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique integer value identifying this RAC Provider.
     * @returns UsedBy
     * @throws ApiError
     */
    public static providersRacUsedByList(
        id: number,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/rac/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * RadiusProvider Viewset
     * @param applicationIsnull
     * @param authorizationFlowSlugIexact
     * @param clientNetworksIexact
     * @param nameIexact
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedRadiusProviderList
     * @throws ApiError
     */
    public static providersRadiusList(
        applicationIsnull?: boolean,
        authorizationFlowSlugIexact?: string,
        clientNetworksIexact?: string,
        nameIexact?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedRadiusProviderList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/radius/',
            query: {
                'application__isnull': applicationIsnull,
                'authorization_flow__slug__iexact': authorizationFlowSlugIexact,
                'client_networks__iexact': clientNetworksIexact,
                'name__iexact': nameIexact,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
            },
        });
    }
    /**
     * RadiusProvider Viewset
     * @param requestBody
     * @returns RadiusProvider
     * @throws ApiError
     */
    public static providersRadiusCreate(
        requestBody: RadiusProviderRequest,
    ): CancelablePromise<RadiusProvider> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/providers/radius/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * RadiusProvider Viewset
     * @param id A unique integer value identifying this Radius Provider.
     * @returns RadiusProvider
     * @throws ApiError
     */
    public static providersRadiusRetrieve(
        id: number,
    ): CancelablePromise<RadiusProvider> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/radius/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * RadiusProvider Viewset
     * @param id A unique integer value identifying this Radius Provider.
     * @param requestBody
     * @returns RadiusProvider
     * @throws ApiError
     */
    public static providersRadiusUpdate(
        id: number,
        requestBody: RadiusProviderRequest,
    ): CancelablePromise<RadiusProvider> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/providers/radius/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * RadiusProvider Viewset
     * @param id A unique integer value identifying this Radius Provider.
     * @param requestBody
     * @returns RadiusProvider
     * @throws ApiError
     */
    public static providersRadiusPartialUpdate(
        id: number,
        requestBody?: PatchedRadiusProviderRequest,
    ): CancelablePromise<RadiusProvider> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/providers/radius/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * RadiusProvider Viewset
     * @param id A unique integer value identifying this Radius Provider.
     * @returns void
     * @throws ApiError
     */
    public static providersRadiusDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/providers/radius/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique integer value identifying this Radius Provider.
     * @returns UsedBy
     * @throws ApiError
     */
    public static providersRadiusUsedByList(
        id: number,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/radius/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * SAMLProvider Viewset
     * @param acsUrl
     * @param assertionValidNotBefore
     * @param assertionValidNotOnOrAfter
     * @param audience
     * @param authenticationFlow
     * @param authnContextClassRefMapping
     * @param authorizationFlow
     * @param backchannelApplication
     * @param defaultRelayState
     * @param digestAlgorithm
     * @param encryptionKp
     * @param invalidationFlow
     * @param isBackchannel
     * @param issuer
     * @param name
     * @param nameIdMapping
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param propertyMappings
     * @param search A search term.
     * @param sessionValidNotOnOrAfter
     * @param signAssertion
     * @param signResponse
     * @param signatureAlgorithm
     * @param signingKp
     * @param spBinding This determines how authentik sends the response back to the Service Provider.
     *
     *
     * @param verificationKp
     * @returns PaginatedSAMLProviderList
     * @throws ApiError
     */
    public static providersSamlList(
        acsUrl?: string,
        assertionValidNotBefore?: string,
        assertionValidNotOnOrAfter?: string,
        audience?: string,
        authenticationFlow?: string,
        authnContextClassRefMapping?: string,
        authorizationFlow?: string,
        backchannelApplication?: string,
        defaultRelayState?: string,
        digestAlgorithm?: 'http://www.w3.org/2000/09/xmldsig#sha1' | 'http://www.w3.org/2001/04/xmldsig-more#sha384' | 'http://www.w3.org/2001/04/xmlenc#sha256' | 'http://www.w3.org/2001/04/xmlenc#sha512',
        encryptionKp?: string,
        invalidationFlow?: string,
        isBackchannel?: boolean,
        issuer?: string,
        name?: string,
        nameIdMapping?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        propertyMappings?: Array<string>,
        search?: string,
        sessionValidNotOnOrAfter?: string,
        signAssertion?: boolean,
        signResponse?: boolean,
        signatureAlgorithm?: 'http://www.w3.org/2000/09/xmldsig#dsa-sha1' | 'http://www.w3.org/2000/09/xmldsig#rsa-sha1' | 'http://www.w3.org/2001/04/xmldsig-more#ecdsa-sha1' | 'http://www.w3.org/2001/04/xmldsig-more#ecdsa-sha256' | 'http://www.w3.org/2001/04/xmldsig-more#ecdsa-sha384' | 'http://www.w3.org/2001/04/xmldsig-more#ecdsa-sha512' | 'http://www.w3.org/2001/04/xmldsig-more#rsa-sha256' | 'http://www.w3.org/2001/04/xmldsig-more#rsa-sha384' | 'http://www.w3.org/2001/04/xmldsig-more#rsa-sha512',
        signingKp?: string,
        spBinding?: 'post' | 'redirect',
        verificationKp?: string,
    ): CancelablePromise<PaginatedSAMLProviderList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/saml/',
            query: {
                'acs_url': acsUrl,
                'assertion_valid_not_before': assertionValidNotBefore,
                'assertion_valid_not_on_or_after': assertionValidNotOnOrAfter,
                'audience': audience,
                'authentication_flow': authenticationFlow,
                'authn_context_class_ref_mapping': authnContextClassRefMapping,
                'authorization_flow': authorizationFlow,
                'backchannel_application': backchannelApplication,
                'default_relay_state': defaultRelayState,
                'digest_algorithm': digestAlgorithm,
                'encryption_kp': encryptionKp,
                'invalidation_flow': invalidationFlow,
                'is_backchannel': isBackchannel,
                'issuer': issuer,
                'name': name,
                'name_id_mapping': nameIdMapping,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'property_mappings': propertyMappings,
                'search': search,
                'session_valid_not_on_or_after': sessionValidNotOnOrAfter,
                'sign_assertion': signAssertion,
                'sign_response': signResponse,
                'signature_algorithm': signatureAlgorithm,
                'signing_kp': signingKp,
                'sp_binding': spBinding,
                'verification_kp': verificationKp,
            },
        });
    }
    /**
     * SAMLProvider Viewset
     * @param requestBody
     * @returns SAMLProvider
     * @throws ApiError
     */
    public static providersSamlCreate(
        requestBody: SAMLProviderRequest,
    ): CancelablePromise<SAMLProvider> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/providers/saml/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SAMLProvider Viewset
     * @param id A unique integer value identifying this SAML Provider.
     * @returns SAMLProvider
     * @throws ApiError
     */
    public static providersSamlRetrieve(
        id: number,
    ): CancelablePromise<SAMLProvider> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/saml/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * SAMLProvider Viewset
     * @param id A unique integer value identifying this SAML Provider.
     * @param requestBody
     * @returns SAMLProvider
     * @throws ApiError
     */
    public static providersSamlUpdate(
        id: number,
        requestBody: SAMLProviderRequest,
    ): CancelablePromise<SAMLProvider> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/providers/saml/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SAMLProvider Viewset
     * @param id A unique integer value identifying this SAML Provider.
     * @param requestBody
     * @returns SAMLProvider
     * @throws ApiError
     */
    public static providersSamlPartialUpdate(
        id: number,
        requestBody?: PatchedSAMLProviderRequest,
    ): CancelablePromise<SAMLProvider> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/providers/saml/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SAMLProvider Viewset
     * @param id A unique integer value identifying this SAML Provider.
     * @returns void
     * @throws ApiError
     */
    public static providersSamlDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/providers/saml/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Return metadata as XML string
     * @param id A unique integer value identifying this SAML Provider.
     * @param download
     * @param forceBinding Optionally force the metadata to only include one binding.
     * @returns SAMLMetadata
     * @throws ApiError
     */
    public static providersSamlMetadataRetrieve(
        id: number,
        download?: boolean,
        forceBinding?: 'urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST' | 'urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect',
    ): CancelablePromise<SAMLMetadata> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/saml/{id}/metadata/',
            path: {
                'id': id,
            },
            query: {
                'download': download,
                'force_binding': forceBinding,
            },
            errors: {
                404: `Provider has no application assigned`,
            },
        });
    }
    /**
     * Preview user data for provider
     * @param id A unique integer value identifying this SAML Provider.
     * @param forUser
     * @returns PropertyMappingPreview
     * @throws ApiError
     */
    public static providersSamlPreviewUserRetrieve(
        id: number,
        forUser?: number,
    ): CancelablePromise<PropertyMappingPreview> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/saml/{id}/preview_user/',
            path: {
                'id': id,
            },
            query: {
                'for_user': forUser,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique integer value identifying this SAML Provider.
     * @returns UsedBy
     * @throws ApiError
     */
    public static providersSamlUsedByList(
        id: number,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/saml/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Create provider from SAML Metadata
     * @param formData
     * @returns void
     * @throws ApiError
     */
    public static providersSamlImportMetadataCreate(
        formData: SAMLProviderImportRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/providers/saml/import_metadata/',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * SCIMProvider Viewset
     * @param excludeUsersServiceAccount
     * @param filterGroup
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param url
     * @returns PaginatedSCIMProviderList
     * @throws ApiError
     */
    public static providersScimList(
        excludeUsersServiceAccount?: boolean,
        filterGroup?: string,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        url?: string,
    ): CancelablePromise<PaginatedSCIMProviderList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/scim/',
            query: {
                'exclude_users_service_account': excludeUsersServiceAccount,
                'filter_group': filterGroup,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'url': url,
            },
        });
    }
    /**
     * SCIMProvider Viewset
     * @param requestBody
     * @returns SCIMProvider
     * @throws ApiError
     */
    public static providersScimCreate(
        requestBody: SCIMProviderRequest,
    ): CancelablePromise<SCIMProvider> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/providers/scim/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SCIMProvider Viewset
     * @param id A unique integer value identifying this SCIM Provider.
     * @returns SCIMProvider
     * @throws ApiError
     */
    public static providersScimRetrieve(
        id: number,
    ): CancelablePromise<SCIMProvider> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/scim/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * SCIMProvider Viewset
     * @param id A unique integer value identifying this SCIM Provider.
     * @param requestBody
     * @returns SCIMProvider
     * @throws ApiError
     */
    public static providersScimUpdate(
        id: number,
        requestBody: SCIMProviderRequest,
    ): CancelablePromise<SCIMProvider> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/providers/scim/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SCIMProvider Viewset
     * @param id A unique integer value identifying this SCIM Provider.
     * @param requestBody
     * @returns SCIMProvider
     * @throws ApiError
     */
    public static providersScimPartialUpdate(
        id: number,
        requestBody?: PatchedSCIMProviderRequest,
    ): CancelablePromise<SCIMProvider> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/providers/scim/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SCIMProvider Viewset
     * @param id A unique integer value identifying this SCIM Provider.
     * @returns void
     * @throws ApiError
     */
    public static providersScimDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/providers/scim/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Sync/Re-sync a single user/group object
     * @param id A unique integer value identifying this SCIM Provider.
     * @param requestBody
     * @returns SyncObjectResult
     * @throws ApiError
     */
    public static providersScimSyncObjectCreate(
        id: number,
        requestBody: SyncObjectRequest,
    ): CancelablePromise<SyncObjectResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/providers/scim/{id}/sync/object/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get provider's sync status
     * @param id A unique integer value identifying this SCIM Provider.
     * @returns SyncStatus
     * @throws ApiError
     */
    public static providersScimSyncStatusRetrieve(
        id: number,
    ): CancelablePromise<SyncStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/scim/{id}/sync/status/',
            path: {
                'id': id,
            },
            errors: {
                404: `Task not found`,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique integer value identifying this SCIM Provider.
     * @returns UsedBy
     * @throws ApiError
     */
    public static providersScimUsedByList(
        id: number,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/scim/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * SCIMProviderGroup Viewset
     * @param groupGroupUuid
     * @param groupName
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param providerId
     * @param search A search term.
     * @returns PaginatedSCIMProviderGroupList
     * @throws ApiError
     */
    public static providersScimGroupsList(
        groupGroupUuid?: string,
        groupName?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        providerId?: number,
        search?: string,
    ): CancelablePromise<PaginatedSCIMProviderGroupList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/scim_groups/',
            query: {
                'group__group_uuid': groupGroupUuid,
                'group__name': groupName,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'provider__id': providerId,
                'search': search,
            },
        });
    }
    /**
     * SCIMProviderGroup Viewset
     * @param requestBody
     * @returns SCIMProviderGroup
     * @throws ApiError
     */
    public static providersScimGroupsCreate(
        requestBody: SCIMProviderGroupRequest,
    ): CancelablePromise<SCIMProviderGroup> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/providers/scim_groups/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SCIMProviderGroup Viewset
     * @param id A UUID string identifying this scim provider group.
     * @returns SCIMProviderGroup
     * @throws ApiError
     */
    public static providersScimGroupsRetrieve(
        id: string,
    ): CancelablePromise<SCIMProviderGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/scim_groups/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * SCIMProviderGroup Viewset
     * @param id A UUID string identifying this scim provider group.
     * @returns void
     * @throws ApiError
     */
    public static providersScimGroupsDestroy(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/providers/scim_groups/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A UUID string identifying this scim provider group.
     * @returns UsedBy
     * @throws ApiError
     */
    public static providersScimGroupsUsedByList(
        id: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/scim_groups/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * SCIMProviderUser Viewset
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param providerId
     * @param search A search term.
     * @param userId
     * @param userUsername
     * @returns PaginatedSCIMProviderUserList
     * @throws ApiError
     */
    public static providersScimUsersList(
        ordering?: string,
        page?: number,
        pageSize?: number,
        providerId?: number,
        search?: string,
        userId?: number,
        userUsername?: string,
    ): CancelablePromise<PaginatedSCIMProviderUserList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/scim_users/',
            query: {
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'provider__id': providerId,
                'search': search,
                'user__id': userId,
                'user__username': userUsername,
            },
        });
    }
    /**
     * SCIMProviderUser Viewset
     * @param requestBody
     * @returns SCIMProviderUser
     * @throws ApiError
     */
    public static providersScimUsersCreate(
        requestBody: SCIMProviderUserRequest,
    ): CancelablePromise<SCIMProviderUser> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/providers/scim_users/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SCIMProviderUser Viewset
     * @param id A UUID string identifying this scim provider user.
     * @returns SCIMProviderUser
     * @throws ApiError
     */
    public static providersScimUsersRetrieve(
        id: string,
    ): CancelablePromise<SCIMProviderUser> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/scim_users/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * SCIMProviderUser Viewset
     * @param id A UUID string identifying this scim provider user.
     * @returns void
     * @throws ApiError
     */
    public static providersScimUsersDestroy(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/providers/scim_users/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A UUID string identifying this scim provider user.
     * @returns UsedBy
     * @throws ApiError
     */
    public static providersScimUsersUsedByList(
        id: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/scim_users/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * SSFProvider Viewset
     * @param applicationIsnull
     * @param nameIexact
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedSSFProviderList
     * @throws ApiError
     */
    public static providersSsfList(
        applicationIsnull?: boolean,
        nameIexact?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedSSFProviderList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/ssf/',
            query: {
                'application__isnull': applicationIsnull,
                'name__iexact': nameIexact,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
            },
        });
    }
    /**
     * SSFProvider Viewset
     * @param requestBody
     * @returns SSFProvider
     * @throws ApiError
     */
    public static providersSsfCreate(
        requestBody: SSFProviderRequest,
    ): CancelablePromise<SSFProvider> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/providers/ssf/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SSFProvider Viewset
     * @param id A unique integer value identifying this Shared Signals Framework Provider.
     * @returns SSFProvider
     * @throws ApiError
     */
    public static providersSsfRetrieve(
        id: number,
    ): CancelablePromise<SSFProvider> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/ssf/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * SSFProvider Viewset
     * @param id A unique integer value identifying this Shared Signals Framework Provider.
     * @param requestBody
     * @returns SSFProvider
     * @throws ApiError
     */
    public static providersSsfUpdate(
        id: number,
        requestBody: SSFProviderRequest,
    ): CancelablePromise<SSFProvider> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/providers/ssf/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SSFProvider Viewset
     * @param id A unique integer value identifying this Shared Signals Framework Provider.
     * @param requestBody
     * @returns SSFProvider
     * @throws ApiError
     */
    public static providersSsfPartialUpdate(
        id: number,
        requestBody?: PatchedSSFProviderRequest,
    ): CancelablePromise<SSFProvider> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/providers/ssf/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SSFProvider Viewset
     * @param id A unique integer value identifying this Shared Signals Framework Provider.
     * @returns void
     * @throws ApiError
     */
    public static providersSsfDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/providers/ssf/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique integer value identifying this Shared Signals Framework Provider.
     * @returns UsedBy
     * @throws ApiError
     */
    public static providersSsfUsedByList(
        id: number,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providers/ssf/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
}
