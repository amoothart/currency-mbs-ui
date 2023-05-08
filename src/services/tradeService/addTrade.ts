import { callFlowSync } from '../niceCordaApi';
import { TradeConfDTO } from './models/TradeConfDTO';

const flowClassName = 'com.r3.developers.demo.tradeconf.workflows.ShareTradeConfFlow';

export const addTrade = async (holdingidentityshorthash: string, counterpartyName: string, tradeId: string, details: string) : Promise<TradeConfDTO[]> => {
    const requestBody = {
        counterpartyName: counterpartyName,
        tradeId: tradeId,
        details: details,
    }
    const tradesCallResult = await callFlowSync(holdingidentityshorthash, flowClassName, requestBody);
    return JSON.parse(tradesCallResult.flowResult!);
}