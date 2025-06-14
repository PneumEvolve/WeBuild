import React, { useContext } from 'react';
import { WalletContext } from '../context/WalletContext';

export default function TokenBalances() {
  const { balances } = useContext(WalletContext);
  return (
    <div className="p-2 border rounded mb-4">
      <h3 className="font-bold">Balances</h3>
      <ul>
        <li>SEED: {balances.seed}</li>
        <li>BRANCH: {balances.branch}</li>
        <li>FRUIT: {balances.fruit}</li>
        <li>ROOT: {balances.root}</li>
      </ul>
    </div>
  );
}
