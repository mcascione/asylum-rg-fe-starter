import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'antd';

export const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignup = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: '/',
      },
      authorizationParams: {
        screen_hint: 'signup',
      },
    });
  };
  return (
    <Button
      className="button__sign-up"
      onClick={handleSignup}
      style={{ marginLeft: '5px' }}
    >
      Sign Up
    </Button>
  );
};
