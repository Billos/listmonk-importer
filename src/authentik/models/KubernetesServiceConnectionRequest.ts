/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * KubernetesServiceConnection Serializer
 */
export type KubernetesServiceConnectionRequest = {
    name: string;
    /**
     * If enabled, use the local connection. Required Docker socket/Kubernetes Integration
     */
    local?: boolean;
    /**
     * Paste your kubeconfig here. authentik will automatically use the currently selected context.
     */
    kubeconfig?: any;
    /**
     * Verify SSL Certificates of the Kubernetes API endpoint
     */
    verify_ssl?: boolean;
};

