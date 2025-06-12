/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UserServiceAccountRequest = {
    name: string;
    create_group?: boolean;
    expiring?: boolean;
    /**
     * If not provided, valid for 360 days
     */
    expires?: string;
};

