/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConsentPermission } from './ConsentPermission';
import type { ContextualFlowInfo } from './ContextualFlowInfo';
import type { ErrorDetail } from './ErrorDetail';
/**
 * Challenge info for consent screens
 */
export type ConsentChallenge = {
    flow_info?: ContextualFlowInfo;
    component?: 'ak-stage-consent';
    response_errors?: Record<string, Array<ErrorDetail>>;
    pending_user: string;
    pending_user_avatar: string;
    header_text?: string;
    permissions: Array<ConsentPermission>;
    additional_permissions: Array<ConsentPermission>;
    token: string;
};

