/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FlowSetRequest } from './FlowSetRequest';
/**
 * DenyStage Serializer
 */
export type DenyStageRequest = {
    name: string;
    flow_set?: Array<FlowSetRequest>;
    deny_message?: string;
};

