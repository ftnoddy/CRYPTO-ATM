// src/connectors.js
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42], // Mainnet and testnets
});

const walletconnect = new WalletConnectConnector({
  rpc: {
    1: 'https://mainnet.infura.io/v3/b0eb4be8a0604e1d98e0435a8341e0d4', // Replace with your Infura project ID
  },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
});

export { injected, walletconnect };

// b0eb4be8a0604e1d98e0435a8341e0d4