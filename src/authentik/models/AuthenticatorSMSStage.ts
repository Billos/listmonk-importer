/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthTypeEnum } from './AuthTypeEnum';
import type { FlowSet } from './FlowSet';
import type { ProviderEnum } from './ProviderEnum';
/**
 * AuthenticatorSMSStage Serializer
 */
export type AuthenticatorSMSStage = {
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
     * Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage.
     */
    configure_flow?: string | null;
    friendly_name?: string | null;
    provider: ProviderEnum;
    from_number: string;
    account_sid: string;
    auth: string;
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

