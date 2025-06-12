/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * KubernetesServiceConnection Serializer
 */
export type KubernetesServiceConnection = {
    readonly pk: string;
    name: string;
    /**
     * If enabled, use the local connection. Required Docker socket/Kubernetes Integration
     */
    local?: boolean;
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
     * Paste your kubeconfig here. authentik will automatically use the currently selected context.
     */
    kubeconfig?: any;
    /**
     * Verify SSL Certificates of the Kubernetes API endpoint
     */
    verify_ssl?: boolean;
};

