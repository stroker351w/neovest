import React, { useState } from 'react';
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from 'web3';

const ConnectButton = () => {
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    try {
      // Create WalletConnect Provider with a public RPC URL
      const provider = new WalletConnectProvider({
        rpc: {
          1: "https://rpc.ankr.com/eth", // Public RPC URL for Ethereum Mainnet
          // You can add other networks here if needed
        },
        chainId: 1, // Ethereum Mainnet
      });

      // Enable session (triggers QR Code modal)
      await provider.enable();

      // Log to ensure provider is correctly initialized
      console.log("Provider initialized:", provider);

      // Create Web3 instance
      const web3 = new Web3(provider);

      // Log to ensure Web3 instance is correctly created
      console.log("Web3 instance:", web3);

      // Get connected accounts
      const accounts = await web3.eth.getAccounts();
      console.log("Connected account:", accounts[0]);

      setAccount(accounts[0]);
      setConnected(true);

      // Handle disconnection
      provider.on("disconnect", () => {
        setConnected(false);
        setAccount(null);
      });
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  return (
    <button onClick={connectWallet}>
      {connected ? `Connected: ${account}` : 'Connect Wallet'}
    </button>
  );
};

export default ConnectButton;
