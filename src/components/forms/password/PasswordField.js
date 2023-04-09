import { Button } from '@chakra-ui/button';
import { FormControl, FormErrorMessage, FormHelperText, FormLabel } from '@chakra-ui/form-control';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import React, { useState } from 'react';

const PasswordField = ({ infoText, error, label, isInvalid, ...props }) => {
  const [show, setShow] = useState(false);

  console.log(error)

  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel>{label}</FormLabel>
  
      <InputGroup>
        <Input type={show ? 'text' : 'password'} {...props} />
  
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={() => setShow((prev) => !prev)}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
  
      {error ? (
        <FormErrorMessage>{error}</FormErrorMessage>
      ) : infoText ? (
        <FormHelperText>{infoText}</FormHelperText>
      ) : null}
    </FormControl>
  )
};

export default PasswordField;
