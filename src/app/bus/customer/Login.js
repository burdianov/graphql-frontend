import React from 'react';
import { useCustomerAuth } from './hooks/useCustomerAuth';

export const Login = () => {
  const { handleChange, login } = useCustomerAuth();

  return (
    <>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="User name"
        name="username"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
      />
      <button type="submit" onClick={login}>
        Login
      </button>
    </>
  );
};
