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
export type PatchedEventMatcherPolicyRequest = {
    name?: string;
    /**
     * When this option is enabled, all executions of this policy will be logged. By default, only execution errors are logged.
     */
    execution_logging?: boolean;
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

