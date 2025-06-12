/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContextualFlowInfo } from './ContextualFlowInfo';
import type { ErrorDetail } from './ErrorDetail';
/**
 * Challenge type to render a frame
 */
export type FrameChallenge = {
    flow_info?: ContextualFlowInfo;
    component?: 'xak-flow-frame';
    response_errors?: Record<string, Array<ErrorDetail>>;
    url: string;
    loading_overlay?: boolean;
    loading_text: string;
};

