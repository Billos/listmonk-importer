/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DashboardCount = {
    data?: {
        subscribers?: {
            total?: number;
            blocklisted?: Record<string, any>;
            orphans?: number;
        };
        lists?: {
            total?: number;
            private?: number;
            public?: number;
            optin_single?: number;
            optin_double?: number;
        };
        campaigns?: {
            total?: number;
            by_status?: {
                draft?: number;
            };
        };
        messages?: number;
    };
};

