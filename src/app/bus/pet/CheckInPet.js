import React from 'react';

import { useCheckIn } from './hooks/useCheckin/index';

export const CheckInPet = () => {
  const { checkIn, pet, loading, errors, error } = useCheckIn();

  const petJSX = pet && (
    <>
      <p>Id: {pet.id}</p>
      <p>Name: {pet.name}</p>
    </>
  );

  const errorsJSX = errors && <p>We have a problem: {errors.message}</p>;

  const errorJSX = error && <p>We have a problem: {error}</p>;

  const handleCheckIn = () => {
    checkIn('C-1');
  };

  return (
    <>
      <h1>CheckIn Pet</h1>
      <button onClick={handleCheckIn}>Check In</button>
      {petJSX}
      {errorsJSX}
      {errorJSX}
    </>
  );
};
