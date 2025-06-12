/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContextualFlowInfo } from './ContextualFlowInfo';
import type { ErrorDetail } from './ErrorDetail';
/**
 * WebAuthn Challenge
 */
export type AuthenticatorWebAuthnChallenge = {
    flow_info?: ContextualFlowInfo;
    component?: 'ak-stage-authenticator-webauthn';
    response_errors?: Record<string, Array<ErrorDetail>>;
    pending_user: string;
    pending_user_avatar: string;
    registration: Record<string, any>;
};

