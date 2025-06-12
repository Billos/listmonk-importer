/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SubscriberQueryRequest = {
    query?: string;
    /**
     * The ids of the subscribers to be modified.
     */
    ids?: Array<number>;
    /**
     * Whether to add, remove, or unsubscribe the users.
     */
    action?: SubscriberQueryRequest.action;
    /**
     * The ids of the lists to be modified.
     */
    target_list_ids?: number;
    /**
     * confirmed, unconfirmed, or unsubscribed status.
     */
    status?: SubscriberQueryRequest.status;
};
export namespace SubscriberQueryRequest {
    /**
     * Whether to add, remove, or unsubscribe the users.
     */
    export enum action {
        ADD = 'add',
        REMOVE = 'remove',
        UNSUBSCRIBE = 'unsubscribe',
    }
    /**
     * confirmed, unconfirmed, or unsubscribed status.
     */
    export enum status {
        CONFIRMED = 'confirmed',
        UNCONFIRMED = 'unconfirmed',
        UNSUBSCRIBED = 'unsubscribed',
    }
}

