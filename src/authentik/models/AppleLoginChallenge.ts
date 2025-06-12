/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContextualFlowInfo } from './ContextualFlowInfo';
import type { ErrorDetail } from './ErrorDetail';
/**
 * Special challenge for apple-native authentication flow, which happens on the client.
 */
export type AppleLoginChallenge = {
    flow_info?: ContextualFlowInfo;
    component?: 'ak-source-oauth-apple';
    response_errors?: Record<string, Array<ErrorDetail>>;
    client_id: string;
    scope: string;
    redirect_uri: string;
    state: string;
};

