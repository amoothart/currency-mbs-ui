/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The approval rule information including the regular expression associated with the rule, and an optional label describing the rule
 */
export type ApprovalRuleRequestParams = {
    ruleLabel?: string | null;
    ruleRegex: string;
};
