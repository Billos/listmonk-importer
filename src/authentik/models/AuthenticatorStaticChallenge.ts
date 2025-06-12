/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContextualFlowInfo } from './ContextualFlowInfo';
import type { ErrorDetail } from './ErrorDetail';
/**
 * Static authenticator challenge
 */
export type AuthenticatorStaticChallenge = {
    flow_info?: ContextualFlowInfo;
    component?: 'ak-stage-authenticator-static';
    response_errors?: Record<string, Array<ErrorDetail>>;
    pending_user: string;
    pending_user_avatar: string;
    codes: Array<string>;
};

