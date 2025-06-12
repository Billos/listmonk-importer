/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FlowSet } from './FlowSet';
import type { UserCreationModeEnum } from './UserCreationModeEnum';
import type { UserTypeEnum } from './UserTypeEnum';
/**
 * UserWriteStage Serializer
 */
export type UserWriteStage = {
    readonly pk: string;
    name: string;
    /**
     * Get object type so that we know how to edit the object
     */
    readonly component: string;
    /**
     * Return object's verbose_name
     */
    readonly verbose_name: string;
    /**
     * Return object's plural verbose_name
     */
    readonly verbose_name_plural: string;
    /**
     * Return internal model name
     */
    readonly meta_model_name: string;
    flow_set?: Array<FlowSet>;
    user_creation_mode?: UserCreationModeEnum;
    /**
     * When set, newly created users are inactive and cannot login.
     */
    create_users_as_inactive?: boolean;
    /**
     * Optionally add newly created users to this group.
     */
    create_users_group?: string | null;
    user_type?: UserTypeEnum;
    user_path_template?: string;
};

