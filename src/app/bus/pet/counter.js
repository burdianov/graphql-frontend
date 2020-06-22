import React from 'react';

// Hooks
import { useQueryAvailablePets } from './hooks/useQueryAvailablePets/index';

export const Counter = () => {
  const { loading, error, data } = useQueryAvailablePets();

  console.log(data);

  return (
    <>
      <p>Counter</p>
    </>
  );
};
