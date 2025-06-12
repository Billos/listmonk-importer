/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TransactionalMessage = {
    subscriber_email?: string;
    subscriber_id?: number;
    template_id?: number;
    from_email?: string;
    data?: Record<string, any>;
    headers?: Array<Record<string, any>>;
    messenger?: string;
    content_type?: string;
};

