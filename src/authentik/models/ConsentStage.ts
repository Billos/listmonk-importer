/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConsentStageModeEnum } from './ConsentStageModeEnum';
import type { FlowSet } from './FlowSet';
/**
 * ConsentStage Serializer
 */
export type ConsentStage = {
    readonly pk: string;
    name: string;
    /**
     * Get object type so that we know how to edit the object
     */
    readonly component: string;
    /**
     * Return object's verbose_name
     */
    readonly verbose_name: string;
    /**
     * Return object's plural verbose_name
     */
    readonly verbose_name_plural: string;
    /**
     * Return internal model name
     */
    readonly meta_model_name: string;
    flow_set?: Array<FlowSet>;
    mode?: ConsentStageModeEnum;
    /**
     * Offset after which consent expires. (Format: hours=1;minutes=2;seconds=3).
     */
    consent_expire_in?: string;
};

