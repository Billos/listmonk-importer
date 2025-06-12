/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Token } from './Token';
/**
 * SCIMSource Serializer
 */
export type SCIMSource = {
    readonly pk: string;
    /**
     * Source's display Name.
     */
    name: string;
    /**
     * Internal source name, used in URLs.
     */
    slug: string;
    enabled?: boolean;
    user_property_mappings?: Array<string>;
    group_property_mappings?: Array<string>;
    /**
     * Get object component so that we know how to edit the object
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
    /**
     * Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update.
     */
    readonly managed: string | null;
    user_path_template?: string;
    /**
     * Get Root URL
     */
    readonly root_url: string;
    readonly token_obj: Token;
};

