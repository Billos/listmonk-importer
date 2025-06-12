/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Coordinate } from './Coordinate';
/**
 * Login Metrics per 1h
 */
export type LoginMetrics = {
    readonly logins: Array<Coordinate>;
    readonly logins_failed: Array<Coordinate>;
    readonly authorizations: Array<Coordinate>;
};

