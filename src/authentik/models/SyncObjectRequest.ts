/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SyncObjectModelEnum } from './SyncObjectModelEnum';
/**
 * Sync object serializer
 */
export type SyncObjectRequest = {
    sync_object_model: SyncObjectModelEnum;
    sync_object_id: string;
    override_dry_run?: boolean;
};

