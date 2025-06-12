/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthenticatorAttachmentEnum } from './AuthenticatorAttachmentEnum';
import type { FlowSet } from './FlowSet';
import type { ResidentKeyRequirementEnum } from './ResidentKeyRequirementEnum';
import type { UserVerificationEnum } from './UserVerificationEnum';
import type { WebAuthnDeviceType } from './WebAuthnDeviceType';
/**
 * AuthenticatorWebAuthnStage Serializer
 */
export type AuthenticatorWebAuthnStage = {
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
    user_verification?: UserVerificationEnum;
    authenticator_attachment?: AuthenticatorAttachmentEnum | null;
    resident_key_requirement?: ResidentKeyRequirementEnum;
    device_type_restrictions?: Array<string>;
    readonly device_type_restrictions_obj: Array<WebAuthnDeviceType>;
};

