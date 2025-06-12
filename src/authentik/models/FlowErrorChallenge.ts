/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContextualFlowInfo } from './ContextualFlowInfo';
import type { ErrorDetail } from './ErrorDetail';
/**
 * Challenge class when an unhandled error occurs during a stage. Normal users
 * are shown an error message, superusers are shown a full stacktrace.
 */
export type FlowErrorChallenge = {
    flow_info?: ContextualFlowInfo;
    component?: 'ak-stage-flow-error';
    response_errors?: Record<string, Array<ErrorDetail>>;
    request_id: string;
    error?: string;
    traceback?: string;
};

