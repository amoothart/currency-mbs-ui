import { OpenAPI, HelloRestApiService } from '../generatedCordaApi';

OpenAPI.BASE = 'https://localhost:8888/api/v1'

export const getTradeNumber = async () => {
    const versionNumber = await HelloRestApiService.getHelloGetprotocolversion();
    return Number;
};