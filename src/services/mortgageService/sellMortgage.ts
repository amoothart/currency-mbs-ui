import { callFlowSync } from '../niceCordaApi';
import { MortgageDTO } from './models/MortgageDTO';

const flowClassName = 'com.r3.developers.csdetemplate.digitalcurrency.workflows.SellMortgageFlow';

export const sellMortgage = async (holdingIdentityShorthash: string,
                                  mortgageIds: string[],
                                  buyer: string,
                                  price: string) : Promise<MortgageDTO[]> => {
    const requestBody = {
        mortgageIds: mortgageIds,
        buyer: buyer,
        price: price
    }
    const mortgageCallResult = await callFlowSync(holdingIdentityShorthash, flowClassName, requestBody);
    return JSON.parse(mortgageCallResult.flowResult!);
}
