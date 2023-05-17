import { callFlowSync } from '../niceCordaApi';
import { MortgageDTO } from './models/MortgageDTO';

const flowClassName = 'com.r3.developers.csdetemplate.digitalcurrency.workflows.IssueMortgageFlow';

export const addMortgage = async (holdingidentityshorthash: string, counterpartyName: string, mortgageId: string, details: string) : Promise<MortgageDTO[]> => {
    const requestBody = {
        counterpartyName: counterpartyName,
        mortgageId: mortgageId,
        details: details,
    }
    const mortgageCallResult = await callFlowSync(holdingidentityshorthash, flowClassName, requestBody);
    return JSON.parse(mortgageCallResult.flowResult!);
}
