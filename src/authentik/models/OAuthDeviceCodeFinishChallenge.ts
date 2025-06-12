/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContextualFlowInfo } from './ContextualFlowInfo';
import type { ErrorDetail } from './ErrorDetail';
/**
 * Final challenge after user enters their code
 */
export type OAuthDeviceCodeFinishChallenge = {
    flow_info?: ContextualFlowInfo;
    component?: 'ak-provider-oauth2-device-code-finish';
    response_errors?: Record<string, Array<ErrorDetail>>;
};

