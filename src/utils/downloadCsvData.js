import axios from 'axios';

const downloadCsvData = async () => {
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
    const blob = new Blob([csvData], { type: 'text/csv' });
    downloadLink.href = URL.createObjectURL(blob);

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

export default downloadCsvData;
