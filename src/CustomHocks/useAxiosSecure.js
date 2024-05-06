import axios from "axios";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials:true,
  });

const useAxiosSecure = () => {
    axios.interceptors.request.use((config)=> {
        
        return config;
      }, (error)=> {
        return Promise.reject(error);
      });
    return axiosSecure
};

export default useAxiosSecure;