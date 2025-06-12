/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FlowSetRequest } from './FlowSetRequest';
/**
 * CaptchaStage Serializer
 */
export type CaptchaStageRequest = {
    name: string;
    flow_set?: Array<FlowSetRequest>;
    /**
     * Public key, acquired your captcha Provider.
     */
    public_key: string;
    /**
     * Private key, acquired your captcha Provider.
     */
    private_key: string;
    js_url?: string;
    api_url?: string;
    interactive?: boolean;
    score_min_threshold?: number;
    score_max_threshold?: number;
    /**
     * When enabled and the received captcha score is outside of the given threshold, the stage will show an error message. When not enabled, the flow will continue, but the data from the captcha will be available in the context for policy decisions
     */
    error_on_invalid_score?: boolean;
};

