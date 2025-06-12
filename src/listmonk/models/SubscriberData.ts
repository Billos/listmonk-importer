/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SubscriberProfile } from './SubscriberProfile';
import type { Subscriptions } from './Subscriptions';
export type SubscriberData = {
    email?: string;
    profile?: Array<SubscriberProfile>;
    subscriptions?: Array<Subscriptions>;
    campaign_views?: Array<Record<string, any>>;
    link_clicks?: Array<Record<string, any>>;
};

