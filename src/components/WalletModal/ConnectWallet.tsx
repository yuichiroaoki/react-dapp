import { Button } from "@chakra-ui/react"

interface ConnectWalletProps {
    loadWeb3Modal: () => Promise<void>;
}

export default function ConnectWallet({
    loadWeb3Modal
}: ConnectWalletProps) {

    return (
        <Button
            colorScheme="blue" fontWeight="bold"
            onClick={() => {
                    loadWeb3Modal();
            }}
        >
            Connect Wallet
        </Button>
    )
}