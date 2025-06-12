/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FlowSetRequest } from './FlowSetRequest';
/**
 * EmailStage Serializer
 */
export type EmailStageRequest = {
    name: string;
    flow_set?: Array<FlowSetRequest>;
    /**
     * When enabled, global Email connection settings will be used and connection settings below will be ignored.
     */
    use_global_settings?: boolean;
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    use_tls?: boolean;
    use_ssl?: boolean;
    timeout?: number;
    from_address?: string;
    /**
     * Time the token sent is valid (Format: hours=3,minutes=17,seconds=300).
     */
    token_expiry?: string;
    subject?: string;
    template?: string;
    /**
     * Activate users upon completion of stage.
     */
    activate_user_on_success?: boolean;
};

