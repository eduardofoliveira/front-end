import axios from 'axios';

const api = axios.create({
  baseURL: 'http://144.202.38.239',
});

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const { response } = error;
    const { status } = response;

    if (status === 401) {
      if (response.data.error) {
        if (response.data.error === 'Token invalid') {
          localStorage.removeItem('persist:basix_contact');
          window.location.reload();
        }
      }
    }
    return Promise.reject(error);
  }
);

export default api;
