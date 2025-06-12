/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContextualFlowInfo } from './ContextualFlowInfo';
import type { ErrorDetail } from './ErrorDetail';
/**
 * Empty challenge
 */
export type UserLoginChallenge = {
    flow_info?: ContextualFlowInfo;
    component?: 'ak-stage-user-login';
    response_errors?: Record<string, Array<ErrorDetail>>;
    pending_user: string;
    pending_user_avatar: string;
};

