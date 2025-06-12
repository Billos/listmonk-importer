/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FlowSetRequest } from './FlowSetRequest';
import type { RedirectStageModeEnum } from './RedirectStageModeEnum';
/**
 * RedirectStage Serializer
 */
export type RedirectStageRequest = {
    name: string;
    flow_set?: Array<FlowSetRequest>;
    keep_context?: boolean;
    mode: RedirectStageModeEnum;
    target_static?: string;
    target_flow?: string | null;
};

