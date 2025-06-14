import React from 'react';
import TokenBalances from './TokenBalances';

export default function Wallet() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Wallet Simulation</h2>
      <TokenBalances />
      <p>You start with 10,000 SEED tokens.</p>
    </div>
  );
}
