/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Bounce = {
    results?: Array<{
        id?: number;
        type?: string;
        source?: string;
        meta?: Record<string, any>;
        created_at?: string;
        email?: string;
        subscriber_uuid?: string;
        subscriber_id?: number;
        campaign?: {
            id?: number;
            name?: string;
        };
        campaign_uuid?: string;
        total?: number;
    }>;
};

