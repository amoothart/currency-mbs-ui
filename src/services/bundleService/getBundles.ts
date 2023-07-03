import { callFlowSync } from '../niceCordaApi';
import { BundleDTO } from './models/BundleDTO';

const flowClassName = 'com.r3.developers.csdetemplate.digitalcurrency.workflows.ListBundleOfBondsFlow';

export const getBundles = async (holdingidentityshorthash: string) : Promise<BundleDTO[]> => {
    const mortgagesResult = await callFlowSync(holdingidentityshorthash, flowClassName, "");
    return JSON.parse(mortgagesResult.flowResult!);
}
