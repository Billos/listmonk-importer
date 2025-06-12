/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GroupMember } from './GroupMember';
import type { WebAuthnDeviceType } from './WebAuthnDeviceType';
/**
 * Serializer for WebAuthn authenticator devices
 */
export type WebAuthnDevice = {
    readonly pk: number;
    name: string;
    readonly created_on: string;
    readonly device_type: WebAuthnDeviceType | null;
    readonly aaguid: string;
    readonly user: GroupMember;
};

