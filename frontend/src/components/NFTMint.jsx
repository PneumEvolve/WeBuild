import React, { useContext } from 'react';
import { WalletContext } from '../context/WalletContext';
import nftImg from '../assets/nft-placeholder.svg';

export default function NFTMint() {
  const { nfts, setNfts } = useContext(WalletContext);

  const mint = type => {
    setNfts({ ...nfts, [type]: true });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">NFT Minting (Mock)</h2>
      <img src={nftImg} alt="NFT placeholder" className="w-32 h-32 mb-2" />
      <button onClick={() => mint('seed')} disabled={nfts.seed} className="bg-gray-500 text-white px-2 py-1 mr-2">
        {nfts.seed ? 'Seed NFT Minted' : 'Mint Seed NFT'}
      </button>
      <button onClick={() => mint('fruit')} disabled={nfts.fruit} className="bg-gray-500 text-white px-2 py-1 mr-2">
        {nfts.fruit ? 'Fruit NFT Minted' : 'Mint Fruit NFT'}
      </button>
      <button onClick={() => mint('branch')} disabled={nfts.branch} className="bg-gray-500 text-white px-2 py-1">
        {nfts.branch ? 'Branch NFT Minted' : 'Mint Branch NFT'}
      </button>
      <ul className="mt-2 text-sm">
        <li>Seed NFT: Fee Discount (0.5%)</li>
        <li>Fruit NFT: Governance Boost</li>
        <li>Branch NFT: Unlock AI Tools</li>
      </ul>
    </div>
  );
}
