/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 *
 * Information required to start a flow for this holdingId, including:
 * clientRequestId: a client provided flow identifier
 * flowClassName: fully qualified class name of the flow to start
 * requestBody: optional start arguments string passed to the flow; defaults to an empty string
 * 
 */
export type StartFlowParameters = {
    clientRequestId: string;
    flowClassName: string;
    /**
     * Can be any value - string, number, boolean, array or object.
     */
    requestBody: (string | number | boolean | any[] | Record<string, any>);
};
