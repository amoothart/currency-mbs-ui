import { callFlowSync } from '../niceCordaApi';
import { MortgageDTO } from './models/MortgageDTO';

const flowClassName = 'com.r3.developers.csdetemplate.digitalcurrency.workflows.ListMortgagesByBundleIdFlow';

export const getMortgagesByBundleId = async (holdingidentityshorthash: string, bundleId: string) : Promise<MortgageDTO[]> => {
    const requestBody = {
        bundleId: bundleId,
    }

    const mortgagesResult = await callFlowSync(holdingidentityshorthash, flowClassName, requestBody);
    return JSON.parse(mortgagesResult.flowResult!);
}
