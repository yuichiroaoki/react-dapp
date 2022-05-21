import { Center } from "@chakra-ui/react"
import { Spinner } from "@chakra-ui/react"
import { AlertDialogContent, AlertDialogHeader, AlertDialogBody } from "@chakra-ui/react"

export const WaitingForConfirmation = () => (
	<AlertDialogContent>
		<AlertDialogHeader>Waiting For Confirmation</AlertDialogHeader>
		<AlertDialogBody>
			<Center my={6}>
				<Spinner size="xl" />
			</Center>
		</AlertDialogBody>
	</AlertDialogContent>
)