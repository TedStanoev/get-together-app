import { Button } from '@chakra-ui/button';
import { Container, Stack } from '@chakra-ui/layout';
import { useToast } from '@chakra-ui/toast';
import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import routes from '../../components/router/routes';
import InputFormGroup from '../../components/common/input/InputFormGroup';
import PasswordField from '../../components/forms/password/PasswordField';
import { loginValidationSchema } from '../../validation/login';
import { auth } from '../../config/firebase';
import { LOGIN } from '../../constants/errors/loginErrors';

const initialValues = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const addToast = useToast();

  useEffect(() => {
    if (error) {
      addToast({
        description: LOGIN[error.code],
        status: 'error',
        isClosable: true,
      });
    }
  }, [error]);

  const loginUser = async (values, actions) => {
    console.log(values);

    const successfulLoginResult = await signInWithEmailAndPassword(
      values.email,
      values.password
    );

    if (successfulLoginResult) {
      navigate(routes.profile);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginValidationSchema}
      onSubmit={loginUser}
    >
      {({ handleSubmit, handleChange, values, errors, submitCount }) => {
        return (
          <Container centerContent>
            <h2>Login</h2>

            <Stack>
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
            </Stack>

            <Button
              colorScheme="purple"
              my="2"
              type="submit"
              onClick={handleSubmit}
              isLoading={loading}
            >
              Login
            </Button>
          </Container>
        );
      }}
    </Formik>
  );
};

export default LoginPage;
