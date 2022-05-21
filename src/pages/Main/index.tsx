// import { ZksyncTutorial } from './ZksyncTutorial';
import { Container, Box, Center, Stack } from '@chakra-ui/react';
import { useContext, useState } from 'react'
import { NetworkContext, ProviderContext } from '../App';

export default function Main() {
  const provider = useContext(ProviderContext);
  const network = useContext(NetworkContext);

  const [isLoading, setIsLoading] = useState(false)

  return (
    <Box w="100%">
      <Center>
			<Box my={6} py={6} minW={{sm: "md"}}
            borderWidth="4px" borderRadius="lg" overflow="hidden"
          >
            <Container>
            </Container>
          </Box>
      </Center>
    </Box>
  );
}