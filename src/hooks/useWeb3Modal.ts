import { useCallback, useEffect, useMemo, useState } from "react";
import Web3Modal from "web3modal";
import { Web3Provider } from "@ethersproject/providers";
import Fortmatic from "fortmatic";
import Torus from "@toruslabs/torus-embed";

import { providers } from "ethers";

import WalletConnectProvider from "@walletconnect/web3-provider";
import { INFURA_ID, FORTMATIC_KEY } from "../constants/api_keys";

const NETWORK_NAME = "kovan";
const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider, // required
        options: {
            infuraId: INFURA_ID // required
        }
    },
    fortmatic: {
        package: Fortmatic, // required
        options: {
            key: FORTMATIC_KEY // required
        }
    },
    torus: {
        package: Torus, // required
    },
};


function useWeb3Modal(config = {
    autoLoad: true,
    NETWORK: NETWORK_NAME
}) {
    const [provider, setProvider] = useState<providers.Web3Provider>();
    const [autoLoaded, setAutoLoaded] = useState(false);
    const { autoLoad, NETWORK } = config;

    const web3Modal = useMemo(() => {
        return new Web3Modal({
            network: NETWORK,
            cacheProvider: true,
            providerOptions: providerOptions,
            theme: "dark"
        });
    }, [NETWORK])

    const logoutOfWeb3Modal = useCallback(
        async function () {
            web3Modal.clearCachedProvider();
            window.location.reload();
        },
        [web3Modal],
    );

    const loadWeb3Modal = useCallback(async () => {
        try {
            const newProvider = await web3Modal.connect();
            setProvider(new Web3Provider(newProvider));

            newProvider.on("chainChanged", (chainId: string) => {
                console.log(`chain changed to ${chainId}! updating newProviders`)
                setProvider(new Web3Provider(newProvider))
            });

            newProvider.on("accountsChanged", (accounts: string[]) => {
                console.log(`account changed!`)
                setProvider(new Web3Provider(newProvider))
            });

            // Subscribe to session disconnection
            newProvider.on("disconnect", (code: any, reason: any) => {
                console.log(code, reason);
                logoutOfWeb3Modal()
            });

        } catch (e) {
            console.log(e)
        }
    }, [logoutOfWeb3Modal, web3Modal]);



    // If autoLoad is enabled and the the wallet had been loaded before, load it automatically now.
    useEffect(() => {
        if (autoLoad && !autoLoaded && web3Modal.cachedProvider) {
            loadWeb3Modal();
            setAutoLoaded(true);
        }
    }, [autoLoad, autoLoaded, loadWeb3Modal, setAutoLoaded, web3Modal.cachedProvider]);

    return {
        provider: provider,
        loadWeb3Modal: loadWeb3Modal,
        logoutOfWeb3Modal: logoutOfWeb3Modal
    }
}

export default useWeb3Modal;
