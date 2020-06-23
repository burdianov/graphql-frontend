import React from 'react';
import { useCustomer } from './hooks/useCustomer';

export const Customer = () => {
  const { loading, error, handleChange, save, createdAccount } = useCustomer();

  const loaderJSX = loading && <p>Loading...</p>;

  const errorJSX = error && <p>We have a problem: {error.message}</p>;

  const formJSX = (
    <>
      <h1>Registration</h1>
      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={handleChange}
      />
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
      <button type="submit" onClick={save}>
        Save
      </button>
    </>
  );

  const customerJSX = createdAccount && (
    <p>A customer with the name: {createdAccount.name} has been created.</p>
  );

  return (
    <>
      {formJSX}
      {customerJSX}
      {loaderJSX}
      {errorJSX}
    </>
  );
};
