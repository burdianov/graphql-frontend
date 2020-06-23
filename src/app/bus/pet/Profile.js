import React from 'react';
// Hooks
import { useQueryProfile } from './hooks/useQueryProfile';

export const Profile = () => {
  const { getProfile, loading, error, profile } = useQueryProfile();

  const loadProfile = () => {
    getProfile({
      variables: {
        id: 'C-1'
      }
    });
  };

  const loaderJSX = loading && <p>Working...</p>;

  const errorJSX = error && <p>We have a problem: {error.message}</p>;

  return (
    <>
      {loaderJSX}
      {errorJSX}
      <h1>Profile</h1>
      <button onClick={loadProfile}>Download Profile</button>
      <p>{profile && profile.name}</p>
    </>
  );
};
