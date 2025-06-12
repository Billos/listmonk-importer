/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MailBoxBounces } from './MailBoxBounces';
import type { SMTPSettings } from './SMTPSettings';
export type Settings = {
    'app.site_name'?: string;
    'app.root_url'?: string;
    'app.logo_url'?: string;
    'app.favicon_url'?: string;
    'app.from_email'?: string;
    'app.notify_emails'?: Array<string>;
    'app.enable_public_subscription_page'?: boolean;
    'app.enable_public_archive'?: boolean;
    'app.send_optin_confirmation'?: boolean;
    'app.check_updates'?: boolean;
    'app.lang'?: string;
    'app.batch_size'?: number;
    'app.concurrency'?: number;
    'app.max_send_errors'?: number;
    'app.message_rate'?: number;
    'app.message_sliding_window'?: boolean;
    'app.message_sliding_window_duration'?: string;
    'app.message_sliding_window_rate'?: number;
    'privacy.individual_tracking'?: boolean;
    'privacy.unsubscribe_header'?: boolean;
    'privacy.allow_blocklist'?: boolean;
    'privacy.allow_preferences'?: boolean;
    'privacy.allow_export'?: boolean;
    'privacy.allow_wipe'?: boolean;
    'privacy.exportable'?: Array<string>;
    'privacy.domain_blocklist'?: Array<Record<string, any>>;
    'upload.provider'?: string;
    'upload.filesystem.upload_path'?: string;
    'upload.filesystem.upload_uri'?: string;
    'upload.s3.url'?: string;
    'upload.s3.public_url'?: string;
    'upload.s3.aws_access_key_id'?: string;
    'upload.s3.aws_default_region'?: string;
    'upload.s3.bucket'?: string;
    'upload.s3.bucket_domain'?: string;
    'upload.s3.bucket_path'?: string;
    'upload.s3.bucket_type'?: string;
    'upload.s3.expiry'?: string;
    smtp?: Array<SMTPSettings>;
    messengers?: Array<Record<string, any>>;
    'bounce.enabled'?: boolean;
    'bounce.webhooks_enabled'?: boolean;
    'bounce.count'?: number;
    'bounce.action'?: string;
    'bounce.ses_enabled'?: boolean;
    'bounce.sendgrid_enabled'?: boolean;
    'bounce.sendgrid_key'?: string;
    'bounce.forwardemail_enabled'?: boolean;
    'bounce.forwardemail_key'?: string;
    'bounce.postmark_enabled'?: boolean;
    'bounce.postmark_username'?: string;
    'bounce.postmark_password'?: string;
    'bounce.mailboxes'?: Array<MailBoxBounces>;
    'appearance.admin.custom_css'?: string;
    'appearance.admin.custom_js'?: string;
    'appearance.public.custom_css'?: string;
    'appearance.public.custom_js'?: string;
};

