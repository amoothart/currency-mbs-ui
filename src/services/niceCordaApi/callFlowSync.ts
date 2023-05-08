import { OpenAPI, HelloRestApiService } from '../generatedCordaApi';

OpenAPI.BASE = 'https://localhost:8888/api/v1'

//cache HoldingIdentity if needed
var cachedholdingidentityshorthash = "";
export const


export const callFlowSync = async () => {
    const versionNumber = await HelloRestApiService.getHelloGetprotocolversion();
    return Number;
};


/*
public static postFlowHoldingidentityshorthash(
holdingidentityshorthash: string,
requestBody: StartFlowParameters,
): CancelablePromise<FlowStatusResponse>