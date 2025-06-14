import React, { useContext, useState } from 'react';
import { WalletContext } from '../context/WalletContext';

export default function AMMSwap() {
  const { balances, setBalances } = useContext(WalletContext);
  const [fromToken, setFromToken] = useState('seed');
  const [toToken, setToToken] = useState('usdc');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState(null);

  const pools = {
    seed: 100000,
    usdc: 100000,
    fruit: 50000,
    branch: 50000,
    root: 10000,
  };

  const handleSwap = () => {
    const x = pools[fromToken];
    const y = pools[toToken];
    const input = Number(amount);
    const output = y - (x * y) / (x + input);
    setResult(output.toFixed(2));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Swap Simulation</h2>
      <div className="mb-2">
        <select value={fromToken} onChange={e => setFromToken(e.target.value)} className="border p-1 mr-2">
          <option value="seed">SEED</option>
          <option value="fruit">FRUIT</option>
          <option value="branch">BRANCH</option>
        </select>
        to
        <select value={toToken} onChange={e => setToToken(e.target.value)} className="border p-1 ml-2">
          <option value="usdc">USDC</option>
          <option value="root">ROOT</option>
        </select>
      </div>
      <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" className="border p-1 mr-2" />
      <button onClick={handleSwap} className="bg-purple-500 text-white px-2 py-1">Preview</button>
      {result && <p className="mt-2">Estimated output: {result} {toToken.toUpperCase()}</p>}
    </div>
  );
}
