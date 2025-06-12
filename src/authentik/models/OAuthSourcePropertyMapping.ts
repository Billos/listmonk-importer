/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * OAuthSourcePropertyMapping Serializer
 */
export type OAuthSourcePropertyMapping = {
    readonly pk: string;
    /**
     * Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update.
     */
    managed?: string | null;
    name: string;
    expression: string;
    /**
     * Get object's component so that we know how to edit the object
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

