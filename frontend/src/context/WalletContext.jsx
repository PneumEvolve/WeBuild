import React, { createContext, useState } from 'react';

export const WalletContext = createContext();

export function WalletProvider({ children }) {
  const [balances, setBalances] = useState({
    seed: 10000,
    branch: 0,
    fruit: 0,
    root: 0,
  });

  const [nfts, setNfts] = useState({
    seed: false,
    branch: false,
    fruit: false,
  });

  return (
    <WalletContext.Provider value={{ balances, setBalances, nfts, setNfts }}>
      {children}
    </WalletContext.Provider>
  );
}
