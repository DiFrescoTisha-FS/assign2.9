import axios from 'axios';
import authHeader from './auth-header';


// const API_BASE = process.env.NODE_ENV === "development"
// ? `http://localhost:8000/api/v1`
// : process.env.REACT_APP_BASE_URL;

const API_URL = "http://localhost:8000/api/v1/auth/signup"

const getAllPrivateMemories = () => {
    return axios.get(`${API_URL}`, { headers: authHeader() })
}

const memoriesService = {
    getAllPrivateMemories
}

export default memoriesService;