/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FooterLink } from './FooterLink';
import type { UiThemeEnum } from './UiThemeEnum';
/**
 * Partial brand information for styling
 */
export type CurrentBrand = {
    matched_domain: string;
    branding_title: string;
    branding_logo: string;
    branding_favicon: string;
    branding_custom_css: string;
    readonly ui_footer_links: Array<FooterLink>;
    readonly ui_theme: UiThemeEnum;
    flow_authentication?: string;
    flow_invalidation?: string;
    flow_recovery?: string;
    flow_unenrollment?: string;
    flow_user_settings?: string;
    flow_device_code?: string;
    readonly default_locale: string;
};

