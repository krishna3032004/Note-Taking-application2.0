import axios from 'axios';

// Axios ka ek naya instance banayein
const API = axios.create({
  baseURL: 'https://backend-note-taking-application.onrender.com/api', // Apne backend ka base URL yahan daalein
});

// Request Interceptor - Har request bhejne se pehle yeh function chalega
API.interceptors.request.use(
  (config) => {
    // localStorage se token nikalo
    const token = localStorage.getItem('token');
    
    // Agar token hai, to usse headers mein 'Bearer' ke saath set kar do
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config; // Updated config ko aage bhej do
  },
  (error) => {
    // Request mein error aane par
    return Promise.reject(error);
  }
);

export default API;