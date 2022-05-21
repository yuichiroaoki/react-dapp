import { useDisclosure } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogHeader,
	AlertDialogCloseButton,
	AlertDialogContent,
	AlertDialogOverlay,
} from "@chakra-ui/react"

export const WrongNetworkButton = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
		<>
			<Button colorScheme="red"
				onClick={onOpen}>
				Wrong Network
			</Button>
			{/* <AlertDialog
				motionPreset="slideInBottom"
				onClose={onClose}
				isOpen={isOpen}
				isCentered
			> */}
				<AlertDialogOverlay />

				<AlertDialogContent>
					<AlertDialogHeader>Wrong Netwrok</AlertDialogHeader>
					<AlertDialogCloseButton />
					<AlertDialogBody>
						Please connect to Kovan or Rinkeby network.
					</AlertDialogBody>
				</AlertDialogContent>
			{/* </AlertDialog> */}
		</>
	)
}