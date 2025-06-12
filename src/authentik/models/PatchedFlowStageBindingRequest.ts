/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InvalidResponseActionEnum } from './InvalidResponseActionEnum';
import type { PolicyEngineMode } from './PolicyEngineMode';
/**
 * FlowStageBinding Serializer
 */
export type PatchedFlowStageBindingRequest = {
    target?: string;
    stage?: string;
    /**
     * Evaluate policies during the Flow planning process.
     */
    evaluate_on_plan?: boolean;
    /**
     * Evaluate policies when the Stage is presented to the user.
     */
    re_evaluate_policies?: boolean;
    order?: number;
    policy_engine_mode?: PolicyEngineMode;
    /**
     * Configure how the flow executor should handle an invalid response to a challenge. RETRY returns the error message and a similar challenge to the executor. RESTART restarts the flow from the beginning, and RESTART_WITH_CONTEXT restarts the flow while keeping the current context.
     */
    invalid_response_action?: InvalidResponseActionEnum;
};

