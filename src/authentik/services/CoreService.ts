/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Application } from '../models/Application';
import type { ApplicationEntitlement } from '../models/ApplicationEntitlement';
import type { ApplicationEntitlementRequest } from '../models/ApplicationEntitlementRequest';
import type { ApplicationRequest } from '../models/ApplicationRequest';
import type { AuthenticatedSession } from '../models/AuthenticatedSession';
import type { Brand } from '../models/Brand';
import type { BrandRequest } from '../models/BrandRequest';
import type { Coordinate } from '../models/Coordinate';
import type { CurrentBrand } from '../models/CurrentBrand';
import type { FilePathRequest } from '../models/FilePathRequest';
import type { FileUploadRequest } from '../models/FileUploadRequest';
import type { Group } from '../models/Group';
import type { GroupRequest } from '../models/GroupRequest';
import type { ImpersonationRequest } from '../models/ImpersonationRequest';
import type { Link } from '../models/Link';
import type { PaginatedApplicationEntitlementList } from '../models/PaginatedApplicationEntitlementList';
import type { PaginatedApplicationList } from '../models/PaginatedApplicationList';
import type { PaginatedAuthenticatedSessionList } from '../models/PaginatedAuthenticatedSessionList';
import type { PaginatedBrandList } from '../models/PaginatedBrandList';
import type { PaginatedGroupList } from '../models/PaginatedGroupList';
import type { PaginatedTokenList } from '../models/PaginatedTokenList';
import type { PaginatedUserConsentList } from '../models/PaginatedUserConsentList';
import type { PaginatedUserList } from '../models/PaginatedUserList';
import type { PatchedApplicationEntitlementRequest } from '../models/PatchedApplicationEntitlementRequest';
import type { PatchedApplicationRequest } from '../models/PatchedApplicationRequest';
import type { PatchedBrandRequest } from '../models/PatchedBrandRequest';
import type { PatchedGroupRequest } from '../models/PatchedGroupRequest';
import type { PatchedTokenRequest } from '../models/PatchedTokenRequest';
import type { PatchedUserRequest } from '../models/PatchedUserRequest';
import type { PolicyTestResult } from '../models/PolicyTestResult';
import type { SessionUser } from '../models/SessionUser';
import type { Token } from '../models/Token';
import type { TokenRequest } from '../models/TokenRequest';
import type { TokenSetKeyRequest } from '../models/TokenSetKeyRequest';
import type { TokenView } from '../models/TokenView';
import type { TransactionApplicationRequest } from '../models/TransactionApplicationRequest';
import type { TransactionApplicationResponse } from '../models/TransactionApplicationResponse';
import type { UsedBy } from '../models/UsedBy';
import type { User } from '../models/User';
import type { UserAccountRequest } from '../models/UserAccountRequest';
import type { UserConsent } from '../models/UserConsent';
import type { UserMetrics } from '../models/UserMetrics';
import type { UserPasswordSetRequest } from '../models/UserPasswordSetRequest';
import type { UserPath } from '../models/UserPath';
import type { UserRequest } from '../models/UserRequest';
import type { UserServiceAccountRequest } from '../models/UserServiceAccountRequest';
import type { UserServiceAccountResponse } from '../models/UserServiceAccountResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CoreService {
    /**
     * ApplicationEntitlement Viewset
     * @param app
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param pbmUuid
     * @param search A search term.
     * @returns PaginatedApplicationEntitlementList
     * @throws ApiError
     */
    public static coreApplicationEntitlementsList(
        app?: string,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        pbmUuid?: string,
        search?: string,
    ): CancelablePromise<PaginatedApplicationEntitlementList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/application_entitlements/',
            query: {
                'app': app,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'pbm_uuid': pbmUuid,
                'search': search,
            },
        });
    }
    /**
     * ApplicationEntitlement Viewset
     * @param requestBody
     * @returns ApplicationEntitlement
     * @throws ApiError
     */
    public static coreApplicationEntitlementsCreate(
        requestBody: ApplicationEntitlementRequest,
    ): CancelablePromise<ApplicationEntitlement> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/core/application_entitlements/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * ApplicationEntitlement Viewset
     * @param pbmUuid A UUID string identifying this Application Entitlement.
     * @returns ApplicationEntitlement
     * @throws ApiError
     */
    public static coreApplicationEntitlementsRetrieve(
        pbmUuid: string,
    ): CancelablePromise<ApplicationEntitlement> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/application_entitlements/{pbm_uuid}/',
            path: {
                'pbm_uuid': pbmUuid,
            },
        });
    }
    /**
     * ApplicationEntitlement Viewset
     * @param pbmUuid A UUID string identifying this Application Entitlement.
     * @param requestBody
     * @returns ApplicationEntitlement
     * @throws ApiError
     */
    public static coreApplicationEntitlementsUpdate(
        pbmUuid: string,
        requestBody: ApplicationEntitlementRequest,
    ): CancelablePromise<ApplicationEntitlement> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/core/application_entitlements/{pbm_uuid}/',
            path: {
                'pbm_uuid': pbmUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * ApplicationEntitlement Viewset
     * @param pbmUuid A UUID string identifying this Application Entitlement.
     * @param requestBody
     * @returns ApplicationEntitlement
     * @throws ApiError
     */
    public static coreApplicationEntitlementsPartialUpdate(
        pbmUuid: string,
        requestBody?: PatchedApplicationEntitlementRequest,
    ): CancelablePromise<ApplicationEntitlement> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/core/application_entitlements/{pbm_uuid}/',
            path: {
                'pbm_uuid': pbmUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * ApplicationEntitlement Viewset
     * @param pbmUuid A UUID string identifying this Application Entitlement.
     * @returns void
     * @throws ApiError
     */
    public static coreApplicationEntitlementsDestroy(
        pbmUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/core/application_entitlements/{pbm_uuid}/',
            path: {
                'pbm_uuid': pbmUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param pbmUuid A UUID string identifying this Application Entitlement.
     * @returns UsedBy
     * @throws ApiError
     */
    public static coreApplicationEntitlementsUsedByList(
        pbmUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/application_entitlements/{pbm_uuid}/used_by/',
            path: {
                'pbm_uuid': pbmUuid,
            },
        });
    }
    /**
     * Custom list method that checks Policy based access instead of guardian
     * @param forUser
     * @param group
     * @param metaDescription
     * @param metaLaunchUrl
     * @param metaPublisher
     * @param name
     * @param onlyWithLaunchUrl
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param slug
     * @param superuserFullList
     * @returns PaginatedApplicationList
     * @throws ApiError
     */
    public static coreApplicationsList(
        forUser?: number,
        group?: string,
        metaDescription?: string,
        metaLaunchUrl?: string,
        metaPublisher?: string,
        name?: string,
        onlyWithLaunchUrl?: boolean,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        slug?: string,
        superuserFullList?: boolean,
    ): CancelablePromise<PaginatedApplicationList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/applications/',
            query: {
                'for_user': forUser,
                'group': group,
                'meta_description': metaDescription,
                'meta_launch_url': metaLaunchUrl,
                'meta_publisher': metaPublisher,
                'name': name,
                'only_with_launch_url': onlyWithLaunchUrl,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'slug': slug,
                'superuser_full_list': superuserFullList,
            },
        });
    }
    /**
     * Application Viewset
     * @param requestBody
     * @returns Application
     * @throws ApiError
     */
    public static coreApplicationsCreate(
        requestBody: ApplicationRequest,
    ): CancelablePromise<Application> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/core/applications/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Application Viewset
     * @param slug
     * @returns Application
     * @throws ApiError
     */
    public static coreApplicationsRetrieve(
        slug: string,
    ): CancelablePromise<Application> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/applications/{slug}/',
            path: {
                'slug': slug,
            },
        });
    }
    /**
     * Application Viewset
     * @param slug
     * @param requestBody
     * @returns Application
     * @throws ApiError
     */
    public static coreApplicationsUpdate(
        slug: string,
        requestBody: ApplicationRequest,
    ): CancelablePromise<Application> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/core/applications/{slug}/',
            path: {
                'slug': slug,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Application Viewset
     * @param slug
     * @param requestBody
     * @returns Application
     * @throws ApiError
     */
    public static coreApplicationsPartialUpdate(
        slug: string,
        requestBody?: PatchedApplicationRequest,
    ): CancelablePromise<Application> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/core/applications/{slug}/',
            path: {
                'slug': slug,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Application Viewset
     * @param slug
     * @returns void
     * @throws ApiError
     */
    public static coreApplicationsDestroy(
        slug: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/core/applications/{slug}/',
            path: {
                'slug': slug,
            },
        });
    }
    /**
     * Check access to a single application by slug
     * @param slug
     * @param forUser
     * @returns PolicyTestResult
     * @throws ApiError
     */
    public static coreApplicationsCheckAccessRetrieve(
        slug: string,
        forUser?: number,
    ): CancelablePromise<PolicyTestResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/applications/{slug}/check_access/',
            path: {
                'slug': slug,
            },
            query: {
                'for_user': forUser,
            },
        });
    }
    /**
     * Metrics for application logins
     * @param slug
     * @returns Coordinate
     * @throws ApiError
     */
    public static coreApplicationsMetricsList(
        slug: string,
    ): CancelablePromise<Array<Coordinate>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/applications/{slug}/metrics/',
            path: {
                'slug': slug,
            },
        });
    }
    /**
     * Set application icon
     * @param slug
     * @param formData
     * @returns any Success
     * @throws ApiError
     */
    public static coreApplicationsSetIconCreate(
        slug: string,
        formData?: FileUploadRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/core/applications/{slug}/set_icon/',
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
     * Set application icon (as URL)
     * @param slug
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static coreApplicationsSetIconUrlCreate(
        slug: string,
        requestBody: FilePathRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/core/applications/{slug}/set_icon_url/',
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
    public static coreApplicationsUsedByList(
        slug: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/applications/{slug}/used_by/',
            path: {
                'slug': slug,
            },
        });
    }
    /**
     * AuthenticatedSession Viewset
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param sessionLastIp
     * @param sessionLastUserAgent
     * @param userUsername
     * @returns PaginatedAuthenticatedSessionList
     * @throws ApiError
     */
    public static coreAuthenticatedSessionsList(
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        sessionLastIp?: string,
        sessionLastUserAgent?: string,
        userUsername?: string,
    ): CancelablePromise<PaginatedAuthenticatedSessionList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/authenticated_sessions/',
            query: {
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'session__last_ip': sessionLastIp,
                'session__last_user_agent': sessionLastUserAgent,
                'user__username': userUsername,
            },
        });
    }
    /**
     * AuthenticatedSession Viewset
     * @param uuid
     * @returns AuthenticatedSession
     * @throws ApiError
     */
    public static coreAuthenticatedSessionsRetrieve(
        uuid: string,
    ): CancelablePromise<AuthenticatedSession> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/authenticated_sessions/{uuid}/',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * AuthenticatedSession Viewset
     * @param uuid
     * @returns void
     * @throws ApiError
     */
    public static coreAuthenticatedSessionsDestroy(
        uuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/core/authenticated_sessions/{uuid}/',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param uuid
     * @returns UsedBy
     * @throws ApiError
     */
    public static coreAuthenticatedSessionsUsedByList(
        uuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/authenticated_sessions/{uuid}/used_by/',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * Brand Viewset
     * @param brandUuid
     * @param brandingDefaultFlowBackground
     * @param brandingFavicon
     * @param brandingLogo
     * @param brandingTitle
     * @param clientCertificates
     * @param _default
     * @param domain
     * @param flowAuthentication
     * @param flowDeviceCode
     * @param flowInvalidation
     * @param flowRecovery
     * @param flowUnenrollment
     * @param flowUserSettings
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param webCertificate
     * @returns PaginatedBrandList
     * @throws ApiError
     */
    public static coreBrandsList(
        brandUuid?: string,
        brandingDefaultFlowBackground?: string,
        brandingFavicon?: string,
        brandingLogo?: string,
        brandingTitle?: string,
        clientCertificates?: Array<string>,
        _default?: boolean,
        domain?: string,
        flowAuthentication?: string,
        flowDeviceCode?: string,
        flowInvalidation?: string,
        flowRecovery?: string,
        flowUnenrollment?: string,
        flowUserSettings?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        webCertificate?: string,
    ): CancelablePromise<PaginatedBrandList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/brands/',
            query: {
                'brand_uuid': brandUuid,
                'branding_default_flow_background': brandingDefaultFlowBackground,
                'branding_favicon': brandingFavicon,
                'branding_logo': brandingLogo,
                'branding_title': brandingTitle,
                'client_certificates': clientCertificates,
                'default': _default,
                'domain': domain,
                'flow_authentication': flowAuthentication,
                'flow_device_code': flowDeviceCode,
                'flow_invalidation': flowInvalidation,
                'flow_recovery': flowRecovery,
                'flow_unenrollment': flowUnenrollment,
                'flow_user_settings': flowUserSettings,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'web_certificate': webCertificate,
            },
        });
    }
    /**
     * Brand Viewset
     * @param requestBody
     * @returns Brand
     * @throws ApiError
     */
    public static coreBrandsCreate(
        requestBody: BrandRequest,
    ): CancelablePromise<Brand> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/core/brands/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Brand Viewset
     * @param brandUuid A UUID string identifying this Brand.
     * @returns Brand
     * @throws ApiError
     */
    public static coreBrandsRetrieve(
        brandUuid: string,
    ): CancelablePromise<Brand> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/brands/{brand_uuid}/',
            path: {
                'brand_uuid': brandUuid,
            },
        });
    }
    /**
     * Brand Viewset
     * @param brandUuid A UUID string identifying this Brand.
     * @param requestBody
     * @returns Brand
     * @throws ApiError
     */
    public static coreBrandsUpdate(
        brandUuid: string,
        requestBody: BrandRequest,
    ): CancelablePromise<Brand> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/core/brands/{brand_uuid}/',
            path: {
                'brand_uuid': brandUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Brand Viewset
     * @param brandUuid A UUID string identifying this Brand.
     * @param requestBody
     * @returns Brand
     * @throws ApiError
     */
    public static coreBrandsPartialUpdate(
        brandUuid: string,
        requestBody?: PatchedBrandRequest,
    ): CancelablePromise<Brand> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/core/brands/{brand_uuid}/',
            path: {
                'brand_uuid': brandUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Brand Viewset
     * @param brandUuid A UUID string identifying this Brand.
     * @returns void
     * @throws ApiError
     */
    public static coreBrandsDestroy(
        brandUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/core/brands/{brand_uuid}/',
            path: {
                'brand_uuid': brandUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param brandUuid A UUID string identifying this Brand.
     * @returns UsedBy
     * @throws ApiError
     */
    public static coreBrandsUsedByList(
        brandUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/brands/{brand_uuid}/used_by/',
            path: {
                'brand_uuid': brandUuid,
            },
        });
    }
    /**
     * Get current brand
     * @returns CurrentBrand
     * @throws ApiError
     */
    public static coreBrandsCurrentRetrieve(): CancelablePromise<CurrentBrand> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/brands/current/',
        });
    }
    /**
     * Group Viewset
     * @param attributes Attributes
     * @param includeUsers
     * @param isSuperuser
     * @param membersByPk
     * @param membersByUsername Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedGroupList
     * @throws ApiError
     */
    public static coreGroupsList(
        attributes?: string,
        includeUsers: boolean = true,
        isSuperuser?: boolean,
        membersByPk?: Array<number>,
        membersByUsername?: Array<string>,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedGroupList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/groups/',
            query: {
                'attributes': attributes,
                'include_users': includeUsers,
                'is_superuser': isSuperuser,
                'members_by_pk': membersByPk,
                'members_by_username': membersByUsername,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
            },
        });
    }
    /**
     * Group Viewset
     * @param requestBody
     * @returns Group
     * @throws ApiError
     */
    public static coreGroupsCreate(
        requestBody: GroupRequest,
    ): CancelablePromise<Group> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/core/groups/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Group Viewset
     * @param groupUuid A UUID string identifying this Group.
     * @param includeUsers
     * @returns Group
     * @throws ApiError
     */
    public static coreGroupsRetrieve(
        groupUuid: string,
        includeUsers: boolean = true,
    ): CancelablePromise<Group> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/groups/{group_uuid}/',
            path: {
                'group_uuid': groupUuid,
            },
            query: {
                'include_users': includeUsers,
            },
        });
    }
    /**
     * Group Viewset
     * @param groupUuid A UUID string identifying this Group.
     * @param requestBody
     * @returns Group
     * @throws ApiError
     */
    public static coreGroupsUpdate(
        groupUuid: string,
        requestBody: GroupRequest,
    ): CancelablePromise<Group> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/core/groups/{group_uuid}/',
            path: {
                'group_uuid': groupUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Group Viewset
     * @param groupUuid A UUID string identifying this Group.
     * @param requestBody
     * @returns Group
     * @throws ApiError
     */
    public static coreGroupsPartialUpdate(
        groupUuid: string,
        requestBody?: PatchedGroupRequest,
    ): CancelablePromise<Group> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/core/groups/{group_uuid}/',
            path: {
                'group_uuid': groupUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Group Viewset
     * @param groupUuid A UUID string identifying this Group.
     * @returns void
     * @throws ApiError
     */
    public static coreGroupsDestroy(
        groupUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/core/groups/{group_uuid}/',
            path: {
                'group_uuid': groupUuid,
            },
        });
    }
    /**
     * Add user to group
     * @param groupUuid A UUID string identifying this Group.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static coreGroupsAddUserCreate(
        groupUuid: string,
        requestBody: UserAccountRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/core/groups/{group_uuid}/add_user/',
            path: {
                'group_uuid': groupUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `User not found`,
            },
        });
    }
    /**
     * Add user to group
     * @param groupUuid A UUID string identifying this Group.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static coreGroupsRemoveUserCreate(
        groupUuid: string,
        requestBody: UserAccountRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/core/groups/{group_uuid}/remove_user/',
            path: {
                'group_uuid': groupUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `User not found`,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param groupUuid A UUID string identifying this Group.
     * @returns UsedBy
     * @throws ApiError
     */
    public static coreGroupsUsedByList(
        groupUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/groups/{group_uuid}/used_by/',
            path: {
                'group_uuid': groupUuid,
            },
        });
    }
    /**
     * Token Viewset
     * @param description
     * @param expires
     * @param expiring
     * @param identifier
     * @param intent
     * @param managed
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param userUsername
     * @returns PaginatedTokenList
     * @throws ApiError
     */
    public static coreTokensList(
        description?: string,
        expires?: string,
        expiring?: boolean,
        identifier?: string,
        intent?: 'api' | 'app_password' | 'recovery' | 'verification',
        managed?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        userUsername?: string,
    ): CancelablePromise<PaginatedTokenList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/tokens/',
            query: {
                'description': description,
                'expires': expires,
                'expiring': expiring,
                'identifier': identifier,
                'intent': intent,
                'managed': managed,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'user__username': userUsername,
            },
        });
    }
    /**
     * Token Viewset
     * @param requestBody
     * @returns Token
     * @throws ApiError
     */
    public static coreTokensCreate(
        requestBody: TokenRequest,
    ): CancelablePromise<Token> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/core/tokens/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Token Viewset
     * @param identifier
     * @returns Token
     * @throws ApiError
     */
    public static coreTokensRetrieve(
        identifier: string,
    ): CancelablePromise<Token> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/tokens/{identifier}/',
            path: {
                'identifier': identifier,
            },
        });
    }
    /**
     * Token Viewset
     * @param identifier
     * @param requestBody
     * @returns Token
     * @throws ApiError
     */
    public static coreTokensUpdate(
        identifier: string,
        requestBody: TokenRequest,
    ): CancelablePromise<Token> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/core/tokens/{identifier}/',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Token Viewset
     * @param identifier
     * @param requestBody
     * @returns Token
     * @throws ApiError
     */
    public static coreTokensPartialUpdate(
        identifier: string,
        requestBody?: PatchedTokenRequest,
    ): CancelablePromise<Token> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/core/tokens/{identifier}/',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Token Viewset
     * @param identifier
     * @returns void
     * @throws ApiError
     */
    public static coreTokensDestroy(
        identifier: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/core/tokens/{identifier}/',
            path: {
                'identifier': identifier,
            },
        });
    }
    /**
     * Set token key. Action is logged as event. `authentik_core.set_token_key` permission
     * is required.
     * @param identifier
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static coreTokensSetKeyCreate(
        identifier: string,
        requestBody: TokenSetKeyRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/core/tokens/{identifier}/set_key/',
            path: {
                'identifier': identifier,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Missing key`,
                404: `Token not found or expired`,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param identifier
     * @returns UsedBy
     * @throws ApiError
     */
    public static coreTokensUsedByList(
        identifier: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/tokens/{identifier}/used_by/',
            path: {
                'identifier': identifier,
            },
        });
    }
    /**
     * Return token key and log access
     * @param identifier
     * @returns TokenView
     * @throws ApiError
     */
    public static coreTokensViewKeyRetrieve(
        identifier: string,
    ): CancelablePromise<TokenView> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/tokens/{identifier}/view_key/',
            path: {
                'identifier': identifier,
            },
            errors: {
                404: `Token not found or expired`,
            },
        });
    }
    /**
     * Convert data into a blueprint, validate it and apply it
     * @param requestBody
     * @returns TransactionApplicationResponse
     * @throws ApiError
     */
    public static coreTransactionalApplicationsUpdate(
        requestBody: TransactionApplicationRequest,
    ): CancelablePromise<TransactionApplicationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/core/transactional/applications/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * UserConsent Viewset
     * @param application
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param user
     * @returns PaginatedUserConsentList
     * @throws ApiError
     */
    public static coreUserConsentList(
        application?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        user?: number,
    ): CancelablePromise<PaginatedUserConsentList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/user_consent/',
            query: {
                'application': application,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'user': user,
            },
        });
    }
    /**
     * UserConsent Viewset
     * @param id A unique integer value identifying this User Consent.
     * @returns UserConsent
     * @throws ApiError
     */
    public static coreUserConsentRetrieve(
        id: number,
    ): CancelablePromise<UserConsent> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/user_consent/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * UserConsent Viewset
     * @param id A unique integer value identifying this User Consent.
     * @returns void
     * @throws ApiError
     */
    public static coreUserConsentDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/core/user_consent/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param id A unique integer value identifying this User Consent.
     * @returns UsedBy
     * @throws ApiError
     */
    public static coreUserConsentUsedByList(
        id: number,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/user_consent/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * User Viewset
     * @param attributes Attributes
     * @param email
     * @param groupsByName
     * @param groupsByPk
     * @param includeGroups
     * @param isActive
     * @param isSuperuser
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param path
     * @param pathStartswith
     * @param search A search term.
     * @param type
     * @param username
     * @param uuid
     * @returns PaginatedUserList
     * @throws ApiError
     */
    public static coreUsersList(
        attributes?: string,
        email?: string,
        groupsByName?: Array<string>,
        groupsByPk?: Array<string>,
        includeGroups: boolean = true,
        isActive?: boolean,
        isSuperuser?: boolean,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        path?: string,
        pathStartswith?: string,
        search?: string,
        type?: Array<'external' | 'internal' | 'internal_service_account' | 'service_account'>,
        username?: string,
        uuid?: string,
    ): CancelablePromise<PaginatedUserList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/users/',
            query: {
                'attributes': attributes,
                'email': email,
                'groups_by_name': groupsByName,
                'groups_by_pk': groupsByPk,
                'include_groups': includeGroups,
                'is_active': isActive,
                'is_superuser': isSuperuser,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'path': path,
                'path_startswith': pathStartswith,
                'search': search,
                'type': type,
                'username': username,
                'uuid': uuid,
            },
        });
    }
    /**
     * User Viewset
     * @param requestBody
     * @returns User
     * @throws ApiError
     */
    public static coreUsersCreate(
        requestBody: UserRequest,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/core/users/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * User Viewset
     * @param id A unique integer value identifying this User.
     * @returns User
     * @throws ApiError
     */
    public static coreUsersRetrieve(
        id: number,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/users/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * User Viewset
     * @param id A unique integer value identifying this User.
     * @param requestBody
     * @returns User
     * @throws ApiError
     */
    public static coreUsersUpdate(
        id: number,
        requestBody: UserRequest,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/core/users/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * User Viewset
     * @param id A unique integer value identifying this User.
     * @param requestBody
     * @returns User
     * @throws ApiError
     */
    public static coreUsersPartialUpdate(
        id: number,
        requestBody?: PatchedUserRequest,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/core/users/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * User Viewset
     * @param id A unique integer value identifying this User.
     * @returns void
     * @throws ApiError
     */
    public static coreUsersDestroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/core/users/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Impersonate a user
     * @param id A unique integer value identifying this User.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static coreUsersImpersonateCreate(
        id: number,
        requestBody: ImpersonationRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/core/users/{id}/impersonate/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Access denied`,
            },
        });
    }
    /**
     * User metrics per 1h
     * @param id A unique integer value identifying this User.
     * @returns UserMetrics
     * @throws ApiError
     */
    public static coreUsersMetricsRetrieve(
        id: number,
    ): CancelablePromise<UserMetrics> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/users/{id}/metrics/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Create a temporary link that a user can use to recover their accounts
     * @param id A unique integer value identifying this User.
     * @returns Link
     * @throws ApiError
     */
    public static coreUsersRecoveryCreate(
        id: number,
    ): CancelablePromise<Link> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/core/users/{id}/recovery/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Create a temporary link that a user can use to recover their accounts
     * @param emailStage
     * @param id A unique integer value identifying this User.
     * @returns void
     * @throws ApiError
     */
    public static coreUsersRecoveryEmailCreate(
        emailStage: string,
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/core/users/{id}/recovery_email/',
            path: {
                'id': id,
            },
            query: {
                'email_stage': emailStage,
            },
        });
    }
    /**
     * Set password for user
     * @param id A unique integer value identifying this User.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static coreUsersSetPasswordCreate(
        id: number,
        requestBody: UserPasswordSetRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/core/users/{id}/set_password/',
            path: {
                'id': id,
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
     * @param id A unique integer value identifying this User.
     * @returns UsedBy
     * @throws ApiError
     */
    public static coreUsersUsedByList(
        id: number,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/users/{id}/used_by/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * End Impersonation a user
     * @returns void
     * @throws ApiError
     */
    public static coreUsersImpersonateEndRetrieve(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/users/impersonate_end/',
        });
    }
    /**
     * Get information about current user
     * @returns SessionUser
     * @throws ApiError
     */
    public static coreUsersMeRetrieve(): CancelablePromise<SessionUser> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/users/me/',
        });
    }
    /**
     * Get all user paths
     * @param search
     * @returns UserPath
     * @throws ApiError
     */
    public static coreUsersPathsRetrieve(
        search?: string,
    ): CancelablePromise<UserPath> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/users/paths/',
            query: {
                'search': search,
            },
        });
    }
    /**
     * Create a new user account that is marked as a service account
     * @param requestBody
     * @returns UserServiceAccountResponse
     * @throws ApiError
     */
    public static coreUsersServiceAccountCreate(
        requestBody: UserServiceAccountRequest,
    ): CancelablePromise<UserServiceAccountResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/core/users/service_account/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
