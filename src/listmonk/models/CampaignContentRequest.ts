/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CampaignContentRequest = {
    id?: number;
    created_at?: string;
    updated_at?: string;
    CampaignID?: number;
    views?: number;
    clicks?: number;
    lists?: Array<{
        id?: number;
        name?: string;
    }>;
    started_at?: string;
    to_send?: number;
    sent?: number;
    uuid?: string;
    type?: CampaignContentRequest.type;
    name?: string;
    subject?: string;
    from_email?: string;
    body?: string;
    send_at?: string;
    status?: string;
    content_type?: CampaignContentRequest.content_type;
    tags?: Array<string>;
    template_id?: number;
    messenger?: string;
    from?: string;
    to?: string;
};
export namespace CampaignContentRequest {
    export enum type {
        REGULAR = 'regular',
        OPTIN = 'optin',
    }
    export enum content_type {
        RICHTEXT = 'richtext',
        HTML = 'html',
        MARKDOWN = 'markdown',
        PLAIN = 'plain',
    }
}

