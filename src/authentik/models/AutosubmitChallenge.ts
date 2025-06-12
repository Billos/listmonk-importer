/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContextualFlowInfo } from './ContextualFlowInfo';
import type { ErrorDetail } from './ErrorDetail';
/**
 * Autosubmit challenge used to send and navigate a POST request
 */
export type AutosubmitChallenge = {
    flow_info?: ContextualFlowInfo;
    component?: 'ak-stage-autosubmit';
    response_errors?: Record<string, Array<ErrorDetail>>;
    url: string;
    attrs: Record<string, string>;
    title?: string;
};

