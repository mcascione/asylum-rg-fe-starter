import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';
import { LoginButton } from '../../components/Authorization/login-button';
import { LogoutButton } from '../../components/Authorization/logout-button';
import { SignupButton } from '../../components/Authorization/signup-button';
const { primary_accent_color } = colors;

function HeaderContent() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: primary_accent_color,
      }}
    >
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div>
        <Link to="/" style={{ color: '#E2F0F7', paddingRight: '75px' }}>
          Home
        </Link>
        <Link to="/graphs" style={{ color: '#E2F0F7' }}>
          Graphs
        </Link>
        {isAuthenticated ? (
          <>
            <Link
              to="/profile"
              style={{ color: '#E2F0F7', paddingLeft: '75px' }}
            >
              Profile
            </Link>
            <LogoutButton />
          </>
        ) : (
          <>
            <LoginButton />
            <SignupButton />
          </>
        )}
        ;
      </div>
    </div>
  );
}

export { HeaderContent };
