/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthenticatorDuoStage } from '../models/AuthenticatorDuoStage';
import type { AuthenticatorDuoStageDeviceImportResponse } from '../models/AuthenticatorDuoStageDeviceImportResponse';
import type { AuthenticatorDuoStageManualDeviceImportRequest } from '../models/AuthenticatorDuoStageManualDeviceImportRequest';
import type { AuthenticatorDuoStageRequest } from '../models/AuthenticatorDuoStageRequest';
import type { AuthenticatorEmailStage } from '../models/AuthenticatorEmailStage';
import type { AuthenticatorEmailStageRequest } from '../models/AuthenticatorEmailStageRequest';
import type { AuthenticatorEndpointGDTCStage } from '../models/AuthenticatorEndpointGDTCStage';
import type { AuthenticatorEndpointGDTCStageRequest } from '../models/AuthenticatorEndpointGDTCStageRequest';
import type { AuthenticatorSMSStage } from '../models/AuthenticatorSMSStage';
import type { AuthenticatorSMSStageRequest } from '../models/AuthenticatorSMSStageRequest';
import type { AuthenticatorStaticStage } from '../models/AuthenticatorStaticStage';
import type { AuthenticatorStaticStageRequest } from '../models/AuthenticatorStaticStageRequest';
import type { AuthenticatorTOTPStage } from '../models/AuthenticatorTOTPStage';
import type { AuthenticatorTOTPStageRequest } from '../models/AuthenticatorTOTPStageRequest';
import type { AuthenticatorValidateStage } from '../models/AuthenticatorValidateStage';
import type { AuthenticatorValidateStageRequest } from '../models/AuthenticatorValidateStageRequest';
import type { AuthenticatorWebAuthnStage } from '../models/AuthenticatorWebAuthnStage';
import type { AuthenticatorWebAuthnStageRequest } from '../models/AuthenticatorWebAuthnStageRequest';
import type { CaptchaStage } from '../models/CaptchaStage';
import type { CaptchaStageRequest } from '../models/CaptchaStageRequest';
import type { ConsentStage } from '../models/ConsentStage';
import type { ConsentStageRequest } from '../models/ConsentStageRequest';
import type { DenyStage } from '../models/DenyStage';
import type { DenyStageRequest } from '../models/DenyStageRequest';
import type { DummyStage } from '../models/DummyStage';
import type { DummyStageRequest } from '../models/DummyStageRequest';
import type { DuoDeviceEnrollmentStatus } from '../models/DuoDeviceEnrollmentStatus';
import type { EmailStage } from '../models/EmailStage';
import type { EmailStageRequest } from '../models/EmailStageRequest';
import type { IdentificationStage } from '../models/IdentificationStage';
import type { IdentificationStageRequest } from '../models/IdentificationStageRequest';
import type { Invitation } from '../models/Invitation';
import type { InvitationRequest } from '../models/InvitationRequest';
import type { InvitationStage } from '../models/InvitationStage';
import type { InvitationStageRequest } from '../models/InvitationStageRequest';
import type { MutualTLSStage } from '../models/MutualTLSStage';
import type { MutualTLSStageRequest } from '../models/MutualTLSStageRequest';
import type { PaginatedAuthenticatorDuoStageList } from '../models/PaginatedAuthenticatorDuoStageList';
import type { PaginatedAuthenticatorEmailStageList } from '../models/PaginatedAuthenticatorEmailStageList';
import type { PaginatedAuthenticatorEndpointGDTCStageList } from '../models/PaginatedAuthenticatorEndpointGDTCStageList';
import type { PaginatedAuthenticatorSMSStageList } from '../models/PaginatedAuthenticatorSMSStageList';
import type { PaginatedAuthenticatorStaticStageList } from '../models/PaginatedAuthenticatorStaticStageList';
import type { PaginatedAuthenticatorTOTPStageList } from '../models/PaginatedAuthenticatorTOTPStageList';
import type { PaginatedAuthenticatorValidateStageList } from '../models/PaginatedAuthenticatorValidateStageList';
import type { PaginatedAuthenticatorWebAuthnStageList } from '../models/PaginatedAuthenticatorWebAuthnStageList';
import type { PaginatedCaptchaStageList } from '../models/PaginatedCaptchaStageList';
import type { PaginatedConsentStageList } from '../models/PaginatedConsentStageList';
import type { PaginatedDenyStageList } from '../models/PaginatedDenyStageList';
import type { PaginatedDummyStageList } from '../models/PaginatedDummyStageList';
import type { PaginatedEmailStageList } from '../models/PaginatedEmailStageList';
import type { PaginatedIdentificationStageList } from '../models/PaginatedIdentificationStageList';
import type { PaginatedInvitationList } from '../models/PaginatedInvitationList';
import type { PaginatedInvitationStageList } from '../models/PaginatedInvitationStageList';
import type { PaginatedMutualTLSStageList } from '../models/PaginatedMutualTLSStageList';
import type { PaginatedPasswordStageList } from '../models/PaginatedPasswordStageList';
import type { PaginatedPromptList } from '../models/PaginatedPromptList';
import type { PaginatedPromptStageList } from '../models/PaginatedPromptStageList';
import type { PaginatedRedirectStageList } from '../models/PaginatedRedirectStageList';
import type { PaginatedSourceStageList } from '../models/PaginatedSourceStageList';
import type { PaginatedStageList } from '../models/PaginatedStageList';
import type { PaginatedUserDeleteStageList } from '../models/PaginatedUserDeleteStageList';
import type { PaginatedUserLoginStageList } from '../models/PaginatedUserLoginStageList';
import type { PaginatedUserLogoutStageList } from '../models/PaginatedUserLogoutStageList';
import type { PaginatedUserWriteStageList } from '../models/PaginatedUserWriteStageList';
import type { PaginatedWebAuthnDeviceTypeList } from '../models/PaginatedWebAuthnDeviceTypeList';
import type { PasswordStage } from '../models/PasswordStage';
import type { PasswordStageRequest } from '../models/PasswordStageRequest';
import type { PatchedAuthenticatorDuoStageRequest } from '../models/PatchedAuthenticatorDuoStageRequest';
import type { PatchedAuthenticatorEmailStageRequest } from '../models/PatchedAuthenticatorEmailStageRequest';
import type { PatchedAuthenticatorEndpointGDTCStageRequest } from '../models/PatchedAuthenticatorEndpointGDTCStageRequest';
import type { PatchedAuthenticatorSMSStageRequest } from '../models/PatchedAuthenticatorSMSStageRequest';
import type { PatchedAuthenticatorStaticStageRequest } from '../models/PatchedAuthenticatorStaticStageRequest';
import type { PatchedAuthenticatorTOTPStageRequest } from '../models/PatchedAuthenticatorTOTPStageRequest';
import type { PatchedAuthenticatorValidateStageRequest } from '../models/PatchedAuthenticatorValidateStageRequest';
import type { PatchedAuthenticatorWebAuthnStageRequest } from '../models/PatchedAuthenticatorWebAuthnStageRequest';
import type { PatchedCaptchaStageRequest } from '../models/PatchedCaptchaStageRequest';
import type { PatchedConsentStageRequest } from '../models/PatchedConsentStageRequest';
import type { PatchedDenyStageRequest } from '../models/PatchedDenyStageRequest';
import type { PatchedDummyStageRequest } from '../models/PatchedDummyStageRequest';
import type { PatchedEmailStageRequest } from '../models/PatchedEmailStageRequest';
import type { PatchedIdentificationStageRequest } from '../models/PatchedIdentificationStageRequest';
import type { PatchedInvitationRequest } from '../models/PatchedInvitationRequest';
import type { PatchedInvitationStageRequest } from '../models/PatchedInvitationStageRequest';
import type { PatchedMutualTLSStageRequest } from '../models/PatchedMutualTLSStageRequest';
import type { PatchedPasswordStageRequest } from '../models/PatchedPasswordStageRequest';
import type { PatchedPromptRequest } from '../models/PatchedPromptRequest';
import type { PatchedPromptStageRequest } from '../models/PatchedPromptStageRequest';
import type { PatchedRedirectStageRequest } from '../models/PatchedRedirectStageRequest';
import type { PatchedSourceStageRequest } from '../models/PatchedSourceStageRequest';
import type { PatchedUserDeleteStageRequest } from '../models/PatchedUserDeleteStageRequest';
import type { PatchedUserLoginStageRequest } from '../models/PatchedUserLoginStageRequest';
import type { PatchedUserLogoutStageRequest } from '../models/PatchedUserLogoutStageRequest';
import type { PatchedUserWriteStageRequest } from '../models/PatchedUserWriteStageRequest';
import type { Prompt } from '../models/Prompt';
import type { PromptChallenge } from '../models/PromptChallenge';
import type { PromptRequest } from '../models/PromptRequest';
import type { PromptStage } from '../models/PromptStage';
import type { PromptStageRequest } from '../models/PromptStageRequest';
import type { RedirectStage } from '../models/RedirectStage';
import type { RedirectStageRequest } from '../models/RedirectStageRequest';
import type { SourceStage } from '../models/SourceStage';
import type { SourceStageRequest } from '../models/SourceStageRequest';
import type { Stage } from '../models/Stage';
import type { TypeCreate } from '../models/TypeCreate';
import type { UsedBy } from '../models/UsedBy';
import type { UserDeleteStage } from '../models/UserDeleteStage';
import type { UserDeleteStageRequest } from '../models/UserDeleteStageRequest';
import type { UserLoginStage } from '../models/UserLoginStage';
import type { UserLoginStageRequest } from '../models/UserLoginStageRequest';
import type { UserLogoutStage } from '../models/UserLogoutStage';
import type { UserLogoutStageRequest } from '../models/UserLogoutStageRequest';
import type { UserSetting } from '../models/UserSetting';
import type { UserWriteStage } from '../models/UserWriteStage';
import type { UserWriteStageRequest } from '../models/UserWriteStageRequest';
import type { WebAuthnDeviceType } from '../models/WebAuthnDeviceType';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StagesService {
    /**
     * Stage Viewset
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedStageList
     * @throws ApiError
     */
    public static stagesAllList(
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedStageList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/all/',
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
     * Stage Viewset
     * @param stageUuid A UUID string identifying this stage.
     * @returns Stage
     * @throws ApiError
     */
    public static stagesAllRetrieve(
        stageUuid: string,
    ): CancelablePromise<Stage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/all/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * Stage Viewset
     * @param stageUuid A UUID string identifying this stage.
     * @returns void
     * @throws ApiError
     */
    public static stagesAllDestroy(
        stageUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/stages/all/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param stageUuid A UUID string identifying this stage.
     * @returns UsedBy
     * @throws ApiError
     */
    public static stagesAllUsedByList(
        stageUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/all/{stage_uuid}/used_by/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * Get all creatable types
     * @returns TypeCreate
     * @throws ApiError
     */
    public static stagesAllTypesList(): CancelablePromise<Array<TypeCreate>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/all/types/',
        });
    }
    /**
     * Get all stages the user can configure
     * @returns UserSetting
     * @throws ApiError
     */
    public static stagesAllUserSettingsList(): CancelablePromise<Array<UserSetting>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/all/user_settings/',
        });
    }
    /**
     * AuthenticatorDuoStage Viewset
     * @param apiHostname
     * @param clientId
     * @param configureFlow
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedAuthenticatorDuoStageList
     * @throws ApiError
     */
    public static stagesAuthenticatorDuoList(
        apiHostname?: string,
        clientId?: string,
        configureFlow?: string,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedAuthenticatorDuoStageList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/authenticator/duo/',
            query: {
                'api_hostname': apiHostname,
                'client_id': clientId,
                'configure_flow': configureFlow,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
            },
        });
    }
    /**
     * AuthenticatorDuoStage Viewset
     * @param requestBody
     * @returns AuthenticatorDuoStage
     * @throws ApiError
     */
    public static stagesAuthenticatorDuoCreate(
        requestBody: AuthenticatorDuoStageRequest,
    ): CancelablePromise<AuthenticatorDuoStage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stages/authenticator/duo/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * AuthenticatorDuoStage Viewset
     * @param stageUuid A UUID string identifying this Duo Authenticator Setup Stage.
     * @returns AuthenticatorDuoStage
     * @throws ApiError
     */
    public static stagesAuthenticatorDuoRetrieve(
        stageUuid: string,
    ): CancelablePromise<AuthenticatorDuoStage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/authenticator/duo/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * AuthenticatorDuoStage Viewset
     * @param stageUuid A UUID string identifying this Duo Authenticator Setup Stage.
     * @param requestBody
     * @returns AuthenticatorDuoStage
     * @throws ApiError
     */
    public static stagesAuthenticatorDuoUpdate(
        stageUuid: string,
        requestBody: AuthenticatorDuoStageRequest,
    ): CancelablePromise<AuthenticatorDuoStage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/stages/authenticator/duo/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * AuthenticatorDuoStage Viewset
     * @param stageUuid A UUID string identifying this Duo Authenticator Setup Stage.
     * @param requestBody
     * @returns AuthenticatorDuoStage
     * @throws ApiError
     */
    public static stagesAuthenticatorDuoPartialUpdate(
        stageUuid: string,
        requestBody?: PatchedAuthenticatorDuoStageRequest,
    ): CancelablePromise<AuthenticatorDuoStage> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/stages/authenticator/duo/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * AuthenticatorDuoStage Viewset
     * @param stageUuid A UUID string identifying this Duo Authenticator Setup Stage.
     * @returns void
     * @throws ApiError
     */
    public static stagesAuthenticatorDuoDestroy(
        stageUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/stages/authenticator/duo/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * Check enrollment status of user details in current session
     * @param stageUuid A UUID string identifying this Duo Authenticator Setup Stage.
     * @returns DuoDeviceEnrollmentStatus
     * @throws ApiError
     */
    public static stagesAuthenticatorDuoEnrollmentStatusCreate(
        stageUuid: string,
    ): CancelablePromise<DuoDeviceEnrollmentStatus> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stages/authenticator/duo/{stage_uuid}/enrollment_status/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * Import duo devices into authentik
     * @param stageUuid A UUID string identifying this Duo Authenticator Setup Stage.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static stagesAuthenticatorDuoImportDeviceManualCreate(
        stageUuid: string,
        requestBody: AuthenticatorDuoStageManualDeviceImportRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stages/authenticator/duo/{stage_uuid}/import_device_manual/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Import duo devices into authentik
     * @param stageUuid A UUID string identifying this Duo Authenticator Setup Stage.
     * @returns AuthenticatorDuoStageDeviceImportResponse
     * @throws ApiError
     */
    public static stagesAuthenticatorDuoImportDevicesAutomaticCreate(
        stageUuid: string,
    ): CancelablePromise<AuthenticatorDuoStageDeviceImportResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stages/authenticator/duo/{stage_uuid}/import_devices_automatic/',
            path: {
                'stage_uuid': stageUuid,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param stageUuid A UUID string identifying this Duo Authenticator Setup Stage.
     * @returns UsedBy
     * @throws ApiError
     */
    public static stagesAuthenticatorDuoUsedByList(
        stageUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/authenticator/duo/{stage_uuid}/used_by/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * AuthenticatorEmailStage Viewset
     * @param configureFlow
     * @param friendlyName
     * @param fromAddress
     * @param host
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param password
     * @param port
     * @param search A search term.
     * @param stageUuid
     * @param subject
     * @param template
     * @param timeout
     * @param tokenExpiry
     * @param useGlobalSettings
     * @param useSsl
     * @param useTls
     * @param username
     * @returns PaginatedAuthenticatorEmailStageList
     * @throws ApiError
     */
    public static stagesAuthenticatorEmailList(
        configureFlow?: string,
        friendlyName?: string,
        fromAddress?: string,
        host?: string,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        password?: string,
        port?: number,
        search?: string,
        stageUuid?: string,
        subject?: string,
        template?: string,
        timeout?: number,
        tokenExpiry?: string,
        useGlobalSettings?: boolean,
        useSsl?: boolean,
        useTls?: boolean,
        username?: string,
    ): CancelablePromise<PaginatedAuthenticatorEmailStageList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/authenticator/email/',
            query: {
                'configure_flow': configureFlow,
                'friendly_name': friendlyName,
                'from_address': fromAddress,
                'host': host,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'password': password,
                'port': port,
                'search': search,
                'stage_uuid': stageUuid,
                'subject': subject,
                'template': template,
                'timeout': timeout,
                'token_expiry': tokenExpiry,
                'use_global_settings': useGlobalSettings,
                'use_ssl': useSsl,
                'use_tls': useTls,
                'username': username,
            },
        });
    }
    /**
     * AuthenticatorEmailStage Viewset
     * @param requestBody
     * @returns AuthenticatorEmailStage
     * @throws ApiError
     */
    public static stagesAuthenticatorEmailCreate(
        requestBody: AuthenticatorEmailStageRequest,
    ): CancelablePromise<AuthenticatorEmailStage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stages/authenticator/email/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * AuthenticatorEmailStage Viewset
     * @param stageUuid A UUID string identifying this Email Authenticator Setup Stage.
     * @returns AuthenticatorEmailStage
     * @throws ApiError
     */
    public static stagesAuthenticatorEmailRetrieve(
        stageUuid: string,
    ): CancelablePromise<AuthenticatorEmailStage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/authenticator/email/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * AuthenticatorEmailStage Viewset
     * @param stageUuid A UUID string identifying this Email Authenticator Setup Stage.
     * @param requestBody
     * @returns AuthenticatorEmailStage
     * @throws ApiError
     */
    public static stagesAuthenticatorEmailUpdate(
        stageUuid: string,
        requestBody: AuthenticatorEmailStageRequest,
    ): CancelablePromise<AuthenticatorEmailStage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/stages/authenticator/email/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * AuthenticatorEmailStage Viewset
     * @param stageUuid A UUID string identifying this Email Authenticator Setup Stage.
     * @param requestBody
     * @returns AuthenticatorEmailStage
     * @throws ApiError
     */
    public static stagesAuthenticatorEmailPartialUpdate(
        stageUuid: string,
        requestBody?: PatchedAuthenticatorEmailStageRequest,
    ): CancelablePromise<AuthenticatorEmailStage> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/stages/authenticator/email/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * AuthenticatorEmailStage Viewset
     * @param stageUuid A UUID string identifying this Email Authenticator Setup Stage.
     * @returns void
     * @throws ApiError
     */
    public static stagesAuthenticatorEmailDestroy(
        stageUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/stages/authenticator/email/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param stageUuid A UUID string identifying this Email Authenticator Setup Stage.
     * @returns UsedBy
     * @throws ApiError
     */
    public static stagesAuthenticatorEmailUsedByList(
        stageUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/authenticator/email/{stage_uuid}/used_by/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * AuthenticatorEndpointGDTCStage Viewset
     * @param configureFlow
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedAuthenticatorEndpointGDTCStageList
     * @throws ApiError
     */
    public static stagesAuthenticatorEndpointGdtcList(
        configureFlow?: string,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedAuthenticatorEndpointGDTCStageList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/authenticator/endpoint_gdtc/',
            query: {
                'configure_flow': configureFlow,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
            },
        });
    }
    /**
     * AuthenticatorEndpointGDTCStage Viewset
     * @param requestBody
     * @returns AuthenticatorEndpointGDTCStage
     * @throws ApiError
     */
    public static stagesAuthenticatorEndpointGdtcCreate(
        requestBody: AuthenticatorEndpointGDTCStageRequest,
    ): CancelablePromise<AuthenticatorEndpointGDTCStage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stages/authenticator/endpoint_gdtc/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * AuthenticatorEndpointGDTCStage Viewset
     * @param stageUuid A UUID string identifying this Endpoint Authenticator Google Device Trust Connector Stage.
     * @returns AuthenticatorEndpointGDTCStage
     * @throws ApiError
     */
    public static stagesAuthenticatorEndpointGdtcRetrieve(
        stageUuid: string,
    ): CancelablePromise<AuthenticatorEndpointGDTCStage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/authenticator/endpoint_gdtc/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * AuthenticatorEndpointGDTCStage Viewset
     * @param stageUuid A UUID string identifying this Endpoint Authenticator Google Device Trust Connector Stage.
     * @param requestBody
     * @returns AuthenticatorEndpointGDTCStage
     * @throws ApiError
     */
    public static stagesAuthenticatorEndpointGdtcUpdate(
        stageUuid: string,
        requestBody: AuthenticatorEndpointGDTCStageRequest,
    ): CancelablePromise<AuthenticatorEndpointGDTCStage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/stages/authenticator/endpoint_gdtc/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * AuthenticatorEndpointGDTCStage Viewset
     * @param stageUuid A UUID string identifying this Endpoint Authenticator Google Device Trust Connector Stage.
     * @param requestBody
     * @returns AuthenticatorEndpointGDTCStage
     * @throws ApiError
     */
    public static stagesAuthenticatorEndpointGdtcPartialUpdate(
        stageUuid: string,
        requestBody?: PatchedAuthenticatorEndpointGDTCStageRequest,
    ): CancelablePromise<AuthenticatorEndpointGDTCStage> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/stages/authenticator/endpoint_gdtc/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * AuthenticatorEndpointGDTCStage Viewset
     * @param stageUuid A UUID string identifying this Endpoint Authenticator Google Device Trust Connector Stage.
     * @returns void
     * @throws ApiError
     */
    public static stagesAuthenticatorEndpointGdtcDestroy(
        stageUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/stages/authenticator/endpoint_gdtc/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param stageUuid A UUID string identifying this Endpoint Authenticator Google Device Trust Connector Stage.
     * @returns UsedBy
     * @throws ApiError
     */
    public static stagesAuthenticatorEndpointGdtcUsedByList(
        stageUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/authenticator/endpoint_gdtc/{stage_uuid}/used_by/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * AuthenticatorSMSStage Viewset
     * @param accountSid
     * @param auth
     * @param authPassword
     * @param authType
     * @param configureFlow
     * @param friendlyName
     * @param fromNumber
     * @param mapping
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param provider
     * @param search A search term.
     * @param stageUuid
     * @param verifyOnly
     * @returns PaginatedAuthenticatorSMSStageList
     * @throws ApiError
     */
    public static stagesAuthenticatorSmsList(
        accountSid?: string,
        auth?: string,
        authPassword?: string,
        authType?: 'basic' | 'bearer',
        configureFlow?: string,
        friendlyName?: string,
        fromNumber?: string,
        mapping?: string,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        provider?: 'generic' | 'twilio',
        search?: string,
        stageUuid?: string,
        verifyOnly?: boolean,
    ): CancelablePromise<PaginatedAuthenticatorSMSStageList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/authenticator/sms/',
            query: {
                'account_sid': accountSid,
                'auth': auth,
                'auth_password': authPassword,
                'auth_type': authType,
                'configure_flow': configureFlow,
                'friendly_name': friendlyName,
                'from_number': fromNumber,
                'mapping': mapping,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'provider': provider,
                'search': search,
                'stage_uuid': stageUuid,
                'verify_only': verifyOnly,
            },
        });
    }
    /**
     * AuthenticatorSMSStage Viewset
     * @param requestBody
     * @returns AuthenticatorSMSStage
     * @throws ApiError
     */
    public static stagesAuthenticatorSmsCreate(
        requestBody: AuthenticatorSMSStageRequest,
    ): CancelablePromise<AuthenticatorSMSStage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stages/authenticator/sms/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * AuthenticatorSMSStage Viewset
     * @param stageUuid A UUID string identifying this SMS Authenticator Setup Stage.
     * @returns AuthenticatorSMSStage
     * @throws ApiError
     */
    public static stagesAuthenticatorSmsRetrieve(
        stageUuid: string,
    ): CancelablePromise<AuthenticatorSMSStage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/authenticator/sms/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * AuthenticatorSMSStage Viewset
     * @param stageUuid A UUID string identifying this SMS Authenticator Setup Stage.
     * @param requestBody
     * @returns AuthenticatorSMSStage
     * @throws ApiError
     */
    public static stagesAuthenticatorSmsUpdate(
        stageUuid: string,
        requestBody: AuthenticatorSMSStageRequest,
    ): CancelablePromise<AuthenticatorSMSStage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/stages/authenticator/sms/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * AuthenticatorSMSStage Viewset
     * @param stageUuid A UUID string identifying this SMS Authenticator Setup Stage.
     * @param requestBody
     * @returns AuthenticatorSMSStage
     * @throws ApiError
     */
    public static stagesAuthenticatorSmsPartialUpdate(
        stageUuid: string,
        requestBody?: PatchedAuthenticatorSMSStageRequest,
    ): CancelablePromise<AuthenticatorSMSStage> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/stages/authenticator/sms/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * AuthenticatorSMSStage Viewset
     * @param stageUuid A UUID string identifying this SMS Authenticator Setup Stage.
     * @returns void
     * @throws ApiError
     */
    public static stagesAuthenticatorSmsDestroy(
        stageUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/stages/authenticator/sms/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param stageUuid A UUID string identifying this SMS Authenticator Setup Stage.
     * @returns UsedBy
     * @throws ApiError
     */
    public static stagesAuthenticatorSmsUsedByList(
        stageUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/authenticator/sms/{stage_uuid}/used_by/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * AuthenticatorStaticStage Viewset
     * @param configureFlow
     * @param friendlyName
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param stageUuid
     * @param tokenCount
     * @param tokenLength
     * @returns PaginatedAuthenticatorStaticStageList
     * @throws ApiError
     */
    public static stagesAuthenticatorStaticList(
        configureFlow?: string,
        friendlyName?: string,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        stageUuid?: string,
        tokenCount?: number,
        tokenLength?: number,
    ): CancelablePromise<PaginatedAuthenticatorStaticStageList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/authenticator/static/',
            query: {
                'configure_flow': configureFlow,
                'friendly_name': friendlyName,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'stage_uuid': stageUuid,
                'token_count': tokenCount,
                'token_length': tokenLength,
            },
        });
    }
    /**
     * AuthenticatorStaticStage Viewset
     * @param requestBody
     * @returns AuthenticatorStaticStage
     * @throws ApiError
     */
    public static stagesAuthenticatorStaticCreate(
        requestBody: AuthenticatorStaticStageRequest,
    ): CancelablePromise<AuthenticatorStaticStage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stages/authenticator/static/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * AuthenticatorStaticStage Viewset
     * @param stageUuid A UUID string identifying this Static Authenticator Setup Stage.
     * @returns AuthenticatorStaticStage
     * @throws ApiError
     */
    public static stagesAuthenticatorStaticRetrieve(
        stageUuid: string,
    ): CancelablePromise<AuthenticatorStaticStage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/authenticator/static/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * AuthenticatorStaticStage Viewset
     * @param stageUuid A UUID string identifying this Static Authenticator Setup Stage.
     * @param requestBody
     * @returns AuthenticatorStaticStage
     * @throws ApiError
     */
    public static stagesAuthenticatorStaticUpdate(
        stageUuid: string,
        requestBody: AuthenticatorStaticStageRequest,
    ): CancelablePromise<AuthenticatorStaticStage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/stages/authenticator/static/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * AuthenticatorStaticStage Viewset
     * @param stageUuid A UUID string identifying this Static Authenticator Setup Stage.
     * @param requestBody
     * @returns AuthenticatorStaticStage
     * @throws ApiError
     */
    public static stagesAuthenticatorStaticPartialUpdate(
        stageUuid: string,
        requestBody?: PatchedAuthenticatorStaticStageRequest,
    ): CancelablePromise<AuthenticatorStaticStage> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/stages/authenticator/static/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * AuthenticatorStaticStage Viewset
     * @param stageUuid A UUID string identifying this Static Authenticator Setup Stage.
     * @returns void
     * @throws ApiError
     */
    public static stagesAuthenticatorStaticDestroy(
        stageUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/stages/authenticator/static/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param stageUuid A UUID string identifying this Static Authenticator Setup Stage.
     * @returns UsedBy
     * @throws ApiError
     */
    public static stagesAuthenticatorStaticUsedByList(
        stageUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/authenticator/static/{stage_uuid}/used_by/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * AuthenticatorTOTPStage Viewset
     * @param configureFlow
     * @param digits
     * @param friendlyName
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param stageUuid
     * @returns PaginatedAuthenticatorTOTPStageList
     * @throws ApiError
     */
    public static stagesAuthenticatorTotpList(
        configureFlow?: string,
        digits?: '6' | '8',
        friendlyName?: string,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        stageUuid?: string,
    ): CancelablePromise<PaginatedAuthenticatorTOTPStageList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/authenticator/totp/',
            query: {
                'configure_flow': configureFlow,
                'digits': digits,
                'friendly_name': friendlyName,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * AuthenticatorTOTPStage Viewset
     * @param requestBody
     * @returns AuthenticatorTOTPStage
     * @throws ApiError
     */
    public static stagesAuthenticatorTotpCreate(
        requestBody: AuthenticatorTOTPStageRequest,
    ): CancelablePromise<AuthenticatorTOTPStage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stages/authenticator/totp/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * AuthenticatorTOTPStage Viewset
     * @param stageUuid A UUID string identifying this TOTP Authenticator Setup Stage.
     * @returns AuthenticatorTOTPStage
     * @throws ApiError
     */
    public static stagesAuthenticatorTotpRetrieve(
        stageUuid: string,
    ): CancelablePromise<AuthenticatorTOTPStage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/authenticator/totp/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * AuthenticatorTOTPStage Viewset
     * @param stageUuid A UUID string identifying this TOTP Authenticator Setup Stage.
     * @param requestBody
     * @returns AuthenticatorTOTPStage
     * @throws ApiError
     */
    public static stagesAuthenticatorTotpUpdate(
        stageUuid: string,
        requestBody: AuthenticatorTOTPStageRequest,
    ): CancelablePromise<AuthenticatorTOTPStage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/stages/authenticator/totp/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * AuthenticatorTOTPStage Viewset
     * @param stageUuid A UUID string identifying this TOTP Authenticator Setup Stage.
     * @param requestBody
     * @returns AuthenticatorTOTPStage
     * @throws ApiError
     */
    public static stagesAuthenticatorTotpPartialUpdate(
        stageUuid: string,
        requestBody?: PatchedAuthenticatorTOTPStageRequest,
    ): CancelablePromise<AuthenticatorTOTPStage> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/stages/authenticator/totp/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * AuthenticatorTOTPStage Viewset
     * @param stageUuid A UUID string identifying this TOTP Authenticator Setup Stage.
     * @returns void
     * @throws ApiError
     */
    public static stagesAuthenticatorTotpDestroy(
        stageUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/stages/authenticator/totp/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param stageUuid A UUID string identifying this TOTP Authenticator Setup Stage.
     * @returns UsedBy
     * @throws ApiError
     */
    public static stagesAuthenticatorTotpUsedByList(
        stageUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/authenticator/totp/{stage_uuid}/used_by/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * AuthenticatorValidateStage Viewset
     * @param configurationStages
     * @param name
     * @param notConfiguredAction
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedAuthenticatorValidateStageList
     * @throws ApiError
     */
    public static stagesAuthenticatorValidateList(
        configurationStages?: Array<string>,
        name?: string,
        notConfiguredAction?: 'configure' | 'deny' | 'skip',
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedAuthenticatorValidateStageList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/authenticator/validate/',
            query: {
                'configuration_stages': configurationStages,
                'name': name,
                'not_configured_action': notConfiguredAction,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
            },
        });
    }
    /**
     * AuthenticatorValidateStage Viewset
     * @param requestBody
     * @returns AuthenticatorValidateStage
     * @throws ApiError
     */
    public static stagesAuthenticatorValidateCreate(
        requestBody: AuthenticatorValidateStageRequest,
    ): CancelablePromise<AuthenticatorValidateStage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stages/authenticator/validate/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * AuthenticatorValidateStage Viewset
     * @param stageUuid A UUID string identifying this Authenticator Validation Stage.
     * @returns AuthenticatorValidateStage
     * @throws ApiError
     */
    public static stagesAuthenticatorValidateRetrieve(
        stageUuid: string,
    ): CancelablePromise<AuthenticatorValidateStage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/authenticator/validate/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * AuthenticatorValidateStage Viewset
     * @param stageUuid A UUID string identifying this Authenticator Validation Stage.
     * @param requestBody
     * @returns AuthenticatorValidateStage
     * @throws ApiError
     */
    public static stagesAuthenticatorValidateUpdate(
        stageUuid: string,
        requestBody: AuthenticatorValidateStageRequest,
    ): CancelablePromise<AuthenticatorValidateStage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/stages/authenticator/validate/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * AuthenticatorValidateStage Viewset
     * @param stageUuid A UUID string identifying this Authenticator Validation Stage.
     * @param requestBody
     * @returns AuthenticatorValidateStage
     * @throws ApiError
     */
    public static stagesAuthenticatorValidatePartialUpdate(
        stageUuid: string,
        requestBody?: PatchedAuthenticatorValidateStageRequest,
    ): CancelablePromise<AuthenticatorValidateStage> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/stages/authenticator/validate/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * AuthenticatorValidateStage Viewset
     * @param stageUuid A UUID string identifying this Authenticator Validation Stage.
     * @returns void
     * @throws ApiError
     */
    public static stagesAuthenticatorValidateDestroy(
        stageUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/stages/authenticator/validate/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param stageUuid A UUID string identifying this Authenticator Validation Stage.
     * @returns UsedBy
     * @throws ApiError
     */
    public static stagesAuthenticatorValidateUsedByList(
        stageUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/authenticator/validate/{stage_uuid}/used_by/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * AuthenticatorWebAuthnStage Viewset
     * @param authenticatorAttachment
     * @param configureFlow
     * @param deviceTypeRestrictions
     * @param friendlyName
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param residentKeyRequirement
     * @param search A search term.
     * @param stageUuid
     * @param userVerification
     * @returns PaginatedAuthenticatorWebAuthnStageList
     * @throws ApiError
     */
    public static stagesAuthenticatorWebauthnList(
        authenticatorAttachment?: 'cross-platform' | 'platform' | null,
        configureFlow?: string,
        deviceTypeRestrictions?: Array<string>,
        friendlyName?: string,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        residentKeyRequirement?: 'discouraged' | 'preferred' | 'required',
        search?: string,
        stageUuid?: string,
        userVerification?: 'discouraged' | 'preferred' | 'required',
    ): CancelablePromise<PaginatedAuthenticatorWebAuthnStageList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/authenticator/webauthn/',
            query: {
                'authenticator_attachment': authenticatorAttachment,
                'configure_flow': configureFlow,
                'device_type_restrictions': deviceTypeRestrictions,
                'friendly_name': friendlyName,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'resident_key_requirement': residentKeyRequirement,
                'search': search,
                'stage_uuid': stageUuid,
                'user_verification': userVerification,
            },
        });
    }
    /**
     * AuthenticatorWebAuthnStage Viewset
     * @param requestBody
     * @returns AuthenticatorWebAuthnStage
     * @throws ApiError
     */
    public static stagesAuthenticatorWebauthnCreate(
        requestBody: AuthenticatorWebAuthnStageRequest,
    ): CancelablePromise<AuthenticatorWebAuthnStage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stages/authenticator/webauthn/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * AuthenticatorWebAuthnStage Viewset
     * @param stageUuid A UUID string identifying this WebAuthn Authenticator Setup Stage.
     * @returns AuthenticatorWebAuthnStage
     * @throws ApiError
     */
    public static stagesAuthenticatorWebauthnRetrieve(
        stageUuid: string,
    ): CancelablePromise<AuthenticatorWebAuthnStage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/authenticator/webauthn/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * AuthenticatorWebAuthnStage Viewset
     * @param stageUuid A UUID string identifying this WebAuthn Authenticator Setup Stage.
     * @param requestBody
     * @returns AuthenticatorWebAuthnStage
     * @throws ApiError
     */
    public static stagesAuthenticatorWebauthnUpdate(
        stageUuid: string,
        requestBody: AuthenticatorWebAuthnStageRequest,
    ): CancelablePromise<AuthenticatorWebAuthnStage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/stages/authenticator/webauthn/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * AuthenticatorWebAuthnStage Viewset
     * @param stageUuid A UUID string identifying this WebAuthn Authenticator Setup Stage.
     * @param requestBody
     * @returns AuthenticatorWebAuthnStage
     * @throws ApiError
     */
    public static stagesAuthenticatorWebauthnPartialUpdate(
        stageUuid: string,
        requestBody?: PatchedAuthenticatorWebAuthnStageRequest,
    ): CancelablePromise<AuthenticatorWebAuthnStage> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/stages/authenticator/webauthn/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * AuthenticatorWebAuthnStage Viewset
     * @param stageUuid A UUID string identifying this WebAuthn Authenticator Setup Stage.
     * @returns void
     * @throws ApiError
     */
    public static stagesAuthenticatorWebauthnDestroy(
        stageUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/stages/authenticator/webauthn/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param stageUuid A UUID string identifying this WebAuthn Authenticator Setup Stage.
     * @returns UsedBy
     * @throws ApiError
     */
    public static stagesAuthenticatorWebauthnUsedByList(
        stageUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/authenticator/webauthn/{stage_uuid}/used_by/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * WebAuthnDeviceType Viewset
     * @param aaguid
     * @param description
     * @param icon
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedWebAuthnDeviceTypeList
     * @throws ApiError
     */
    public static stagesAuthenticatorWebauthnDeviceTypesList(
        aaguid?: string,
        description?: string,
        icon?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedWebAuthnDeviceTypeList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/authenticator/webauthn_device_types/',
            query: {
                'aaguid': aaguid,
                'description': description,
                'icon': icon,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
            },
        });
    }
    /**
     * WebAuthnDeviceType Viewset
     * @param aaguid A UUID string identifying this WebAuthn Device type.
     * @returns WebAuthnDeviceType
     * @throws ApiError
     */
    public static stagesAuthenticatorWebauthnDeviceTypesRetrieve(
        aaguid: string,
    ): CancelablePromise<WebAuthnDeviceType> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/authenticator/webauthn_device_types/{aaguid}/',
            path: {
                'aaguid': aaguid,
            },
        });
    }
    /**
     * CaptchaStage Viewset
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param publicKey
     * @param search A search term.
     * @returns PaginatedCaptchaStageList
     * @throws ApiError
     */
    public static stagesCaptchaList(
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        publicKey?: string,
        search?: string,
    ): CancelablePromise<PaginatedCaptchaStageList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/captcha/',
            query: {
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'public_key': publicKey,
                'search': search,
            },
        });
    }
    /**
     * CaptchaStage Viewset
     * @param requestBody
     * @returns CaptchaStage
     * @throws ApiError
     */
    public static stagesCaptchaCreate(
        requestBody: CaptchaStageRequest,
    ): CancelablePromise<CaptchaStage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stages/captcha/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * CaptchaStage Viewset
     * @param stageUuid A UUID string identifying this Captcha Stage.
     * @returns CaptchaStage
     * @throws ApiError
     */
    public static stagesCaptchaRetrieve(
        stageUuid: string,
    ): CancelablePromise<CaptchaStage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/captcha/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * CaptchaStage Viewset
     * @param stageUuid A UUID string identifying this Captcha Stage.
     * @param requestBody
     * @returns CaptchaStage
     * @throws ApiError
     */
    public static stagesCaptchaUpdate(
        stageUuid: string,
        requestBody: CaptchaStageRequest,
    ): CancelablePromise<CaptchaStage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/stages/captcha/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * CaptchaStage Viewset
     * @param stageUuid A UUID string identifying this Captcha Stage.
     * @param requestBody
     * @returns CaptchaStage
     * @throws ApiError
     */
    public static stagesCaptchaPartialUpdate(
        stageUuid: string,
        requestBody?: PatchedCaptchaStageRequest,
    ): CancelablePromise<CaptchaStage> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/stages/captcha/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * CaptchaStage Viewset
     * @param stageUuid A UUID string identifying this Captcha Stage.
     * @returns void
     * @throws ApiError
     */
    public static stagesCaptchaDestroy(
        stageUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/stages/captcha/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param stageUuid A UUID string identifying this Captcha Stage.
     * @returns UsedBy
     * @throws ApiError
     */
    public static stagesCaptchaUsedByList(
        stageUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/captcha/{stage_uuid}/used_by/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * ConsentStage Viewset
     * @param consentExpireIn
     * @param mode
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param stageUuid
     * @returns PaginatedConsentStageList
     * @throws ApiError
     */
    public static stagesConsentList(
        consentExpireIn?: string,
        mode?: 'always_require' | 'expiring' | 'permanent',
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        stageUuid?: string,
    ): CancelablePromise<PaginatedConsentStageList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/consent/',
            query: {
                'consent_expire_in': consentExpireIn,
                'mode': mode,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * ConsentStage Viewset
     * @param requestBody
     * @returns ConsentStage
     * @throws ApiError
     */
    public static stagesConsentCreate(
        requestBody: ConsentStageRequest,
    ): CancelablePromise<ConsentStage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stages/consent/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * ConsentStage Viewset
     * @param stageUuid A UUID string identifying this Consent Stage.
     * @returns ConsentStage
     * @throws ApiError
     */
    public static stagesConsentRetrieve(
        stageUuid: string,
    ): CancelablePromise<ConsentStage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/consent/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * ConsentStage Viewset
     * @param stageUuid A UUID string identifying this Consent Stage.
     * @param requestBody
     * @returns ConsentStage
     * @throws ApiError
     */
    public static stagesConsentUpdate(
        stageUuid: string,
        requestBody: ConsentStageRequest,
    ): CancelablePromise<ConsentStage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/stages/consent/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * ConsentStage Viewset
     * @param stageUuid A UUID string identifying this Consent Stage.
     * @param requestBody
     * @returns ConsentStage
     * @throws ApiError
     */
    public static stagesConsentPartialUpdate(
        stageUuid: string,
        requestBody?: PatchedConsentStageRequest,
    ): CancelablePromise<ConsentStage> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/stages/consent/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * ConsentStage Viewset
     * @param stageUuid A UUID string identifying this Consent Stage.
     * @returns void
     * @throws ApiError
     */
    public static stagesConsentDestroy(
        stageUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/stages/consent/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param stageUuid A UUID string identifying this Consent Stage.
     * @returns UsedBy
     * @throws ApiError
     */
    public static stagesConsentUsedByList(
        stageUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/consent/{stage_uuid}/used_by/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * DenyStage Viewset
     * @param denyMessage
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param stageUuid
     * @returns PaginatedDenyStageList
     * @throws ApiError
     */
    public static stagesDenyList(
        denyMessage?: string,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        stageUuid?: string,
    ): CancelablePromise<PaginatedDenyStageList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/deny/',
            query: {
                'deny_message': denyMessage,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * DenyStage Viewset
     * @param requestBody
     * @returns DenyStage
     * @throws ApiError
     */
    public static stagesDenyCreate(
        requestBody: DenyStageRequest,
    ): CancelablePromise<DenyStage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stages/deny/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * DenyStage Viewset
     * @param stageUuid A UUID string identifying this Deny Stage.
     * @returns DenyStage
     * @throws ApiError
     */
    public static stagesDenyRetrieve(
        stageUuid: string,
    ): CancelablePromise<DenyStage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/deny/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * DenyStage Viewset
     * @param stageUuid A UUID string identifying this Deny Stage.
     * @param requestBody
     * @returns DenyStage
     * @throws ApiError
     */
    public static stagesDenyUpdate(
        stageUuid: string,
        requestBody: DenyStageRequest,
    ): CancelablePromise<DenyStage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/stages/deny/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * DenyStage Viewset
     * @param stageUuid A UUID string identifying this Deny Stage.
     * @param requestBody
     * @returns DenyStage
     * @throws ApiError
     */
    public static stagesDenyPartialUpdate(
        stageUuid: string,
        requestBody?: PatchedDenyStageRequest,
    ): CancelablePromise<DenyStage> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/stages/deny/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * DenyStage Viewset
     * @param stageUuid A UUID string identifying this Deny Stage.
     * @returns void
     * @throws ApiError
     */
    public static stagesDenyDestroy(
        stageUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/stages/deny/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param stageUuid A UUID string identifying this Deny Stage.
     * @returns UsedBy
     * @throws ApiError
     */
    public static stagesDenyUsedByList(
        stageUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/deny/{stage_uuid}/used_by/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * DummyStage Viewset
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param stageUuid
     * @param throwError
     * @returns PaginatedDummyStageList
     * @throws ApiError
     */
    public static stagesDummyList(
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        stageUuid?: string,
        throwError?: boolean,
    ): CancelablePromise<PaginatedDummyStageList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/dummy/',
            query: {
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'stage_uuid': stageUuid,
                'throw_error': throwError,
            },
        });
    }
    /**
     * DummyStage Viewset
     * @param requestBody
     * @returns DummyStage
     * @throws ApiError
     */
    public static stagesDummyCreate(
        requestBody: DummyStageRequest,
    ): CancelablePromise<DummyStage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stages/dummy/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * DummyStage Viewset
     * @param stageUuid A UUID string identifying this Dummy Stage.
     * @returns DummyStage
     * @throws ApiError
     */
    public static stagesDummyRetrieve(
        stageUuid: string,
    ): CancelablePromise<DummyStage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/dummy/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * DummyStage Viewset
     * @param stageUuid A UUID string identifying this Dummy Stage.
     * @param requestBody
     * @returns DummyStage
     * @throws ApiError
     */
    public static stagesDummyUpdate(
        stageUuid: string,
        requestBody: DummyStageRequest,
    ): CancelablePromise<DummyStage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/stages/dummy/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * DummyStage Viewset
     * @param stageUuid A UUID string identifying this Dummy Stage.
     * @param requestBody
     * @returns DummyStage
     * @throws ApiError
     */
    public static stagesDummyPartialUpdate(
        stageUuid: string,
        requestBody?: PatchedDummyStageRequest,
    ): CancelablePromise<DummyStage> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/stages/dummy/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * DummyStage Viewset
     * @param stageUuid A UUID string identifying this Dummy Stage.
     * @returns void
     * @throws ApiError
     */
    public static stagesDummyDestroy(
        stageUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/stages/dummy/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param stageUuid A UUID string identifying this Dummy Stage.
     * @returns UsedBy
     * @throws ApiError
     */
    public static stagesDummyUsedByList(
        stageUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/dummy/{stage_uuid}/used_by/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * EmailStage Viewset
     * @param activateUserOnSuccess
     * @param fromAddress
     * @param host
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param port
     * @param search A search term.
     * @param subject
     * @param template
     * @param timeout
     * @param tokenExpiry
     * @param useGlobalSettings
     * @param useSsl
     * @param useTls
     * @param username
     * @returns PaginatedEmailStageList
     * @throws ApiError
     */
    public static stagesEmailList(
        activateUserOnSuccess?: boolean,
        fromAddress?: string,
        host?: string,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        port?: number,
        search?: string,
        subject?: string,
        template?: string,
        timeout?: number,
        tokenExpiry?: string,
        useGlobalSettings?: boolean,
        useSsl?: boolean,
        useTls?: boolean,
        username?: string,
    ): CancelablePromise<PaginatedEmailStageList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/email/',
            query: {
                'activate_user_on_success': activateUserOnSuccess,
                'from_address': fromAddress,
                'host': host,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'port': port,
                'search': search,
                'subject': subject,
                'template': template,
                'timeout': timeout,
                'token_expiry': tokenExpiry,
                'use_global_settings': useGlobalSettings,
                'use_ssl': useSsl,
                'use_tls': useTls,
                'username': username,
            },
        });
    }
    /**
     * EmailStage Viewset
     * @param requestBody
     * @returns EmailStage
     * @throws ApiError
     */
    public static stagesEmailCreate(
        requestBody: EmailStageRequest,
    ): CancelablePromise<EmailStage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stages/email/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * EmailStage Viewset
     * @param stageUuid A UUID string identifying this Email Stage.
     * @returns EmailStage
     * @throws ApiError
     */
    public static stagesEmailRetrieve(
        stageUuid: string,
    ): CancelablePromise<EmailStage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/email/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * EmailStage Viewset
     * @param stageUuid A UUID string identifying this Email Stage.
     * @param requestBody
     * @returns EmailStage
     * @throws ApiError
     */
    public static stagesEmailUpdate(
        stageUuid: string,
        requestBody: EmailStageRequest,
    ): CancelablePromise<EmailStage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/stages/email/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * EmailStage Viewset
     * @param stageUuid A UUID string identifying this Email Stage.
     * @param requestBody
     * @returns EmailStage
     * @throws ApiError
     */
    public static stagesEmailPartialUpdate(
        stageUuid: string,
        requestBody?: PatchedEmailStageRequest,
    ): CancelablePromise<EmailStage> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/stages/email/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * EmailStage Viewset
     * @param stageUuid A UUID string identifying this Email Stage.
     * @returns void
     * @throws ApiError
     */
    public static stagesEmailDestroy(
        stageUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/stages/email/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param stageUuid A UUID string identifying this Email Stage.
     * @returns UsedBy
     * @throws ApiError
     */
    public static stagesEmailUsedByList(
        stageUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/email/{stage_uuid}/used_by/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * Get all available templates, including custom templates
     * @returns TypeCreate
     * @throws ApiError
     */
    public static stagesEmailTemplatesList(): CancelablePromise<Array<TypeCreate>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/email/templates/',
        });
    }
    /**
     * IdentificationStage Viewset
     * @param captchaStage
     * @param caseInsensitiveMatching
     * @param enrollmentFlow
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param passwordStage
     * @param passwordlessFlow
     * @param recoveryFlow
     * @param search A search term.
     * @param showMatchedUser
     * @param showSourceLabels
     * @returns PaginatedIdentificationStageList
     * @throws ApiError
     */
    public static stagesIdentificationList(
        captchaStage?: string,
        caseInsensitiveMatching?: boolean,
        enrollmentFlow?: string,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        passwordStage?: string,
        passwordlessFlow?: string,
        recoveryFlow?: string,
        search?: string,
        showMatchedUser?: boolean,
        showSourceLabels?: boolean,
    ): CancelablePromise<PaginatedIdentificationStageList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/identification/',
            query: {
                'captcha_stage': captchaStage,
                'case_insensitive_matching': caseInsensitiveMatching,
                'enrollment_flow': enrollmentFlow,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'password_stage': passwordStage,
                'passwordless_flow': passwordlessFlow,
                'recovery_flow': recoveryFlow,
                'search': search,
                'show_matched_user': showMatchedUser,
                'show_source_labels': showSourceLabels,
            },
        });
    }
    /**
     * IdentificationStage Viewset
     * @param requestBody
     * @returns IdentificationStage
     * @throws ApiError
     */
    public static stagesIdentificationCreate(
        requestBody: IdentificationStageRequest,
    ): CancelablePromise<IdentificationStage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stages/identification/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * IdentificationStage Viewset
     * @param stageUuid A UUID string identifying this Identification Stage.
     * @returns IdentificationStage
     * @throws ApiError
     */
    public static stagesIdentificationRetrieve(
        stageUuid: string,
    ): CancelablePromise<IdentificationStage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/identification/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * IdentificationStage Viewset
     * @param stageUuid A UUID string identifying this Identification Stage.
     * @param requestBody
     * @returns IdentificationStage
     * @throws ApiError
     */
    public static stagesIdentificationUpdate(
        stageUuid: string,
        requestBody: IdentificationStageRequest,
    ): CancelablePromise<IdentificationStage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/stages/identification/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * IdentificationStage Viewset
     * @param stageUuid A UUID string identifying this Identification Stage.
     * @param requestBody
     * @returns IdentificationStage
     * @throws ApiError
     */
    public static stagesIdentificationPartialUpdate(
        stageUuid: string,
        requestBody?: PatchedIdentificationStageRequest,
    ): CancelablePromise<IdentificationStage> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/stages/identification/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * IdentificationStage Viewset
     * @param stageUuid A UUID string identifying this Identification Stage.
     * @returns void
     * @throws ApiError
     */
    public static stagesIdentificationDestroy(
        stageUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/stages/identification/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param stageUuid A UUID string identifying this Identification Stage.
     * @returns UsedBy
     * @throws ApiError
     */
    public static stagesIdentificationUsedByList(
        stageUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/identification/{stage_uuid}/used_by/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * Invitation Viewset
     * @param createdByUsername
     * @param expires
     * @param flowSlug
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedInvitationList
     * @throws ApiError
     */
    public static stagesInvitationInvitationsList(
        createdByUsername?: string,
        expires?: string,
        flowSlug?: string,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedInvitationList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/invitation/invitations/',
            query: {
                'created_by__username': createdByUsername,
                'expires': expires,
                'flow__slug': flowSlug,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
            },
        });
    }
    /**
     * Invitation Viewset
     * @param requestBody
     * @returns Invitation
     * @throws ApiError
     */
    public static stagesInvitationInvitationsCreate(
        requestBody: InvitationRequest,
    ): CancelablePromise<Invitation> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stages/invitation/invitations/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Invitation Viewset
     * @param inviteUuid A UUID string identifying this Invitation.
     * @returns Invitation
     * @throws ApiError
     */
    public static stagesInvitationInvitationsRetrieve(
        inviteUuid: string,
    ): CancelablePromise<Invitation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/invitation/invitations/{invite_uuid}/',
            path: {
                'invite_uuid': inviteUuid,
            },
        });
    }
    /**
     * Invitation Viewset
     * @param inviteUuid A UUID string identifying this Invitation.
     * @param requestBody
     * @returns Invitation
     * @throws ApiError
     */
    public static stagesInvitationInvitationsUpdate(
        inviteUuid: string,
        requestBody: InvitationRequest,
    ): CancelablePromise<Invitation> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/stages/invitation/invitations/{invite_uuid}/',
            path: {
                'invite_uuid': inviteUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Invitation Viewset
     * @param inviteUuid A UUID string identifying this Invitation.
     * @param requestBody
     * @returns Invitation
     * @throws ApiError
     */
    public static stagesInvitationInvitationsPartialUpdate(
        inviteUuid: string,
        requestBody?: PatchedInvitationRequest,
    ): CancelablePromise<Invitation> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/stages/invitation/invitations/{invite_uuid}/',
            path: {
                'invite_uuid': inviteUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Invitation Viewset
     * @param inviteUuid A UUID string identifying this Invitation.
     * @returns void
     * @throws ApiError
     */
    public static stagesInvitationInvitationsDestroy(
        inviteUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/stages/invitation/invitations/{invite_uuid}/',
            path: {
                'invite_uuid': inviteUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param inviteUuid A UUID string identifying this Invitation.
     * @returns UsedBy
     * @throws ApiError
     */
    public static stagesInvitationInvitationsUsedByList(
        inviteUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/invitation/invitations/{invite_uuid}/used_by/',
            path: {
                'invite_uuid': inviteUuid,
            },
        });
    }
    /**
     * InvitationStage Viewset
     * @param continueFlowWithoutInvitation
     * @param name
     * @param noFlows
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param stageUuid
     * @returns PaginatedInvitationStageList
     * @throws ApiError
     */
    public static stagesInvitationStagesList(
        continueFlowWithoutInvitation?: boolean,
        name?: string,
        noFlows?: boolean,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        stageUuid?: string,
    ): CancelablePromise<PaginatedInvitationStageList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/invitation/stages/',
            query: {
                'continue_flow_without_invitation': continueFlowWithoutInvitation,
                'name': name,
                'no_flows': noFlows,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * InvitationStage Viewset
     * @param requestBody
     * @returns InvitationStage
     * @throws ApiError
     */
    public static stagesInvitationStagesCreate(
        requestBody: InvitationStageRequest,
    ): CancelablePromise<InvitationStage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stages/invitation/stages/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * InvitationStage Viewset
     * @param stageUuid A UUID string identifying this Invitation Stage.
     * @returns InvitationStage
     * @throws ApiError
     */
    public static stagesInvitationStagesRetrieve(
        stageUuid: string,
    ): CancelablePromise<InvitationStage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/invitation/stages/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * InvitationStage Viewset
     * @param stageUuid A UUID string identifying this Invitation Stage.
     * @param requestBody
     * @returns InvitationStage
     * @throws ApiError
     */
    public static stagesInvitationStagesUpdate(
        stageUuid: string,
        requestBody: InvitationStageRequest,
    ): CancelablePromise<InvitationStage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/stages/invitation/stages/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * InvitationStage Viewset
     * @param stageUuid A UUID string identifying this Invitation Stage.
     * @param requestBody
     * @returns InvitationStage
     * @throws ApiError
     */
    public static stagesInvitationStagesPartialUpdate(
        stageUuid: string,
        requestBody?: PatchedInvitationStageRequest,
    ): CancelablePromise<InvitationStage> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/stages/invitation/stages/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * InvitationStage Viewset
     * @param stageUuid A UUID string identifying this Invitation Stage.
     * @returns void
     * @throws ApiError
     */
    public static stagesInvitationStagesDestroy(
        stageUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/stages/invitation/stages/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param stageUuid A UUID string identifying this Invitation Stage.
     * @returns UsedBy
     * @throws ApiError
     */
    public static stagesInvitationStagesUsedByList(
        stageUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/invitation/stages/{stage_uuid}/used_by/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * MutualTLSStage Viewset
     * @param certAttribute
     * @param certificateAuthorities
     * @param mode
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param stageUuid
     * @param userAttribute
     * @returns PaginatedMutualTLSStageList
     * @throws ApiError
     */
    public static stagesMtlsList(
        certAttribute?: 'common_name' | 'email' | 'subject',
        certificateAuthorities?: Array<string>,
        mode?: 'optional' | 'required',
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        stageUuid?: string,
        userAttribute?: 'email' | 'username',
    ): CancelablePromise<PaginatedMutualTLSStageList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/mtls/',
            query: {
                'cert_attribute': certAttribute,
                'certificate_authorities': certificateAuthorities,
                'mode': mode,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'stage_uuid': stageUuid,
                'user_attribute': userAttribute,
            },
        });
    }
    /**
     * MutualTLSStage Viewset
     * @param requestBody
     * @returns MutualTLSStage
     * @throws ApiError
     */
    public static stagesMtlsCreate(
        requestBody: MutualTLSStageRequest,
    ): CancelablePromise<MutualTLSStage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stages/mtls/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * MutualTLSStage Viewset
     * @param stageUuid A UUID string identifying this Mutual TLS Stage.
     * @returns MutualTLSStage
     * @throws ApiError
     */
    public static stagesMtlsRetrieve(
        stageUuid: string,
    ): CancelablePromise<MutualTLSStage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/mtls/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * MutualTLSStage Viewset
     * @param stageUuid A UUID string identifying this Mutual TLS Stage.
     * @param requestBody
     * @returns MutualTLSStage
     * @throws ApiError
     */
    public static stagesMtlsUpdate(
        stageUuid: string,
        requestBody: MutualTLSStageRequest,
    ): CancelablePromise<MutualTLSStage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/stages/mtls/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * MutualTLSStage Viewset
     * @param stageUuid A UUID string identifying this Mutual TLS Stage.
     * @param requestBody
     * @returns MutualTLSStage
     * @throws ApiError
     */
    public static stagesMtlsPartialUpdate(
        stageUuid: string,
        requestBody?: PatchedMutualTLSStageRequest,
    ): CancelablePromise<MutualTLSStage> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/stages/mtls/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * MutualTLSStage Viewset
     * @param stageUuid A UUID string identifying this Mutual TLS Stage.
     * @returns void
     * @throws ApiError
     */
    public static stagesMtlsDestroy(
        stageUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/stages/mtls/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param stageUuid A UUID string identifying this Mutual TLS Stage.
     * @returns UsedBy
     * @throws ApiError
     */
    public static stagesMtlsUsedByList(
        stageUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/mtls/{stage_uuid}/used_by/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * PasswordStage Viewset
     * @param allowShowPassword
     * @param configureFlow
     * @param failedAttemptsBeforeCancel
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedPasswordStageList
     * @throws ApiError
     */
    public static stagesPasswordList(
        allowShowPassword?: boolean,
        configureFlow?: string,
        failedAttemptsBeforeCancel?: number,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedPasswordStageList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/password/',
            query: {
                'allow_show_password': allowShowPassword,
                'configure_flow': configureFlow,
                'failed_attempts_before_cancel': failedAttemptsBeforeCancel,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
            },
        });
    }
    /**
     * PasswordStage Viewset
     * @param requestBody
     * @returns PasswordStage
     * @throws ApiError
     */
    public static stagesPasswordCreate(
        requestBody: PasswordStageRequest,
    ): CancelablePromise<PasswordStage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stages/password/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * PasswordStage Viewset
     * @param stageUuid A UUID string identifying this Password Stage.
     * @returns PasswordStage
     * @throws ApiError
     */
    public static stagesPasswordRetrieve(
        stageUuid: string,
    ): CancelablePromise<PasswordStage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/password/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * PasswordStage Viewset
     * @param stageUuid A UUID string identifying this Password Stage.
     * @param requestBody
     * @returns PasswordStage
     * @throws ApiError
     */
    public static stagesPasswordUpdate(
        stageUuid: string,
        requestBody: PasswordStageRequest,
    ): CancelablePromise<PasswordStage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/stages/password/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * PasswordStage Viewset
     * @param stageUuid A UUID string identifying this Password Stage.
     * @param requestBody
     * @returns PasswordStage
     * @throws ApiError
     */
    public static stagesPasswordPartialUpdate(
        stageUuid: string,
        requestBody?: PatchedPasswordStageRequest,
    ): CancelablePromise<PasswordStage> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/stages/password/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * PasswordStage Viewset
     * @param stageUuid A UUID string identifying this Password Stage.
     * @returns void
     * @throws ApiError
     */
    public static stagesPasswordDestroy(
        stageUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/stages/password/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param stageUuid A UUID string identifying this Password Stage.
     * @returns UsedBy
     * @throws ApiError
     */
    public static stagesPasswordUsedByList(
        stageUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/password/{stage_uuid}/used_by/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * Prompt Viewset
     * @param fieldKey
     * @param label
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param placeholder
     * @param search A search term.
     * @param type
     * @returns PaginatedPromptList
     * @throws ApiError
     */
    public static stagesPromptPromptsList(
        fieldKey?: string,
        label?: string,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        placeholder?: string,
        search?: string,
        type?: 'ak-locale' | 'checkbox' | 'date' | 'date-time' | 'dropdown' | 'email' | 'file' | 'hidden' | 'number' | 'password' | 'radio-button-group' | 'separator' | 'static' | 'text' | 'text_area' | 'text_area_read_only' | 'text_read_only' | 'username',
    ): CancelablePromise<PaginatedPromptList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/prompt/prompts/',
            query: {
                'field_key': fieldKey,
                'label': label,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'placeholder': placeholder,
                'search': search,
                'type': type,
            },
        });
    }
    /**
     * Prompt Viewset
     * @param requestBody
     * @returns Prompt
     * @throws ApiError
     */
    public static stagesPromptPromptsCreate(
        requestBody: PromptRequest,
    ): CancelablePromise<Prompt> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stages/prompt/prompts/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Prompt Viewset
     * @param promptUuid A UUID string identifying this Prompt.
     * @returns Prompt
     * @throws ApiError
     */
    public static stagesPromptPromptsRetrieve(
        promptUuid: string,
    ): CancelablePromise<Prompt> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/prompt/prompts/{prompt_uuid}/',
            path: {
                'prompt_uuid': promptUuid,
            },
        });
    }
    /**
     * Prompt Viewset
     * @param promptUuid A UUID string identifying this Prompt.
     * @param requestBody
     * @returns Prompt
     * @throws ApiError
     */
    public static stagesPromptPromptsUpdate(
        promptUuid: string,
        requestBody: PromptRequest,
    ): CancelablePromise<Prompt> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/stages/prompt/prompts/{prompt_uuid}/',
            path: {
                'prompt_uuid': promptUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Prompt Viewset
     * @param promptUuid A UUID string identifying this Prompt.
     * @param requestBody
     * @returns Prompt
     * @throws ApiError
     */
    public static stagesPromptPromptsPartialUpdate(
        promptUuid: string,
        requestBody?: PatchedPromptRequest,
    ): CancelablePromise<Prompt> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/stages/prompt/prompts/{prompt_uuid}/',
            path: {
                'prompt_uuid': promptUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Prompt Viewset
     * @param promptUuid A UUID string identifying this Prompt.
     * @returns void
     * @throws ApiError
     */
    public static stagesPromptPromptsDestroy(
        promptUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/stages/prompt/prompts/{prompt_uuid}/',
            path: {
                'prompt_uuid': promptUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param promptUuid A UUID string identifying this Prompt.
     * @returns UsedBy
     * @throws ApiError
     */
    public static stagesPromptPromptsUsedByList(
        promptUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/prompt/prompts/{prompt_uuid}/used_by/',
            path: {
                'prompt_uuid': promptUuid,
            },
        });
    }
    /**
     * Preview a prompt as a challenge, just like a flow would receive
     * @param requestBody
     * @returns PromptChallenge
     * @throws ApiError
     */
    public static stagesPromptPromptsPreviewCreate(
        requestBody: PromptRequest,
    ): CancelablePromise<PromptChallenge> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stages/prompt/prompts/preview/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * PromptStage Viewset
     * @param fields
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param stageUuid
     * @param validationPolicies
     * @returns PaginatedPromptStageList
     * @throws ApiError
     */
    public static stagesPromptStagesList(
        fields?: Array<string>,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        stageUuid?: string,
        validationPolicies?: Array<string>,
    ): CancelablePromise<PaginatedPromptStageList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/prompt/stages/',
            query: {
                'fields': fields,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'stage_uuid': stageUuid,
                'validation_policies': validationPolicies,
            },
        });
    }
    /**
     * PromptStage Viewset
     * @param requestBody
     * @returns PromptStage
     * @throws ApiError
     */
    public static stagesPromptStagesCreate(
        requestBody: PromptStageRequest,
    ): CancelablePromise<PromptStage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stages/prompt/stages/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * PromptStage Viewset
     * @param stageUuid A UUID string identifying this Prompt Stage.
     * @returns PromptStage
     * @throws ApiError
     */
    public static stagesPromptStagesRetrieve(
        stageUuid: string,
    ): CancelablePromise<PromptStage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/prompt/stages/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * PromptStage Viewset
     * @param stageUuid A UUID string identifying this Prompt Stage.
     * @param requestBody
     * @returns PromptStage
     * @throws ApiError
     */
    public static stagesPromptStagesUpdate(
        stageUuid: string,
        requestBody: PromptStageRequest,
    ): CancelablePromise<PromptStage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/stages/prompt/stages/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * PromptStage Viewset
     * @param stageUuid A UUID string identifying this Prompt Stage.
     * @param requestBody
     * @returns PromptStage
     * @throws ApiError
     */
    public static stagesPromptStagesPartialUpdate(
        stageUuid: string,
        requestBody?: PatchedPromptStageRequest,
    ): CancelablePromise<PromptStage> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/stages/prompt/stages/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * PromptStage Viewset
     * @param stageUuid A UUID string identifying this Prompt Stage.
     * @returns void
     * @throws ApiError
     */
    public static stagesPromptStagesDestroy(
        stageUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/stages/prompt/stages/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param stageUuid A UUID string identifying this Prompt Stage.
     * @returns UsedBy
     * @throws ApiError
     */
    public static stagesPromptStagesUsedByList(
        stageUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/prompt/stages/{stage_uuid}/used_by/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * RedirectStage Viewset
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedRedirectStageList
     * @throws ApiError
     */
    public static stagesRedirectList(
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedRedirectStageList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/redirect/',
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
     * RedirectStage Viewset
     * @param requestBody
     * @returns RedirectStage
     * @throws ApiError
     */
    public static stagesRedirectCreate(
        requestBody: RedirectStageRequest,
    ): CancelablePromise<RedirectStage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stages/redirect/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * RedirectStage Viewset
     * @param stageUuid A UUID string identifying this Redirect Stage.
     * @returns RedirectStage
     * @throws ApiError
     */
    public static stagesRedirectRetrieve(
        stageUuid: string,
    ): CancelablePromise<RedirectStage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/redirect/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * RedirectStage Viewset
     * @param stageUuid A UUID string identifying this Redirect Stage.
     * @param requestBody
     * @returns RedirectStage
     * @throws ApiError
     */
    public static stagesRedirectUpdate(
        stageUuid: string,
        requestBody: RedirectStageRequest,
    ): CancelablePromise<RedirectStage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/stages/redirect/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * RedirectStage Viewset
     * @param stageUuid A UUID string identifying this Redirect Stage.
     * @param requestBody
     * @returns RedirectStage
     * @throws ApiError
     */
    public static stagesRedirectPartialUpdate(
        stageUuid: string,
        requestBody?: PatchedRedirectStageRequest,
    ): CancelablePromise<RedirectStage> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/stages/redirect/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * RedirectStage Viewset
     * @param stageUuid A UUID string identifying this Redirect Stage.
     * @returns void
     * @throws ApiError
     */
    public static stagesRedirectDestroy(
        stageUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/stages/redirect/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param stageUuid A UUID string identifying this Redirect Stage.
     * @returns UsedBy
     * @throws ApiError
     */
    public static stagesRedirectUsedByList(
        stageUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/redirect/{stage_uuid}/used_by/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * SourceStage Viewset
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param resumeTimeout
     * @param search A search term.
     * @param source
     * @param stageUuid
     * @returns PaginatedSourceStageList
     * @throws ApiError
     */
    public static stagesSourceList(
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        resumeTimeout?: string,
        search?: string,
        source?: string,
        stageUuid?: string,
    ): CancelablePromise<PaginatedSourceStageList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/source/',
            query: {
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'resume_timeout': resumeTimeout,
                'search': search,
                'source': source,
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * SourceStage Viewset
     * @param requestBody
     * @returns SourceStage
     * @throws ApiError
     */
    public static stagesSourceCreate(
        requestBody: SourceStageRequest,
    ): CancelablePromise<SourceStage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stages/source/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SourceStage Viewset
     * @param stageUuid A UUID string identifying this Source Stage.
     * @returns SourceStage
     * @throws ApiError
     */
    public static stagesSourceRetrieve(
        stageUuid: string,
    ): CancelablePromise<SourceStage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/source/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * SourceStage Viewset
     * @param stageUuid A UUID string identifying this Source Stage.
     * @param requestBody
     * @returns SourceStage
     * @throws ApiError
     */
    public static stagesSourceUpdate(
        stageUuid: string,
        requestBody: SourceStageRequest,
    ): CancelablePromise<SourceStage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/stages/source/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SourceStage Viewset
     * @param stageUuid A UUID string identifying this Source Stage.
     * @param requestBody
     * @returns SourceStage
     * @throws ApiError
     */
    public static stagesSourcePartialUpdate(
        stageUuid: string,
        requestBody?: PatchedSourceStageRequest,
    ): CancelablePromise<SourceStage> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/stages/source/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * SourceStage Viewset
     * @param stageUuid A UUID string identifying this Source Stage.
     * @returns void
     * @throws ApiError
     */
    public static stagesSourceDestroy(
        stageUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/stages/source/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param stageUuid A UUID string identifying this Source Stage.
     * @returns UsedBy
     * @throws ApiError
     */
    public static stagesSourceUsedByList(
        stageUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/source/{stage_uuid}/used_by/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * UserDeleteStage Viewset
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param stageUuid
     * @returns PaginatedUserDeleteStageList
     * @throws ApiError
     */
    public static stagesUserDeleteList(
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        stageUuid?: string,
    ): CancelablePromise<PaginatedUserDeleteStageList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/user_delete/',
            query: {
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * UserDeleteStage Viewset
     * @param requestBody
     * @returns UserDeleteStage
     * @throws ApiError
     */
    public static stagesUserDeleteCreate(
        requestBody: UserDeleteStageRequest,
    ): CancelablePromise<UserDeleteStage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stages/user_delete/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * UserDeleteStage Viewset
     * @param stageUuid A UUID string identifying this User Delete Stage.
     * @returns UserDeleteStage
     * @throws ApiError
     */
    public static stagesUserDeleteRetrieve(
        stageUuid: string,
    ): CancelablePromise<UserDeleteStage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/user_delete/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * UserDeleteStage Viewset
     * @param stageUuid A UUID string identifying this User Delete Stage.
     * @param requestBody
     * @returns UserDeleteStage
     * @throws ApiError
     */
    public static stagesUserDeleteUpdate(
        stageUuid: string,
        requestBody: UserDeleteStageRequest,
    ): CancelablePromise<UserDeleteStage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/stages/user_delete/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * UserDeleteStage Viewset
     * @param stageUuid A UUID string identifying this User Delete Stage.
     * @param requestBody
     * @returns UserDeleteStage
     * @throws ApiError
     */
    public static stagesUserDeletePartialUpdate(
        stageUuid: string,
        requestBody?: PatchedUserDeleteStageRequest,
    ): CancelablePromise<UserDeleteStage> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/stages/user_delete/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * UserDeleteStage Viewset
     * @param stageUuid A UUID string identifying this User Delete Stage.
     * @returns void
     * @throws ApiError
     */
    public static stagesUserDeleteDestroy(
        stageUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/stages/user_delete/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param stageUuid A UUID string identifying this User Delete Stage.
     * @returns UsedBy
     * @throws ApiError
     */
    public static stagesUserDeleteUsedByList(
        stageUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/user_delete/{stage_uuid}/used_by/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * UserLoginStage Viewset
     * @param geoipBinding Bind sessions created by this stage to the configured GeoIP location
     *
     *
     * @param name
     * @param networkBinding Bind sessions created by this stage to the configured network
     *
     *
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param rememberMeOffset
     * @param search A search term.
     * @param sessionDuration
     * @param stageUuid
     * @param terminateOtherSessions
     * @returns PaginatedUserLoginStageList
     * @throws ApiError
     */
    public static stagesUserLoginList(
        geoipBinding?: 'bind_continent' | 'bind_continent_country' | 'bind_continent_country_city' | 'no_binding',
        name?: string,
        networkBinding?: 'bind_asn' | 'bind_asn_network' | 'bind_asn_network_ip' | 'no_binding',
        ordering?: string,
        page?: number,
        pageSize?: number,
        rememberMeOffset?: string,
        search?: string,
        sessionDuration?: string,
        stageUuid?: string,
        terminateOtherSessions?: boolean,
    ): CancelablePromise<PaginatedUserLoginStageList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/user_login/',
            query: {
                'geoip_binding': geoipBinding,
                'name': name,
                'network_binding': networkBinding,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'remember_me_offset': rememberMeOffset,
                'search': search,
                'session_duration': sessionDuration,
                'stage_uuid': stageUuid,
                'terminate_other_sessions': terminateOtherSessions,
            },
        });
    }
    /**
     * UserLoginStage Viewset
     * @param requestBody
     * @returns UserLoginStage
     * @throws ApiError
     */
    public static stagesUserLoginCreate(
        requestBody: UserLoginStageRequest,
    ): CancelablePromise<UserLoginStage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stages/user_login/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * UserLoginStage Viewset
     * @param stageUuid A UUID string identifying this User Login Stage.
     * @returns UserLoginStage
     * @throws ApiError
     */
    public static stagesUserLoginRetrieve(
        stageUuid: string,
    ): CancelablePromise<UserLoginStage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/user_login/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * UserLoginStage Viewset
     * @param stageUuid A UUID string identifying this User Login Stage.
     * @param requestBody
     * @returns UserLoginStage
     * @throws ApiError
     */
    public static stagesUserLoginUpdate(
        stageUuid: string,
        requestBody: UserLoginStageRequest,
    ): CancelablePromise<UserLoginStage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/stages/user_login/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * UserLoginStage Viewset
     * @param stageUuid A UUID string identifying this User Login Stage.
     * @param requestBody
     * @returns UserLoginStage
     * @throws ApiError
     */
    public static stagesUserLoginPartialUpdate(
        stageUuid: string,
        requestBody?: PatchedUserLoginStageRequest,
    ): CancelablePromise<UserLoginStage> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/stages/user_login/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * UserLoginStage Viewset
     * @param stageUuid A UUID string identifying this User Login Stage.
     * @returns void
     * @throws ApiError
     */
    public static stagesUserLoginDestroy(
        stageUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/stages/user_login/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param stageUuid A UUID string identifying this User Login Stage.
     * @returns UsedBy
     * @throws ApiError
     */
    public static stagesUserLoginUsedByList(
        stageUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/user_login/{stage_uuid}/used_by/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * UserLogoutStage Viewset
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param stageUuid
     * @returns PaginatedUserLogoutStageList
     * @throws ApiError
     */
    public static stagesUserLogoutList(
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        stageUuid?: string,
    ): CancelablePromise<PaginatedUserLogoutStageList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/user_logout/',
            query: {
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * UserLogoutStage Viewset
     * @param requestBody
     * @returns UserLogoutStage
     * @throws ApiError
     */
    public static stagesUserLogoutCreate(
        requestBody: UserLogoutStageRequest,
    ): CancelablePromise<UserLogoutStage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stages/user_logout/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * UserLogoutStage Viewset
     * @param stageUuid A UUID string identifying this User Logout Stage.
     * @returns UserLogoutStage
     * @throws ApiError
     */
    public static stagesUserLogoutRetrieve(
        stageUuid: string,
    ): CancelablePromise<UserLogoutStage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/user_logout/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * UserLogoutStage Viewset
     * @param stageUuid A UUID string identifying this User Logout Stage.
     * @param requestBody
     * @returns UserLogoutStage
     * @throws ApiError
     */
    public static stagesUserLogoutUpdate(
        stageUuid: string,
        requestBody: UserLogoutStageRequest,
    ): CancelablePromise<UserLogoutStage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/stages/user_logout/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * UserLogoutStage Viewset
     * @param stageUuid A UUID string identifying this User Logout Stage.
     * @param requestBody
     * @returns UserLogoutStage
     * @throws ApiError
     */
    public static stagesUserLogoutPartialUpdate(
        stageUuid: string,
        requestBody?: PatchedUserLogoutStageRequest,
    ): CancelablePromise<UserLogoutStage> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/stages/user_logout/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * UserLogoutStage Viewset
     * @param stageUuid A UUID string identifying this User Logout Stage.
     * @returns void
     * @throws ApiError
     */
    public static stagesUserLogoutDestroy(
        stageUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/stages/user_logout/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param stageUuid A UUID string identifying this User Logout Stage.
     * @returns UsedBy
     * @throws ApiError
     */
    public static stagesUserLogoutUsedByList(
        stageUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/user_logout/{stage_uuid}/used_by/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * UserWriteStage Viewset
     * @param createUsersAsInactive
     * @param createUsersGroup
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param stageUuid
     * @param userCreationMode
     * @param userPathTemplate
     * @param userType
     * @returns PaginatedUserWriteStageList
     * @throws ApiError
     */
    public static stagesUserWriteList(
        createUsersAsInactive?: boolean,
        createUsersGroup?: string,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        stageUuid?: string,
        userCreationMode?: 'always_create' | 'create_when_required' | 'never_create',
        userPathTemplate?: string,
        userType?: 'external' | 'internal' | 'internal_service_account' | 'service_account',
    ): CancelablePromise<PaginatedUserWriteStageList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/user_write/',
            query: {
                'create_users_as_inactive': createUsersAsInactive,
                'create_users_group': createUsersGroup,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'stage_uuid': stageUuid,
                'user_creation_mode': userCreationMode,
                'user_path_template': userPathTemplate,
                'user_type': userType,
            },
        });
    }
    /**
     * UserWriteStage Viewset
     * @param requestBody
     * @returns UserWriteStage
     * @throws ApiError
     */
    public static stagesUserWriteCreate(
        requestBody: UserWriteStageRequest,
    ): CancelablePromise<UserWriteStage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/stages/user_write/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * UserWriteStage Viewset
     * @param stageUuid A UUID string identifying this User Write Stage.
     * @returns UserWriteStage
     * @throws ApiError
     */
    public static stagesUserWriteRetrieve(
        stageUuid: string,
    ): CancelablePromise<UserWriteStage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/user_write/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * UserWriteStage Viewset
     * @param stageUuid A UUID string identifying this User Write Stage.
     * @param requestBody
     * @returns UserWriteStage
     * @throws ApiError
     */
    public static stagesUserWriteUpdate(
        stageUuid: string,
        requestBody: UserWriteStageRequest,
    ): CancelablePromise<UserWriteStage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/stages/user_write/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * UserWriteStage Viewset
     * @param stageUuid A UUID string identifying this User Write Stage.
     * @param requestBody
     * @returns UserWriteStage
     * @throws ApiError
     */
    public static stagesUserWritePartialUpdate(
        stageUuid: string,
        requestBody?: PatchedUserWriteStageRequest,
    ): CancelablePromise<UserWriteStage> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/stages/user_write/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * UserWriteStage Viewset
     * @param stageUuid A UUID string identifying this User Write Stage.
     * @returns void
     * @throws ApiError
     */
    public static stagesUserWriteDestroy(
        stageUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/stages/user_write/{stage_uuid}/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param stageUuid A UUID string identifying this User Write Stage.
     * @returns UsedBy
     * @throws ApiError
     */
    public static stagesUserWriteUsedByList(
        stageUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/stages/user_write/{stage_uuid}/used_by/',
            path: {
                'stage_uuid': stageUuid,
            },
        });
    }
}
