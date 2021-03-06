import axios from 'axios';

const api = axios.create({
  baseURL: 'http://35.171.122.245:90',
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
          // localStorage.removeItem('persist:basix_contact');
          localStorage.clear();
          window.location.reload();
        }
      }
    }
    return Promise.reject(error);
  }
);

export function clearAll() {
  window.location.reload();
  localStorage.clear();
}

export default api;
