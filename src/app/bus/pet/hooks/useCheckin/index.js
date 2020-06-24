import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

const mutationCheckIn = loader('./gql/mutationCheckIn.graphql');

export const useCheckIn = () => {
  const [error, setError] = useState('');

  const [checkInServer, { data, loading, errors }] = useMutation(
    mutationCheckIn
  );

  const checkIn = (id) => {
    (async () => {
      try {
        await checkInServer({
          variables: {
            id
          }
        });
      } catch (error) {
        setError(error.message);
      }
    })();
  };

  const pet = data && data.checkIn.pet;

  return {
    checkIn,
    pet,
    loading,
    errors,
    error
  };
};
