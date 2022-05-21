import { providers } from 'ethers';
import ConnectWallet from "./ConnectWallet";
import Wallet from "./Wallet";

interface WalletModalProps {
    provider: providers.Web3Provider | undefined;
    loadWeb3Modal: () => Promise<void>;
    logoutOfWeb3Modal: () => Promise<void>;
}

export default function WalletModal({
    provider, loadWeb3Modal, logoutOfWeb3Modal
}: WalletModalProps) {

    return (
        <>
            {
                provider === undefined ?
                    <ConnectWallet loadWeb3Modal={loadWeb3Modal} />
                    :
                   <Wallet provider={provider}  logoutOfWeb3Modal={logoutOfWeb3Modal} />
            }
        </>
    )
}