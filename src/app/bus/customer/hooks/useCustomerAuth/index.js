import { useForm } from './../useForm/index';

export const useCustomerAuth = () => {
  const { form, handleChange } = useForm({
    username: '',
    password: ''
  });

  const login = () => {
    console.log(form);
  };

  return {
    handleChange,
    login
  };
};
