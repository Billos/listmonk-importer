/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * SCIMSource Serializer
 */
export type SCIMSourceRequest = {
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
    user_path_template?: string;
};

