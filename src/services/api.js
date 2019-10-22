import axios from 'axios';

const api = axios.create({
  baseURL: 'http://144.202.38.239',
});

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const {
      response: { status },
    } = error;

    if (status === 401) {
      localStorage.removeItem('persist:basix_contact');
      window.location.reload();
    }
  }
);

export default api;
