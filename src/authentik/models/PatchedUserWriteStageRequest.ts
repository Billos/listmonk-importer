/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FlowSetRequest } from './FlowSetRequest';
import type { UserCreationModeEnum } from './UserCreationModeEnum';
import type { UserTypeEnum } from './UserTypeEnum';
/**
 * UserWriteStage Serializer
 */
export type PatchedUserWriteStageRequest = {
    name?: string;
    flow_set?: Array<FlowSetRequest>;
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

