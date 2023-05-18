import { callFlowSync } from '../niceCordaApi';
import { DigitalCurrencyDTO } from './models/DigitalCurrencyDTO';

const flowClassName = 'com.r3.developers.csdetemplate.digitalcurrency.workflows.IssueDigitalCurrencyFlow';

export const addDigitalCurrency = async (issuingIdentityShorthash: string, holder: string, quantity: string) : Promise<DigitalCurrencyDTO[]> => {
    const requestBody = {
        holder: holder,
        quantity: quantity,
    }
    const digitalCurrencyCallResult = await callFlowSync(issuingIdentityShorthash, flowClassName, requestBody);
    return JSON.parse(digitalCurrencyCallResult.flowResult!);
}
