/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Settings Serializer
 */
export type PatchedSettingsRequest = {
    /**
     * Configure how authentik should show avatars for users.
     */
    avatars?: string;
    /**
     * Enable the ability for users to change their name.
     */
    default_user_change_name?: boolean;
    /**
     * Enable the ability for users to change their email address.
     */
    default_user_change_email?: boolean;
    /**
     * Enable the ability for users to change their username.
     */
    default_user_change_username?: boolean;
    /**
     * Events will be deleted after this duration.(Format: weeks=3;days=2;hours=3,seconds=2).
     */
    event_retention?: string;
    /**
     * Reputation cannot decrease lower than this value. Zero or negative.
     */
    reputation_lower_limit?: number;
    /**
     * Reputation cannot increase higher than this value. Zero or positive.
     */
    reputation_upper_limit?: number;
    /**
     * The option configures the footer links on the flow executor pages.
     */
    footer_links?: any;
    /**
     * When enabled, all the events caused by a user will be deleted upon the user's deletion.
     */
    gdpr_compliance?: boolean;
    /**
     * Globally enable/disable impersonation.
     */
    impersonation?: boolean;
    /**
     * Require administrators to provide a reason for impersonating a user.
     */
    impersonation_require_reason?: boolean;
    /**
     * Default token duration
     */
    default_token_duration?: string;
    /**
     * Default token length
     */
    default_token_length?: number;
};

