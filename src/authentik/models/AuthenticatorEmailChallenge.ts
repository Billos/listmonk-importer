/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContextualFlowInfo } from './ContextualFlowInfo';
import type { ErrorDetail } from './ErrorDetail';
/**
 * Authenticator Email Setup challenge
 */
export type AuthenticatorEmailChallenge = {
    flow_info?: ContextualFlowInfo;
    component?: 'ak-stage-authenticator-email';
    response_errors?: Record<string, Array<ErrorDetail>>;
    pending_user: string;
    pending_user_avatar: string;
    email?: string | null;
    email_required?: boolean;
};

