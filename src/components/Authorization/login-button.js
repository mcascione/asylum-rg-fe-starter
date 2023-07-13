import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'antd';

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: '/',
      },
    });
  };

  return (
    <Button
      className="button__login"
      onClick={handleLogin}
      style={{ marginLeft: '75px' }}
    >
      Log In
    </Button>
  );
};
