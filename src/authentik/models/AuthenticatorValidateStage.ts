/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeviceClassesEnum } from './DeviceClassesEnum';
import type { FlowSet } from './FlowSet';
import type { NotConfiguredActionEnum } from './NotConfiguredActionEnum';
import type { UserVerificationEnum } from './UserVerificationEnum';
import type { WebAuthnDeviceType } from './WebAuthnDeviceType';
/**
 * AuthenticatorValidateStage Serializer
 */
export type AuthenticatorValidateStage = {
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
    readonly webauthn_allowed_device_types_obj: Array<WebAuthnDeviceType>;
};

