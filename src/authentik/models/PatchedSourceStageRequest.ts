/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FlowSetRequest } from './FlowSetRequest';
/**
 * SourceStage Serializer
 */
export type PatchedSourceStageRequest = {
    name?: string;
    flow_set?: Array<FlowSetRequest>;
    source?: string;
    /**
     * Amount of time a user can take to return from the source to continue the flow (Format: hours=-1;minutes=-2;seconds=-3)
     */
    resume_timeout?: string;
};

