/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FlowSet } from './FlowSet';
/**
 * CaptchaStage Serializer
 */
export type CaptchaStage = {
    readonly pk: string;
    name: string;
    /**
     * Get object type so that we know how to edit the object
     */
    readonly component: string;
    /**
     * Return object's verbose_name
     */
    readonly verbose_name: string;
    /**
     * Return object's plural verbose_name
     */
    readonly verbose_name_plural: string;
    /**
     * Return internal model name
     */
    readonly meta_model_name: string;
    flow_set?: Array<FlowSet>;
    /**
     * Public key, acquired your captcha Provider.
     */
    public_key: string;
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

