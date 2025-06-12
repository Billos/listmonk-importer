/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Brand Serializer
 */
export type BrandRequest = {
    /**
     * Domain that activates this brand. Can be a superset, i.e. `a.b` for `aa.b` and `ba.b`
     */
    domain: string;
    default?: boolean;
    branding_title?: string;
    branding_logo?: string;
    branding_favicon?: string;
    branding_custom_css?: string;
    branding_default_flow_background?: string;
    flow_authentication?: string | null;
    flow_invalidation?: string | null;
    flow_recovery?: string | null;
    flow_unenrollment?: string | null;
    flow_user_settings?: string | null;
    flow_device_code?: string | null;
    /**
     * When set, external users will be redirected to this application after authenticating.
     */
    default_application?: string | null;
    /**
     * Web Certificate used by the authentik Core webserver.
     */
    web_certificate?: string | null;
    /**
     * Certificates used for client authentication.
     */
    client_certificates?: Array<string>;
    attributes?: any;
};

