import { PropsWithChildren, createContext } from "react";
import { ShortNodeInfo } from "../services/niceCordaApi/getVnodes";
import React from "react";
import NodeSelector from "./VNodeSelector";

export interface VNodeContext {
    vNode: ShortNodeInfo | null;
    setvNode: (vNode: ShortNodeInfo | null) => void;
}

export const VDataContext = createContext<VNodeContext>({
    vNode: null,
    setvNode: () => {},
});

export const VNodeContext = ({ children } : PropsWithChildren) => {

    const [vNode, setvNode] = React.useState<ShortNodeInfo | null>(null);
  
    return (
      <VDataContext.Provider value={{vNode, setvNode}}>
          <NodeSelector />
          {children}
      </VDataContext.Provider>
    );
  }