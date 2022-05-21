import { HStack, Text } from "@chakra-ui/react"
import { providers } from 'ethers';
import { useState } from "react";
import AddressButton from "./AddressButton";
import roundNumber from "../../utils/roundNumber";

import { useBreakpointValue } from "@chakra-ui/react"

interface WalletProps {
  provider: providers.Web3Provider;
  logoutOfWeb3Modal: () => Promise<void>;
}

export default function Wallet({
  provider, logoutOfWeb3Modal
}: WalletProps) {
  const [network, setNetwork] = useState<undefined | providers.Network>();
  const isHidden = useBreakpointValue({ base: true, sm: false })

  return (
    <HStack spacing="24px">
      {
        !isHidden &&
        <>
          <Text>
            {network && network.name}
          </Text>
        </>
      }
    </HStack>
  )
}