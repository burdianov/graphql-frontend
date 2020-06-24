import React from 'react';
import { Counter } from './Counter';
import { List } from './List';
import { SpecialList } from './SpecialList';
import { Profile } from './Profile';
import { CheckInPet } from './CheckInPet';

export const Pet = () => {
  return (
    <>
      <h1>Pet</h1>
      <CheckInPet />
      {/* <Profile />
      <Counter />
      <List />
      <SpecialList /> */}
    </>
  );
};
