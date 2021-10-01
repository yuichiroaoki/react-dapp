import React from 'react';
import { Box, Stack, StackDivider } from '@chakra-ui/react';
import { SocialMediaLinks } from './SocialMediaLinks'

const Footer: React.FC = () => (

  <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="12" px={{ base: '4', md: '8' }}>
    <Stack spacing="10" divider={<StackDivider />}>
      <Stack
        direction={{ base: 'column-reverse', md: 'row' }}
        justifyContent="space-between"
        alignItems="center"
      >
        <SocialMediaLinks />
      </Stack>
    </Stack>
  </Box>

);

export default Footer;