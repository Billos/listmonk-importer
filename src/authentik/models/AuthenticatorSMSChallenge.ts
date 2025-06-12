/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContextualFlowInfo } from './ContextualFlowInfo';
import type { ErrorDetail } from './ErrorDetail';
/**
 * SMS Setup challenge
 */
export type AuthenticatorSMSChallenge = {
    flow_info?: ContextualFlowInfo;
    component?: 'ak-stage-authenticator-sms';
    response_errors?: Record<string, Array<ErrorDetail>>;
    pending_user: string;
    pending_user_avatar: string;
    phone_number_required?: boolean;
};

