/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContextualFlowInfo } from './ContextualFlowInfo';
import type { ErrorDetail } from './ErrorDetail';
/**
 * Challenge for ending a session
 */
export type SessionEndChallenge = {
    flow_info?: ContextualFlowInfo;
    component?: 'ak-stage-session-end';
    response_errors?: Record<string, Array<ErrorDetail>>;
    pending_user: string;
    pending_user_avatar: string;
    application_name?: string;
    application_launch_url?: string;
    invalidation_flow_url?: string;
    brand_name: string;
};

