import { callFlowSync } from '../niceCordaApi';
import {BundleDTO} from "./models/BundleDTO";

const flowClassName = 'com.r3.developers.csdetemplate.digitalcurrency.workflows.CreateBundleOfBondsFlow';

export const createBundle = async (holdingidentityshorthash: string,
                                  mortgageIds: string[]) : Promise<BundleDTO[]> => {
    const requestBody = {
        mortgageIds: mortgageIds,
    }
    const bundleCallResult = await callFlowSync(holdingidentityshorthash, flowClassName, requestBody);
    return JSON.parse(bundleCallResult.flowResult!);
}
