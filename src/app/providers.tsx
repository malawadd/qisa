'use client';

import * as React from 'react';
import {
  RainbowKitProvider,
  connectorsForWallets,
} from '@rainbow-me/rainbowkit';

import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {fantomTestnet } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import {injectedWallet} from '@rainbow-me/rainbowkit/wallets';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [fantomTestnet],
  [publicProvider()]
);



const demoAppInfo = {
  appName: 'qisa',
};

const connectors = connectorsForWallets([

  {
    groupName: 'recommended',
    wallets: [
        injectedWallet({ chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} appInfo={demoAppInfo}>
        {mounted && children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}