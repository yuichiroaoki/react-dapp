import { Box, Flex } from '@chakra-ui/react'
import * as React from 'react'

interface Props {
  label: string
  value: string
}

export const Property = (props: Props) => {
  const { label, value } = props
  return (
    <Flex
      as="dl"
      direction={{ base: 'column', sm: 'row' }}
      px="4"
      py="4"
    >
      <Box as="dt" minW="100px">
        {label}
      </Box>
      <Box as="dd" flex="1" fontWeight="semibold">
        {value}
      </Box>
    </Flex>
  )
}