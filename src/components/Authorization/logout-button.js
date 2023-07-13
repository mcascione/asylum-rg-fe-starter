import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'antd';

export const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <Button
      className="button__logout"
      onClick={handleLogout}
      style={{ marginLeft: '75px' }}
    >
      Log Out
    </Button>
  );
};
