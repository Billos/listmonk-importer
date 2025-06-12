/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FilePathRequest } from '../models/FilePathRequest';
import type { FileUploadRequest } from '../models/FileUploadRequest';
import type { GroupKerberosSourceConnection } from '../models/GroupKerberosSourceConnection';
import type { GroupKerberosSourceConnectionRequest } from '../models/GroupKerberosSourceConnectionRequest';
import type { GroupLDAPSourceConnection } from '../models/GroupLDAPSourceConnection';
import type { GroupLDAPSourceConnectionRequest } from '../models/GroupLDAPSourceConnectionRequest';
import type { GroupOAuthSourceConnection } from '../models/GroupOAuthSourceConnection';
import type { GroupOAuthSourceConnectionRequest } from '../models/GroupOAuthSourceConnectionRequest';
import type { GroupPlexSourceConnection } from '../models/GroupPlexSourceConnection';
import type { GroupPlexSourceConnectionRequest } from '../models/GroupPlexSourceConnectionRequest';
import type { GroupSAMLSourceConnection } from '../models/GroupSAMLSourceConnection';
import type { GroupSAMLSourceConnectionRequest } from '../models/GroupSAMLSourceConnectionRequest';
import type { GroupSourceConnection } from '../models/GroupSourceConnection';
import type { GroupSourceConnectionRequest } from '../models/GroupSourceConnectionRequest';
import type { KerberosSource } from '../models/KerberosSource';
import type { KerberosSourceRequest } from '../models/KerberosSourceRequest';
import type { KerberosSyncStatus } from '../models/KerberosSyncStatus';
import type { LDAPDebug } from '../models/LDAPDebug';
import type { LDAPSource } from '../models/LDAPSource';
import type { LDAPSourceRequest } from '../models/LDAPSourceRequest';
import type { OAuthSource } from '../models/OAuthSource';
import type { OAuthSourceRequest } from '../models/OAuthSourceRequest';
import type { PaginatedGroupKerberosSourceConnectionList } from '../models/PaginatedGroupKerberosSourceConnectionList';
import type { PaginatedGroupLDAPSourceConnectionList } from '../models/PaginatedGroupLDAPSourceConnectionList';
import type { PaginatedGroupOAuthSourceConnectionList } from '../models/PaginatedGroupOAuthSourceConnectionList';
import type { PaginatedGroupPlexSourceConnectionList } from '../models/PaginatedGroupPlexSourceConnectionList';
import type { PaginatedGroupSAMLSourceConnectionList } from '../models/PaginatedGroupSAMLSourceConnectionList';
import type { PaginatedGroupSourceConnectionList } from '../models/PaginatedGroupSourceConnectionList';
import type { PaginatedKerberosSourceList } from '../models/PaginatedKerberosSourceList';
import type { PaginatedLDAPSourceList } from '../models/PaginatedLDAPSourceList';
import type { PaginatedOAuthSourceList } from '../models/PaginatedOAuthSourceList';
import type { PaginatedPlexSourceList } from '../models/PaginatedPlexSourceList';
import type { PaginatedSAMLSourceList } from '../models/PaginatedSAMLSourceList';
import type { PaginatedSCIMSourceGroupList } from '../models/PaginatedSCIMSourceGroupList';
import type { PaginatedSCIMSourceList } from '../models/PaginatedSCIMSourceList';
import type { PaginatedSCIMSourceUserList } from '../models/PaginatedSCIMSourceUserList';
import type { PaginatedSourceList } from '../models/PaginatedSourceList';
import type { PaginatedUserKerberosSourceConnectionList } from '../models/PaginatedUserKerberosSourceConnectionList';
import type { PaginatedUserLDAPSourceConnectionList } from '../models/PaginatedUserLDAPSourceConnectionList';
import type { PaginatedUserOAuthSourceConnectionList } from '../models/PaginatedUserOAuthSourceConnectionList';
import type { PaginatedUserPlexSourceConnectionList } from '../models/PaginatedUserPlexSourceConnectionList';
import type { PaginatedUserSAMLSourceConnectionList } from '../models/PaginatedUserSAMLSourceConnectionList';
import type { PaginatedUserSourceConnectionList } from '../models/PaginatedUserSourceConnectionList';
import type { PatchedGroupKerberosSourceConnectionRequest } from '../models/PatchedGroupKerberosSourceConnectionRequest';
import type { PatchedGroupLDAPSourceConnectionRequest } from '../models/PatchedGroupLDAPSourceConnectionRequest';
import type { PatchedGroupOAuthSourceConnectionRequest } from '../models/PatchedGroupOAuthSourceConnectionRequest';
import type { PatchedGroupPlexSourceConnectionRequest } from '../models/PatchedGroupPlexSourceConnectionRequest';
import type { PatchedGroupSAMLSourceConnectionRequest } from '../models/PatchedGroupSAMLSourceConnectionRequest';
import type { PatchedGroupSourceConnectionRequest } from '../models/PatchedGroupSourceConnectionRequest';
import type { PatchedKerberosSourceRequest } from '../models/PatchedKerberosSourceRequest';
import type { PatchedLDAPSourceRequest } from '../models/PatchedLDAPSourceRequest';
import type { PatchedOAuthSourceRequest } from '../models/PatchedOAuthSourceRequest';
import type { PatchedPlexSourceRequest } from '../models/PatchedPlexSourceRequest';
import type { PatchedSAMLSourceRequest } from '../models/PatchedSAMLSourceRequest';
import type { PatchedSCIMSourceGroupRequest } from '../models/PatchedSCIMSourceGroupRequest';
import type { PatchedSCIMSourceRequest } from '../models/PatchedSCIMSourceRequest';
import type { PatchedSCIMSourceUserRequest } from '../models/PatchedSCIMSourceUserRequest';
import type { PatchedUserKerberosSourceConnectionRequest } from '../models/PatchedUserKerberosSourceConnectionRequest';
import type { PatchedUserLDAPSourceConnectionRequest } from '../models/PatchedUserLDAPSourceConnectionRequest';
import type { PatchedUserOAuthSourceConnectionRequest } from '../models/PatchedUserOAuthSourceConnectionRequest';
import type { PatchedUserPlexSourceConnectionRequest } from '../models/PatchedUserPlexSourceConnectionRequest';
import type { PatchedUserSAMLSourceConnectionRequest } from '../models/PatchedUserSAMLSourceConnectionRequest';
import type { PatchedUserSourceConnectionRequest } from '../models/PatchedUserSourceConnectionRequest';
import type { PlexSource } from '../models/PlexSource';
import type { PlexSourceRequest } from '../models/PlexSourceRequest';
import type { PlexTokenRedeemRequest } from '../models/PlexTokenRedeemRequest';
import type { RedirectChallenge } from '../models/RedirectChallenge';
import type { SAMLMetadata } from '../models/SAMLMetadata';
import type { SAMLSource } from '../models/SAMLSource';
import type { SAMLSourceRequest } from '../models/SAMLSourceRequest';
import type { SCIMSource } from '../models/SCIMSource';
import type { SCIMSourceGroup } from '../models/SCIMSourceGroup';
import type { SCIMSourceGroupRequest } from '../models/SCIMSourceGroupRequest';
import type { SCIMSourceRequest } from '../models/SCIMSourceRequest';
import type { SCIMSourceUser } from '../models/SCIMSourceUser';
import type { SCIMSourceUserRequest } from '../models/SCIMSourceUserRequest';
import type { Source } from '../models/Source';
import type { SourceType } from '../models/SourceType';
import type { SyncStatus } from '../models/SyncStatus';
import type { TypeCreate } from '../models/TypeCreate';
import type { UsedBy } from '../models/UsedBy';
import type { UserKerberosSourceConnection } from '../models/UserKerberosSourceConnection';
import type { UserKerberosSourceConnectionRequest } from '../models/UserKerberosSourceConnectionRequest';
import type { UserLDAPSourceConnection } from '../models/UserLDAPSourceConnection';
import type { UserLDAPSourceConnectionRequest } from '../models/UserLDAPSourceConnectionRequest';
import type { UserOAuthSourceConnection } from '../models/UserOAuthSourceConnection';
import type { UserOAuthSourceConnectionRequest } from '../models/UserOAuthSourceConnectionRequest';
import type { UserPlexSourceConnection } from '../models/UserPlexSourceConnection';
import type { UserPlexSourceConnectionRequest } from '../models/UserPlexSourceConnectionRequest';
import type { UserSAMLSourceConnection } from '../models/UserSAMLSourceConnection';
import type { UserSAMLSourceConnectionRequest } from '../models/UserSAMLSourceConnectionRequest';
import type { UserSetting } from '../models/UserSetting';
import type { UserSourceConnection } from '../models/UserSourceConnection';
import type { UserSourceConnectionRequest } from '../models/UserSourceConnectionRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SourcesService {
    /**
     * Source Viewset
     * @param managed
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param pbmUuid
     * @param search A search term.
     * @param slug
     * @returns PaginatedSourceList
     * @throws ApiError
     */
    public static sourcesAllList(
        managed?: string,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        pbmUuid?: string,
        search?: string,
        slug?: string,
    ): CancelablePromise<PaginatedSourceList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/all/',
            query: {
                'managed': managed,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'pbm_uuid': pbmUuid,
                'search': search,
                'slug': slug,
            },
        });
    }
    /**
     * Source Viewset
     * @param slug
     * @returns Source
     * @throws ApiError
     */
    public static sourcesAllRetrieve(
        slug: string,
    ): CancelablePromise<Source> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/all/{slug}/',
            path: {
                'slug': slug,
            },
        });
    }
    /**
     * Prevent deletion of built-in sources
     * @param slug
     * @returns void
     * @throws ApiError
     */
    public static sourcesAllDestroy(
        slug: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sources/all/{slug}/',
            path: {
                'slug': slug,
            },
        });
    }
    /**
     * Set source icon
     * @param slug
     * @param formData
     * @returns any Success
     * @throws ApiError
     */
    public static sourcesAllSetIconCreate(
        slug: string,
        formData?: FileUploadRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sources/all/{slug}/set_icon/',
            path: {
                'slug': slug,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Set source icon (as URL)
     * @param slug
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static sourcesAllSetIconUrlCreate(
        slug: string,
        requestBody: FilePathRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sources/all/{slug}/set_icon_url/',
            path: {
                'slug': slug,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param slug
     * @returns UsedBy
     * @throws ApiError
     */
    public static sourcesAllUsedByList(
        slug: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/all/{slug}/used_by/',
            path: {
                'slug': slug,
            },
        });
    }
    /**
     * Get all creatable types
     * @returns TypeCreate
     * @throws ApiError
     */
    public static sourcesAllTypesList(): CancelablePromise<Array<TypeCreate>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/all/types/',
        });
    }
    /**
     * Get all sources the user can configure
     * @returns UserSetting
     * @throws ApiError
     */
    public static sourcesAllUserSettingsList(): CancelablePromise<Array<UserSetting>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/all/user_settings/',
        });
    }
    /**
     * Group-source connection Viewset
     * @param group
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param sourceSlug
     * @returns PaginatedGroupSourceConnectionList
     * @throws ApiError
     */
    public static sourcesGroupConnectionsAllList(
        group?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        sourceSlug?: string,
    ): CancelablePromise<PaginatedGroupSourceConnectionList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/group_connections/all/',
            query: {
                'group': group,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'source__slug': sourceSlug,
            },
        });
    }
    /**
     * Group-source connection Viewset
     * @param id A unique integer value identifying this group source connection.
     * @returns GroupSourceConnection
     * @throws ApiError
     */
    public static sourcesGroupConnectionsAllRetrieve(
        id: number,
    ): CancelablePromise<GroupSourceConnection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/group_connections/all/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Group-source connection Viewset
     * @param id A unique integer value identifying this group source connection.
     * @param requestBody
     * @returns GroupSourceConnection
     * @throws ApiError
     */
    public static sourcesGroupConnectionsAllUpdate(
        id: number,
        requestBody: GroupSourceConnectionRequest,
    ): CancelablePromise<GroupSourceConnection> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/sources/group_connections/all/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Group-source connection Viewset
     * @param id A unique integer value identifying this group source connection.
     * @param requestBody
     * @returns GroupSourceConnection
     * @throws ApiError
     */
    public static sourcesGroupConnectionsAllPartialUpdate(
        id: number,
        requestBody?: PatchedGroupSourceConnectionRequest,
    ): CancelablePromise<GroupSourceConnection> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/sources/group_connections/all/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Group-source connection Viewset
     * @param id A unique integer value identifying this group source connection.
     * @returns void
     * @throws ApiError
     */
    public static sourcesGroupConnectionsAllDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sources/group_connections/all/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique integer value identifying this group source connection.
     * @returns UsedBy
     * @throws ApiError
     */
    public static sourcesGroupConnectionsAllUsedByList(
        id: number,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/group_connections/all/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Group-source connection Viewset
     * @param group
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param sourceSlug
     * @returns PaginatedGroupKerberosSourceConnectionList
     * @throws ApiError
     */
    public static sourcesGroupConnectionsKerberosList(
        group?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        sourceSlug?: string,
    ): CancelablePromise<PaginatedGroupKerberosSourceConnectionList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/group_connections/kerberos/',
            query: {
                'group': group,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'source__slug': sourceSlug,
            },
        });
    }
    /**
     * Group-source connection Viewset
     * @param requestBody
     * @returns GroupKerberosSourceConnection
     * @throws ApiError
     */
    public static sourcesGroupConnectionsKerberosCreate(
        requestBody: GroupKerberosSourceConnectionRequest,
    ): CancelablePromise<GroupKerberosSourceConnection> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sources/group_connections/kerberos/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Group-source connection Viewset
     * @param id A unique integer value identifying this Group Kerberos Source Connection.
     * @returns GroupKerberosSourceConnection
     * @throws ApiError
     */
    public static sourcesGroupConnectionsKerberosRetrieve(
        id: number,
    ): CancelablePromise<GroupKerberosSourceConnection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/group_connections/kerberos/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Group-source connection Viewset
     * @param id A unique integer value identifying this Group Kerberos Source Connection.
     * @param requestBody
     * @returns GroupKerberosSourceConnection
     * @throws ApiError
     */
    public static sourcesGroupConnectionsKerberosUpdate(
        id: number,
        requestBody: GroupKerberosSourceConnectionRequest,
    ): CancelablePromise<GroupKerberosSourceConnection> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/sources/group_connections/kerberos/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Group-source connection Viewset
     * @param id A unique integer value identifying this Group Kerberos Source Connection.
     * @param requestBody
     * @returns GroupKerberosSourceConnection
     * @throws ApiError
     */
    public static sourcesGroupConnectionsKerberosPartialUpdate(
        id: number,
        requestBody?: PatchedGroupKerberosSourceConnectionRequest,
    ): CancelablePromise<GroupKerberosSourceConnection> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/sources/group_connections/kerberos/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Group-source connection Viewset
     * @param id A unique integer value identifying this Group Kerberos Source Connection.
     * @returns void
     * @throws ApiError
     */
    public static sourcesGroupConnectionsKerberosDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sources/group_connections/kerberos/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique integer value identifying this Group Kerberos Source Connection.
     * @returns UsedBy
     * @throws ApiError
     */
    public static sourcesGroupConnectionsKerberosUsedByList(
        id: number,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/group_connections/kerberos/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Group-source connection Viewset
     * @param group
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param sourceSlug
     * @returns PaginatedGroupLDAPSourceConnectionList
     * @throws ApiError
     */
    public static sourcesGroupConnectionsLdapList(
        group?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        sourceSlug?: string,
    ): CancelablePromise<PaginatedGroupLDAPSourceConnectionList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/group_connections/ldap/',
            query: {
                'group': group,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'source__slug': sourceSlug,
            },
        });
    }
    /**
     * Group-source connection Viewset
     * @param requestBody
     * @returns GroupLDAPSourceConnection
     * @throws ApiError
     */
    public static sourcesGroupConnectionsLdapCreate(
        requestBody: GroupLDAPSourceConnectionRequest,
    ): CancelablePromise<GroupLDAPSourceConnection> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sources/group_connections/ldap/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Group-source connection Viewset
     * @param id A unique integer value identifying this Group LDAP Source Connection.
     * @returns GroupLDAPSourceConnection
     * @throws ApiError
     */
    public static sourcesGroupConnectionsLdapRetrieve(
        id: number,
    ): CancelablePromise<GroupLDAPSourceConnection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/group_connections/ldap/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Group-source connection Viewset
     * @param id A unique integer value identifying this Group LDAP Source Connection.
     * @param requestBody
     * @returns GroupLDAPSourceConnection
     * @throws ApiError
     */
    public static sourcesGroupConnectionsLdapUpdate(
        id: number,
        requestBody: GroupLDAPSourceConnectionRequest,
    ): CancelablePromise<GroupLDAPSourceConnection> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/sources/group_connections/ldap/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Group-source connection Viewset
     * @param id A unique integer value identifying this Group LDAP Source Connection.
     * @param requestBody
     * @returns GroupLDAPSourceConnection
     * @throws ApiError
     */
    public static sourcesGroupConnectionsLdapPartialUpdate(
        id: number,
        requestBody?: PatchedGroupLDAPSourceConnectionRequest,
    ): CancelablePromise<GroupLDAPSourceConnection> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/sources/group_connections/ldap/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Group-source connection Viewset
     * @param id A unique integer value identifying this Group LDAP Source Connection.
     * @returns void
     * @throws ApiError
     */
    public static sourcesGroupConnectionsLdapDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sources/group_connections/ldap/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique integer value identifying this Group LDAP Source Connection.
     * @returns UsedBy
     * @throws ApiError
     */
    public static sourcesGroupConnectionsLdapUsedByList(
        id: number,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/group_connections/ldap/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Group-source connection Viewset
     * @param group
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param sourceSlug
     * @returns PaginatedGroupOAuthSourceConnectionList
     * @throws ApiError
     */
    public static sourcesGroupConnectionsOauthList(
        group?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        sourceSlug?: string,
    ): CancelablePromise<PaginatedGroupOAuthSourceConnectionList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/group_connections/oauth/',
            query: {
                'group': group,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'source__slug': sourceSlug,
            },
        });
    }
    /**
     * Group-source connection Viewset
     * @param requestBody
     * @returns GroupOAuthSourceConnection
     * @throws ApiError
     */
    public static sourcesGroupConnectionsOauthCreate(
        requestBody: GroupOAuthSourceConnectionRequest,
    ): CancelablePromise<GroupOAuthSourceConnection> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sources/group_connections/oauth/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Group-source connection Viewset
     * @param id A unique integer value identifying this Group OAuth Source Connection.
     * @returns GroupOAuthSourceConnection
     * @throws ApiError
     */
    public static sourcesGroupConnectionsOauthRetrieve(
        id: number,
    ): CancelablePromise<GroupOAuthSourceConnection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/group_connections/oauth/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Group-source connection Viewset
     * @param id A unique integer value identifying this Group OAuth Source Connection.
     * @param requestBody
     * @returns GroupOAuthSourceConnection
     * @throws ApiError
     */
    public static sourcesGroupConnectionsOauthUpdate(
        id: number,
        requestBody: GroupOAuthSourceConnectionRequest,
    ): CancelablePromise<GroupOAuthSourceConnection> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/sources/group_connections/oauth/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Group-source connection Viewset
     * @param id A unique integer value identifying this Group OAuth Source Connection.
     * @param requestBody
     * @returns GroupOAuthSourceConnection
     * @throws ApiError
     */
    public static sourcesGroupConnectionsOauthPartialUpdate(
        id: number,
        requestBody?: PatchedGroupOAuthSourceConnectionRequest,
    ): CancelablePromise<GroupOAuthSourceConnection> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/sources/group_connections/oauth/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Group-source connection Viewset
     * @param id A unique integer value identifying this Group OAuth Source Connection.
     * @returns void
     * @throws ApiError
     */
    public static sourcesGroupConnectionsOauthDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sources/group_connections/oauth/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique integer value identifying this Group OAuth Source Connection.
     * @returns UsedBy
     * @throws ApiError
     */
    public static sourcesGroupConnectionsOauthUsedByList(
        id: number,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/group_connections/oauth/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Group-source connection Viewset
     * @param group
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param sourceSlug
     * @returns PaginatedGroupPlexSourceConnectionList
     * @throws ApiError
     */
    public static sourcesGroupConnectionsPlexList(
        group?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        sourceSlug?: string,
    ): CancelablePromise<PaginatedGroupPlexSourceConnectionList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/group_connections/plex/',
            query: {
                'group': group,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'source__slug': sourceSlug,
            },
        });
    }
    /**
     * Group-source connection Viewset
     * @param requestBody
     * @returns GroupPlexSourceConnection
     * @throws ApiError
     */
    public static sourcesGroupConnectionsPlexCreate(
        requestBody: GroupPlexSourceConnectionRequest,
    ): CancelablePromise<GroupPlexSourceConnection> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sources/group_connections/plex/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Group-source connection Viewset
     * @param id A unique integer value identifying this Group Plex Source Connection.
     * @returns GroupPlexSourceConnection
     * @throws ApiError
     */
    public static sourcesGroupConnectionsPlexRetrieve(
        id: number,
    ): CancelablePromise<GroupPlexSourceConnection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/group_connections/plex/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Group-source connection Viewset
     * @param id A unique integer value identifying this Group Plex Source Connection.
     * @param requestBody
     * @returns GroupPlexSourceConnection
     * @throws ApiError
     */
    public static sourcesGroupConnectionsPlexUpdate(
        id: number,
        requestBody: GroupPlexSourceConnectionRequest,
    ): CancelablePromise<GroupPlexSourceConnection> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/sources/group_connections/plex/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Group-source connection Viewset
     * @param id A unique integer value identifying this Group Plex Source Connection.
     * @param requestBody
     * @returns GroupPlexSourceConnection
     * @throws ApiError
     */
    public static sourcesGroupConnectionsPlexPartialUpdate(
        id: number,
        requestBody?: PatchedGroupPlexSourceConnectionRequest,
    ): CancelablePromise<GroupPlexSourceConnection> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/sources/group_connections/plex/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Group-source connection Viewset
     * @param id A unique integer value identifying this Group Plex Source Connection.
     * @returns void
     * @throws ApiError
     */
    public static sourcesGroupConnectionsPlexDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sources/group_connections/plex/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique integer value identifying this Group Plex Source Connection.
     * @returns UsedBy
     * @throws ApiError
     */
    public static sourcesGroupConnectionsPlexUsedByList(
        id: number,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/group_connections/plex/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Group-source connection Viewset
     * @param group
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param sourceSlug
     * @returns PaginatedGroupSAMLSourceConnectionList
     * @throws ApiError
     */
    public static sourcesGroupConnectionsSamlList(
        group?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        sourceSlug?: string,
    ): CancelablePromise<PaginatedGroupSAMLSourceConnectionList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/group_connections/saml/',
            query: {
                'group': group,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'source__slug': sourceSlug,
            },
        });
    }
    /**
     * Group-source connection Viewset
     * @param requestBody
     * @returns GroupSAMLSourceConnection
     * @throws ApiError
     */
    public static sourcesGroupConnectionsSamlCreate(
        requestBody: GroupSAMLSourceConnectionRequest,
    ): CancelablePromise<GroupSAMLSourceConnection> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sources/group_connections/saml/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Group-source connection Viewset
     * @param id A unique integer value identifying this Group SAML Source Connection.
     * @returns GroupSAMLSourceConnection
     * @throws ApiError
     */
    public static sourcesGroupConnectionsSamlRetrieve(
        id: number,
    ): CancelablePromise<GroupSAMLSourceConnection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/group_connections/saml/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Group-source connection Viewset
     * @param id A unique integer value identifying this Group SAML Source Connection.
     * @param requestBody
     * @returns GroupSAMLSourceConnection
     * @throws ApiError
     */
    public static sourcesGroupConnectionsSamlUpdate(
        id: number,
        requestBody: GroupSAMLSourceConnectionRequest,
    ): CancelablePromise<GroupSAMLSourceConnection> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/sources/group_connections/saml/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Group-source connection Viewset
     * @param id A unique integer value identifying this Group SAML Source Connection.
     * @param requestBody
     * @returns GroupSAMLSourceConnection
     * @throws ApiError
     */
    public static sourcesGroupConnectionsSamlPartialUpdate(
        id: number,
        requestBody?: PatchedGroupSAMLSourceConnectionRequest,
    ): CancelablePromise<GroupSAMLSourceConnection> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/sources/group_connections/saml/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Group-source connection Viewset
     * @param id A unique integer value identifying this Group SAML Source Connection.
     * @returns void
     * @throws ApiError
     */
    public static sourcesGroupConnectionsSamlDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sources/group_connections/saml/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique integer value identifying this Group SAML Source Connection.
     * @returns UsedBy
     * @throws ApiError
     */
    public static sourcesGroupConnectionsSamlUsedByList(
        id: number,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/group_connections/saml/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Kerberos Source Viewset
     * @param enabled
     * @param kadminType KAdmin server type
     *
     *
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param passwordLoginUpdateInternalPassword
     * @param pbmUuid
     * @param realm
     * @param search A search term.
     * @param slug
     * @param spnegoServerName
     * @param syncPrincipal
     * @param syncUsers
     * @param syncUsersPassword
     * @returns PaginatedKerberosSourceList
     * @throws ApiError
     */
    public static sourcesKerberosList(
        enabled?: boolean,
        kadminType?: 'Heimdal' | 'MIT' | 'other',
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        passwordLoginUpdateInternalPassword?: boolean,
        pbmUuid?: string,
        realm?: string,
        search?: string,
        slug?: string,
        spnegoServerName?: string,
        syncPrincipal?: string,
        syncUsers?: boolean,
        syncUsersPassword?: boolean,
    ): CancelablePromise<PaginatedKerberosSourceList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/kerberos/',
            query: {
                'enabled': enabled,
                'kadmin_type': kadminType,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'password_login_update_internal_password': passwordLoginUpdateInternalPassword,
                'pbm_uuid': pbmUuid,
                'realm': realm,
                'search': search,
                'slug': slug,
                'spnego_server_name': spnegoServerName,
                'sync_principal': syncPrincipal,
                'sync_users': syncUsers,
                'sync_users_password': syncUsersPassword,
            },
        });
    }
    /**
     * Kerberos Source Viewset
     * @param requestBody
     * @returns KerberosSource
     * @throws ApiError
     */
    public static sourcesKerberosCreate(
        requestBody: KerberosSourceRequest,
    ): CancelablePromise<KerberosSource> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sources/kerberos/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Kerberos Source Viewset
     * @param slug
     * @returns KerberosSource
     * @throws ApiError
     */
    public static sourcesKerberosRetrieve(
        slug: string,
    ): CancelablePromise<KerberosSource> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/kerberos/{slug}/',
            path: {
                'slug': slug,
            },
        });
    }
    /**
     * Kerberos Source Viewset
     * @param slug
     * @param requestBody
     * @returns KerberosSource
     * @throws ApiError
     */
    public static sourcesKerberosUpdate(
        slug: string,
        requestBody: KerberosSourceRequest,
    ): CancelablePromise<KerberosSource> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/sources/kerberos/{slug}/',
            path: {
                'slug': slug,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Kerberos Source Viewset
     * @param slug
     * @param requestBody
     * @returns KerberosSource
     * @throws ApiError
     */
    public static sourcesKerberosPartialUpdate(
        slug: string,
        requestBody?: PatchedKerberosSourceRequest,
    ): CancelablePromise<KerberosSource> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/sources/kerberos/{slug}/',
            path: {
                'slug': slug,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Kerberos Source Viewset
     * @param slug
     * @returns void
     * @throws ApiError
     */
    public static sourcesKerberosDestroy(
        slug: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sources/kerberos/{slug}/',
            path: {
                'slug': slug,
            },
        });
    }
    /**
     * Get source's sync status
     * @param slug
     * @returns KerberosSyncStatus
     * @throws ApiError
     */
    public static sourcesKerberosSyncStatusRetrieve(
        slug: string,
    ): CancelablePromise<KerberosSyncStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/kerberos/{slug}/sync/status/',
            path: {
                'slug': slug,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param slug
     * @returns UsedBy
     * @throws ApiError
     */
    public static sourcesKerberosUsedByList(
        slug: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/kerberos/{slug}/used_by/',
            path: {
                'slug': slug,
            },
        });
    }
    /**
     * LDAP Source Viewset
     * @param additionalGroupDn
     * @param additionalUserDn
     * @param baseDn
     * @param bindCn
     * @param clientCertificate
     * @param deleteNotFoundObjects
     * @param enabled
     * @param groupMembershipField
     * @param groupObjectFilter
     * @param groupPropertyMappings
     * @param lookupGroupsFromUser
     * @param name
     * @param objectUniquenessField
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param passwordLoginUpdateInternalPassword
     * @param pbmUuid
     * @param peerCertificate
     * @param search A search term.
     * @param serverUri
     * @param slug
     * @param sni
     * @param startTls
     * @param syncGroups
     * @param syncParentGroup
     * @param syncUsers
     * @param syncUsersPassword
     * @param userMembershipAttribute
     * @param userObjectFilter
     * @param userPropertyMappings
     * @returns PaginatedLDAPSourceList
     * @throws ApiError
     */
    public static sourcesLdapList(
        additionalGroupDn?: string,
        additionalUserDn?: string,
        baseDn?: string,
        bindCn?: string,
        clientCertificate?: string,
        deleteNotFoundObjects?: boolean,
        enabled?: boolean,
        groupMembershipField?: string,
        groupObjectFilter?: string,
        groupPropertyMappings?: Array<string>,
        lookupGroupsFromUser?: boolean,
        name?: string,
        objectUniquenessField?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        passwordLoginUpdateInternalPassword?: boolean,
        pbmUuid?: string,
        peerCertificate?: string,
        search?: string,
        serverUri?: string,
        slug?: string,
        sni?: boolean,
        startTls?: boolean,
        syncGroups?: boolean,
        syncParentGroup?: string,
        syncUsers?: boolean,
        syncUsersPassword?: boolean,
        userMembershipAttribute?: string,
        userObjectFilter?: string,
        userPropertyMappings?: Array<string>,
    ): CancelablePromise<PaginatedLDAPSourceList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/ldap/',
            query: {
                'additional_group_dn': additionalGroupDn,
                'additional_user_dn': additionalUserDn,
                'base_dn': baseDn,
                'bind_cn': bindCn,
                'client_certificate': clientCertificate,
                'delete_not_found_objects': deleteNotFoundObjects,
                'enabled': enabled,
                'group_membership_field': groupMembershipField,
                'group_object_filter': groupObjectFilter,
                'group_property_mappings': groupPropertyMappings,
                'lookup_groups_from_user': lookupGroupsFromUser,
                'name': name,
                'object_uniqueness_field': objectUniquenessField,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'password_login_update_internal_password': passwordLoginUpdateInternalPassword,
                'pbm_uuid': pbmUuid,
                'peer_certificate': peerCertificate,
                'search': search,
                'server_uri': serverUri,
                'slug': slug,
                'sni': sni,
                'start_tls': startTls,
                'sync_groups': syncGroups,
                'sync_parent_group': syncParentGroup,
                'sync_users': syncUsers,
                'sync_users_password': syncUsersPassword,
                'user_membership_attribute': userMembershipAttribute,
                'user_object_filter': userObjectFilter,
                'user_property_mappings': userPropertyMappings,
            },
        });
    }
    /**
     * LDAP Source Viewset
     * @param requestBody
     * @returns LDAPSource
     * @throws ApiError
     */
    public static sourcesLdapCreate(
        requestBody: LDAPSourceRequest,
    ): CancelablePromise<LDAPSource> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sources/ldap/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * LDAP Source Viewset
     * @param slug
     * @returns LDAPSource
     * @throws ApiError
     */
    public static sourcesLdapRetrieve(
        slug: string,
    ): CancelablePromise<LDAPSource> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/ldap/{slug}/',
            path: {
                'slug': slug,
            },
        });
    }
    /**
     * LDAP Source Viewset
     * @param slug
     * @param requestBody
     * @returns LDAPSource
     * @throws ApiError
     */
    public static sourcesLdapUpdate(
        slug: string,
        requestBody: LDAPSourceRequest,
    ): CancelablePromise<LDAPSource> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/sources/ldap/{slug}/',
            path: {
                'slug': slug,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * LDAP Source Viewset
     * @param slug
     * @param requestBody
     * @returns LDAPSource
     * @throws ApiError
     */
    public static sourcesLdapPartialUpdate(
        slug: string,
        requestBody?: PatchedLDAPSourceRequest,
    ): CancelablePromise<LDAPSource> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/sources/ldap/{slug}/',
            path: {
                'slug': slug,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * LDAP Source Viewset
     * @param slug
     * @returns void
     * @throws ApiError
     */
    public static sourcesLdapDestroy(
        slug: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sources/ldap/{slug}/',
            path: {
                'slug': slug,
            },
        });
    }
    /**
     * Get raw LDAP data to debug
     * @param slug
     * @returns LDAPDebug
     * @throws ApiError
     */
    public static sourcesLdapDebugRetrieve(
        slug: string,
    ): CancelablePromise<LDAPDebug> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/ldap/{slug}/debug/',
            path: {
                'slug': slug,
            },
        });
    }
    /**
     * Get source's sync status
     * @param slug
     * @returns SyncStatus
     * @throws ApiError
     */
    public static sourcesLdapSyncStatusRetrieve(
        slug: string,
    ): CancelablePromise<SyncStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/ldap/{slug}/sync/status/',
            path: {
                'slug': slug,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param slug
     * @returns UsedBy
     * @throws ApiError
     */
    public static sourcesLdapUsedByList(
        slug: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/ldap/{slug}/used_by/',
            path: {
                'slug': slug,
            },
        });
    }
    /**
     * Source Viewset
     * @param accessTokenUrl
     * @param additionalScopes
     * @param authenticationFlow
     * @param authorizationUrl
     * @param consumerKey
     * @param enabled
     * @param enrollmentFlow
     * @param groupMatchingMode How the source determines if an existing group should be used or a new group created.
     *
     *
     * @param hasJwks Only return sources with JWKS data
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param pbmUuid
     * @param policyEngineMode
     * @param profileUrl
     * @param providerType
     * @param requestTokenUrl
     * @param search A search term.
     * @param slug
     * @param userMatchingMode How the source determines if an existing user should be authenticated or a new user enrolled.
     *
     *
     * @returns PaginatedOAuthSourceList
     * @throws ApiError
     */
    public static sourcesOauthList(
        accessTokenUrl?: string,
        additionalScopes?: string,
        authenticationFlow?: string,
        authorizationUrl?: string,
        consumerKey?: string,
        enabled?: boolean,
        enrollmentFlow?: string,
        groupMatchingMode?: 'identifier' | 'name_deny' | 'name_link',
        hasJwks?: boolean,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        pbmUuid?: string,
        policyEngineMode?: 'all' | 'any',
        profileUrl?: string,
        providerType?: string,
        requestTokenUrl?: string,
        search?: string,
        slug?: string,
        userMatchingMode?: 'email_deny' | 'email_link' | 'identifier' | 'username_deny' | 'username_link',
    ): CancelablePromise<PaginatedOAuthSourceList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/oauth/',
            query: {
                'access_token_url': accessTokenUrl,
                'additional_scopes': additionalScopes,
                'authentication_flow': authenticationFlow,
                'authorization_url': authorizationUrl,
                'consumer_key': consumerKey,
                'enabled': enabled,
                'enrollment_flow': enrollmentFlow,
                'group_matching_mode': groupMatchingMode,
                'has_jwks': hasJwks,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'pbm_uuid': pbmUuid,
                'policy_engine_mode': policyEngineMode,
                'profile_url': profileUrl,
                'provider_type': providerType,
                'request_token_url': requestTokenUrl,
                'search': search,
                'slug': slug,
                'user_matching_mode': userMatchingMode,
            },
        });
    }
    /**
     * Source Viewset
     * @param requestBody
     * @returns OAuthSource
     * @throws ApiError
     */
    public static sourcesOauthCreate(
        requestBody: OAuthSourceRequest,
    ): CancelablePromise<OAuthSource> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sources/oauth/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Source Viewset
     * @param slug
     * @returns OAuthSource
     * @throws ApiError
     */
    public static sourcesOauthRetrieve(
        slug: string,
    ): CancelablePromise<OAuthSource> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/oauth/{slug}/',
            path: {
                'slug': slug,
            },
        });
    }
    /**
     * Source Viewset
     * @param slug
     * @param requestBody
     * @returns OAuthSource
     * @throws ApiError
     */
    public static sourcesOauthUpdate(
        slug: string,
        requestBody: OAuthSourceRequest,
    ): CancelablePromise<OAuthSource> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/sources/oauth/{slug}/',
            path: {
                'slug': slug,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Source Viewset
     * @param slug
     * @param requestBody
     * @returns OAuthSource
     * @throws ApiError
     */
    public static sourcesOauthPartialUpdate(
        slug: string,
        requestBody?: PatchedOAuthSourceRequest,
    ): CancelablePromise<OAuthSource> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/sources/oauth/{slug}/',
            path: {
                'slug': slug,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Source Viewset
     * @param slug
     * @returns void
     * @throws ApiError
     */
    public static sourcesOauthDestroy(
        slug: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sources/oauth/{slug}/',
            path: {
                'slug': slug,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param slug
     * @returns UsedBy
     * @throws ApiError
     */
    public static sourcesOauthUsedByList(
        slug: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/oauth/{slug}/used_by/',
            path: {
                'slug': slug,
            },
        });
    }
    /**
     * Get all creatable source types. If ?name is set, only returns the type for <name>.
     * If <name> isn't found, returns the default type.
     * @param name
     * @returns SourceType
     * @throws ApiError
     */
    public static sourcesOauthSourceTypesList(
        name?: string,
    ): CancelablePromise<Array<SourceType>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/oauth/source_types/',
            query: {
                'name': name,
            },
        });
    }
    /**
     * Plex source Viewset
     * @param allowFriends
     * @param authenticationFlow
     * @param clientId
     * @param enabled
     * @param enrollmentFlow
     * @param groupMatchingMode How the source determines if an existing group should be used or a new group created.
     *
     *
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param pbmUuid
     * @param policyEngineMode
     * @param search A search term.
     * @param slug
     * @param userMatchingMode How the source determines if an existing user should be authenticated or a new user enrolled.
     *
     *
     * @returns PaginatedPlexSourceList
     * @throws ApiError
     */
    public static sourcesPlexList(
        allowFriends?: boolean,
        authenticationFlow?: string,
        clientId?: string,
        enabled?: boolean,
        enrollmentFlow?: string,
        groupMatchingMode?: 'identifier' | 'name_deny' | 'name_link',
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        pbmUuid?: string,
        policyEngineMode?: 'all' | 'any',
        search?: string,
        slug?: string,
        userMatchingMode?: 'email_deny' | 'email_link' | 'identifier' | 'username_deny' | 'username_link',
    ): CancelablePromise<PaginatedPlexSourceList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/plex/',
            query: {
                'allow_friends': allowFriends,
                'authentication_flow': authenticationFlow,
                'client_id': clientId,
                'enabled': enabled,
                'enrollment_flow': enrollmentFlow,
                'group_matching_mode': groupMatchingMode,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'pbm_uuid': pbmUuid,
                'policy_engine_mode': policyEngineMode,
                'search': search,
                'slug': slug,
                'user_matching_mode': userMatchingMode,
            },
        });
    }
    /**
     * Plex source Viewset
     * @param requestBody
     * @returns PlexSource
     * @throws ApiError
     */
    public static sourcesPlexCreate(
        requestBody: PlexSourceRequest,
    ): CancelablePromise<PlexSource> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sources/plex/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Plex source Viewset
     * @param slug
     * @returns PlexSource
     * @throws ApiError
     */
    public static sourcesPlexRetrieve(
        slug: string,
    ): CancelablePromise<PlexSource> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/plex/{slug}/',
            path: {
                'slug': slug,
            },
        });
    }
    /**
     * Plex source Viewset
     * @param slug
     * @param requestBody
     * @returns PlexSource
     * @throws ApiError
     */
    public static sourcesPlexUpdate(
        slug: string,
        requestBody: PlexSourceRequest,
    ): CancelablePromise<PlexSource> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/sources/plex/{slug}/',
            path: {
                'slug': slug,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Plex source Viewset
     * @param slug
     * @param requestBody
     * @returns PlexSource
     * @throws ApiError
     */
    public static sourcesPlexPartialUpdate(
        slug: string,
        requestBody?: PatchedPlexSourceRequest,
    ): CancelablePromise<PlexSource> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/sources/plex/{slug}/',
            path: {
                'slug': slug,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Plex source Viewset
     * @param slug
     * @returns void
     * @throws ApiError
     */
    public static sourcesPlexDestroy(
        slug: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sources/plex/{slug}/',
            path: {
                'slug': slug,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param slug
     * @returns UsedBy
     * @throws ApiError
     */
    public static sourcesPlexUsedByList(
        slug: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/plex/{slug}/used_by/',
            path: {
                'slug': slug,
            },
        });
    }
    /**
     * Redeem a plex token, check it's access to resources against what's allowed
     * for the source, and redirect to an authentication/enrollment flow.
     * @param requestBody
     * @param slug
     * @returns RedirectChallenge
     * @throws ApiError
     */
    public static sourcesPlexRedeemTokenCreate(
        requestBody: PlexTokenRedeemRequest,
        slug?: string,
    ): CancelablePromise<RedirectChallenge> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sources/plex/redeem_token/',
            query: {
                'slug': slug,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Token not found`,
                403: `Access denied`,
            },
        });
    }
    /**
     * Redeem a plex token for an authenticated user, creating a connection
     * @param requestBody
     * @param slug
     * @returns void
     * @throws ApiError
     */
    public static sourcesPlexRedeemTokenAuthenticatedCreate(
        requestBody: PlexTokenRedeemRequest,
        slug?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sources/plex/redeem_token_authenticated/',
            query: {
                'slug': slug,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Token not found`,
                403: `Access denied`,
            },
        });
    }
    /**
     * SAMLSource Viewset
     * @param allowIdpInitiated
     * @param authenticationFlow
     * @param bindingType
     * @param digestAlgorithm
     * @param enabled
     * @param enrollmentFlow
     * @param issuer
     * @param managed
     * @param name
     * @param nameIdPolicy NameID Policy sent to the IdP. Can be unset, in which case no Policy is sent.
     *
     *
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param pbmUuid
     * @param policyEngineMode
     * @param preAuthenticationFlow
     * @param search A search term.
     * @param signatureAlgorithm
     * @param signingKp
     * @param sloUrl
     * @param slug
     * @param ssoUrl
     * @param temporaryUserDeleteAfter
     * @param userMatchingMode How the source determines if an existing user should be authenticated or a new user enrolled.
     *
     *
     * @param verificationKp
     * @returns PaginatedSAMLSourceList
     * @throws ApiError
     */
    public static sourcesSamlList(
        allowIdpInitiated?: boolean,
        authenticationFlow?: string,
        bindingType?: 'POST' | 'POST_AUTO' | 'REDIRECT',
        digestAlgorithm?: 'http://www.w3.org/2000/09/xmldsig#sha1' | 'http://www.w3.org/2001/04/xmldsig-more#sha384' | 'http://www.w3.org/2001/04/xmlenc#sha256' | 'http://www.w3.org/2001/04/xmlenc#sha512',
        enabled?: boolean,
        enrollmentFlow?: string,
        issuer?: string,
        managed?: string,
        name?: string,
        nameIdPolicy?: 'urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName' | 'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress' | 'urn:oasis:names:tc:SAML:2.0:nameid-format:WindowsDomainQualifiedName' | 'urn:oasis:names:tc:SAML:2.0:nameid-format:persistent' | 'urn:oasis:names:tc:SAML:2.0:nameid-format:transient',
        ordering?: string,
        page?: number,
        pageSize?: number,
        pbmUuid?: string,
        policyEngineMode?: 'all' | 'any',
        preAuthenticationFlow?: string,
        search?: string,
        signatureAlgorithm?: 'http://www.w3.org/2000/09/xmldsig#dsa-sha1' | 'http://www.w3.org/2000/09/xmldsig#rsa-sha1' | 'http://www.w3.org/2001/04/xmldsig-more#ecdsa-sha1' | 'http://www.w3.org/2001/04/xmldsig-more#ecdsa-sha256' | 'http://www.w3.org/2001/04/xmldsig-more#ecdsa-sha384' | 'http://www.w3.org/2001/04/xmldsig-more#ecdsa-sha512' | 'http://www.w3.org/2001/04/xmldsig-more#rsa-sha256' | 'http://www.w3.org/2001/04/xmldsig-more#rsa-sha384' | 'http://www.w3.org/2001/04/xmldsig-more#rsa-sha512',
        signingKp?: string,
        sloUrl?: string,
        slug?: string,
        ssoUrl?: string,
        temporaryUserDeleteAfter?: string,
        userMatchingMode?: 'email_deny' | 'email_link' | 'identifier' | 'username_deny' | 'username_link',
        verificationKp?: string,
    ): CancelablePromise<PaginatedSAMLSourceList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/saml/',
            query: {
                'allow_idp_initiated': allowIdpInitiated,
                'authentication_flow': authenticationFlow,
                'binding_type': bindingType,
                'digest_algorithm': digestAlgorithm,
                'enabled': enabled,
                'enrollment_flow': enrollmentFlow,
                'issuer': issuer,
                'managed': managed,
                'name': name,
                'name_id_policy': nameIdPolicy,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'pbm_uuid': pbmUuid,
                'policy_engine_mode': policyEngineMode,
                'pre_authentication_flow': preAuthenticationFlow,
                'search': search,
                'signature_algorithm': signatureAlgorithm,
                'signing_kp': signingKp,
                'slo_url': sloUrl,
                'slug': slug,
                'sso_url': ssoUrl,
                'temporary_user_delete_after': temporaryUserDeleteAfter,
                'user_matching_mode': userMatchingMode,
                'verification_kp': verificationKp,
            },
        });
    }
    /**
     * SAMLSource Viewset
     * @param requestBody
     * @returns SAMLSource
     * @throws ApiError
     */
    public static sourcesSamlCreate(
        requestBody: SAMLSourceRequest,
    ): CancelablePromise<SAMLSource> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sources/saml/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SAMLSource Viewset
     * @param slug
     * @returns SAMLSource
     * @throws ApiError
     */
    public static sourcesSamlRetrieve(
        slug: string,
    ): CancelablePromise<SAMLSource> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/saml/{slug}/',
            path: {
                'slug': slug,
            },
        });
    }
    /**
     * SAMLSource Viewset
     * @param slug
     * @param requestBody
     * @returns SAMLSource
     * @throws ApiError
     */
    public static sourcesSamlUpdate(
        slug: string,
        requestBody: SAMLSourceRequest,
    ): CancelablePromise<SAMLSource> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/sources/saml/{slug}/',
            path: {
                'slug': slug,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SAMLSource Viewset
     * @param slug
     * @param requestBody
     * @returns SAMLSource
     * @throws ApiError
     */
    public static sourcesSamlPartialUpdate(
        slug: string,
        requestBody?: PatchedSAMLSourceRequest,
    ): CancelablePromise<SAMLSource> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/sources/saml/{slug}/',
            path: {
                'slug': slug,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SAMLSource Viewset
     * @param slug
     * @returns void
     * @throws ApiError
     */
    public static sourcesSamlDestroy(
        slug: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sources/saml/{slug}/',
            path: {
                'slug': slug,
            },
        });
    }
    /**
     * Return metadata as XML string
     * @param slug
     * @returns SAMLMetadata
     * @throws ApiError
     */
    public static sourcesSamlMetadataRetrieve(
        slug: string,
    ): CancelablePromise<SAMLMetadata> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/saml/{slug}/metadata/',
            path: {
                'slug': slug,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param slug
     * @returns UsedBy
     * @throws ApiError
     */
    public static sourcesSamlUsedByList(
        slug: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/saml/{slug}/used_by/',
            path: {
                'slug': slug,
            },
        });
    }
    /**
     * SCIMSource Viewset
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param pbmUuid
     * @param search A search term.
     * @param slug
     * @returns PaginatedSCIMSourceList
     * @throws ApiError
     */
    public static sourcesScimList(
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        pbmUuid?: string,
        search?: string,
        slug?: string,
    ): CancelablePromise<PaginatedSCIMSourceList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/scim/',
            query: {
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'pbm_uuid': pbmUuid,
                'search': search,
                'slug': slug,
            },
        });
    }
    /**
     * SCIMSource Viewset
     * @param requestBody
     * @returns SCIMSource
     * @throws ApiError
     */
    public static sourcesScimCreate(
        requestBody: SCIMSourceRequest,
    ): CancelablePromise<SCIMSource> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sources/scim/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SCIMSource Viewset
     * @param slug
     * @returns SCIMSource
     * @throws ApiError
     */
    public static sourcesScimRetrieve(
        slug: string,
    ): CancelablePromise<SCIMSource> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/scim/{slug}/',
            path: {
                'slug': slug,
            },
        });
    }
    /**
     * SCIMSource Viewset
     * @param slug
     * @param requestBody
     * @returns SCIMSource
     * @throws ApiError
     */
    public static sourcesScimUpdate(
        slug: string,
        requestBody: SCIMSourceRequest,
    ): CancelablePromise<SCIMSource> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/sources/scim/{slug}/',
            path: {
                'slug': slug,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SCIMSource Viewset
     * @param slug
     * @param requestBody
     * @returns SCIMSource
     * @throws ApiError
     */
    public static sourcesScimPartialUpdate(
        slug: string,
        requestBody?: PatchedSCIMSourceRequest,
    ): CancelablePromise<SCIMSource> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/sources/scim/{slug}/',
            path: {
                'slug': slug,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SCIMSource Viewset
     * @param slug
     * @returns void
     * @throws ApiError
     */
    public static sourcesScimDestroy(
        slug: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sources/scim/{slug}/',
            path: {
                'slug': slug,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param slug
     * @returns UsedBy
     * @throws ApiError
     */
    public static sourcesScimUsedByList(
        slug: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/scim/{slug}/used_by/',
            path: {
                'slug': slug,
            },
        });
    }
    /**
     * SCIMSourceGroup Viewset
     * @param groupGroupUuid
     * @param groupName
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param sourceSlug
     * @returns PaginatedSCIMSourceGroupList
     * @throws ApiError
     */
    public static sourcesScimGroupsList(
        groupGroupUuid?: string,
        groupName?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        sourceSlug?: string,
    ): CancelablePromise<PaginatedSCIMSourceGroupList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/scim_groups/',
            query: {
                'group__group_uuid': groupGroupUuid,
                'group__name': groupName,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'source__slug': sourceSlug,
            },
        });
    }
    /**
     * SCIMSourceGroup Viewset
     * @param requestBody
     * @returns SCIMSourceGroup
     * @throws ApiError
     */
    public static sourcesScimGroupsCreate(
        requestBody: SCIMSourceGroupRequest,
    ): CancelablePromise<SCIMSourceGroup> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sources/scim_groups/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SCIMSourceGroup Viewset
     * @param id A unique value identifying this scim source group.
     * @returns SCIMSourceGroup
     * @throws ApiError
     */
    public static sourcesScimGroupsRetrieve(
        id: string,
    ): CancelablePromise<SCIMSourceGroup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/scim_groups/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * SCIMSourceGroup Viewset
     * @param id A unique value identifying this scim source group.
     * @param requestBody
     * @returns SCIMSourceGroup
     * @throws ApiError
     */
    public static sourcesScimGroupsUpdate(
        id: string,
        requestBody: SCIMSourceGroupRequest,
    ): CancelablePromise<SCIMSourceGroup> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/sources/scim_groups/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SCIMSourceGroup Viewset
     * @param id A unique value identifying this scim source group.
     * @param requestBody
     * @returns SCIMSourceGroup
     * @throws ApiError
     */
    public static sourcesScimGroupsPartialUpdate(
        id: string,
        requestBody?: PatchedSCIMSourceGroupRequest,
    ): CancelablePromise<SCIMSourceGroup> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/sources/scim_groups/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SCIMSourceGroup Viewset
     * @param id A unique value identifying this scim source group.
     * @returns void
     * @throws ApiError
     */
    public static sourcesScimGroupsDestroy(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sources/scim_groups/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique value identifying this scim source group.
     * @returns UsedBy
     * @throws ApiError
     */
    public static sourcesScimGroupsUsedByList(
        id: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/scim_groups/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * SCIMSourceUser Viewset
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param sourceSlug
     * @param userId
     * @param userUsername
     * @returns PaginatedSCIMSourceUserList
     * @throws ApiError
     */
    public static sourcesScimUsersList(
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        sourceSlug?: string,
        userId?: number,
        userUsername?: string,
    ): CancelablePromise<PaginatedSCIMSourceUserList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/scim_users/',
            query: {
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'source__slug': sourceSlug,
                'user__id': userId,
                'user__username': userUsername,
            },
        });
    }
    /**
     * SCIMSourceUser Viewset
     * @param requestBody
     * @returns SCIMSourceUser
     * @throws ApiError
     */
    public static sourcesScimUsersCreate(
        requestBody: SCIMSourceUserRequest,
    ): CancelablePromise<SCIMSourceUser> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sources/scim_users/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SCIMSourceUser Viewset
     * @param id A unique value identifying this scim source user.
     * @returns SCIMSourceUser
     * @throws ApiError
     */
    public static sourcesScimUsersRetrieve(
        id: string,
    ): CancelablePromise<SCIMSourceUser> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/scim_users/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * SCIMSourceUser Viewset
     * @param id A unique value identifying this scim source user.
     * @param requestBody
     * @returns SCIMSourceUser
     * @throws ApiError
     */
    public static sourcesScimUsersUpdate(
        id: string,
        requestBody: SCIMSourceUserRequest,
    ): CancelablePromise<SCIMSourceUser> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/sources/scim_users/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SCIMSourceUser Viewset
     * @param id A unique value identifying this scim source user.
     * @param requestBody
     * @returns SCIMSourceUser
     * @throws ApiError
     */
    public static sourcesScimUsersPartialUpdate(
        id: string,
        requestBody?: PatchedSCIMSourceUserRequest,
    ): CancelablePromise<SCIMSourceUser> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/sources/scim_users/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SCIMSourceUser Viewset
     * @param id A unique value identifying this scim source user.
     * @returns void
     * @throws ApiError
     */
    public static sourcesScimUsersDestroy(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sources/scim_users/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique value identifying this scim source user.
     * @returns UsedBy
     * @throws ApiError
     */
    public static sourcesScimUsersUsedByList(
        id: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/scim_users/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * User-source connection Viewset
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param sourceSlug
     * @param user
     * @returns PaginatedUserSourceConnectionList
     * @throws ApiError
     */
    public static sourcesUserConnectionsAllList(
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        sourceSlug?: string,
        user?: number,
    ): CancelablePromise<PaginatedUserSourceConnectionList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/user_connections/all/',
            query: {
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'source__slug': sourceSlug,
                'user': user,
            },
        });
    }
    /**
     * User-source connection Viewset
     * @param id A unique integer value identifying this user source connection.
     * @returns UserSourceConnection
     * @throws ApiError
     */
    public static sourcesUserConnectionsAllRetrieve(
        id: number,
    ): CancelablePromise<UserSourceConnection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/user_connections/all/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * User-source connection Viewset
     * @param id A unique integer value identifying this user source connection.
     * @param requestBody
     * @returns UserSourceConnection
     * @throws ApiError
     */
    public static sourcesUserConnectionsAllUpdate(
        id: number,
        requestBody: UserSourceConnectionRequest,
    ): CancelablePromise<UserSourceConnection> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/sources/user_connections/all/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * User-source connection Viewset
     * @param id A unique integer value identifying this user source connection.
     * @param requestBody
     * @returns UserSourceConnection
     * @throws ApiError
     */
    public static sourcesUserConnectionsAllPartialUpdate(
        id: number,
        requestBody?: PatchedUserSourceConnectionRequest,
    ): CancelablePromise<UserSourceConnection> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/sources/user_connections/all/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * User-source connection Viewset
     * @param id A unique integer value identifying this user source connection.
     * @returns void
     * @throws ApiError
     */
    public static sourcesUserConnectionsAllDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sources/user_connections/all/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique integer value identifying this user source connection.
     * @returns UsedBy
     * @throws ApiError
     */
    public static sourcesUserConnectionsAllUsedByList(
        id: number,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/user_connections/all/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * User-source connection Viewset
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param sourceSlug
     * @param user
     * @returns PaginatedUserKerberosSourceConnectionList
     * @throws ApiError
     */
    public static sourcesUserConnectionsKerberosList(
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        sourceSlug?: string,
        user?: number,
    ): CancelablePromise<PaginatedUserKerberosSourceConnectionList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/user_connections/kerberos/',
            query: {
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'source__slug': sourceSlug,
                'user': user,
            },
        });
    }
    /**
     * User-source connection Viewset
     * @param requestBody
     * @returns UserKerberosSourceConnection
     * @throws ApiError
     */
    public static sourcesUserConnectionsKerberosCreate(
        requestBody: UserKerberosSourceConnectionRequest,
    ): CancelablePromise<UserKerberosSourceConnection> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sources/user_connections/kerberos/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * User-source connection Viewset
     * @param id A unique integer value identifying this User Kerberos Source Connection.
     * @returns UserKerberosSourceConnection
     * @throws ApiError
     */
    public static sourcesUserConnectionsKerberosRetrieve(
        id: number,
    ): CancelablePromise<UserKerberosSourceConnection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/user_connections/kerberos/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * User-source connection Viewset
     * @param id A unique integer value identifying this User Kerberos Source Connection.
     * @param requestBody
     * @returns UserKerberosSourceConnection
     * @throws ApiError
     */
    public static sourcesUserConnectionsKerberosUpdate(
        id: number,
        requestBody: UserKerberosSourceConnectionRequest,
    ): CancelablePromise<UserKerberosSourceConnection> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/sources/user_connections/kerberos/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * User-source connection Viewset
     * @param id A unique integer value identifying this User Kerberos Source Connection.
     * @param requestBody
     * @returns UserKerberosSourceConnection
     * @throws ApiError
     */
    public static sourcesUserConnectionsKerberosPartialUpdate(
        id: number,
        requestBody?: PatchedUserKerberosSourceConnectionRequest,
    ): CancelablePromise<UserKerberosSourceConnection> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/sources/user_connections/kerberos/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * User-source connection Viewset
     * @param id A unique integer value identifying this User Kerberos Source Connection.
     * @returns void
     * @throws ApiError
     */
    public static sourcesUserConnectionsKerberosDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sources/user_connections/kerberos/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique integer value identifying this User Kerberos Source Connection.
     * @returns UsedBy
     * @throws ApiError
     */
    public static sourcesUserConnectionsKerberosUsedByList(
        id: number,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/user_connections/kerberos/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * User-source connection Viewset
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param sourceSlug
     * @param user
     * @returns PaginatedUserLDAPSourceConnectionList
     * @throws ApiError
     */
    public static sourcesUserConnectionsLdapList(
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        sourceSlug?: string,
        user?: number,
    ): CancelablePromise<PaginatedUserLDAPSourceConnectionList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/user_connections/ldap/',
            query: {
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'source__slug': sourceSlug,
                'user': user,
            },
        });
    }
    /**
     * User-source connection Viewset
     * @param requestBody
     * @returns UserLDAPSourceConnection
     * @throws ApiError
     */
    public static sourcesUserConnectionsLdapCreate(
        requestBody: UserLDAPSourceConnectionRequest,
    ): CancelablePromise<UserLDAPSourceConnection> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sources/user_connections/ldap/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * User-source connection Viewset
     * @param id A unique integer value identifying this User LDAP Source Connection.
     * @returns UserLDAPSourceConnection
     * @throws ApiError
     */
    public static sourcesUserConnectionsLdapRetrieve(
        id: number,
    ): CancelablePromise<UserLDAPSourceConnection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/user_connections/ldap/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * User-source connection Viewset
     * @param id A unique integer value identifying this User LDAP Source Connection.
     * @param requestBody
     * @returns UserLDAPSourceConnection
     * @throws ApiError
     */
    public static sourcesUserConnectionsLdapUpdate(
        id: number,
        requestBody: UserLDAPSourceConnectionRequest,
    ): CancelablePromise<UserLDAPSourceConnection> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/sources/user_connections/ldap/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * User-source connection Viewset
     * @param id A unique integer value identifying this User LDAP Source Connection.
     * @param requestBody
     * @returns UserLDAPSourceConnection
     * @throws ApiError
     */
    public static sourcesUserConnectionsLdapPartialUpdate(
        id: number,
        requestBody?: PatchedUserLDAPSourceConnectionRequest,
    ): CancelablePromise<UserLDAPSourceConnection> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/sources/user_connections/ldap/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * User-source connection Viewset
     * @param id A unique integer value identifying this User LDAP Source Connection.
     * @returns void
     * @throws ApiError
     */
    public static sourcesUserConnectionsLdapDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sources/user_connections/ldap/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique integer value identifying this User LDAP Source Connection.
     * @returns UsedBy
     * @throws ApiError
     */
    public static sourcesUserConnectionsLdapUsedByList(
        id: number,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/user_connections/ldap/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * User-source connection Viewset
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param sourceSlug
     * @param user
     * @returns PaginatedUserOAuthSourceConnectionList
     * @throws ApiError
     */
    public static sourcesUserConnectionsOauthList(
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        sourceSlug?: string,
        user?: number,
    ): CancelablePromise<PaginatedUserOAuthSourceConnectionList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/user_connections/oauth/',
            query: {
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'source__slug': sourceSlug,
                'user': user,
            },
        });
    }
    /**
     * User-source connection Viewset
     * @param requestBody
     * @returns UserOAuthSourceConnection
     * @throws ApiError
     */
    public static sourcesUserConnectionsOauthCreate(
        requestBody: UserOAuthSourceConnectionRequest,
    ): CancelablePromise<UserOAuthSourceConnection> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sources/user_connections/oauth/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * User-source connection Viewset
     * @param id A unique integer value identifying this User OAuth Source Connection.
     * @returns UserOAuthSourceConnection
     * @throws ApiError
     */
    public static sourcesUserConnectionsOauthRetrieve(
        id: number,
    ): CancelablePromise<UserOAuthSourceConnection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/user_connections/oauth/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * User-source connection Viewset
     * @param id A unique integer value identifying this User OAuth Source Connection.
     * @param requestBody
     * @returns UserOAuthSourceConnection
     * @throws ApiError
     */
    public static sourcesUserConnectionsOauthUpdate(
        id: number,
        requestBody: UserOAuthSourceConnectionRequest,
    ): CancelablePromise<UserOAuthSourceConnection> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/sources/user_connections/oauth/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * User-source connection Viewset
     * @param id A unique integer value identifying this User OAuth Source Connection.
     * @param requestBody
     * @returns UserOAuthSourceConnection
     * @throws ApiError
     */
    public static sourcesUserConnectionsOauthPartialUpdate(
        id: number,
        requestBody?: PatchedUserOAuthSourceConnectionRequest,
    ): CancelablePromise<UserOAuthSourceConnection> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/sources/user_connections/oauth/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * User-source connection Viewset
     * @param id A unique integer value identifying this User OAuth Source Connection.
     * @returns void
     * @throws ApiError
     */
    public static sourcesUserConnectionsOauthDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sources/user_connections/oauth/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique integer value identifying this User OAuth Source Connection.
     * @returns UsedBy
     * @throws ApiError
     */
    public static sourcesUserConnectionsOauthUsedByList(
        id: number,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/user_connections/oauth/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * User-source connection Viewset
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param sourceSlug
     * @param user
     * @returns PaginatedUserPlexSourceConnectionList
     * @throws ApiError
     */
    public static sourcesUserConnectionsPlexList(
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        sourceSlug?: string,
        user?: number,
    ): CancelablePromise<PaginatedUserPlexSourceConnectionList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/user_connections/plex/',
            query: {
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'source__slug': sourceSlug,
                'user': user,
            },
        });
    }
    /**
     * User-source connection Viewset
     * @param requestBody
     * @returns UserPlexSourceConnection
     * @throws ApiError
     */
    public static sourcesUserConnectionsPlexCreate(
        requestBody: UserPlexSourceConnectionRequest,
    ): CancelablePromise<UserPlexSourceConnection> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sources/user_connections/plex/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * User-source connection Viewset
     * @param id A unique integer value identifying this User Plex Source Connection.
     * @returns UserPlexSourceConnection
     * @throws ApiError
     */
    public static sourcesUserConnectionsPlexRetrieve(
        id: number,
    ): CancelablePromise<UserPlexSourceConnection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/user_connections/plex/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * User-source connection Viewset
     * @param id A unique integer value identifying this User Plex Source Connection.
     * @param requestBody
     * @returns UserPlexSourceConnection
     * @throws ApiError
     */
    public static sourcesUserConnectionsPlexUpdate(
        id: number,
        requestBody: UserPlexSourceConnectionRequest,
    ): CancelablePromise<UserPlexSourceConnection> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/sources/user_connections/plex/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * User-source connection Viewset
     * @param id A unique integer value identifying this User Plex Source Connection.
     * @param requestBody
     * @returns UserPlexSourceConnection
     * @throws ApiError
     */
    public static sourcesUserConnectionsPlexPartialUpdate(
        id: number,
        requestBody?: PatchedUserPlexSourceConnectionRequest,
    ): CancelablePromise<UserPlexSourceConnection> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/sources/user_connections/plex/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * User-source connection Viewset
     * @param id A unique integer value identifying this User Plex Source Connection.
     * @returns void
     * @throws ApiError
     */
    public static sourcesUserConnectionsPlexDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sources/user_connections/plex/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique integer value identifying this User Plex Source Connection.
     * @returns UsedBy
     * @throws ApiError
     */
    public static sourcesUserConnectionsPlexUsedByList(
        id: number,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/user_connections/plex/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * User-source connection Viewset
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param sourceSlug
     * @param user
     * @returns PaginatedUserSAMLSourceConnectionList
     * @throws ApiError
     */
    public static sourcesUserConnectionsSamlList(
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        sourceSlug?: string,
        user?: number,
    ): CancelablePromise<PaginatedUserSAMLSourceConnectionList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/user_connections/saml/',
            query: {
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'source__slug': sourceSlug,
                'user': user,
            },
        });
    }
    /**
     * User-source connection Viewset
     * @param requestBody
     * @returns UserSAMLSourceConnection
     * @throws ApiError
     */
    public static sourcesUserConnectionsSamlCreate(
        requestBody: UserSAMLSourceConnectionRequest,
    ): CancelablePromise<UserSAMLSourceConnection> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sources/user_connections/saml/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * User-source connection Viewset
     * @param id A unique integer value identifying this User SAML Source Connection.
     * @returns UserSAMLSourceConnection
     * @throws ApiError
     */
    public static sourcesUserConnectionsSamlRetrieve(
        id: number,
    ): CancelablePromise<UserSAMLSourceConnection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/user_connections/saml/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * User-source connection Viewset
     * @param id A unique integer value identifying this User SAML Source Connection.
     * @param requestBody
     * @returns UserSAMLSourceConnection
     * @throws ApiError
     */
    public static sourcesUserConnectionsSamlUpdate(
        id: number,
        requestBody: UserSAMLSourceConnectionRequest,
    ): CancelablePromise<UserSAMLSourceConnection> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/sources/user_connections/saml/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * User-source connection Viewset
     * @param id A unique integer value identifying this User SAML Source Connection.
     * @param requestBody
     * @returns UserSAMLSourceConnection
     * @throws ApiError
     */
    public static sourcesUserConnectionsSamlPartialUpdate(
        id: number,
        requestBody?: PatchedUserSAMLSourceConnectionRequest,
    ): CancelablePromise<UserSAMLSourceConnection> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/sources/user_connections/saml/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * User-source connection Viewset
     * @param id A unique integer value identifying this User SAML Source Connection.
     * @returns void
     * @throws ApiError
     */
    public static sourcesUserConnectionsSamlDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sources/user_connections/saml/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique integer value identifying this User SAML Source Connection.
     * @returns UsedBy
     * @throws ApiError
     */
    public static sourcesUserConnectionsSamlUsedByList(
        id: number,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sources/user_connections/saml/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
}
