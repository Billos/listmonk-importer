/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SMTPSettings = {
    uuid?: string;
    enabled?: boolean;
    host?: string;
    hello_hostname?: string;
    port?: number;
    auth_protocol?: string;
    username?: string;
    email_headers?: Array<Record<string, any>>;
    max_conns?: number;
    max_msg_retries?: number;
    idle_timeout?: string;
    wait_timeout?: string;
    tls_type?: string;
    tls_skip_verify?: boolean;
};

