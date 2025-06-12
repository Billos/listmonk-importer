/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FlowSet } from './FlowSet';
/**
 * InvitationStage Serializer
 */
export type InvitationStage = {
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
    /**
     * If this flag is set, this Stage will jump to the next Stage when no Invitation is given. By default this Stage will cancel the Flow when no invitation is given.
     */
    continue_flow_without_invitation?: boolean;
};

