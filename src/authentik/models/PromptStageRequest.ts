/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FlowSetRequest } from './FlowSetRequest';
/**
 * PromptStage Serializer
 */
export type PromptStageRequest = {
    name: string;
    flow_set?: Array<FlowSetRequest>;
    fields: Array<string>;
    validation_policies?: Array<string>;
};

