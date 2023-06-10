// Import the necessary dependencies and functions
import axios from 'axios';
import downloadCSVData from './downloadCsvData';

describe('downloadCSVData', () => {
  // Mock the axios get method
  const axiosGetSpy = jest.spyOn(axios, 'get');

  const mockDownloadLink = {
    setAttribute: jest.fn(),
    click: jest.fn(),
  };
  const createElementSpy = jest.spyOn(document, 'createElement');

  // Create a mock response data
  const responseData = 'Mock CSV data';

  // Create a mock Blob object
  const mockBlob = new Blob([responseData], { type: 'text/csv' });
  const mockUrl = 'mock-download-url';

  beforeEach(async () => {
    createElementSpy.mockReturnValue(mockDownloadLink);

    // Mock the axios get method to return the mock response data
    axiosGetSpy.mockResolvedValueOnce({ data: responseData });

    // Mock the URL.createObjectURL method
    URL.createObjectURL = jest.fn(() => mockUrl);

    document.body.appendChild = jest.fn();
    document.body.removeChild = jest.fn();

    // Call the function
    await downloadCSVData();
  });

  it('calls axios', () => {
    // Verify that the axios get method was called with the correct URL
    expect(axiosGetSpy).toHaveBeenCalledTimes(1);
    // expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axiosGetSpy).toHaveBeenCalledWith(
      'https://raw.githubusercontent.com/BloomTech-Labs/asylum-rg-fe-starter/main/src/data/COW2021001887-I589Data.csv'
    );
  });

  it('should trigger download when called', () => {
    // Verify that the URL.createObjectURL method was called with the correct arguments
    expect(URL.createObjectURL).toHaveBeenCalledWith(mockBlob);

    // Verify that the download link attributes were set correctly
    expect(mockDownloadLink.setAttribute).toHaveBeenCalledWith(
      'download',
      'data.csv'
    );
    expect(mockDownloadLink.href).toBe(mockUrl);

    // Verify that the download link was appended to the document body
    expect(document.body.appendChild).toHaveBeenCalledWith(mockDownloadLink);

    // Verify that the download link was clicked
    expect(mockDownloadLink.click).toHaveBeenCalled();

    // Verify that the download link was removed from the document body
    expect(document.body.removeChild).toHaveBeenCalledWith(mockDownloadLink);
  });
});
