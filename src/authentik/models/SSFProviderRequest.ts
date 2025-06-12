/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * SSFProvider Serializer
 */
export type SSFProviderRequest = {
    name: string;
    /**
     * Key used to sign the SSF Events.
     */
    signing_key: string;
    oidc_auth_providers?: Array<number>;
    event_retention?: string;
};

