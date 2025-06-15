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
      <div className="p-4 font-sans max-w-3xl mx-auto">
        <nav className="mb-4 flex flex-wrap gap-2">
          {Object.keys(pages).map(key => (
            <button
              key={key}
              onClick={() => setPage(key)}
              className={`px-2 py-1 rounded text-sm border ${page === key ? "bg-blue-600 text-white" : "bg-white text-blue-600"}`}
            >
              {key === 'mint'
                ? 'Mint BRANCH'
                : key === 'redeem'
                ? 'Redeem BRANCH'
                : key === 'gov'
                ? 'Governance'
                : key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </nav>
        <div className="bg-white p-4 rounded shadow">
          <Page />
        </div>
      </div>
    </WalletProvider>
  );
}
