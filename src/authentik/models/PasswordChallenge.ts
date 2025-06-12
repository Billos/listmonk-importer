/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContextualFlowInfo } from './ContextualFlowInfo';
import type { ErrorDetail } from './ErrorDetail';
/**
 * Password challenge UI fields
 */
export type PasswordChallenge = {
    flow_info?: ContextualFlowInfo;
    component?: 'ak-stage-password';
    response_errors?: Record<string, Array<ErrorDetail>>;
    pending_user: string;
    pending_user_avatar: string;
    recovery_url?: string;
    allow_show_password?: boolean;
};

