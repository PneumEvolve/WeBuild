import React, { useContext } from 'react';
import { WalletContext } from '../context/WalletContext';

export default function EarnSeed() {
  const { balances, setBalances } = useContext(WalletContext);
  const earn = () => {
    setBalances({ ...balances, seed: balances.seed + 1000 });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Earn SEED</h2>
      <button onClick={earn} className="bg-green-600 text-white px-2 py-1">
        Earn 1,000 SEED
      </button>
    </div>
  );
}
