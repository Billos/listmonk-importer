/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthTypeEnum } from './AuthTypeEnum';
import type { FlowSetRequest } from './FlowSetRequest';
import type { ProviderEnum } from './ProviderEnum';
/**
 * AuthenticatorSMSStage Serializer
 */
export type PatchedAuthenticatorSMSStageRequest = {
    name?: string;
    flow_set?: Array<FlowSetRequest>;
    /**
     * Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage.
     */
    configure_flow?: string | null;
    friendly_name?: string | null;
    provider?: ProviderEnum;
    from_number?: string;
    account_sid?: string;
    auth?: string;
    auth_password?: string;
    auth_type?: AuthTypeEnum;
    /**
     * When enabled, the Phone number is only used during enrollment to verify the users authenticity. Only a hash of the phone number is saved to ensure it is not reused in the future.
     */
    verify_only?: boolean;
    /**
     * Optionally modify the payload being sent to custom providers.
     */
    mapping?: string | null;
};

