/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Cache } from '../models/Cache';
import type { ChallengeTypes } from '../models/ChallengeTypes';
import type { FilePathRequest } from '../models/FilePathRequest';
import type { FileUploadRequest } from '../models/FileUploadRequest';
import type { Flow } from '../models/Flow';
import type { FlowChallengeResponseRequest } from '../models/FlowChallengeResponseRequest';
import type { FlowDiagram } from '../models/FlowDiagram';
import type { FlowInspection } from '../models/FlowInspection';
import type { FlowRequest } from '../models/FlowRequest';
import type { FlowStageBinding } from '../models/FlowStageBinding';
import type { FlowStageBindingRequest } from '../models/FlowStageBindingRequest';
import type { Link } from '../models/Link';
import type { PaginatedFlowList } from '../models/PaginatedFlowList';
import type { PaginatedFlowStageBindingList } from '../models/PaginatedFlowStageBindingList';
import type { PatchedFlowRequest } from '../models/PatchedFlowRequest';
import type { PatchedFlowStageBindingRequest } from '../models/PatchedFlowStageBindingRequest';
import type { UsedBy } from '../models/UsedBy';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FlowsService {
    /**
     * FlowStageBinding Viewset
     * @param evaluateOnPlan
     * @param fsbUuid
     * @param invalidResponseAction Configure how the flow executor should handle an invalid response to a challenge. RETRY returns the error message and a similar challenge to the executor. RESTART restarts the flow from the beginning, and RESTART_WITH_CONTEXT restarts the flow while keeping the current context.
     *
     *
     * @param order
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param pbmUuid
     * @param policies
     * @param policyEngineMode
     * @param reEvaluatePolicies
     * @param search A search term.
     * @param stage
     * @param target
     * @returns PaginatedFlowStageBindingList
     * @throws ApiError
     */
    public static flowsBindingsList(
        evaluateOnPlan?: boolean,
        fsbUuid?: string,
        invalidResponseAction?: 'restart' | 'restart_with_context' | 'retry',
        order?: number,
        ordering?: string,
        page?: number,
        pageSize?: number,
        pbmUuid?: string,
        policies?: Array<string>,
        policyEngineMode?: 'all' | 'any',
        reEvaluatePolicies?: boolean,
        search?: string,
        stage?: string,
        target?: string,
    ): CancelablePromise<PaginatedFlowStageBindingList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/flows/bindings/',
            query: {
                'evaluate_on_plan': evaluateOnPlan,
                'fsb_uuid': fsbUuid,
                'invalid_response_action': invalidResponseAction,
                'order': order,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'pbm_uuid': pbmUuid,
                'policies': policies,
                'policy_engine_mode': policyEngineMode,
                're_evaluate_policies': reEvaluatePolicies,
                'search': search,
                'stage': stage,
                'target': target,
            },
        });
    }
    /**
     * FlowStageBinding Viewset
     * @param requestBody
     * @returns FlowStageBinding
     * @throws ApiError
     */
    public static flowsBindingsCreate(
        requestBody: FlowStageBindingRequest,
    ): CancelablePromise<FlowStageBinding> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/flows/bindings/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * FlowStageBinding Viewset
     * @param fsbUuid A UUID string identifying this Flow Stage Binding.
     * @returns FlowStageBinding
     * @throws ApiError
     */
    public static flowsBindingsRetrieve(
        fsbUuid: string,
    ): CancelablePromise<FlowStageBinding> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/flows/bindings/{fsb_uuid}/',
            path: {
                'fsb_uuid': fsbUuid,
            },
        });
    }
    /**
     * FlowStageBinding Viewset
     * @param fsbUuid A UUID string identifying this Flow Stage Binding.
     * @param requestBody
     * @returns FlowStageBinding
     * @throws ApiError
     */
    public static flowsBindingsUpdate(
        fsbUuid: string,
        requestBody: FlowStageBindingRequest,
    ): CancelablePromise<FlowStageBinding> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/flows/bindings/{fsb_uuid}/',
            path: {
                'fsb_uuid': fsbUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * FlowStageBinding Viewset
     * @param fsbUuid A UUID string identifying this Flow Stage Binding.
     * @param requestBody
     * @returns FlowStageBinding
     * @throws ApiError
     */
    public static flowsBindingsPartialUpdate(
        fsbUuid: string,
        requestBody?: PatchedFlowStageBindingRequest,
    ): CancelablePromise<FlowStageBinding> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/flows/bindings/{fsb_uuid}/',
            path: {
                'fsb_uuid': fsbUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * FlowStageBinding Viewset
     * @param fsbUuid A UUID string identifying this Flow Stage Binding.
     * @returns void
     * @throws ApiError
     */
    public static flowsBindingsDestroy(
        fsbUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/flows/bindings/{fsb_uuid}/',
            path: {
                'fsb_uuid': fsbUuid,
            },
        });
    }
    /**
     * Get a list of all objects that use this object
     * @param fsbUuid A UUID string identifying this Flow Stage Binding.
     * @returns UsedBy
     * @throws ApiError
     */
    public static flowsBindingsUsedByList(
        fsbUuid: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/flows/bindings/{fsb_uuid}/used_by/',
            path: {
                'fsb_uuid': fsbUuid,
            },
        });
    }
    /**
     * Get the next pending challenge from the currently active flow.
     * @param flowSlug
     * @param query Querystring as received
     * @returns ChallengeTypes
     * @throws ApiError
     */
    public static flowsExecutorGet(
        flowSlug: string,
        query: string,
    ): CancelablePromise<ChallengeTypes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/flows/executor/{flow_slug}/',
            path: {
                'flow_slug': flowSlug,
            },
            query: {
                'query': query,
            },
        });
    }
    /**
     * Solve the previously retrieved challenge and advanced to the next stage.
     * @param flowSlug
     * @param query Querystring as received
     * @param requestBody
     * @returns ChallengeTypes
     * @throws ApiError
     */
    public static flowsExecutorSolve(
        flowSlug: string,
        query: string,
        requestBody?: FlowChallengeResponseRequest,
    ): CancelablePromise<ChallengeTypes> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/flows/executor/{flow_slug}/',
            path: {
                'flow_slug': flowSlug,
            },
            query: {
                'query': query,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get current flow state and record it
     * @param flowSlug
     * @returns FlowInspection
     * @throws ApiError
     */
    public static flowsInspectorGet(
        flowSlug: string,
    ): CancelablePromise<FlowInspection> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/flows/inspector/{flow_slug}/',
            path: {
                'flow_slug': flowSlug,
            },
            errors: {
                400: `No flow plan in session.`,
            },
        });
    }
    /**
     * Flow Viewset
     * @param deniedAction Configure what should happen when a flow denies access to a user.
     *
     *
     * @param designation Decides what this Flow is used for. For example, the Authentication flow is redirect to when an un-authenticated user visits authentik.
     *
     *
     * @param flowUuid
     * @param name
     * @param ordering Which field to use when ordering the results.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @param search A search term.
     * @param slug
     * @returns PaginatedFlowList
     * @throws ApiError
     */
    public static flowsInstancesList(
        deniedAction?: 'continue' | 'message' | 'message_continue',
        designation?: 'authentication' | 'authorization' | 'enrollment' | 'invalidation' | 'recovery' | 'stage_configuration' | 'unenrollment',
        flowUuid?: string,
        name?: string,
        ordering?: string,
        page?: number,
        pageSize?: number,
        search?: string,
        slug?: string,
    ): CancelablePromise<PaginatedFlowList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/flows/instances/',
            query: {
                'denied_action': deniedAction,
                'designation': designation,
                'flow_uuid': flowUuid,
                'name': name,
                'ordering': ordering,
                'page': page,
                'page_size': pageSize,
                'search': search,
                'slug': slug,
            },
        });
    }
    /**
     * Flow Viewset
     * @param requestBody
     * @returns Flow
     * @throws ApiError
     */
    public static flowsInstancesCreate(
        requestBody: FlowRequest,
    ): CancelablePromise<Flow> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/flows/instances/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Flow Viewset
     * @param slug
     * @returns Flow
     * @throws ApiError
     */
    public static flowsInstancesRetrieve(
        slug: string,
    ): CancelablePromise<Flow> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/flows/instances/{slug}/',
            path: {
                'slug': slug,
            },
        });
    }
    /**
     * Flow Viewset
     * @param slug
     * @param requestBody
     * @returns Flow
     * @throws ApiError
     */
    public static flowsInstancesUpdate(
        slug: string,
        requestBody: FlowRequest,
    ): CancelablePromise<Flow> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/flows/instances/{slug}/',
            path: {
                'slug': slug,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Flow Viewset
     * @param slug
     * @param requestBody
     * @returns Flow
     * @throws ApiError
     */
    public static flowsInstancesPartialUpdate(
        slug: string,
        requestBody?: PatchedFlowRequest,
    ): CancelablePromise<Flow> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/flows/instances/{slug}/',
            path: {
                'slug': slug,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Flow Viewset
     * @param slug
     * @returns void
     * @throws ApiError
     */
    public static flowsInstancesDestroy(
        slug: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/flows/instances/{slug}/',
            path: {
                'slug': slug,
            },
        });
    }
    /**
     * Return diagram for flow with slug `slug`, in the format used by flowchart.js
     * @param slug
     * @returns FlowDiagram
     * @throws ApiError
     */
    public static flowsInstancesDiagramRetrieve(
        slug: string,
    ): CancelablePromise<FlowDiagram> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/flows/instances/{slug}/diagram/',
            path: {
                'slug': slug,
            },
        });
    }
    /**
     * Execute flow for current user
     * @param slug
     * @returns Link
     * @throws ApiError
     */
    public static flowsInstancesExecuteRetrieve(
        slug: string,
    ): CancelablePromise<Link> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/flows/instances/{slug}/execute/',
            path: {
                'slug': slug,
            },
            errors: {
                400: `Flow not applicable`,
            },
        });
    }
    /**
     * Export flow to .yaml file
     * @param slug
     * @returns binary
     * @throws ApiError
     */
    public static flowsInstancesExportRetrieve(
        slug: string,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/flows/instances/{slug}/export/',
            path: {
                'slug': slug,
            },
        });
    }
    /**
     * Set Flow background
     * @param slug
     * @param formData
     * @returns any Success
     * @throws ApiError
     */
    public static flowsInstancesSetBackgroundCreate(
        slug: string,
        formData?: FileUploadRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/flows/instances/{slug}/set_background/',
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
     * Set Flow background (as URL)
     * @param slug
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static flowsInstancesSetBackgroundUrlCreate(
        slug: string,
        requestBody: FilePathRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/flows/instances/{slug}/set_background_url/',
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
    public static flowsInstancesUsedByList(
        slug: string,
    ): CancelablePromise<Array<UsedBy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/flows/instances/{slug}/used_by/',
            path: {
                'slug': slug,
            },
        });
    }
    /**
     * Clear flow cache
     * @returns void
     * @throws ApiError
     */
    public static flowsInstancesCacheClearCreate(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/flows/instances/cache_clear/',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Info about cached flows
     * @returns Cache
     * @throws ApiError
     */
    public static flowsInstancesCacheInfoRetrieve(): CancelablePromise<Cache> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/flows/instances/cache_info/',
        });
    }
    /**
     * Import flow from .yaml file
     * @param formData
     * @returns void
     * @throws ApiError
     */
    public static flowsInstancesImportCreate(
        formData?: FileUploadRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/flows/instances/import/',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
}
