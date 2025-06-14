import React, { useState } from 'react';
import { WalletProvider } from './context/WalletContext';
import Home from './components/Home';
import Wallet from './components/Wallet';
import MintBranch from './components/MintBranch';
import RedeemBranch from './components/RedeemBranch';
import AMMSwap from './components/AMMSwap';
import NFTMint from './components/NFTMint';
import AIAgentAccess from './components/AIAgentAccess';
import Governance from './components/Governance';

const pages = {
  home: Home,
  wallet: Wallet,
  mint: MintBranch,
  redeem: RedeemBranch,
  swap: AMMSwap,
  nft: NFTMint,
  ai: AIAgentAccess,
  gov: Governance,
};

export default function App() {
  const [page, setPage] = useState('home');
  const Page = pages[page];

  return (
    <WalletProvider>
      <div className="p-4 font-sans">
        <nav className="mb-4 space-x-2">
          <button onClick={() => setPage('home')} className="underline">Home</button>
          <button onClick={() => setPage('wallet')} className="underline">Wallet</button>
          <button onClick={() => setPage('mint')} className="underline">Mint BRANCH</button>
          <button onClick={() => setPage('redeem')} className="underline">Redeem BRANCH</button>
          <button onClick={() => setPage('swap')} className="underline">Swap</button>
          <button onClick={() => setPage('nft')} className="underline">NFTs</button>
          <button onClick={() => setPage('ai')} className="underline">AI Access</button>
          <button onClick={() => setPage('gov')} className="underline">Governance</button>
        </nav>
        <Page />
      </div>
    </WalletProvider>
  );
}
