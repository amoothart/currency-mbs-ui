import { VirtualNodeApiService } from '../generatedCordaApi';

export type ShortNodeInfo = {
    x500Name: string;
    shortHash: string;
    cpiName: string;
};

export const getVnodes = async () : Promise<ShortNodeInfo[]> => {
    const { virtualNodes } = await VirtualNodeApiService.getVirtualnode();
    return virtualNodes.map(
        (vNode) => ({
            x500Name: vNode.holdingIdentity.x500Name,
            shortHash: vNode.holdingIdentity.shortHash,
            cpiName: vNode.cpiIdentifier.cpiName,
        })
    );
};