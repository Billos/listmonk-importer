/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FlowSetRequest } from './FlowSetRequest';
/**
 * InvitationStage Serializer
 */
export type InvitationStageRequest = {
    name: string;
    flow_set?: Array<FlowSetRequest>;
    /**
     * If this flag is set, this Stage will jump to the next Stage when no Invitation is given. By default this Stage will cancel the Flow when no invitation is given.
     */
    continue_flow_without_invitation?: boolean;
};

