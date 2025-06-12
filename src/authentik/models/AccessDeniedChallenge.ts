/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContextualFlowInfo } from './ContextualFlowInfo';
import type { ErrorDetail } from './ErrorDetail';
/**
 * Challenge when a flow's active stage calls `stage_invalid()`.
 */
export type AccessDeniedChallenge = {
    flow_info?: ContextualFlowInfo;
    component?: 'ak-stage-access-denied';
    response_errors?: Record<string, Array<ErrorDetail>>;
    pending_user: string;
    pending_user_avatar: string;
    error_message?: string;
};

