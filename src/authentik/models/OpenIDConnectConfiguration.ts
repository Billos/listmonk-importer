/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * rest_framework Serializer for OIDC Configuration
 */
export type OpenIDConnectConfiguration = {
    issuer: string;
    authorization_endpoint: string;
    token_endpoint: string;
    userinfo_endpoint: string;
    end_session_endpoint: string;
    introspection_endpoint: string;
    jwks_uri: string;
    response_types_supported: Array<string>;
    id_token_signing_alg_values_supported: Array<string>;
    subject_types_supported: Array<string>;
    token_endpoint_auth_methods_supported: Array<string>;
};

