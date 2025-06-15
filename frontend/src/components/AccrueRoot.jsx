import React, { useContext } from 'react';
import { WalletContext } from '../context/WalletContext';

export default function AccrueRoot() {
  const { balances, setBalances } = useContext(WalletContext);

  const accrue = () => {
    const reward = balances.fruit * 0.1;
    if (reward > 0) {
      setBalances({ ...balances, root: balances.root + reward });
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Accrue ROOT</h2>
      <p className="mb-2 text-sm text-gray-600">
        Claim 0.1 ROOT for every FRUIT you hold.
      </p>
      <button onClick={accrue} className="bg-purple-600 text-white px-2 py-1">
        Claim ROOT
      </button>
    </div>
  );
}
