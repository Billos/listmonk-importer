/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CampaignUpdate = {
    name?: string;
    subject?: string;
    lists?: Array<number>;
    from_email?: string;
    messenger?: string;
    type?: string;
    tags?: Array<string>;
    send_later?: boolean;
    send_at?: Record<string, any>;
    headers?: Array<Record<string, any>>;
    template_id?: number;
    content_type?: string;
    body?: string;
    altbody?: string;
    archive?: boolean;
    archive_template_id?: number;
    archive_meta?: Record<string, any>;
};

