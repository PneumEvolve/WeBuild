import React, { useContext } from 'react';
import { WalletContext } from '../context/WalletContext';

export default function AIAgentAccess() {
  const { balances, nfts } = useContext(WalletContext);
  const hasAccess = balances.root > 0 || nfts.branch;

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">AI Agent Access</h2>
      {hasAccess ? (
        <button className="bg-red-500 text-white px-2 py-1">Launch AI Tools</button>
      ) : (
        <p>Access locked. Hold ROOT token or Branch NFT to use AI.</p>
      )}
    </div>
  );
}
