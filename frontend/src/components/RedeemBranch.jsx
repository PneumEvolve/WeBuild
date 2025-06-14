import React, { useContext, useState } from 'react';
import { WalletContext } from '../context/WalletContext';

export default function RedeemBranch() {
  const { balances, setBalances } = useContext(WalletContext);
  const [message, setMessage] = useState('');

  const handleRedeem = () => {
    if (balances.branch >= 2) {
      setBalances({
        ...balances,
        branch: balances.branch - 2,
        fruit: balances.fruit + 1,
      });
      setMessage('Redeemed 2 BRANCH for 1 FRUIT');
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Redeem BRANCH</h2>
      <button onClick={handleRedeem} className="bg-green-500 text-white px-2 py-1">
        Redeem 2 BRANCH
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}
