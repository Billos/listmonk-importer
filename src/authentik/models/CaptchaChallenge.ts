/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContextualFlowInfo } from './ContextualFlowInfo';
import type { ErrorDetail } from './ErrorDetail';
/**
 * Site public key
 */
export type CaptchaChallenge = {
    flow_info?: ContextualFlowInfo;
    component?: 'ak-stage-captcha';
    response_errors?: Record<string, Array<ErrorDetail>>;
    pending_user: string;
    pending_user_avatar: string;
    site_key: string;
    js_url: string;
    interactive: boolean;
};

