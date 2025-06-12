/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * DockerServiceConnection Serializer
 */
export type DockerServiceConnectionRequest = {
    name: string;
    /**
     * If enabled, use the local connection. Required Docker socket/Kubernetes Integration
     */
    local?: boolean;
    /**
     * Can be in the format of 'unix://<path>' when connecting to a local docker daemon, or 'https://<hostname>:2376' when connecting to a remote system.
     */
    url: string;
    /**
     * CA which the endpoint's Certificate is verified against. Can be left empty for no validation.
     */
    tls_verification?: string | null;
    /**
     * Certificate/Key used for authentication. Can be left empty for no authentication.
     */
    tls_authentication?: string | null;
};

