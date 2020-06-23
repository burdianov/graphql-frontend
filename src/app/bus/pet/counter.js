import React from 'react';
// Hooks
import { useQueryAvailablePets } from './hooks/useQueryAvailablePets';

export const Counter = () => {
  const { loading, error, data } = useQueryAvailablePets();

  const loaderJSX = loading && <p>Loading...</p>;

  const errorJSX = error && <p>We have a problem: {error.message}</p>;

  return (
    <>
      {loaderJSX}
      {errorJSX}
      <p>
        Available pets:
        {data && data.availablePets}
      </p>
    </>
  );
};
