/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConsentStageModeEnum } from './ConsentStageModeEnum';
import type { FlowSetRequest } from './FlowSetRequest';
/**
 * ConsentStage Serializer
 */
export type PatchedConsentStageRequest = {
    name?: string;
    flow_set?: Array<FlowSetRequest>;
    mode?: ConsentStageModeEnum;
    /**
     * Offset after which consent expires. (Format: hours=1;minutes=2;seconds=3).
     */
    consent_expire_in?: string;
};

