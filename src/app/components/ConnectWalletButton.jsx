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
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleConnect}>
            Connect Wallet
        </button>
    );
};

export default ConnectWalletButton;