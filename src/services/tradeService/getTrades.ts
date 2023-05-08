import { callFlowSync } from '../niceCordaApi';
import { TradeConfDTO } from './models/TradeConfDTO';

const flowClassName = 'com.r3.developers.demo.tradeconf.workflows.GetTradesFlow';

export const getTrades = async (holdingidentityshorthash: string) : Promise<TradeConfDTO[]> => {
    const tradesCallResult = await callFlowSync(holdingidentityshorthash, flowClassName, "");
    return JSON.parse(tradesCallResult.flowResult!);
}