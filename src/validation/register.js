import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  username: yup.string().required('Please enter your username'),
  email: yup.string().email('Email seems to be invalid').required('Please enter your email'),
  password: yup.string().required('Please enter your password').matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/,
    "Must Contain 6 Characters, One Uppercase, One Lowercase and One Number"
  ),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords do not match').required('Confirm Password is required'),
});