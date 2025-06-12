/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeviceClassesEnum } from './DeviceClassesEnum';
import type { FlowSetRequest } from './FlowSetRequest';
import type { NotConfiguredActionEnum } from './NotConfiguredActionEnum';
import type { UserVerificationEnum } from './UserVerificationEnum';
/**
 * AuthenticatorValidateStage Serializer
 */
export type PatchedAuthenticatorValidateStageRequest = {
    name?: string;
    flow_set?: Array<FlowSetRequest>;
    not_configured_action?: NotConfiguredActionEnum;
    /**
     * Device classes which can be used to authenticate
     */
    device_classes?: Array<DeviceClassesEnum>;
    /**
     * Stages used to configure Authenticator when user doesn't have any compatible devices. After this configuration Stage passes, the user is not prompted again.
     */
    configuration_stages?: Array<string>;
    /**
     * If any of the user's device has been used within this threshold, this stage will be skipped
     */
    last_auth_threshold?: string;
    /**
     * Enforce user verification for WebAuthn devices.
     */
    webauthn_user_verification?: UserVerificationEnum;
    webauthn_allowed_device_types?: Array<string>;
};

