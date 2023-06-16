import axios from 'axios';

const BASE_URL = 'https://hrf-asylum-be-b.herokuapp.com/cases';

const fetchFiscalYearData = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/fiscalSummary`);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const fetchCitizenshipData = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/citizenshipSummary`);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const api = {
  fetchFiscalYearData,
  fetchCitizenshipData,
};

export default api;
