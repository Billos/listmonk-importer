/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExtraRoleObjectPermission } from '../models/ExtraRoleObjectPermission';
import type { ExtraRoleObjectPermissionRequest } from '../models/ExtraRoleObjectPermissionRequest';
import type { ExtraUserObjectPermission } from '../models/ExtraUserObjectPermission';
import type { ExtraUserObjectPermissionRequest } from '../models/ExtraUserObjectPermissionRequest';
import type { InitialPermissions } from '../models/InitialPermissions';
import type { InitialPermissionsRequest } from '../models/InitialPermissionsRequest';
import type { PaginatedExtraRoleObjectPermissionList } from '../models/PaginatedExtraRoleObjectPermissionList';
import type { PaginatedExtraUserObjectPermissionList } from '../models/PaginatedExtraUserObjectPermissionList';
import type { PaginatedInitialPermissionsList } from '../models/PaginatedInitialPermissionsList';
import type { PaginatedPermissionList } from '../models/PaginatedPermissionList';
import type { PaginatedRoleAssignedObjectPermissionList } from '../models/PaginatedRoleAssignedObjectPermissionList';
import type { PaginatedRoleList } from '../models/PaginatedRoleList';
import type { PaginatedUserAssignedObjectPermissionList } from '../models/PaginatedUserAssignedObjectPermissionList';
import type { PatchedExtraRoleObjectPermissionRequest } from '../models/PatchedExtraRoleObjectPermissionRequest';
import type { PatchedExtraUserObjectPermissionRequest } from '../models/PatchedExtraUserObjectPermissionRequest';
import type { PatchedInitialPermissionsRequest } from '../models/PatchedInitialPermissionsRequest';
import type { PatchedPermissionAssignRequest } from '../models/PatchedPermissionAssignRequest';
import type { PatchedRoleRequest } from '../models/PatchedRoleRequest';
import type { Permission } from '../models/Permission';
import type { PermissionAssignRequest } from '../models/PermissionAssignRequest';
import type { PermissionAssignResult } from '../models/PermissionAssignResult';
import type { Role } from '../models/Role';
import type { RoleRequest } from '../models/RoleRequest';
import type { UsedBy } from '../models/UsedBy';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RbacService {
    /**
     * InitialPermissions viewset
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedInitialPermissionsList
     * @throws ApiError
     */
    public static rbacInitialPermissionsList(
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedInitialPermissionsList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/rbac/initial_permissions/',
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
     * InitialPermissions viewset
     * @param requestBody
     * @returns InitialPermissions
     * @throws ApiError
     */
    public static rbacInitialPermissionsCreate(
        requestBody: InitialPermissionsRequest,
    ): CancelablePromise<InitialPermissions> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/rbac/initial_permissions/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * InitialPermissions viewset
     * @param id A unique integer value identifying this Initial Permissions.
     * @returns InitialPermissions
     * @throws ApiError
     */
    public static rbacInitialPermissionsRetrieve(
        id: number,
    ): CancelablePromise<InitialPermissions> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/rbac/initial_permissions/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * InitialPermissions viewset
     * @param id A unique integer value identifying this Initial Permissions.
     * @param requestBody
     * @returns InitialPermissions
     * @throws ApiError
     */
    public static rbacInitialPermissionsUpdate(
        id: number,
        requestBody: InitialPermissionsRequest,
    ): CancelablePromise<InitialPermissions> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/rbac/initial_permissions/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * InitialPermissions viewset
     * @param id A unique integer value identifying this Initial Permissions.
     * @param requestBody
     * @returns InitialPermissions
     * @throws ApiError
     */
    public static rbacInitialPermissionsPartialUpdate(
        id: number,
        requestBody?: PatchedInitialPermissionsRequest,
    ): CancelablePromise<InitialPermissions> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/rbac/initial_permissions/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * InitialPermissions viewset
     * @param id A unique integer value identifying this Initial Permissions.
     * @returns void
     * @throws ApiError
     */
    public static rbacInitialPermissionsDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/rbac/initial_permissions/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique integer value identifying this Initial Permissions.
     * @returns UsedBy
     * @throws ApiError
     */
    public static rbacInitialPermissionsUsedByList(
        id: number,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/rbac/initial_permissions/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Read-only list of all permissions, filterable by model and app
     * @param codename
     * @param contentTypeAppLabel
     * @param contentTypeModel
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param role
     * @param search A search term.
     * @param user
     * @returns PaginatedPermissionList
     * @throws ApiError
     */
    public static rbacPermissionsList(
        codename?: string,
        contentTypeAppLabel?: string,
        contentTypeModel?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        role?: string,
        search?: string,
        user?: number,
    ): CancelablePromise<PaginatedPermissionList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/rbac/permissions/',
            query: {
                'codename': codename,
                'content_type__app_label': contentTypeAppLabel,
                'content_type__model': contentTypeModel,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'role': role,
                'search': search,
                'user': user,
            },
        });
    }
    /**
     * Read-only list of all permissions, filterable by model and app
     * @param id A unique integer value identifying this permission.
     * @returns Permission
     * @throws ApiError
     */
    public static rbacPermissionsRetrieve(
        id: number,
    ): CancelablePromise<Permission> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/rbac/permissions/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get assigned object permissions for a single object
     * @param model
     * @param objectPk
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedRoleAssignedObjectPermissionList
     * @throws ApiError
     */
    public static rbacPermissionsAssignedByRolesList(
        model: 'authentik_blueprints.blueprintinstance' | 'authentik_brands.brand' | 'authentik_core.application' | 'authentik_core.applicationentitlement' | 'authentik_core.group' | 'authentik_core.token' | 'authentik_core.user' | 'authentik_crypto.certificatekeypair' | 'authentik_enterprise.license' | 'authentik_events.event' | 'authentik_events.notification' | 'authentik_events.notificationrule' | 'authentik_events.notificationtransport' | 'authentik_events.notificationwebhookmapping' | 'authentik_flows.flow' | 'authentik_flows.flowstagebinding' | 'authentik_outposts.dockerserviceconnection' | 'authentik_outposts.kubernetesserviceconnection' | 'authentik_outposts.outpost' | 'authentik_policies.policybinding' | 'authentik_policies_dummy.dummypolicy' | 'authentik_policies_event_matcher.eventmatcherpolicy' | 'authentik_policies_expiry.passwordexpirypolicy' | 'authentik_policies_expression.expressionpolicy' | 'authentik_policies_geoip.geoippolicy' | 'authentik_policies_password.passwordpolicy' | 'authentik_policies_reputation.reputationpolicy' | 'authentik_policies_unique_password.uniquepasswordpolicy' | 'authentik_providers_google_workspace.googleworkspaceprovider' | 'authentik_providers_google_workspace.googleworkspaceprovidermapping' | 'authentik_providers_ldap.ldapprovider' | 'authentik_providers_microsoft_entra.microsoftentraprovider' | 'authentik_providers_microsoft_entra.microsoftentraprovidermapping' | 'authentik_providers_oauth2.oauth2provider' | 'authentik_providers_oauth2.scopemapping' | 'authentik_providers_proxy.proxyprovider' | 'authentik_providers_rac.endpoint' | 'authentik_providers_rac.racpropertymapping' | 'authentik_providers_rac.racprovider' | 'authentik_providers_radius.radiusprovider' | 'authentik_providers_radius.radiusproviderpropertymapping' | 'authentik_providers_saml.samlpropertymapping' | 'authentik_providers_saml.samlprovider' | 'authentik_providers_scim.scimmapping' | 'authentik_providers_scim.scimprovider' | 'authentik_providers_ssf.ssfprovider' | 'authentik_rbac.initialpermissions' | 'authentik_rbac.role' | 'authentik_sources_kerberos.groupkerberossourceconnection' | 'authentik_sources_kerberos.kerberossource' | 'authentik_sources_kerberos.kerberossourcepropertymapping' | 'authentik_sources_kerberos.userkerberossourceconnection' | 'authentik_sources_ldap.groupldapsourceconnection' | 'authentik_sources_ldap.ldapsource' | 'authentik_sources_ldap.ldapsourcepropertymapping' | 'authentik_sources_ldap.userldapsourceconnection' | 'authentik_sources_oauth.groupoauthsourceconnection' | 'authentik_sources_oauth.oauthsource' | 'authentik_sources_oauth.oauthsourcepropertymapping' | 'authentik_sources_oauth.useroauthsourceconnection' | 'authentik_sources_plex.groupplexsourceconnection' | 'authentik_sources_plex.plexsource' | 'authentik_sources_plex.plexsourcepropertymapping' | 'authentik_sources_plex.userplexsourceconnection' | 'authentik_sources_saml.groupsamlsourceconnection' | 'authentik_sources_saml.samlsource' | 'authentik_sources_saml.samlsourcepropertymapping' | 'authentik_sources_saml.usersamlsourceconnection' | 'authentik_sources_scim.scimsource' | 'authentik_sources_scim.scimsourcepropertymapping' | 'authentik_stages_authenticator_duo.authenticatorduostage' | 'authentik_stages_authenticator_duo.duodevice' | 'authentik_stages_authenticator_email.authenticatoremailstage' | 'authentik_stages_authenticator_email.emaildevice' | 'authentik_stages_authenticator_endpoint_gdtc.authenticatorendpointgdtcstage' | 'authentik_stages_authenticator_sms.authenticatorsmsstage' | 'authentik_stages_authenticator_sms.smsdevice' | 'authentik_stages_authenticator_static.authenticatorstaticstage' | 'authentik_stages_authenticator_static.staticdevice' | 'authentik_stages_authenticator_totp.authenticatortotpstage' | 'authentik_stages_authenticator_totp.totpdevice' | 'authentik_stages_authenticator_validate.authenticatorvalidatestage' | 'authentik_stages_authenticator_webauthn.authenticatorwebauthnstage' | 'authentik_stages_authenticator_webauthn.webauthndevice' | 'authentik_stages_captcha.captchastage' | 'authentik_stages_consent.consentstage' | 'authentik_stages_consent.userconsent' | 'authentik_stages_deny.denystage' | 'authentik_stages_dummy.dummystage' | 'authentik_stages_email.emailstage' | 'authentik_stages_identification.identificationstage' | 'authentik_stages_invitation.invitation' | 'authentik_stages_invitation.invitationstage' | 'authentik_stages_mtls.mutualtlsstage' | 'authentik_stages_password.passwordstage' | 'authentik_stages_prompt.prompt' | 'authentik_stages_prompt.promptstage' | 'authentik_stages_redirect.redirectstage' | 'authentik_stages_source.sourcestage' | 'authentik_stages_user_delete.userdeletestage' | 'authentik_stages_user_login.userloginstage' | 'authentik_stages_user_logout.userlogoutstage' | 'authentik_stages_user_write.userwritestage' | 'authentik_tenants.domain',
        objectPk?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedRoleAssignedObjectPermissionList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/rbac/permissions/assigned_by_roles/',
            query: {
                'model': model,
                'object_pk': objectPk,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
            },
        });
    }
    /**
     * Assign permission(s) to role. When `object_pk` is set, the permissions
     * are only assigned to the specific object, otherwise they are assigned globally.
     * @param uuid A UUID string identifying this Role.
     * @param requestBody
     * @returns PermissionAssignResult
     * @throws ApiError
     */
    public static rbacPermissionsAssignedByRolesAssign(
        uuid: string,
        requestBody: PermissionAssignRequest,
    ): CancelablePromise<Array<PermissionAssignResult>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/rbac/permissions/assigned_by_roles/{uuid}/assign/',
            path: {
                'uuid': uuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Unassign permission(s) to role. When `object_pk` is set, the permissions
     * are only assigned to the specific object, otherwise they are assigned globally.
     * @param uuid A UUID string identifying this Role.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static rbacPermissionsAssignedByRolesUnassignPartialUpdate(
        uuid: string,
        requestBody?: PatchedPermissionAssignRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/rbac/permissions/assigned_by_roles/{uuid}/unassign/',
            path: {
                'uuid': uuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get assigned object permissions for a single object
     * @param model
     * @param objectPk
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedUserAssignedObjectPermissionList
     * @throws ApiError
     */
    public static rbacPermissionsAssignedByUsersList(
        model: 'authentik_blueprints.blueprintinstance' | 'authentik_brands.brand' | 'authentik_core.application' | 'authentik_core.applicationentitlement' | 'authentik_core.group' | 'authentik_core.token' | 'authentik_core.user' | 'authentik_crypto.certificatekeypair' | 'authentik_enterprise.license' | 'authentik_events.event' | 'authentik_events.notification' | 'authentik_events.notificationrule' | 'authentik_events.notificationtransport' | 'authentik_events.notificationwebhookmapping' | 'authentik_flows.flow' | 'authentik_flows.flowstagebinding' | 'authentik_outposts.dockerserviceconnection' | 'authentik_outposts.kubernetesserviceconnection' | 'authentik_outposts.outpost' | 'authentik_policies.policybinding' | 'authentik_policies_dummy.dummypolicy' | 'authentik_policies_event_matcher.eventmatcherpolicy' | 'authentik_policies_expiry.passwordexpirypolicy' | 'authentik_policies_expression.expressionpolicy' | 'authentik_policies_geoip.geoippolicy' | 'authentik_policies_password.passwordpolicy' | 'authentik_policies_reputation.reputationpolicy' | 'authentik_policies_unique_password.uniquepasswordpolicy' | 'authentik_providers_google_workspace.googleworkspaceprovider' | 'authentik_providers_google_workspace.googleworkspaceprovidermapping' | 'authentik_providers_ldap.ldapprovider' | 'authentik_providers_microsoft_entra.microsoftentraprovider' | 'authentik_providers_microsoft_entra.microsoftentraprovidermapping' | 'authentik_providers_oauth2.oauth2provider' | 'authentik_providers_oauth2.scopemapping' | 'authentik_providers_proxy.proxyprovider' | 'authentik_providers_rac.endpoint' | 'authentik_providers_rac.racpropertymapping' | 'authentik_providers_rac.racprovider' | 'authentik_providers_radius.radiusprovider' | 'authentik_providers_radius.radiusproviderpropertymapping' | 'authentik_providers_saml.samlpropertymapping' | 'authentik_providers_saml.samlprovider' | 'authentik_providers_scim.scimmapping' | 'authentik_providers_scim.scimprovider' | 'authentik_providers_ssf.ssfprovider' | 'authentik_rbac.initialpermissions' | 'authentik_rbac.role' | 'authentik_sources_kerberos.groupkerberossourceconnection' | 'authentik_sources_kerberos.kerberossource' | 'authentik_sources_kerberos.kerberossourcepropertymapping' | 'authentik_sources_kerberos.userkerberossourceconnection' | 'authentik_sources_ldap.groupldapsourceconnection' | 'authentik_sources_ldap.ldapsource' | 'authentik_sources_ldap.ldapsourcepropertymapping' | 'authentik_sources_ldap.userldapsourceconnection' | 'authentik_sources_oauth.groupoauthsourceconnection' | 'authentik_sources_oauth.oauthsource' | 'authentik_sources_oauth.oauthsourcepropertymapping' | 'authentik_sources_oauth.useroauthsourceconnection' | 'authentik_sources_plex.groupplexsourceconnection' | 'authentik_sources_plex.plexsource' | 'authentik_sources_plex.plexsourcepropertymapping' | 'authentik_sources_plex.userplexsourceconnection' | 'authentik_sources_saml.groupsamlsourceconnection' | 'authentik_sources_saml.samlsource' | 'authentik_sources_saml.samlsourcepropertymapping' | 'authentik_sources_saml.usersamlsourceconnection' | 'authentik_sources_scim.scimsource' | 'authentik_sources_scim.scimsourcepropertymapping' | 'authentik_stages_authenticator_duo.authenticatorduostage' | 'authentik_stages_authenticator_duo.duodevice' | 'authentik_stages_authenticator_email.authenticatoremailstage' | 'authentik_stages_authenticator_email.emaildevice' | 'authentik_stages_authenticator_endpoint_gdtc.authenticatorendpointgdtcstage' | 'authentik_stages_authenticator_sms.authenticatorsmsstage' | 'authentik_stages_authenticator_sms.smsdevice' | 'authentik_stages_authenticator_static.authenticatorstaticstage' | 'authentik_stages_authenticator_static.staticdevice' | 'authentik_stages_authenticator_totp.authenticatortotpstage' | 'authentik_stages_authenticator_totp.totpdevice' | 'authentik_stages_authenticator_validate.authenticatorvalidatestage' | 'authentik_stages_authenticator_webauthn.authenticatorwebauthnstage' | 'authentik_stages_authenticator_webauthn.webauthndevice' | 'authentik_stages_captcha.captchastage' | 'authentik_stages_consent.consentstage' | 'authentik_stages_consent.userconsent' | 'authentik_stages_deny.denystage' | 'authentik_stages_dummy.dummystage' | 'authentik_stages_email.emailstage' | 'authentik_stages_identification.identificationstage' | 'authentik_stages_invitation.invitation' | 'authentik_stages_invitation.invitationstage' | 'authentik_stages_mtls.mutualtlsstage' | 'authentik_stages_password.passwordstage' | 'authentik_stages_prompt.prompt' | 'authentik_stages_prompt.promptstage' | 'authentik_stages_redirect.redirectstage' | 'authentik_stages_source.sourcestage' | 'authentik_stages_user_delete.userdeletestage' | 'authentik_stages_user_login.userloginstage' | 'authentik_stages_user_logout.userlogoutstage' | 'authentik_stages_user_write.userwritestage' | 'authentik_tenants.domain',
        objectPk?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedUserAssignedObjectPermissionList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/rbac/permissions/assigned_by_users/',
            query: {
                'model': model,
                'object_pk': objectPk,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
            },
        });
    }
    /**
     * Assign permission(s) to user
     * @param id A unique integer value identifying this User.
     * @param requestBody
     * @returns PermissionAssignResult
     * @throws ApiError
     */
    public static rbacPermissionsAssignedByUsersAssign(
        id: number,
        requestBody: PermissionAssignRequest,
    ): CancelablePromise<Array<PermissionAssignResult>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/rbac/permissions/assigned_by_users/{id}/assign/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Unassign permission(s) to user. When `object_pk` is set, the permissions
     * are only assigned to the specific object, otherwise they are assigned globally.
     * @param id A unique integer value identifying this User.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static rbacPermissionsAssignedByUsersUnassignPartialUpdate(
        id: number,
        requestBody?: PatchedPermissionAssignRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/rbac/permissions/assigned_by_users/{id}/unassign/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get a role's assigned object permissions
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param uuid
     * @returns PaginatedExtraRoleObjectPermissionList
     * @throws ApiError
     */
    public static rbacPermissionsRolesList(
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        uuid?: string,
    ): CancelablePromise<PaginatedExtraRoleObjectPermissionList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/rbac/permissions/roles/',
            query: {
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'uuid': uuid,
            },
        });
    }
    /**
     * Get a role's assigned object permissions
     * @param id A unique integer value identifying this group object permission.
     * @returns ExtraRoleObjectPermission
     * @throws ApiError
     */
    public static rbacPermissionsRolesRetrieve(
        id: number,
    ): CancelablePromise<ExtraRoleObjectPermission> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/rbac/permissions/roles/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a role's assigned object permissions
     * @param id A unique integer value identifying this group object permission.
     * @param requestBody
     * @returns ExtraRoleObjectPermission
     * @throws ApiError
     */
    public static rbacPermissionsRolesUpdate(
        id: number,
        requestBody: ExtraRoleObjectPermissionRequest,
    ): CancelablePromise<ExtraRoleObjectPermission> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/rbac/permissions/roles/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get a role's assigned object permissions
     * @param id A unique integer value identifying this group object permission.
     * @param requestBody
     * @returns ExtraRoleObjectPermission
     * @throws ApiError
     */
    public static rbacPermissionsRolesPartialUpdate(
        id: number,
        requestBody?: PatchedExtraRoleObjectPermissionRequest,
    ): CancelablePromise<ExtraRoleObjectPermission> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/rbac/permissions/roles/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get a role's assigned object permissions
     * @param id A unique integer value identifying this group object permission.
     * @returns void
     * @throws ApiError
     */
    public static rbacPermissionsRolesDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/rbac/permissions/roles/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a users's assigned object permissions
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param userId
     * @returns PaginatedExtraUserObjectPermissionList
     * @throws ApiError
     */
    public static rbacPermissionsUsersList(
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        userId?: number,
    ): CancelablePromise<PaginatedExtraUserObjectPermissionList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/rbac/permissions/users/',
            query: {
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'user_id': userId,
            },
        });
    }
    /**
     * Get a users's assigned object permissions
     * @param id A unique integer value identifying this user object permission.
     * @returns ExtraUserObjectPermission
     * @throws ApiError
     */
    public static rbacPermissionsUsersRetrieve(
        id: number,
    ): CancelablePromise<ExtraUserObjectPermission> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/rbac/permissions/users/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a users's assigned object permissions
     * @param id A unique integer value identifying this user object permission.
     * @param requestBody
     * @returns ExtraUserObjectPermission
     * @throws ApiError
     */
    public static rbacPermissionsUsersUpdate(
        id: number,
        requestBody: ExtraUserObjectPermissionRequest,
    ): CancelablePromise<ExtraUserObjectPermission> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/rbac/permissions/users/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get a users's assigned object permissions
     * @param id A unique integer value identifying this user object permission.
     * @param requestBody
     * @returns ExtraUserObjectPermission
     * @throws ApiError
     */
    public static rbacPermissionsUsersPartialUpdate(
        id: number,
        requestBody?: PatchedExtraUserObjectPermissionRequest,
    ): CancelablePromise<ExtraUserObjectPermission> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/rbac/permissions/users/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get a users's assigned object permissions
     * @param id A unique integer value identifying this user object permission.
     * @returns void
     * @throws ApiError
     */
    public static rbacPermissionsUsersDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/rbac/permissions/users/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Role viewset
     * @param groupName
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedRoleList
     * @throws ApiError
     */
    public static rbacRolesList(
        groupName?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedRoleList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/rbac/roles/',
            query: {
                'group__name': groupName,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
            },
        });
    }
    /**
     * Role viewset
     * @param requestBody
     * @returns Role
     * @throws ApiError
     */
    public static rbacRolesCreate(
        requestBody: RoleRequest,
    ): CancelablePromise<Role> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/rbac/roles/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Role viewset
     * @param uuid A UUID string identifying this Role.
     * @returns Role
     * @throws ApiError
     */
    public static rbacRolesRetrieve(
        uuid: string,
    ): CancelablePromise<Role> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/rbac/roles/{uuid}/',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * Role viewset
     * @param uuid A UUID string identifying this Role.
     * @param requestBody
     * @returns Role
     * @throws ApiError
     */
    public static rbacRolesUpdate(
        uuid: string,
        requestBody: RoleRequest,
    ): CancelablePromise<Role> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/rbac/roles/{uuid}/',
            path: {
                'uuid': uuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Role viewset
     * @param uuid A UUID string identifying this Role.
     * @param requestBody
     * @returns Role
     * @throws ApiError
     */
    public static rbacRolesPartialUpdate(
        uuid: string,
        requestBody?: PatchedRoleRequest,
    ): CancelablePromise<Role> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/rbac/roles/{uuid}/',
            path: {
                'uuid': uuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Role viewset
     * @param uuid A UUID string identifying this Role.
     * @returns void
     * @throws ApiError
     */
    public static rbacRolesDestroy(
        uuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/rbac/roles/{uuid}/',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param uuid A UUID string identifying this Role.
     * @returns UsedBy
     * @throws ApiError
     */
    public static rbacRolesUsedByList(
        uuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/rbac/roles/{uuid}/used_by/',
            path: {
                'uuid': uuid,
            },
        });
    }
}
