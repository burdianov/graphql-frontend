import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

import { useForm } from './../useForm';

const mutationLogin = loader('./gql/mutationLogin.graphql');

export const useCustomerAuth = () => {
  const [loginServer, { data }] = useMutation(mutationLogin);

  const { form, handleChange } = useForm({
    username: '',
    password: ''
  });

  const login = () => {
    loginServer({
      variables: form
    });
  };

  return {
    handleChange,
    login,
    authorizedCustomer: data && data.logIn
  };
};
