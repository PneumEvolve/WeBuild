import React, { createContext, useState, useEffect } from 'react';

export const WalletContext = createContext();

const defaultBalances = {
  seed: 10000,
  branch: 0,
  fruit: 0,
  root: 0,
};

const defaultNfts = {
  seed: false,
  branch: false,
  fruit: false,
};

export function WalletProvider({ children }) {
  const [balances, setBalances] = useState(() => {
    const saved = localStorage.getItem('balances');
    return saved ? JSON.parse(saved) : defaultBalances;
  });

  const [nfts, setNfts] = useState(() => {
    const saved = localStorage.getItem('nfts');
    return saved ? JSON.parse(saved) : defaultNfts;
  });

  useEffect(() => {
    localStorage.setItem('balances', JSON.stringify(balances));
  }, [balances]);

  useEffect(() => {
    localStorage.setItem('nfts', JSON.stringify(nfts));
  }, [nfts]);

  return (
    <WalletContext.Provider value={{ balances, setBalances, nfts, setNfts }}>
      {children}
    </WalletContext.Provider>
  );
}
