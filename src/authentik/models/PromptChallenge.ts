/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContextualFlowInfo } from './ContextualFlowInfo';
import type { ErrorDetail } from './ErrorDetail';
import type { StagePrompt } from './StagePrompt';
/**
 * Initial challenge being sent, define fields
 */
export type PromptChallenge = {
    flow_info?: ContextualFlowInfo;
    component?: 'ak-stage-prompt';
    response_errors?: Record<string, Array<ErrorDetail>>;
    fields: Array<StagePrompt>;
};

