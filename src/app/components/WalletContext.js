import React, { createContext, useState } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';

const WalletContext = createContext({
    connection: null,
    publicKey: null,
});

const WalletProvider = ({ children }) => {
    const [connection, setConnection] = useState(null);
    const [publicKey, setPublicKey] = useState(null);

    return (
        <WalletContext.Provider value={{ connection, publicKey, setConnection, setPublicKey }}>
            {children}
        </WalletContext.Provider>
    );
};

export { WalletContext, WalletProvider };