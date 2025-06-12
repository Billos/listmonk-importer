/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthenticationEnum } from './AuthenticationEnum';
import type { DeniedActionEnum } from './DeniedActionEnum';
import type { FlowDesignationEnum } from './FlowDesignationEnum';
import type { FlowLayoutEnum } from './FlowLayoutEnum';
import type { PolicyEngineMode } from './PolicyEngineMode';
/**
 * Flow Serializer
 */
export type Flow = {
    readonly pk: string;
    readonly policybindingmodel_ptr_id: string;
    name: string;
    /**
     * Visible in the URL.
     */
    slug: string;
    /**
     * Shown as the Title in Flow pages.
     */
    title: string;
    /**
     * Decides what this Flow is used for. For example, the Authentication flow is redirect to when an un-authenticated user visits authentik.
     */
    designation: FlowDesignationEnum;
    /**
     * Get the URL to the background image. If the name is /static or starts with http
     * it is returned as-is
     */
    readonly background: string;
    readonly stages: Array<string>;
    readonly policies: Array<string>;
    /**
     * Get count of cached flows
     */
    readonly cache_count: number;
    policy_engine_mode?: PolicyEngineMode;
    /**
     * Enable compatibility mode, increases compatibility with password managers on mobile devices.
     */
    compatibility_mode?: boolean;
    /**
     * Get export URL for flow
     */
    readonly export_url: string;
    layout?: FlowLayoutEnum;
    /**
     * Configure what should happen when a flow denies access to a user.
     */
    denied_action?: DeniedActionEnum;
    /**
     * Required level of authentication and authorization to access a flow.
     */
    authentication?: AuthenticationEnum;
};

