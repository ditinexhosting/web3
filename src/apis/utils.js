import { API_BASE_URL } from 'config';
import axios from 'axios';

export const API = axios.create({ baseURL: API_BASE_URL });


export const handleResponse = response => {
	return response
}

export const getToken = async ()=>{
	
}
