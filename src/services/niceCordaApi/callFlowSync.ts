import { FlowManagementApiService, FlowStatusResponse, StartFlowParameters } from '../generatedCordaApi';
import {v4 as uuidv4} from 'uuid';

const pollForResult = async (holdingidentityshorthash: string, clientRequestId: string) : Promise<FlowStatusResponse> => {
    return new Promise( (resolve, reject) => {
        // TODO: this badly needs error handling
        (async function waitForCompletion(){
            try {
                const callResult = await FlowManagementApiService.getFlowHoldingidentityshorthashClientrequestid(holdingidentityshorthash, clientRequestId);
                if (callResult.flowStatus == "COMPLETED") return resolve(callResult);
            } catch (error) {}
            setTimeout(waitForCompletion, parseInt(process.env.REACT_APP_CORDA_REST_POLLING_DELAY!));
        })();
    });
};

export const callFlowSync = async (holdingidentityshorthash: string, flowClassName: string, requestBody: (string | number | boolean | any[] | Record<string, any>)) : Promise<FlowStatusResponse> => {
    const trimmedClassName = flowClassName.slice(flowClassName.lastIndexOf(".") + 1);

    const flowParams : StartFlowParameters = {
        clientRequestId: trimmedClassName + uuidv4(),
        flowClassName: flowClassName,
        requestBody: requestBody
    }
    // initiate
    await FlowManagementApiService.postFlowHoldingidentityshorthash(holdingidentityshorthash, flowParams);
    // poll for result
    return pollForResult(holdingidentityshorthash, flowParams.clientRequestId);
};