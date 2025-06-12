/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CaptchaChallenge } from './CaptchaChallenge';
import type { ContextualFlowInfo } from './ContextualFlowInfo';
import type { ErrorDetail } from './ErrorDetail';
import type { FlowDesignationEnum } from './FlowDesignationEnum';
import type { LoginSource } from './LoginSource';
/**
 * Identification challenges with all UI elements
 */
export type IdentificationChallenge = {
    flow_info?: ContextualFlowInfo;
    component?: 'ak-stage-identification';
    response_errors?: Record<string, Array<ErrorDetail>>;
    user_fields: Array<string> | null;
    password_fields: boolean;
    allow_show_password?: boolean;
    application_pre?: string;
    flow_designation: FlowDesignationEnum;
    captcha_stage?: CaptchaChallenge | null;
    enroll_url?: string;
    recovery_url?: string;
    passwordless_url?: string;
    primary_action: string;
    sources?: Array<LoginSource>;
    show_source_labels: boolean;
    enable_remember_me?: boolean;
};

