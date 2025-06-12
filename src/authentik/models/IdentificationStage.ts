/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FlowSet } from './FlowSet';
import type { UserFieldsEnum } from './UserFieldsEnum';
/**
 * IdentificationStage Serializer
 */
export type IdentificationStage = {
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
     * Fields of the user object to match against. (Hold shift to select multiple options)
     */
    user_fields?: Array<UserFieldsEnum>;
    /**
     * When set, shows a password field, instead of showing the password field as separate step.
     */
    password_stage?: string | null;
    /**
     * When set, adds functionality exactly like a Captcha stage, but baked into the Identification stage.
     */
    captcha_stage?: string | null;
    /**
     * When enabled, user fields are matched regardless of their casing.
     */
    case_insensitive_matching?: boolean;
    /**
     * When a valid username/email has been entered, and this option is enabled, the user's username and avatar will be shown. Otherwise, the text that the user entered will be shown
     */
    show_matched_user?: boolean;
    /**
     * Optional enrollment flow, which is linked at the bottom of the page.
     */
    enrollment_flow?: string | null;
    /**
     * Optional recovery flow, which is linked at the bottom of the page.
     */
    recovery_flow?: string | null;
    /**
     * Optional passwordless flow, which is linked at the bottom of the page.
     */
    passwordless_flow?: string | null;
    /**
     * Specify which sources should be shown.
     */
    sources?: Array<string>;
    show_source_labels?: boolean;
    /**
     * When enabled, the stage will succeed and continue even when incorrect user info is entered.
     */
    pretend_user_exists?: boolean;
    /**
     * Show the user the 'Remember me on this device' toggle, allowing repeat users to skip straight to entering their password.
     */
    enable_remember_me?: boolean;
};

