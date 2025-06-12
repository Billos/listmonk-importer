/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContextualFlowInfo } from './ContextualFlowInfo';
import type { ErrorDetail } from './ErrorDetail';
/**
 * Email challenge
 */
export type EmailChallenge = {
    flow_info?: ContextualFlowInfo;
    component?: 'ak-stage-email';
    response_errors?: Record<string, Array<ErrorDetail>>;
};

