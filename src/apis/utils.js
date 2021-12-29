import { API_BASE_URL } from 'config';
import axios from 'axios';

export const API = axios.create({ baseURL: API_BASE_URL });


export const handleResponse = response => {
	if(response.status === 200){
		return { success: true, data: response.data }
	}
	return { success: false, message: 'Api called failed.' }
}

export const getToken = async ()=>{
	
}
