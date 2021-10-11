// Gets a list of all the users
import React from 'react'
import { useApi } from './useApi';
import { useAuth0 } from '@auth0/auth0-react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const useGetAllUsers = () => {
  const { login, getAccessTokenWithPopup } = useAuth0();
  const opts = {
   // method: 'GET',
    audience: 'https://useradmin-poc',
    scope: 'read:users read:roles',
  };

  const { loading, error, refresh, data } = useApi(
    '/api/admin-users/get-users',
    opts
  );
  if (loading) {
    return <div style={{ textAlign: 'center' }}><Loader
    type="Circles" color="#00BFFF" height={80} width={80}
    /></div>;
  }
  if (error) {
    console.log('errrrrrrr', error.error)
    if (error.error === 'login_required') {
      return <button onClick={() => login(opts)}>Login</button>;
    }
    if (error.error === 'consent_required') {
      return (
        <button onClick={getTokenAndTryAgain}>Consent to reading users</button>
      );
    }
    return <div>Oops {error.message}</div>;
  }

  async function getTokenAndTryAgain() {
    try {
      await getAccessTokenWithPopup(opts);
      refresh();
    } catch (err) {
      console.error('Noe gikk galt:  ', err);
    }
  }

  return { data, loading, error, getToken: () => getTokenAndTryAgain() };
};