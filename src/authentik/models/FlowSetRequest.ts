/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeniedActionEnum } from './DeniedActionEnum';
import type { FlowDesignationEnum } from './FlowDesignationEnum';
import type { FlowLayoutEnum } from './FlowLayoutEnum';
import type { PolicyEngineMode } from './PolicyEngineMode';
/**
 * Stripped down flow serializer
 */
export type FlowSetRequest = {
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
    policy_engine_mode?: PolicyEngineMode;
    /**
     * Enable compatibility mode, increases compatibility with password managers on mobile devices.
     */
    compatibility_mode?: boolean;
    layout?: FlowLayoutEnum;
    /**
     * Configure what should happen when a flow denies access to a user.
     */
    denied_action?: DeniedActionEnum;
};

