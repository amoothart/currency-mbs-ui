import { callFlowSync } from '../niceCordaApi';
import { MortgageDTO } from './models/MortgageDTO';

const flowClassName = 'com.r3.developers.csdetemplate.digitalcurrency.workflows.IssueBondFlow';

export const addMortgage = async (holdingidentityshorthash: string,
                                  owner: string,
                                  address: string,
                                  interestRate: string,
                                  fixedInterestRate: string,
                                  loanToValue: string,
                                  condition: string,
                                  creditQualityRating: string,
                                  listingDetails: string) : Promise<MortgageDTO[]> => {
    let fixedInterestRateBoolean = fixedInterestRate == "Y"
    const requestBody = {
        owner: owner,
        address: address,
        interestRate: interestRate,
        fixedInterestRate: fixedInterestRateBoolean,
        loanToValue: loanToValue,
        condition: condition,
        creditQualityRating: creditQualityRating,
        listingDetails: listingDetails,
    }
    const mortgageCallResult = await callFlowSync(holdingidentityshorthash, flowClassName, requestBody);
    return JSON.parse(mortgageCallResult.flowResult!);
}
