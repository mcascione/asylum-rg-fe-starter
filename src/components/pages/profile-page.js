import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import GrantRatesByOfficeImg from '../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../styles/Images/line-graph-no-text.png';
import { useHistory } from 'react-router-dom';

export const ProfilePage = () => {
  const { user } = useAuth0();
  const history = useHistory();

  if (!user) {
    return null;
  }

  return (
    <div className="main">
      <h2 className="header-text-container" style={{ paddingTop: '25px' }}>
        Welcome, {user.name}! We're glad you're here.
      </h2>
      <br />
      <h3 className="header-text-container" style={{ paddingBottom: '55px' }}>
        Your Profile Email is {user.email}.
      </h3>
      <h1 className="header-text-container" style={{ paddingBottom: '75px' }}>
        Which data do you want to explore next, {user.given_name}?
      </h1>
      <div className="graphs-section">
        <div className="grant-rates-by-office-graph-container">
          <img
            src={GrantRatesByOfficeImg}
            alt="Grant Rates By Office"
            className="gr-office-img"
            onClick={() => history.push('/graphs')}
          ></img>
          <p>Search Grant Rates By Office</p>
        </div>

        <div className="grant-rates-by-nationality-container">
          <img
            src={GrantRatesByNationalityImg}
            alt="Grant Rates By Nationality"
            className="gr-nationality-img"
            onClick={() => history.push('/graphs/all/citizenship')}
          ></img>
          <p>Search Grant Rates By Nationality</p>
        </div>

        <div className="grant-rates-over-time-container">
          <img
            src={GrantRatesOverTimeImg}
            alt="Grant Rates Over Time"
            className="gr-overtime-img"
            onClick={() => history.push('/graphs/all/time-series')}
          ></img>
          <p>Search Grant Rates Over Time</p>
        </div>
      </div>
      <div>
        <div className="profile-grid">
          <div className="profile__header">
            <div className="profile__headline"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
