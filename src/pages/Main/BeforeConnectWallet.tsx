import { Button } from "@chakra-ui/react"
import { providers } from "ethers"
import { WrongNetworkButton } from "../../components/WalletModal/WrongNetworkButton"

export const BeforeConnectWallet = ({
	network
}: { network: providers.Network | undefined }) => (
	<>
		{
			network ?
				<WrongNetworkButton />
				:
				<Button isDisabled={true}>
					connect wallet to get started
				</Button>
		}
	</>
)