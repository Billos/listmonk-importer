/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GroupMatchingModeEnum } from './GroupMatchingModeEnum';
import type { PolicyEngineMode } from './PolicyEngineMode';
import type { UserMatchingModeEnum } from './UserMatchingModeEnum';
/**
 * Plex Source Serializer
 */
export type PlexSourceRequest = {
    /**
     * Source's display Name.
     */
    name: string;
    /**
     * Internal source name, used in URLs.
     */
    slug: string;
    enabled?: boolean;
    /**
     * Flow to use when authenticating existing users.
     */
    authentication_flow?: string | null;
    /**
     * Flow to use when enrolling new users.
     */
    enrollment_flow?: string | null;
    user_property_mappings?: Array<string>;
    group_property_mappings?: Array<string>;
    policy_engine_mode?: PolicyEngineMode;
    /**
     * How the source determines if an existing user should be authenticated or a new user enrolled.
     */
    user_matching_mode?: UserMatchingModeEnum;
    user_path_template?: string;
    /**
     * How the source determines if an existing group should be used or a new group created.
     */
    group_matching_mode?: GroupMatchingModeEnum;
    /**
     * Client identifier used to talk to Plex.
     */
    client_id?: string;
    /**
     * Which servers a user has to be a member of to be granted access. Empty list allows every server.
     */
    allowed_servers?: Array<string>;
    /**
     * Allow friends to authenticate, even if you don't share a server.
     */
    allow_friends?: boolean;
    /**
     * Plex token used to check friends
     */
    plex_token: string;
};

