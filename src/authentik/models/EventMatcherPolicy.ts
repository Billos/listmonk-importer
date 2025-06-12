/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppEnum } from './AppEnum';
import type { EventActions } from './EventActions';
import type { ModelEnum } from './ModelEnum';
/**
 * Event Matcher Policy Serializer
 */
export type EventMatcherPolicy = {
    readonly pk: string;
    name: string;
    /**
     * When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged.
     */
    execution_logging?: boolean;
    /**
     * Get object component so that we know how to edit the object
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
    /**
     * Return objects policy is bound to
     */
    readonly bound_to: number;
    /**
     * Match created events with this action type. When left empty, all action types will be matched.
     */
    action?: EventActions | null;
    /**
     * Matches Event's Client IP (strict matching, for network matching use an Expression Policy)
     */
    client_ip?: string | null;
    /**
     * Match events created by selected application. When left empty, all applications are matched.
     */
    app?: AppEnum | null;
    /**
     * Match events created by selected model. When left empty, all models are matched. When an app is selected, all the application's models are matched.
     */
    model?: ModelEnum | null;
};

