/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CampaignRequest = {
    name?: string;
    subject?: string;
    lists?: Array<number>;
    from_email?: string;
    content_type?: string;
    messenger?: string;
    type?: string;
    tags?: Array<string>;
    send_later?: boolean;
    send_at?: {
        headers?: Array<Record<string, any>>;
        template_id?: number;
    };
};

