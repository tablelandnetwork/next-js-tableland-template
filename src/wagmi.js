import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import * as chain from "wagmi/chains";
import { http } from "viem";

// All of the chains configured below are supported by Tableland
const chains = [
  chain.mainnet,
  chain.polygon,
  chain.optimism,
  chain.arbitrum,
  chain.filecoin,
  ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
    ? [
        chain.arbitrumSepolia,
        chain.sepolia,
        chain.polygonMumbai,
        chain.optimismSepolia,
        chain.filecoinCalibration,
        chain.hardhat,
      ]
    : []),
];

const transports = Object.fromEntries(chains.map((c) => [c.id, http()]));

export const config = getDefaultConfig({
  appName: "Tableland Starter",
  chains,
  transports,
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID ?? "", // Set up a WalletConnect account: https://walletconnect.com/
  ssr: true, // Enable server-side rendering
});
