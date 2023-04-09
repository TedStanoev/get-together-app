import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  useConst
} from '@chakra-ui/react';
import React from 'react';
import dayjs from 'dayjs';

export default function Footer() {
  const currentYear = useConst(() => dayjs().year());

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>TT</Text>
        <Text>{`© ${currentYear} GeTTogether. All rights reserved`}</Text>
      </Container>
    </Box>
  );
}
