import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Icon,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ImExit } from 'react-icons/im'
import { generatePath, Link as RouterLink, useNavigate } from 'react-router-dom';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';

import NavLink from '../common/nav-link/NavLink';
import routes from '../router/routes';
import { auth } from '../../config/firebase';

export const Header = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLogout = async () => {
    await signOut();
    navigate(routes.landing);
  }

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />

        <HStack spacing={8} alignItems={'center'}>
          <Box>TT</Box>

          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            <NavLink to={routes.root}>Root</NavLink>
            <NavLink to={routes.landing}>Landing</NavLink>
          </HStack>
        </HStack>

        <Flex alignItems={'center'}>
          {user ? (
            <HStack>
              <Button
                as={NavLink}
                to={generatePath(routes.profile, { userId: 1 })}
              >
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </Button>
              <Icon as={ImExit} _hover={{ cursor: 'pointer' }} onClick={handleLogout} />
            </HStack>
          ) : (
            <HStack>
              <Button as={RouterLink} to={routes.login} colorScheme="purple">
                Log In
              </Button>
              <Button as={RouterLink} to={routes.register} colorScheme="purple">
                Register
              </Button>
            </HStack>
          )
          }
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            <NavLink to={routes.root}>Root</NavLink>
            <NavLink to={routes.landing}>Landing</NavLink>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Header;
