import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';
import { useState } from 'react';

import { useForm } from './../useForm';

const mutationLogin = loader('./gql/mutationLogin.graphql');

export const useCustomerAuth = () => {
  const [loginServer, { data }] = useMutation(mutationLogin);

  const { form, handleChange } = useForm({
    username: '',
    password: ''
  });

  const [isAuthorized, setIsAuthorized] = useState(false);

  const authorizedCustomer = data && data.logIn;
  const token = authorizedCustomer && authorizedCustomer.token;

  if (token) {
    localStorage.setItem('token', token);
  }

  const login = () => {
    loginServer({
      variables: form
    });
  };

  return {
    login,
    handleChange,
    authorizedCustomer
  };
};
