import axios from 'axios';

const url = `${import.meta.env.API_URL}`;

const api = axios.create({
	baseURL: url,
	timeout: 1500,
});

export { api };
