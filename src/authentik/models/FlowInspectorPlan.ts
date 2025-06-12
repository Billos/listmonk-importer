/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FlowStageBinding } from './FlowStageBinding';
/**
 * Serializer for an active FlowPlan
 */
export type FlowInspectorPlan = {
    readonly current_stage: FlowStageBinding;
    readonly next_planned_stage: FlowStageBinding;
    /**
     * Get the plan's context, sanitized
     */
    readonly plan_context: Record<string, any>;
    /**
     * Get a unique session ID
     */
    readonly session_id: string;
};

