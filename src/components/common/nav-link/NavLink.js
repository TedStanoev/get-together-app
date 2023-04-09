import { useColorModeValue } from '@chakra-ui/color-mode';
import { Link } from '@chakra-ui/layout';
import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

const NavLink = ({ children, to, ...props }) => (
  <Link
    as={RouterNavLink}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    to={to}
    style={({ isActive, isPending }) => ({
      fontWeight: isActive ? 'bold' : 'normal',
      backgroundColor: isActive ? 'purple' : 'transparent'
    })}
    {...props}
  >
    {children}
  </Link>
);

export default NavLink;