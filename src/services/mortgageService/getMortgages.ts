import { callFlowSync } from '../niceCordaApi';
import { MortgageDTO } from './models/MortgageDTO';

const flowClassName = 'com.r3.developers.csdetemplate.digitalcurrency.workflows.ListMortgagesFlow';

export const getMortgages = async (holdingidentityshorthash: string) : Promise<MortgageDTO[]> => {
    const mortgagesResult = await callFlowSync(holdingidentityshorthash, flowClassName, "");
    return JSON.parse(mortgagesResult.flowResult!);
}
