import React, { useContext } from 'react';
import { WalletContext } from './WalletContext';
import { useWallet } from '@solana/wallet-adapter-react';

const ConnectWalletButton = () => {
    const { setConnection, setPublicKey } = useContext(WalletContext);
    const wallet = useWallet();

    const handleConnect = async () => {
        try {
            const connection = new Connection('https://api.mainnet-beta.solana.com');
            const walletAdapter = await wallet.connect();
            const publicKey = walletAdapter.publicKey;

            setConnection(connection);
            setPublicKey(publicKey);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-[10px] px-1 rounded sm:py-2 sm:px-4  sm:text-base " onClick={handleConnect}>
            Connect Wallet
        </button>
    );
};

export default ConnectWalletButton;