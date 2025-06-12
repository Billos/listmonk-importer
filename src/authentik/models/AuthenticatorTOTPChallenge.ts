/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContextualFlowInfo } from './ContextualFlowInfo';
import type { ErrorDetail } from './ErrorDetail';
/**
 * TOTP Setup challenge
 */
export type AuthenticatorTOTPChallenge = {
    flow_info?: ContextualFlowInfo;
    component?: 'ak-stage-authenticator-totp';
    response_errors?: Record<string, Array<ErrorDetail>>;
    pending_user: string;
    pending_user_avatar: string;
    config_url: string;
};

