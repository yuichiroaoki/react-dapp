import { Button, Text, Box } from "@chakra-ui/react"
import { providers } from 'ethers';
import { Link } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useState } from "react";
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogCloseButton,
	AlertDialogContent,
	AlertDialogOverlay,
} from "@chakra-ui/react"
import { useClipboard } from "@chakra-ui/react"
import { FaCopy, FaCheckCircle } from "react-icons/fa";
import { useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { WrongNetworkButton } from "./WrongNetworkButton";
import getShortAddress from "../../utils/getShortAddress";

interface AddressButtonProps {
	provider: providers.Web3Provider;
	address: string;
	logoutOfWeb3Modal: () => Promise<void>;
	network: providers.Network | undefined;
}

export default function AddressButton({
	provider, address, logoutOfWeb3Modal, network
}: AddressButtonProps) {

	const { isOpen, onOpen, onClose } = useDisclosure()
	const { hasCopied, onCopy } = useClipboard(address)

	const [networkName, setNetworkName] = useState<undefined | string>(undefined)
	useEffect(() => {
		if (network) {
			setNetworkName(network.name)
		}
	}, [network])

	return (
		<>
			{
				(networkName === "kovan" || networkName === "rinkeby") ?
					<Button
						onClick={onOpen}
					>
						{getShortAddress(address)}
					</Button>
					:
					<WrongNetworkButton />
			}

			{/* <AlertDialog
				isOpen={isOpen}
				onClose={onClose}
			> */}
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader fontSize="lg" fontWeight="bold">
							Account
						</AlertDialogHeader>
						<AlertDialogCloseButton />
						<AlertDialogBody>
							<Text fontSize="lg">
								{getShortAddress(address)}
							</Text>
							<Box mt={4}>
								{
									hasCopied ?
										<Button mr={2}
											leftIcon={<FaCheckCircle />}
											size="sm"
										>
											Copied
										</Button>
										:
										<Button onClick={onCopy} mr={2}
											leftIcon={<FaCopy />}
											size="sm"
										>
											Copy Address
										</Button>
								}
								<Link href={`https://${networkName}.etherscan.io/address/${address}`}
									isExternal>
									<ExternalLinkIcon mx="2px" />View on Explorer
								</Link>
							</Box>
						</AlertDialogBody>

						<AlertDialogFooter>
							<Button colorScheme="blue" onClick={() => logoutOfWeb3Modal()} ml={3}>
								Disconnect Wallet
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			{/* </AlertDialog> */}
		</>
	)
}