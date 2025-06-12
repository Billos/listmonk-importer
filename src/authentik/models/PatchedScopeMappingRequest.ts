/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * ScopeMapping Serializer
 */
export type PatchedScopeMappingRequest = {
    /**
     * Objects that are managed by authentik. These objects are created and updated automatically. This flag only indicates that an object can be overwritten by migrations. You can still modify the objects via the API, but expect changes to be overwritten in a later update.
     */
    managed?: string | null;
    name?: string;
    expression?: string;
    /**
     * Scope name requested by the client
     */
    scope_name?: string;
    /**
     * Description shown to the user when consenting. If left empty, the user won't be informed.
     */
    description?: string;
};

