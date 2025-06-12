/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FlowInspectorPlan } from './FlowInspectorPlan';
/**
 * Serializer for inspect endpoint
 */
export type FlowInspection = {
    plans: Array<FlowInspectorPlan>;
    current_plan?: FlowInspectorPlan;
    is_completed: boolean;
};

