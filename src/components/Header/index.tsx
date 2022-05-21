import React from 'react'
import { Box, Flex, IconButton, Spacer } from "@chakra-ui/react";
import { providers } from 'ethers';
import WalletModal from '../WalletModal';
import { FaEthereum } from 'react-icons/fa'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useColorMode } from '@chakra-ui/react';

function ThemeSwitcher() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Box
        >
            {colorMode === "dark" ?
                <IconButton
                aria-label="light"
                    bg="transparent"
                    fontSize="20px"
                    icon={<FaSun />} onClick={toggleColorMode}
                />
                : <IconButton
                aria-label="dark"
                    bg="transparent"
                    icon={<FaMoon />} onClick={toggleColorMode}
                    fontSize="20px"
                />
            }
        </Box>
    )
}

interface HeaderProps {
    provider: providers.Web3Provider | undefined;
    loadWeb3Modal: () => Promise<void>;
    logoutOfWeb3Modal: () => Promise<void>;
}

const Header = ({
    provider, loadWeb3Modal, logoutOfWeb3Modal
}: HeaderProps) => {

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            p={8}
        >
            <Flex align="center" >
                <IconButton aria-label="Home"
                    bg="transparent"
                    fontSize="40px"
                    icon={<FaEthereum />} />
            </Flex>
            <Spacer />

            <Box
                mr={4}
            >
                <WalletModal provider={provider} loadWeb3Modal={loadWeb3Modal} logoutOfWeb3Modal={logoutOfWeb3Modal} />
            </Box>
            <ThemeSwitcher />
        </Flex>
    );
};


export default Header;