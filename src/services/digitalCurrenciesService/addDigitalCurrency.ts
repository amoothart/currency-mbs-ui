import { callFlowSync } from '../niceCordaApi';
import { DigitalCurrencyDTO } from './models/DigitalCurrencyDTO';

const flowClassName = 'com.r3.developers.csdetemplate.digitalcurrency.workflows.IssueDigitalCurrencyFlow';

export const addDigitalCurrency = async (holdingidentityshorthash: string, counterpartyName: string, digitalCurrencyId: string, details: string) : Promise<DigitalCurrencyDTO[]> => {
    const requestBody = {
        counterpartyName: counterpartyName,
        digitalCurrencyId: digitalCurrencyId,
        details: details,
    }
    const digitalCurrencyCallResult = await callFlowSync(holdingidentityshorthash, flowClassName, requestBody);
    return JSON.parse(digitalCurrencyCallResult.flowResult!);
}
