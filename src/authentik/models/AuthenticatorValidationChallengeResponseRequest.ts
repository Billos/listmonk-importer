/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeviceChallengeRequest } from './DeviceChallengeRequest';
/**
 * Challenge used for Code-based and WebAuthn authenticators
 */
export type AuthenticatorValidationChallengeResponseRequest = {
    component?: 'ak-stage-authenticator-validate';
    selected_challenge?: DeviceChallengeRequest;
    selected_stage?: string;
    code?: string;
    webauthn?: Record<string, any>;
    duo?: number;
};

