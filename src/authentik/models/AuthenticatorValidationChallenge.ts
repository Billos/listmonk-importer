/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContextualFlowInfo } from './ContextualFlowInfo';
import type { DeviceChallenge } from './DeviceChallenge';
import type { ErrorDetail } from './ErrorDetail';
import type { SelectableStage } from './SelectableStage';
/**
 * Authenticator challenge
 */
export type AuthenticatorValidationChallenge = {
    flow_info?: ContextualFlowInfo;
    component?: 'ak-stage-authenticator-validate';
    response_errors?: Record<string, Array<ErrorDetail>>;
    pending_user: string;
    pending_user_avatar: string;
    device_challenges: Array<DeviceChallenge>;
    configuration_stages: Array<SelectableStage>;
};

