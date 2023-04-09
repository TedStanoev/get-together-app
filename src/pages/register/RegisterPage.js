import { Container, Stack } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { useToast } from '@chakra-ui/react';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import InputFormGroup from '../../components/common/input/InputFormGroup';
import PasswordField from '../../components/forms/password/PasswordField';

import { registerSchema } from '../../validation/register';
import { createUser } from '../../api/users';
import routes from '../../components/router/routes';

const initialValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const addToast = useToast();

  const registerUser = async (values, actions) => {
    console.log(values);
    setLoading(true);

    const { data, error } = await createUser(values);

    setLoading(false);

    if (error) {
      addToast({
        description: error,
        status: 'error',
        isClosable: true,
      })
    }

    if (data) {
      navigate(routes.profile);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={registerUser}
    >
      {({ handleSubmit, handleChange, values, errors, submitCount }) => {
        return (
          <Container centerContent>
            <h2>Register</h2>

            <Stack>
              <InputFormGroup
                label="Username"
                infoText="Username can always be changed"
                name="username"
                value={values.username}
                onChange={handleChange}
                error={errors.username}
                isInvalid={submitCount > 0 && errors.username}
              />

              <InputFormGroup
                label="Email"
                infoText="Email cannot be changed"
                name="email"
                value={values.email}
                onChange={handleChange}
                error={submitCount > 0 && errors.email}
                isInvalid={submitCount > 0 && errors.email}
              />

              <PasswordField
                label="Password"
                infoText="Must be at least 6 characters"
                name="password"
                value={values.password}
                onChange={handleChange}
                error={submitCount > 0 && errors.password}
                isInvalid={submitCount > 0 && errors.password}
              />

              <PasswordField
                label="Confirm Password"
                infoText="Should match the password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                error={submitCount > 0 && errors.confirmPassword}
                isInvalid={submitCount > 0 && errors.confirmPassword}
              />
            </Stack>

            <Button
              colorScheme="purple"
              my="2"
              type="submit"
              onClick={handleSubmit}
              isLoading={loading}
            >
              Register
            </Button>
          </Container>
        );
      }}
    </Formik>
  );
};

export default RegisterPage;
