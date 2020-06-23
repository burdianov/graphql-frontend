import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import { Pet } from './bus/pet';
// import { Customer } from './bus/customer/index';
import { client } from './init/client';

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <Pet />
      {/* <Customer /> */}
    </ApolloProvider>
  );
};
