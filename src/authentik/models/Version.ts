/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Get running and latest version.
 */
export type Version = {
    /**
     * Get current version
     */
    readonly version_current: string;
    /**
     * Get latest version from cache
     */
    readonly version_latest: string;
    /**
     * Check if latest version is valid
     */
    readonly version_latest_valid: boolean;
    /**
     * Get build hash, if version is not latest or released
     */
    readonly build_hash: string;
    /**
     * Check if we're running the latest version
     */
    readonly outdated: boolean;
    /**
     * Check if any outpost is outdated/has a version mismatch
     */
    readonly outpost_outdated: boolean;
};

