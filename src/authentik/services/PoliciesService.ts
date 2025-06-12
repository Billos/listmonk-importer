/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Cache } from '../models/Cache';
import type { DetailedCountry } from '../models/DetailedCountry';
import type { DummyPolicy } from '../models/DummyPolicy';
import type { DummyPolicyRequest } from '../models/DummyPolicyRequest';
import type { EventMatcherPolicy } from '../models/EventMatcherPolicy';
import type { EventMatcherPolicyRequest } from '../models/EventMatcherPolicyRequest';
import type { ExpressionPolicy } from '../models/ExpressionPolicy';
import type { ExpressionPolicyRequest } from '../models/ExpressionPolicyRequest';
import type { GeoIPPolicy } from '../models/GeoIPPolicy';
import type { GeoIPPolicyRequest } from '../models/GeoIPPolicyRequest';
import type { PaginatedDummyPolicyList } from '../models/PaginatedDummyPolicyList';
import type { PaginatedEventMatcherPolicyList } from '../models/PaginatedEventMatcherPolicyList';
import type { PaginatedExpressionPolicyList } from '../models/PaginatedExpressionPolicyList';
import type { PaginatedGeoIPPolicyList } from '../models/PaginatedGeoIPPolicyList';
import type { PaginatedPasswordExpiryPolicyList } from '../models/PaginatedPasswordExpiryPolicyList';
import type { PaginatedPasswordPolicyList } from '../models/PaginatedPasswordPolicyList';
import type { PaginatedPolicyBindingList } from '../models/PaginatedPolicyBindingList';
import type { PaginatedPolicyList } from '../models/PaginatedPolicyList';
import type { PaginatedReputationList } from '../models/PaginatedReputationList';
import type { PaginatedReputationPolicyList } from '../models/PaginatedReputationPolicyList';
import type { PaginatedUniquePasswordPolicyList } from '../models/PaginatedUniquePasswordPolicyList';
import type { PasswordExpiryPolicy } from '../models/PasswordExpiryPolicy';
import type { PasswordExpiryPolicyRequest } from '../models/PasswordExpiryPolicyRequest';
import type { PasswordPolicy } from '../models/PasswordPolicy';
import type { PasswordPolicyRequest } from '../models/PasswordPolicyRequest';
import type { PatchedDummyPolicyRequest } from '../models/PatchedDummyPolicyRequest';
import type { PatchedEventMatcherPolicyRequest } from '../models/PatchedEventMatcherPolicyRequest';
import type { PatchedExpressionPolicyRequest } from '../models/PatchedExpressionPolicyRequest';
import type { PatchedGeoIPPolicyRequest } from '../models/PatchedGeoIPPolicyRequest';
import type { PatchedPasswordExpiryPolicyRequest } from '../models/PatchedPasswordExpiryPolicyRequest';
import type { PatchedPasswordPolicyRequest } from '../models/PatchedPasswordPolicyRequest';
import type { PatchedPolicyBindingRequest } from '../models/PatchedPolicyBindingRequest';
import type { PatchedReputationPolicyRequest } from '../models/PatchedReputationPolicyRequest';
import type { PatchedUniquePasswordPolicyRequest } from '../models/PatchedUniquePasswordPolicyRequest';
import type { Policy } from '../models/Policy';
import type { PolicyBinding } from '../models/PolicyBinding';
import type { PolicyBindingRequest } from '../models/PolicyBindingRequest';
import type { PolicyTestRequest } from '../models/PolicyTestRequest';
import type { PolicyTestResult } from '../models/PolicyTestResult';
import type { Reputation } from '../models/Reputation';
import type { ReputationPolicy } from '../models/ReputationPolicy';
import type { ReputationPolicyRequest } from '../models/ReputationPolicyRequest';
import type { TypeCreate } from '../models/TypeCreate';
import type { UniquePasswordPolicy } from '../models/UniquePasswordPolicy';
import type { UniquePasswordPolicyRequest } from '../models/UniquePasswordPolicyRequest';
import type { UsedBy } from '../models/UsedBy';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PoliciesService {
    /**
     * Policy Viewset
     * @param bindingsIsnull
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param promptstageIsnull
     * @param search A search term.
     * @returns PaginatedPolicyList
     * @throws ApiError
     */
    public static policiesAllList(
        bindingsIsnull?: boolean,
        ordering?: string,
        page?: number,
        pageSize?: number,
        promptstageIsnull?: boolean,
        search?: string,
    ): CancelablePromise<PaginatedPolicyList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/all/',
            query: {
                'bindings__isnull': bindingsIsnull,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'promptstage__isnull': promptstageIsnull,
                'search': search,
            },
        });
    }
    /**
     * Policy Viewset
     * @param policyUuid A UUID string identifying this Policy.
     * @returns Policy
     * @throws ApiError
     */
    public static policiesAllRetrieve(
        policyUuid: string,
    ): CancelablePromise<Policy> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/all/{policy_uuid}/',
            path: {
                'policy_uuid': policyUuid,
            },
        });
    }
    /**
     * Policy Viewset
     * @param policyUuid A UUID string identifying this Policy.
     * @returns void
     * @throws ApiError
     */
    public static policiesAllDestroy(
        policyUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/policies/all/{policy_uuid}/',
            path: {
                'policy_uuid': policyUuid,
            },
        });
    }
    /**
     * Test policy
     * @param policyUuid A UUID string identifying this Policy.
     * @param requestBody
     * @returns PolicyTestResult
     * @throws ApiError
     */
    public static policiesAllTestCreate(
        policyUuid: string,
        requestBody: PolicyTestRequest,
    ): CancelablePromise<PolicyTestResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/policies/all/{policy_uuid}/test/',
            path: {
                'policy_uuid': policyUuid,
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
     * @param policyUuid A UUID string identifying this Policy.
     * @returns UsedBy
     * @throws ApiError
     */
    public static policiesAllUsedByList(
        policyUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/all/{policy_uuid}/used_by/',
            path: {
                'policy_uuid': policyUuid,
            },
        });
    }
    /**
     * Clear policy cache
     * @returns void
     * @throws ApiError
     */
    public static policiesAllCacheClearCreate(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/policies/all/cache_clear/',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Info about cached policies
     * @returns Cache
     * @throws ApiError
     */
    public static policiesAllCacheInfoRetrieve(): CancelablePromise<Cache> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/all/cache_info/',
        });
    }
    /**
     * Get all creatable types
     * @returns TypeCreate
     * @throws ApiError
     */
    public static policiesAllTypesList(): CancelablePromise<Array<TypeCreate>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/all/types/',
        });
    }
    /**
     * PolicyBinding Viewset
     * @param enabled
     * @param order
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param policy
     * @param policyIsnull
     * @param search A search term.
     * @param target
     * @param targetIn
     * @param timeout
     * @returns PaginatedPolicyBindingList
     * @throws ApiError
     */
    public static policiesBindingsList(
        enabled?: boolean,
        order?: number,
        ordering?: string,
        page?: number,
        pageSize?: number,
        policy?: string,
        policyIsnull?: boolean,
        search?: string,
        target?: string,
        targetIn?: Array<string>,
        timeout?: number,
    ): CancelablePromise<PaginatedPolicyBindingList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/bindings/',
            query: {
                'enabled': enabled,
                'order': order,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'policy': policy,
                'policy__isnull': policyIsnull,
                'search': search,
                'target': target,
                'target_in': targetIn,
                'timeout': timeout,
            },
        });
    }
    /**
     * PolicyBinding Viewset
     * @param requestBody
     * @returns PolicyBinding
     * @throws ApiError
     */
    public static policiesBindingsCreate(
        requestBody: PolicyBindingRequest,
    ): CancelablePromise<PolicyBinding> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/policies/bindings/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * PolicyBinding Viewset
     * @param policyBindingUuid A UUID string identifying this Policy Binding.
     * @returns PolicyBinding
     * @throws ApiError
     */
    public static policiesBindingsRetrieve(
        policyBindingUuid: string,
    ): CancelablePromise<PolicyBinding> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/bindings/{policy_binding_uuid}/',
            path: {
                'policy_binding_uuid': policyBindingUuid,
            },
        });
    }
    /**
     * PolicyBinding Viewset
     * @param policyBindingUuid A UUID string identifying this Policy Binding.
     * @param requestBody
     * @returns PolicyBinding
     * @throws ApiError
     */
    public static policiesBindingsUpdate(
        policyBindingUuid: string,
        requestBody: PolicyBindingRequest,
    ): CancelablePromise<PolicyBinding> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/policies/bindings/{policy_binding_uuid}/',
            path: {
                'policy_binding_uuid': policyBindingUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * PolicyBinding Viewset
     * @param policyBindingUuid A UUID string identifying this Policy Binding.
     * @param requestBody
     * @returns PolicyBinding
     * @throws ApiError
     */
    public static policiesBindingsPartialUpdate(
        policyBindingUuid: string,
        requestBody?: PatchedPolicyBindingRequest,
    ): CancelablePromise<PolicyBinding> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/policies/bindings/{policy_binding_uuid}/',
            path: {
                'policy_binding_uuid': policyBindingUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * PolicyBinding Viewset
     * @param policyBindingUuid A UUID string identifying this Policy Binding.
     * @returns void
     * @throws ApiError
     */
    public static policiesBindingsDestroy(
        policyBindingUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/policies/bindings/{policy_binding_uuid}/',
            path: {
                'policy_binding_uuid': policyBindingUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param policyBindingUuid A UUID string identifying this Policy Binding.
     * @returns UsedBy
     * @throws ApiError
     */
    public static policiesBindingsUsedByList(
        policyBindingUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/bindings/{policy_binding_uuid}/used_by/',
            path: {
                'policy_binding_uuid': policyBindingUuid,
            },
        });
    }
    /**
     * Dummy Viewset
     * @param created
     * @param executionLogging
     * @param lastUpdated
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param policyUuid
     * @param result
     * @param search A search term.
     * @param waitMax
     * @param waitMin
     * @returns PaginatedDummyPolicyList
     * @throws ApiError
     */
    public static policiesDummyList(
        created?: string,
        executionLogging?: boolean,
        lastUpdated?: string,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        policyUuid?: string,
        result?: boolean,
        search?: string,
        waitMax?: number,
        waitMin?: number,
    ): CancelablePromise<PaginatedDummyPolicyList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/dummy/',
            query: {
                'created': created,
                'execution_logging': executionLogging,
                'last_updated': lastUpdated,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'policy_uuid': policyUuid,
                'result': result,
                'search': search,
                'wait_max': waitMax,
                'wait_min': waitMin,
            },
        });
    }
    /**
     * Dummy Viewset
     * @param requestBody
     * @returns DummyPolicy
     * @throws ApiError
     */
    public static policiesDummyCreate(
        requestBody: DummyPolicyRequest,
    ): CancelablePromise<DummyPolicy> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/policies/dummy/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Dummy Viewset
     * @param policyUuid A UUID string identifying this Dummy Policy.
     * @returns DummyPolicy
     * @throws ApiError
     */
    public static policiesDummyRetrieve(
        policyUuid: string,
    ): CancelablePromise<DummyPolicy> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/dummy/{policy_uuid}/',
            path: {
                'policy_uuid': policyUuid,
            },
        });
    }
    /**
     * Dummy Viewset
     * @param policyUuid A UUID string identifying this Dummy Policy.
     * @param requestBody
     * @returns DummyPolicy
     * @throws ApiError
     */
    public static policiesDummyUpdate(
        policyUuid: string,
        requestBody: DummyPolicyRequest,
    ): CancelablePromise<DummyPolicy> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/policies/dummy/{policy_uuid}/',
            path: {
                'policy_uuid': policyUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Dummy Viewset
     * @param policyUuid A UUID string identifying this Dummy Policy.
     * @param requestBody
     * @returns DummyPolicy
     * @throws ApiError
     */
    public static policiesDummyPartialUpdate(
        policyUuid: string,
        requestBody?: PatchedDummyPolicyRequest,
    ): CancelablePromise<DummyPolicy> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/policies/dummy/{policy_uuid}/',
            path: {
                'policy_uuid': policyUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Dummy Viewset
     * @param policyUuid A UUID string identifying this Dummy Policy.
     * @returns void
     * @throws ApiError
     */
    public static policiesDummyDestroy(
        policyUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/policies/dummy/{policy_uuid}/',
            path: {
                'policy_uuid': policyUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param policyUuid A UUID string identifying this Dummy Policy.
     * @returns UsedBy
     * @throws ApiError
     */
    public static policiesDummyUsedByList(
        policyUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/dummy/{policy_uuid}/used_by/',
            path: {
                'policy_uuid': policyUuid,
            },
        });
    }
    /**
     * Event Matcher Policy Viewset
     * @param action Match created events with this action type. When left empty, all action types will be matched.
     *
     *
     * @param app
     * @param clientIp
     * @param created
     * @param executionLogging
     * @param lastUpdated
     * @param model
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param policyUuid
     * @param search A search term.
     * @returns PaginatedEventMatcherPolicyList
     * @throws ApiError
     */
    public static policiesEventMatcherList(
        action?: 'authorize_application' | 'configuration_error' | 'custom_' | 'email_sent' | 'flow_execution' | 'impersonation_ended' | 'impersonation_started' | 'invitation_used' | 'login' | 'login_failed' | 'logout' | 'model_created' | 'model_deleted' | 'model_updated' | 'password_set' | 'policy_exception' | 'policy_execution' | 'property_mapping_exception' | 'secret_rotate' | 'secret_view' | 'source_linked' | 'suspicious_request' | 'system_exception' | 'system_task_exception' | 'system_task_execution' | 'update_available' | 'user_write' | null,
        app?: string,
        clientIp?: string,
        created?: string,
        executionLogging?: boolean,
        lastUpdated?: string,
        model?: string,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        policyUuid?: string,
        search?: string,
    ): CancelablePromise<PaginatedEventMatcherPolicyList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/event_matcher/',
            query: {
                'action': action,
                'app': app,
                'client_ip': clientIp,
                'created': created,
                'execution_logging': executionLogging,
                'last_updated': lastUpdated,
                'model': model,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'policy_uuid': policyUuid,
                'search': search,
            },
        });
    }
    /**
     * Event Matcher Policy Viewset
     * @param requestBody
     * @returns EventMatcherPolicy
     * @throws ApiError
     */
    public static policiesEventMatcherCreate(
        requestBody: EventMatcherPolicyRequest,
    ): CancelablePromise<EventMatcherPolicy> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/policies/event_matcher/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Event Matcher Policy Viewset
     * @param policyUuid A UUID string identifying this Event Matcher Policy.
     * @returns EventMatcherPolicy
     * @throws ApiError
     */
    public static policiesEventMatcherRetrieve(
        policyUuid: string,
    ): CancelablePromise<EventMatcherPolicy> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/event_matcher/{policy_uuid}/',
            path: {
                'policy_uuid': policyUuid,
            },
        });
    }
    /**
     * Event Matcher Policy Viewset
     * @param policyUuid A UUID string identifying this Event Matcher Policy.
     * @param requestBody
     * @returns EventMatcherPolicy
     * @throws ApiError
     */
    public static policiesEventMatcherUpdate(
        policyUuid: string,
        requestBody: EventMatcherPolicyRequest,
    ): CancelablePromise<EventMatcherPolicy> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/policies/event_matcher/{policy_uuid}/',
            path: {
                'policy_uuid': policyUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Event Matcher Policy Viewset
     * @param policyUuid A UUID string identifying this Event Matcher Policy.
     * @param requestBody
     * @returns EventMatcherPolicy
     * @throws ApiError
     */
    public static policiesEventMatcherPartialUpdate(
        policyUuid: string,
        requestBody?: PatchedEventMatcherPolicyRequest,
    ): CancelablePromise<EventMatcherPolicy> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/policies/event_matcher/{policy_uuid}/',
            path: {
                'policy_uuid': policyUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Event Matcher Policy Viewset
     * @param policyUuid A UUID string identifying this Event Matcher Policy.
     * @returns void
     * @throws ApiError
     */
    public static policiesEventMatcherDestroy(
        policyUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/policies/event_matcher/{policy_uuid}/',
            path: {
                'policy_uuid': policyUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param policyUuid A UUID string identifying this Event Matcher Policy.
     * @returns UsedBy
     * @throws ApiError
     */
    public static policiesEventMatcherUsedByList(
        policyUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/event_matcher/{policy_uuid}/used_by/',
            path: {
                'policy_uuid': policyUuid,
            },
        });
    }
    /**
     * Source Viewset
     * @param created
     * @param executionLogging
     * @param expression
     * @param lastUpdated
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param policyUuid
     * @param search A search term.
     * @returns PaginatedExpressionPolicyList
     * @throws ApiError
     */
    public static policiesExpressionList(
        created?: string,
        executionLogging?: boolean,
        expression?: string,
        lastUpdated?: string,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        policyUuid?: string,
        search?: string,
    ): CancelablePromise<PaginatedExpressionPolicyList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/expression/',
            query: {
                'created': created,
                'execution_logging': executionLogging,
                'expression': expression,
                'last_updated': lastUpdated,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'policy_uuid': policyUuid,
                'search': search,
            },
        });
    }
    /**
     * Source Viewset
     * @param requestBody
     * @returns ExpressionPolicy
     * @throws ApiError
     */
    public static policiesExpressionCreate(
        requestBody: ExpressionPolicyRequest,
    ): CancelablePromise<ExpressionPolicy> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/policies/expression/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Source Viewset
     * @param policyUuid A UUID string identifying this Expression Policy.
     * @returns ExpressionPolicy
     * @throws ApiError
     */
    public static policiesExpressionRetrieve(
        policyUuid: string,
    ): CancelablePromise<ExpressionPolicy> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/expression/{policy_uuid}/',
            path: {
                'policy_uuid': policyUuid,
            },
        });
    }
    /**
     * Source Viewset
     * @param policyUuid A UUID string identifying this Expression Policy.
     * @param requestBody
     * @returns ExpressionPolicy
     * @throws ApiError
     */
    public static policiesExpressionUpdate(
        policyUuid: string,
        requestBody: ExpressionPolicyRequest,
    ): CancelablePromise<ExpressionPolicy> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/policies/expression/{policy_uuid}/',
            path: {
                'policy_uuid': policyUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Source Viewset
     * @param policyUuid A UUID string identifying this Expression Policy.
     * @param requestBody
     * @returns ExpressionPolicy
     * @throws ApiError
     */
    public static policiesExpressionPartialUpdate(
        policyUuid: string,
        requestBody?: PatchedExpressionPolicyRequest,
    ): CancelablePromise<ExpressionPolicy> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/policies/expression/{policy_uuid}/',
            path: {
                'policy_uuid': policyUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Source Viewset
     * @param policyUuid A UUID string identifying this Expression Policy.
     * @returns void
     * @throws ApiError
     */
    public static policiesExpressionDestroy(
        policyUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/policies/expression/{policy_uuid}/',
            path: {
                'policy_uuid': policyUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param policyUuid A UUID string identifying this Expression Policy.
     * @returns UsedBy
     * @throws ApiError
     */
    public static policiesExpressionUsedByList(
        policyUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/expression/{policy_uuid}/used_by/',
            path: {
                'policy_uuid': policyUuid,
            },
        });
    }
    /**
     * GeoIP Viewset
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @returns PaginatedGeoIPPolicyList
     * @throws ApiError
     */
    public static policiesGeoipList(
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
    ): CancelablePromise<PaginatedGeoIPPolicyList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/geoip/',
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
     * GeoIP Viewset
     * @param requestBody
     * @returns GeoIPPolicy
     * @throws ApiError
     */
    public static policiesGeoipCreate(
        requestBody: GeoIPPolicyRequest,
    ): CancelablePromise<GeoIPPolicy> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/policies/geoip/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * GeoIP Viewset
     * @param policyUuid A UUID string identifying this GeoIP Policy.
     * @returns GeoIPPolicy
     * @throws ApiError
     */
    public static policiesGeoipRetrieve(
        policyUuid: string,
    ): CancelablePromise<GeoIPPolicy> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/geoip/{policy_uuid}/',
            path: {
                'policy_uuid': policyUuid,
            },
        });
    }
    /**
     * GeoIP Viewset
     * @param policyUuid A UUID string identifying this GeoIP Policy.
     * @param requestBody
     * @returns GeoIPPolicy
     * @throws ApiError
     */
    public static policiesGeoipUpdate(
        policyUuid: string,
        requestBody: GeoIPPolicyRequest,
    ): CancelablePromise<GeoIPPolicy> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/policies/geoip/{policy_uuid}/',
            path: {
                'policy_uuid': policyUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * GeoIP Viewset
     * @param policyUuid A UUID string identifying this GeoIP Policy.
     * @param requestBody
     * @returns GeoIPPolicy
     * @throws ApiError
     */
    public static policiesGeoipPartialUpdate(
        policyUuid: string,
        requestBody?: PatchedGeoIPPolicyRequest,
    ): CancelablePromise<GeoIPPolicy> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/policies/geoip/{policy_uuid}/',
            path: {
                'policy_uuid': policyUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * GeoIP Viewset
     * @param policyUuid A UUID string identifying this GeoIP Policy.
     * @returns void
     * @throws ApiError
     */
    public static policiesGeoipDestroy(
        policyUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/policies/geoip/{policy_uuid}/',
            path: {
                'policy_uuid': policyUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param policyUuid A UUID string identifying this GeoIP Policy.
     * @returns UsedBy
     * @throws ApiError
     */
    public static policiesGeoipUsedByList(
        policyUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/geoip/{policy_uuid}/used_by/',
            path: {
                'policy_uuid': policyUuid,
            },
        });
    }
    /**
     * Get all countries in ISO-3166-1
     * @returns DetailedCountry
     * @throws ApiError
     */
    public static policiesGeoipIso3166List(): CancelablePromise<Array<DetailedCountry>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/geoip_iso3166/',
        });
    }
    /**
     * Password Policy Viewset
     * @param amountDigits
     * @param amountLowercase
     * @param amountSymbols
     * @param amountUppercase
     * @param checkHaveIBeenPwned
     * @param checkStaticRules
     * @param checkZxcvbn
     * @param created
     * @param errorMessage
     * @param executionLogging
     * @param hibpAllowedCount
     * @param lastUpdated
     * @param lengthMin
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param passwordField
     * @param policyUuid
     * @param search A search term.
     * @param symbolCharset
     * @param zxcvbnScoreThreshold
     * @returns PaginatedPasswordPolicyList
     * @throws ApiError
     */
    public static policiesPasswordList(
        amountDigits?: number,
        amountLowercase?: number,
        amountSymbols?: number,
        amountUppercase?: number,
        checkHaveIBeenPwned?: boolean,
        checkStaticRules?: boolean,
        checkZxcvbn?: boolean,
        created?: string,
        errorMessage?: string,
        executionLogging?: boolean,
        hibpAllowedCount?: number,
        lastUpdated?: string,
        lengthMin?: number,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        passwordField?: string,
        policyUuid?: string,
        search?: string,
        symbolCharset?: string,
        zxcvbnScoreThreshold?: number,
    ): CancelablePromise<PaginatedPasswordPolicyList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/password/',
            query: {
                'amount_digits': amountDigits,
                'amount_lowercase': amountLowercase,
                'amount_symbols': amountSymbols,
                'amount_uppercase': amountUppercase,
                'check_have_i_been_pwned': checkHaveIBeenPwned,
                'check_static_rules': checkStaticRules,
                'check_zxcvbn': checkZxcvbn,
                'created': created,
                'error_message': errorMessage,
                'execution_logging': executionLogging,
                'hibp_allowed_count': hibpAllowedCount,
                'last_updated': lastUpdated,
                'length_min': lengthMin,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'password_field': passwordField,
                'policy_uuid': policyUuid,
                'search': search,
                'symbol_charset': symbolCharset,
                'zxcvbn_score_threshold': zxcvbnScoreThreshold,
            },
        });
    }
    /**
     * Password Policy Viewset
     * @param requestBody
     * @returns PasswordPolicy
     * @throws ApiError
     */
    public static policiesPasswordCreate(
        requestBody: PasswordPolicyRequest,
    ): CancelablePromise<PasswordPolicy> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/policies/password/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Password Policy Viewset
     * @param policyUuid A UUID string identifying this Password Policy.
     * @returns PasswordPolicy
     * @throws ApiError
     */
    public static policiesPasswordRetrieve(
        policyUuid: string,
    ): CancelablePromise<PasswordPolicy> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/password/{policy_uuid}/',
            path: {
                'policy_uuid': policyUuid,
            },
        });
    }
    /**
     * Password Policy Viewset
     * @param policyUuid A UUID string identifying this Password Policy.
     * @param requestBody
     * @returns PasswordPolicy
     * @throws ApiError
     */
    public static policiesPasswordUpdate(
        policyUuid: string,
        requestBody: PasswordPolicyRequest,
    ): CancelablePromise<PasswordPolicy> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/policies/password/{policy_uuid}/',
            path: {
                'policy_uuid': policyUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Password Policy Viewset
     * @param policyUuid A UUID string identifying this Password Policy.
     * @param requestBody
     * @returns PasswordPolicy
     * @throws ApiError
     */
    public static policiesPasswordPartialUpdate(
        policyUuid: string,
        requestBody?: PatchedPasswordPolicyRequest,
    ): CancelablePromise<PasswordPolicy> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/policies/password/{policy_uuid}/',
            path: {
                'policy_uuid': policyUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Password Policy Viewset
     * @param policyUuid A UUID string identifying this Password Policy.
     * @returns void
     * @throws ApiError
     */
    public static policiesPasswordDestroy(
        policyUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/policies/password/{policy_uuid}/',
            path: {
                'policy_uuid': policyUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param policyUuid A UUID string identifying this Password Policy.
     * @returns UsedBy
     * @throws ApiError
     */
    public static policiesPasswordUsedByList(
        policyUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/password/{policy_uuid}/used_by/',
            path: {
                'policy_uuid': policyUuid,
            },
        });
    }
    /**
     * Password Expiry Viewset
     * @param created
     * @param days
     * @param denyOnly
     * @param executionLogging
     * @param lastUpdated
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param policyUuid
     * @param search A search term.
     * @returns PaginatedPasswordExpiryPolicyList
     * @throws ApiError
     */
    public static policiesPasswordExpiryList(
        created?: string,
        days?: number,
        denyOnly?: boolean,
        executionLogging?: boolean,
        lastUpdated?: string,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        policyUuid?: string,
        search?: string,
    ): CancelablePromise<PaginatedPasswordExpiryPolicyList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/password_expiry/',
            query: {
                'created': created,
                'days': days,
                'deny_only': denyOnly,
                'execution_logging': executionLogging,
                'last_updated': lastUpdated,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'policy_uuid': policyUuid,
                'search': search,
            },
        });
    }
    /**
     * Password Expiry Viewset
     * @param requestBody
     * @returns PasswordExpiryPolicy
     * @throws ApiError
     */
    public static policiesPasswordExpiryCreate(
        requestBody: PasswordExpiryPolicyRequest,
    ): CancelablePromise<PasswordExpiryPolicy> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/policies/password_expiry/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Password Expiry Viewset
     * @param policyUuid A UUID string identifying this Password Expiry Policy.
     * @returns PasswordExpiryPolicy
     * @throws ApiError
     */
    public static policiesPasswordExpiryRetrieve(
        policyUuid: string,
    ): CancelablePromise<PasswordExpiryPolicy> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/password_expiry/{policy_uuid}/',
            path: {
                'policy_uuid': policyUuid,
            },
        });
    }
    /**
     * Password Expiry Viewset
     * @param policyUuid A UUID string identifying this Password Expiry Policy.
     * @param requestBody
     * @returns PasswordExpiryPolicy
     * @throws ApiError
     */
    public static policiesPasswordExpiryUpdate(
        policyUuid: string,
        requestBody: PasswordExpiryPolicyRequest,
    ): CancelablePromise<PasswordExpiryPolicy> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/policies/password_expiry/{policy_uuid}/',
            path: {
                'policy_uuid': policyUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Password Expiry Viewset
     * @param policyUuid A UUID string identifying this Password Expiry Policy.
     * @param requestBody
     * @returns PasswordExpiryPolicy
     * @throws ApiError
     */
    public static policiesPasswordExpiryPartialUpdate(
        policyUuid: string,
        requestBody?: PatchedPasswordExpiryPolicyRequest,
    ): CancelablePromise<PasswordExpiryPolicy> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/policies/password_expiry/{policy_uuid}/',
            path: {
                'policy_uuid': policyUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Password Expiry Viewset
     * @param policyUuid A UUID string identifying this Password Expiry Policy.
     * @returns void
     * @throws ApiError
     */
    public static policiesPasswordExpiryDestroy(
        policyUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/policies/password_expiry/{policy_uuid}/',
            path: {
                'policy_uuid': policyUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param policyUuid A UUID string identifying this Password Expiry Policy.
     * @returns UsedBy
     * @throws ApiError
     */
    public static policiesPasswordExpiryUsedByList(
        policyUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/password_expiry/{policy_uuid}/used_by/',
            path: {
                'policy_uuid': policyUuid,
            },
        });
    }
    /**
     * Reputation Policy Viewset
     * @param checkIp
     * @param checkUsername
     * @param created
     * @param executionLogging
     * @param lastUpdated
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param policyUuid
     * @param search A search term.
     * @param threshold
     * @returns PaginatedReputationPolicyList
     * @throws ApiError
     */
    public static policiesReputationList(
        checkIp?: boolean,
        checkUsername?: boolean,
        created?: string,
        executionLogging?: boolean,
        lastUpdated?: string,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        policyUuid?: string,
        search?: string,
        threshold?: number,
    ): CancelablePromise<PaginatedReputationPolicyList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/reputation/',
            query: {
                'check_ip': checkIp,
                'check_username': checkUsername,
                'created': created,
                'execution_logging': executionLogging,
                'last_updated': lastUpdated,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'policy_uuid': policyUuid,
                'search': search,
                'threshold': threshold,
            },
        });
    }
    /**
     * Reputation Policy Viewset
     * @param requestBody
     * @returns ReputationPolicy
     * @throws ApiError
     */
    public static policiesReputationCreate(
        requestBody: ReputationPolicyRequest,
    ): CancelablePromise<ReputationPolicy> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/policies/reputation/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Reputation Policy Viewset
     * @param policyUuid A UUID string identifying this Reputation Policy.
     * @returns ReputationPolicy
     * @throws ApiError
     */
    public static policiesReputationRetrieve(
        policyUuid: string,
    ): CancelablePromise<ReputationPolicy> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/reputation/{policy_uuid}/',
            path: {
                'policy_uuid': policyUuid,
            },
        });
    }
    /**
     * Reputation Policy Viewset
     * @param policyUuid A UUID string identifying this Reputation Policy.
     * @param requestBody
     * @returns ReputationPolicy
     * @throws ApiError
     */
    public static policiesReputationUpdate(
        policyUuid: string,
        requestBody: ReputationPolicyRequest,
    ): CancelablePromise<ReputationPolicy> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/policies/reputation/{policy_uuid}/',
            path: {
                'policy_uuid': policyUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Reputation Policy Viewset
     * @param policyUuid A UUID string identifying this Reputation Policy.
     * @param requestBody
     * @returns ReputationPolicy
     * @throws ApiError
     */
    public static policiesReputationPartialUpdate(
        policyUuid: string,
        requestBody?: PatchedReputationPolicyRequest,
    ): CancelablePromise<ReputationPolicy> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/policies/reputation/{policy_uuid}/',
            path: {
                'policy_uuid': policyUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Reputation Policy Viewset
     * @param policyUuid A UUID string identifying this Reputation Policy.
     * @returns void
     * @throws ApiError
     */
    public static policiesReputationDestroy(
        policyUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/policies/reputation/{policy_uuid}/',
            path: {
                'policy_uuid': policyUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param policyUuid A UUID string identifying this Reputation Policy.
     * @returns UsedBy
     * @throws ApiError
     */
    public static policiesReputationUsedByList(
        policyUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/reputation/{policy_uuid}/used_by/',
            path: {
                'policy_uuid': policyUuid,
            },
        });
    }
    /**
     * Reputation Viewset
     * @param identifier
     * @param identifierIn Multiple values may be separated by commas.
     * @param ip
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param score
     * @param search A search term.
     * @returns PaginatedReputationList
     * @throws ApiError
     */
    public static policiesReputationScoresList(
        identifier?: string,
        identifierIn?: Array<string>,
        ip?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        score?: number,
        search?: string,
    ): CancelablePromise<PaginatedReputationList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/reputation/scores/',
            query: {
                'identifier': identifier,
                'identifier_in': identifierIn,
                'ip': ip,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'score': score,
                'search': search,
            },
        });
    }
    /**
     * Reputation Viewset
     * @param reputationUuid A UUID string identifying this Reputation Score.
     * @returns Reputation
     * @throws ApiError
     */
    public static policiesReputationScoresRetrieve(
        reputationUuid: string,
    ): CancelablePromise<Reputation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/reputation/scores/{reputation_uuid}/',
            path: {
                'reputation_uuid': reputationUuid,
            },
        });
    }
    /**
     * Reputation Viewset
     * @param reputationUuid A UUID string identifying this Reputation Score.
     * @returns void
     * @throws ApiError
     */
    public static policiesReputationScoresDestroy(
        reputationUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/policies/reputation/scores/{reputation_uuid}/',
            path: {
                'reputation_uuid': reputationUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param reputationUuid A UUID string identifying this Reputation Score.
     * @returns UsedBy
     * @throws ApiError
     */
    public static policiesReputationScoresUsedByList(
        reputationUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/reputation/scores/{reputation_uuid}/used_by/',
            path: {
                'reputation_uuid': reputationUuid,
            },
        });
    }
    /**
     * Password Uniqueness Policy Viewset
     * @param created
     * @param executionLogging
     * @param lastUpdated
     * @param name
     * @param numHistoricalPasswords
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param passwordField
     * @param policyUuid
     * @param search A search term.
     * @returns PaginatedUniquePasswordPolicyList
     * @throws ApiError
     */
    public static policiesUniquePasswordList(
        created?: string,
        executionLogging?: boolean,
        lastUpdated?: string,
        name?: string,
        numHistoricalPasswords?: number,
        ordering?: string,
        page?: number,
        pageSize?: number,
        passwordField?: string,
        policyUuid?: string,
        search?: string,
    ): CancelablePromise<PaginatedUniquePasswordPolicyList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/unique_password/',
            query: {
                'created': created,
                'execution_logging': executionLogging,
                'last_updated': lastUpdated,
                'name': name,
                'num_historical_passwords': numHistoricalPasswords,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'password_field': passwordField,
                'policy_uuid': policyUuid,
                'search': search,
            },
        });
    }
    /**
     * Password Uniqueness Policy Viewset
     * @param requestBody
     * @returns UniquePasswordPolicy
     * @throws ApiError
     */
    public static policiesUniquePasswordCreate(
        requestBody: UniquePasswordPolicyRequest,
    ): CancelablePromise<UniquePasswordPolicy> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/policies/unique_password/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Password Uniqueness Policy Viewset
     * @param policyUuid A UUID string identifying this Password Uniqueness Policy.
     * @returns UniquePasswordPolicy
     * @throws ApiError
     */
    public static policiesUniquePasswordRetrieve(
        policyUuid: string,
    ): CancelablePromise<UniquePasswordPolicy> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/unique_password/{policy_uuid}/',
            path: {
                'policy_uuid': policyUuid,
            },
        });
    }
    /**
     * Password Uniqueness Policy Viewset
     * @param policyUuid A UUID string identifying this Password Uniqueness Policy.
     * @param requestBody
     * @returns UniquePasswordPolicy
     * @throws ApiError
     */
    public static policiesUniquePasswordUpdate(
        policyUuid: string,
        requestBody: UniquePasswordPolicyRequest,
    ): CancelablePromise<UniquePasswordPolicy> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/policies/unique_password/{policy_uuid}/',
            path: {
                'policy_uuid': policyUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Password Uniqueness Policy Viewset
     * @param policyUuid A UUID string identifying this Password Uniqueness Policy.
     * @param requestBody
     * @returns UniquePasswordPolicy
     * @throws ApiError
     */
    public static policiesUniquePasswordPartialUpdate(
        policyUuid: string,
        requestBody?: PatchedUniquePasswordPolicyRequest,
    ): CancelablePromise<UniquePasswordPolicy> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/policies/unique_password/{policy_uuid}/',
            path: {
                'policy_uuid': policyUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Password Uniqueness Policy Viewset
     * @param policyUuid A UUID string identifying this Password Uniqueness Policy.
     * @returns void
     * @throws ApiError
     */
    public static policiesUniquePasswordDestroy(
        policyUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/policies/unique_password/{policy_uuid}/',
            path: {
                'policy_uuid': policyUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param policyUuid A UUID string identifying this Password Uniqueness Policy.
     * @returns UsedBy
     * @throws ApiError
     */
    public static policiesUniquePasswordUsedByList(
        policyUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/policies/unique_password/{policy_uuid}/used_by/',
            path: {
                'policy_uuid': policyUuid,
            },
        });
    }
}
