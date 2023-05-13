import { PropsWithChildren, createContext, useEffect } from "react";
import { ShortNodeInfo, getVnodes } from "../services/niceCordaApi/getVnodes";
import React from "react";
import NodeSelector from "./VNodeSelector";

interface VNodeContext {
    activeNode: ShortNodeInfo | null;
    setActiveNode: (vNode: ShortNodeInfo | null) => void;
    nodes: ShortNodeInfo[];
    setNodes: (vNodes: ShortNodeInfo[]) => void;
}

const VDataContext = createContext<VNodeContext>({
    activeNode: null,
    setActiveNode: () => {},
    nodes: [],
    setNodes: () => {},
});

export const useVnodeContext = () => React.useContext(VDataContext);

export const VNodeContext = ({ children } : PropsWithChildren) => {

    const [activeNode, setActiveNode] = React.useState<ShortNodeInfo | null>(null);
    const [nodes, setNodes] = React.useState<ShortNodeInfo[]>([]);

    useEffect( () => {
        (async () => {
          const fetchedNodes = (await getVnodes()).sort((a, b) => a.x500Name.localeCompare(b.x500Name));
          setNodes(fetchedNodes);
        })();
      }, []);

    return (
      <VDataContext.Provider 
      value={ {
        activeNode: activeNode,
        setActiveNode: setActiveNode,
        nodes: nodes,
        setNodes: setNodes,
        } } >
          <NodeSelector />
          {activeNode ? children : null}
      </VDataContext.Provider>
    );
  }