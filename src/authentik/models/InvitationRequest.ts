/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Invitation Serializer
 */
export type InvitationRequest = {
    name: string;
    expires?: string | null;
    fixed_data?: Record<string, any>;
    /**
     * When enabled, the invitation will be deleted after usage.
     */
    single_use?: boolean;
    /**
     * When set, only the configured flow can use this invitation.
     */
    flow?: string | null;
};

