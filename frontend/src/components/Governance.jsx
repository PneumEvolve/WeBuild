import React, { useContext, useEffect, useState } from 'react';
import { WalletContext } from '../context/WalletContext';

export default function Governance() {
  const { balances } = useContext(WalletContext);
  const [proposals, setProposals] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProposals = async () => {
    setLoading(true);
    const res = await fetch('http://localhost:3001/api/proposals');
    const data = await res.json();
    setProposals(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProposals();
  }, []);

  const vote = async (id, choice) => {
    await fetch('http://localhost:3001/api/vote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ proposalId: id, vote: choice }),
    });
    fetchProposals();
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Governance</h2>
      {loading && <p>Loading...</p>}
      <ul>
        {proposals.map(p => (
          <li key={p.id} className="mb-2 border p-2">
            <p>{p.title}</p>
            <p>Yes: {p.yes} | No: {p.no}</p>
            {balances.root > 0 && (
              <div>
                <button onClick={() => vote(p.id, 'yes')} className="bg-blue-500 text-white px-2 py-1 mr-2">Yes</button>
                <button onClick={() => vote(p.id, 'no')} className="bg-blue-500 text-white px-2 py-1">No</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
