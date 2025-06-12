/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * RACProvider Serializer
 */
export type RACProviderRequest = {
    name: string;
    /**
     * Flow used for authentication when the associated application is accessed by an un-authenticated user.
     */
    authentication_flow?: string | null;
    /**
     * Flow used when authorizing this provider.
     */
    authorization_flow: string;
    property_mappings?: Array<string>;
    settings?: any;
    /**
     * Determines how long a session lasts. Default of 0 means that the sessions lasts until the browser is closed. (Format: hours=-1;minutes=-2;seconds=-3)
     */
    connection_expiry?: string;
    /**
     * When set to true, connection tokens will be deleted upon disconnect.
     */
    delete_token_on_disconnect?: boolean;
};

