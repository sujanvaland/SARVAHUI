import Cookies from 'js-cookie';
import axios from 'axios';
import { getItem, removeItem } from '../../utility/localStorageControl';
// eslint-disable-next-line import/no-cycle
import { setProgressBar } from '../../redux/post/actionCreator';
// eslint-disable-next-line import/no-cycle

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const authHeader = () => ({
  Authorization: `Bearer ${getItem('access_token')}`,
});

const client = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    Authorization: `Bearer ${getItem('access_token')}`,
    'Content-Type': 'application/json',
  },
});


class DataService {
  static get(path = '') {
    return client({
      method: 'GET',
      url: path,
      headers: { ...authHeader() },
    });
  }

  static post(path = '', data = {}, optionalHeader = {}) {
    return client({
      method: 'POST',
      url: path,
      data,
      headers: { ...authHeader(), ...optionalHeader },
    });
  }

  static binaryPost(path = '', data = {}, optionalHeader = {}, dispatch) {

    return client({
      method: 'POST',
      url: path,
      data,
      headers: { ...authHeader(), ...optionalHeader },
      onUploadProgress:(ProgressEvent) => {
        const progress = Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100)

        dispatch(setProgressBar(progress))

      }
    });
  }

  static patch(path = '', data = {}) {
    return client({
      method: 'PATCH',
      url: path,
      data: JSON.stringify(data),
      headers: { ...authHeader() },
    });
  }

  static delete(path = '', data = {}) {
    return client({
      method: 'DELETE',
      url: path,
      data: JSON.stringify(data),
      headers: { ...authHeader() },
    });
  }

  static put(path = '', data = {}) {
    return client({
      method: 'PUT',
      url: path,
      data: JSON.stringify(data),
      headers: { ...authHeader() },
    });
  }
}

/**
 * axios interceptors runs before and after a request, letting the developer modify req,req more
 * For more details on axios interceptor see https://github.com/axios/axios#interceptors
 */
client.interceptors.request.use(config => {
  // do something before executing the request
  // For example tag along the bearer access token to request header or set a cookie
  const requestConfig = config;
  const { headers } = config;
  requestConfig.headers = { ...headers, Authorization: `Bearer ${getItem('access_token')}` };

  return requestConfig;
});

client.interceptors.response.use(
  response => response,
  error => {
    /**
     * Do something in case the response returns an error code [3**, 4**, 5**] etc
     * For example, on token expiration retrieve a new access token, retry a failed request etc
     */
    const { response } = error;
    const originalRequest = error.config;
    if (response) {
      if (response.status === 500) {
        // do something here
      } else if (response && (response.status === 401 || response.status === 0)) {
        // Unauthorized access, handle accordingly (e.g., redirect to login)
        // You might also want to refresh the token or log the user out
        // Perform logout or redirect logic here
        console.log("redirecting....")
        Cookies.remove('logedIn');
        Cookies.remove('token');
        localStorage.removeItem("profile");
        removeItem("access_token");
        window.location.href = (window.location.href.includes("localhost")) ? `http://localhost:3000` : `https://k4m2a.com`
      } else {
        return originalRequest;
      }
    }
    return Promise.reject(error);
  },
);
export { DataService };