/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type NewList = {
    name?: string;
    type?: NewList.type;
    optin?: NewList.optin;
    tags?: Array<string>;
    description?: string;
};
export namespace NewList {
    export enum type {
        PUBLIC = 'public',
        PRIVATE = 'private',
    }
    export enum optin {
        SINGLE = 'single',
        DOUBLE = 'double',
    }
}

