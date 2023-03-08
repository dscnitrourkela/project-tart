import axios from 'axios';

// Configure and an instance of axios
export const avenueApi = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	timeout: 60000,
	timeoutErrorMessage: 'Request Timeout: Please try again',
});
