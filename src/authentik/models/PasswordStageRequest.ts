/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BackendsEnum } from './BackendsEnum';
import type { FlowSetRequest } from './FlowSetRequest';
/**
 * PasswordStage Serializer
 */
export type PasswordStageRequest = {
    name: string;
    flow_set?: Array<FlowSetRequest>;
    /**
     * Selection of backends to test the password against.
     */
    backends: Array<BackendsEnum>;
    /**
     * Flow used by an authenticated user to configure this Stage. If empty, user will not be able to configure this stage.
     */
    configure_flow?: string | null;
    /**
     * How many attempts a user has before the flow is canceled. To lock the user out, use a reputation policy and a user_write stage.
     */
    failed_attempts_before_cancel?: number;
    /**
     * When enabled, provides a 'show password' button with the password input field.
     */
    allow_show_password?: boolean;
};

