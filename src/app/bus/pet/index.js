import React from 'react';
import { Counter } from './Counter';
import { List } from './List';
import { SpecialList } from './SpecialList';

export const Pet = () => {
  return (
    <>
      <h1>Pet</h1>
      <Counter />
      <List />
      <SpecialList />
    </>
  );
};
