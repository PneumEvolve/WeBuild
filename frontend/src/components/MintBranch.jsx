import React, { useContext, useState } from 'react';
import { WalletContext } from '../context/WalletContext';

export default function MintBranch() {
  const { balances, setBalances } = useContext(WalletContext);
  const [amount, setAmount] = useState('');
  const [timer, setTimer] = useState(0);

  const handleMint = () => {
    const seedRequired = (amount * 0.8);
    const fruitRequired = (amount * 0.2);
    if (balances.seed >= seedRequired && balances.fruit >= fruitRequired) {
      setBalances({
        ...balances,
        seed: balances.seed - seedRequired,
        fruit: balances.fruit - fruitRequired,
      });
      setTimer(5); // 5 second lock for demo
      setTimeout(() => {
        setBalances(b => ({ ...b, branch: b.branch + Number(amount) }));
        setTimer(0);
      }, 5000);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Mint BRANCH</h2>
      <input
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        placeholder="Amount of BRANCH"
        className="border p-1 mr-2"
      />
      <button onClick={handleMint} disabled={timer > 0} className="bg-blue-500 text-white px-2 py-1">
        Mint
      </button>
      {timer > 0 && <p>Minting... {timer}s</p>}
    </div>
  );
}
