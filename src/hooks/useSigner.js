// Convert wagmi/viem `Client` to ethers `Signer`
import { useMemo } from "react";
import { BrowserProvider, JsonRpcSigner } from "ethers";
import { useConnectorClient } from "wagmi";

function walletClientToSigner(client) {
  const { account, chain, transport } = client;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  const provider = new BrowserProvider(transport, network);
  const signer = new JsonRpcSigner(provider, account.address);
  return signer;
}

export function useSigner({ chainId } = {}) {
  const { data: client } = useConnectorClient({ chainId });
  return useMemo(
    () => (client ? walletClientToSigner(client) : undefined),
    [client]
  );
}
