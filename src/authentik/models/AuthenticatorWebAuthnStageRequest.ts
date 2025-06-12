/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthenticatorAttachmentEnum } from './AuthenticatorAttachmentEnum';
import type { FlowSetRequest } from './FlowSetRequest';
import type { ResidentKeyRequirementEnum } from './ResidentKeyRequirementEnum';
import type { UserVerificationEnum } from './UserVerificationEnum';
/**
 * AuthenticatorWebAuthnStage Serializer
 */
export type AuthenticatorWebAuthnStageRequest = {
    name: string;
    flow_set?: Array<FlowSetRequest>;
    /**
     * Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage.
     */
    configure_flow?: string | null;
    friendly_name?: string | null;
    user_verification?: UserVerificationEnum;
    authenticator_attachment?: AuthenticatorAttachmentEnum | null;
    resident_key_requirement?: ResidentKeyRequirementEnum;
    device_type_restrictions?: Array<string>;
};

