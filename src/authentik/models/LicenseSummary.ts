/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LicenseFlagsEnum } from './LicenseFlagsEnum';
import type { LicenseSummaryStatusEnum } from './LicenseSummaryStatusEnum';
/**
 * Serializer for license status
 */
export type LicenseSummary = {
    internal_users: number;
    external_users: number;
    status: LicenseSummaryStatusEnum;
    latest_valid: string;
    license_flags: Array<LicenseFlagsEnum>;
};

