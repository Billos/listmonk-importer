/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * ServiceConnection Serializer
 */
export type ServiceConnection = {
    readonly pk: string;
    name: string;
    /**
     * If enabled, use the local connection. Required Docker socket/Kubernetes Integration
     */
    local?: boolean;
    /**
     * Return component used to edit this object
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
};

