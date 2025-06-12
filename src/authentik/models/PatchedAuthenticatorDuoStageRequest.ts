/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FlowSetRequest } from './FlowSetRequest';
/**
 * AuthenticatorDuoStage Serializer
 */
export type PatchedAuthenticatorDuoStageRequest = {
    name?: string;
    flow_set?: Array<FlowSetRequest>;
    /**
     * Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage.
     */
    configure_flow?: string | null;
    friendly_name?: string | null;
    client_id?: string;
    client_secret?: string;
    api_hostname?: string;
    admin_integration_key?: string;
    admin_secret_key?: string;
};

