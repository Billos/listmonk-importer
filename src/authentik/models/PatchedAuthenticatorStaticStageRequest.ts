/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FlowSetRequest } from './FlowSetRequest';
/**
 * AuthenticatorStaticStage Serializer
 */
export type PatchedAuthenticatorStaticStageRequest = {
    name?: string;
    flow_set?: Array<FlowSetRequest>;
    /**
     * Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage.
     */
    configure_flow?: string | null;
    friendly_name?: string | null;
    token_count?: number;
    token_length?: number;
};

