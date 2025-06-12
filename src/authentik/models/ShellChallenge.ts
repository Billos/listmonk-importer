/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContextualFlowInfo } from './ContextualFlowInfo';
import type { ErrorDetail } from './ErrorDetail';
/**
 * challenge type to render HTML as-is
 */
export type ShellChallenge = {
    flow_info?: ContextualFlowInfo;
    component?: 'xak-flow-shell';
    response_errors?: Record<string, Array<ErrorDetail>>;
    body: string;
};

