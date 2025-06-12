/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BackendsEnum } from './BackendsEnum';
import type { FlowSet } from './FlowSet';
/**
 * PasswordStage Serializer
 */
export type PasswordStage = {
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

