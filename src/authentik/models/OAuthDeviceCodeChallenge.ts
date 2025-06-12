/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContextualFlowInfo } from './ContextualFlowInfo';
import type { ErrorDetail } from './ErrorDetail';
/**
 * OAuth Device code challenge
 */
export type OAuthDeviceCodeChallenge = {
    flow_info?: ContextualFlowInfo;
    component?: 'ak-provider-oauth2-device-code';
    response_errors?: Record<string, Array<ErrorDetail>>;
};

