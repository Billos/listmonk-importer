/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FlowSetRequest } from './FlowSetRequest';
/**
 * AuthenticatorEmailStage Serializer
 */
export type PatchedAuthenticatorEmailStageRequest = {
    name?: string;
    flow_set?: Array<FlowSetRequest>;
    /**
     * Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage.
     */
    configure_flow?: string | null;
    friendly_name?: string | null;
    /**
     * When enabled, global Email connection settings will be used and connection settings below will be ignored.
     */
    use_global_settings?: boolean;
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    use_tls?: boolean;
    use_ssl?: boolean;
    timeout?: number;
    from_address?: string;
    subject?: string;
    /**
     * Time the token sent is valid (Format: hours=3,minutes=17,seconds=300).
     */
    token_expiry?: string;
    template?: string;
};

