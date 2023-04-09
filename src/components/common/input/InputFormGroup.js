import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import React from 'react';

const InputFormGroup = ({ infoText, error, label, isInvalid, ...props }) => {
  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel>{label}</FormLabel>
      
      <Input {...props} />
  
      {error ? (
        <FormErrorMessage>{error}</FormErrorMessage>
      ) : infoText ? (
        <FormHelperText>{infoText}</FormHelperText>
      ) : null}
    </FormControl>
  )
};

export default InputFormGroup;
