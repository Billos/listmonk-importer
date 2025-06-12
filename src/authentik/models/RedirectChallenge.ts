/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContextualFlowInfo } from './ContextualFlowInfo';
import type { ErrorDetail } from './ErrorDetail';
/**
 * Challenge type to redirect the client
 */
export type RedirectChallenge = {
    flow_info?: ContextualFlowInfo;
    component?: 'xak-flow-redirect';
    response_errors?: Record<string, Array<ErrorDetail>>;
    to: string;
};

