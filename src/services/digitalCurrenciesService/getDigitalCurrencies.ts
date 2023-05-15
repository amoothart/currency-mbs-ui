import { callFlowSync } from '../niceCordaApi';
import { DigitalCurrencyDTO } from './models/DigitalCurrencyDTO';

const flowClassName = 'com.r3.developers.csdetemplate.digitalcurrency.workflows.ListDigitalCurrencyFlow';

export const getDigitalCurrencies = async (holdingidentityshorthash: string) : Promise<DigitalCurrencyDTO[]> => {
    const digitalCurrenciesResult = await callFlowSync(holdingidentityshorthash, flowClassName, "");
    return JSON.parse(digitalCurrenciesResult.flowResult!);
}
