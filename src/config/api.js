import axios from "axios";
import localStorageConst from "src/constants/localStorageConst";
import { isJwtExpired } from 'jwt-check-expiration';

const apiConfig = axios.create({
	baseURL: 'http://localhost:8080/api/v1',
	headers: {
		'Content-Type': 'application/json'
	}
})

apiConfig.interceptors.request.use((config) => {
	const token = localStorage.getItem(localStorageConst.JWT_TOKEN)
	if (token && !isJwtExpired(token)) {
		config.headers.Authorization = `Bearer ${token}`
	} else {
		localStorage.removeItem(localStorageConst.IS_LOGIN)
		localStorage.removeItem(localStorageConst.JWT_TOKEN)
	}
	return config;
}, (error) => {
	return Promise.reject(error)
})
export default apiConfig;
