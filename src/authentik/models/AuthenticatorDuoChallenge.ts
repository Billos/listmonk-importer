/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContextualFlowInfo } from './ContextualFlowInfo';
import type { ErrorDetail } from './ErrorDetail';
/**
 * Duo Challenge
 */
export type AuthenticatorDuoChallenge = {
    flow_info?: ContextualFlowInfo;
    component?: 'ak-stage-authenticator-duo';
    response_errors?: Record<string, Array<ErrorDetail>>;
    pending_user: string;
    pending_user_avatar: string;
    activation_barcode: string;
    activation_code: string;
    stage_uuid: string;
};

