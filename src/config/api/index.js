import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationService} from '../../config';


// var baseUrl = 'https://mh1.5stardesigners.net/mh1_dev/api/';
// UAT base URL
// baseUrl = ""
var baseUrl = 'http://lionsclub.storecloudsolution.com/webservice/';

Axios.interceptors.response.use(
  response => {
    return response;
  },
  ({response}) => {
    if (response.status == 401) {
      try {
        AsyncStorage.removeItem('user').then(() => {
          NavigationService.reset_0("GetStartedScreen", {seen:true})
        });
      } catch (err) {}
    }
    return response;
  },
);

export default class ApiCaller {
  static Get = (url = '', headers = {}) => {
    return Axios.get(`${baseUrl}${url}`, {
      headers: {'Content-Type': 'application/json', ...headers},
    })
      .then(res => res)
      .catch(err => err.response);
  };

  static Post = async (url = '', body = {}, headers = {}) => {
    return Axios.post(`${baseUrl}${url}`, body, {
      headers: {...headers},
    })
      .then(res => res)
      .catch(err => console.log(err));
  };

  static Put = (url = '', body = {}, headers = {}) => {
    return Axios.put(`${baseUrl}${url}`, body, {
      headers: {'Content-Type': 'application/json', ...headers},
    })
      .then(res => res)
      .catch(err => err.response);
  };

  static Patch = (url = '', body = {}, headers = {}) => {
    return Axios.patch(`${baseUrl}${url}`, body, {
      headers: {'Content-Type': 'application/json', ...headers},
    })
      .then(res => res)
      .catch(err => err.response);
  };

  static Delete = (url = '', body = {}, headers = {}) => {
    return Axios.delete(`${baseUrl}${url}`, {
      headers: {...headers},
      data: body,
    })
      .then(res => res)
      .catch(err => err.response);
  };
}
