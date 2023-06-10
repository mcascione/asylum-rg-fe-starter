import React from 'react';
// ADDED IMPORTS BACK FOR GRAPHS SECTION
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
// for the purposes of testing PageNav
// import PageNav from '../../common/PageNav';

function RenderLandingPage(props) {
  // changed to Window scrollTo method from Element:scrollTop property to take advantage of smooth scrolling and cross-browser functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
  };

  const history = useHistory();

  const handleDownloadData = async () => {
    try {
      // Fetch the csv data using axios call
      const response = await axios.get(
        'https://raw.githubusercontent.com/BloomTech-Labs/asylum-rg-fe-starter/main/src/data/COW2021001887-I589Data.csv'
      );
      // Extract the CSV data from the response
      const csvData = response.data;
      // Create a download link element
      const downloadLink = document.createElement('a');
      // Set the href attribute to the download URL
      downloadLink.href = URL.createObjectURL(
        new Blob([csvData], { type: 'text/csv' })
      );
      // Specify the filename for the downloaded file
      downloadLink.setAttribute('download', 'data.csv');
      // Append the download link to the document body
      document.body.appendChild(downloadLink);
      // Simulate a click event to trigger the download
      downloadLink.click();
      // Remove the download link from the document body
      document.body.removeChild(downloadLink);
    } catch (error) {
      console.error('Error downloading data:', error);
    }
  };

  return (
    <div className="main">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </div>

      <div className="graphs-section">
        <div className="grant-rates-by-office-graph-container">
          <img
            src={GrantRatesByOfficeImg}
            alt="Grant Rates By Office"
            className="gr-office-img"
          ></img>
          <p>Search Grant Rates By Office</p>
        </div>

        <div className="grant-rates-by-nationality-container">
          <img
            src={GrantRatesByNationalityImg}
            alt="Grant Rates By Nationality"
            className="gr-nationality-img"
          ></img>
          <p>Search Grant Rates By Nationality</p>
        </div>

        <div className="grant-rates-over-time-container">
          <img
            src={GrantRatesOverTimeImg}
            alt="Grant Rates Over Time"
            className="gr-overtime-img"
          ></img>
          <p>Search Grant Rates Over Time</p>
        </div>
      </div>

      <div className="view-more-data-btn-container">
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          onClick={() => history.push('/graphs')}
        >
          <span>View the Data</span>
        </Button>
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          onClick={handleDownloadData}
        >
          <span>Download the Data</span>
        </Button>
      </div>

      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set
          </h3>
        </div>
      </div>

      {/* Added code here for the graphs section*/}
      <div className="bottom-section">
        <h1 className="bottom-section">Systemic Disparity Insights</h1>
        <div className="data-container">
          <div className="first-data-point-container">
            <h2>36%</h2>
            <h3>
              By the end of the Trump administration, the average asylum office
              grant rate had fallen 36 percent from an average of 44 percent in
              fiscal year 2016 to 28 percent in fiscal year 2020.
            </h3>
          </div>
          <div className="second-data-point-container">
            <h2>5%</h2>
            <h3>
              The New York asylum office grant rate dropped to 5 percent in
              fiscal year 2020.
            </h3>
          </div>
          <div className="third-data-point-container">
            <h2>6x Lower</h2>
            <h3>
              Between fiscal year 2017 and 2020, the New York asylum office’s
              average grant rate was six times lower than the San Francisco
              asylum office.
            </h3>
          </div>
        </div>
        <a
          href="https://humanrightsfirst.org/library/uscis-records-reveal-systemic-disparities-in-asylum-decisions/"
          target="_blank"
          rel="noreferrer"
          className="read-more-btn"
        >
          <div className="read-more-btn bottom-section">
            <Button
              type="default"
              className="ant-btn ant-btn-default"
              style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
            >
              <span>Read More</span>
            </Button>
          </div>
        </a>
        <p onClick={() => scrollToTop()} className="back-to-top">
          Back To Top ^
        </p>
      </div>
    </div>
  );
}
export default RenderLandingPage;
