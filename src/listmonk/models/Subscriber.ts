/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Subscriber = {
    id?: number;
    created_at?: string;
    updated_at?: string;
    uuid?: string;
    email?: string;
    name?: string;
    attribs?: Record<string, any>;
    status?: string;
    lists?: Array<{
        subscription_status?: string;
        id?: number;
        uuid?: string;
        name?: string;
        type?: string;
        tags?: Array<string>;
        created_at?: string;
        updated_at?: string;
    }>;
};

