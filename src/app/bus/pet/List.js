import React from 'react';

import { useQueryAllPets } from './hooks/useQueryAllPets';

export const List = () => {
  const { loading, error, pets } = useQueryAllPets();

  const loaderJSX = loading && <p>Loading...</p>;

  const errorJSX = error && <p>We have a problem: {error.message}</p>;

  const petsJSX =
    pets &&
    pets.map(({ id, name, weight }) => {
      return (
        <p key={id}>
          <span>Name: {name}</span>
          <span>Weight: {weight}</span>
        </p>
      );
    });

  return (
    <>
      {loaderJSX}
      {errorJSX}
      <h1>Pets</h1>
      {petsJSX}
    </>
  );
};
