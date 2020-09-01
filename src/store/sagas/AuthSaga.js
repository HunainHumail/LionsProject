import {put, call, select, delay} from 'redux-saga/effects';
import {AuthActions, HomeActions, AppActions} from '../actions';
import {showToast} from '../../config/utills';
import {NavigationService} from '../../config';
import {ApiCaller} from '../../config';
import AsyncStorage from '@react-native-community/async-storage';
import {
  ToastAndroid,
} from 'react-native';

export function* login(action) {
  const {payload} = action;
  console.log(payload, 'LOGIN SAGA')
  let formData = new FormData();
  Object.keys(payload).forEach((key, index) => {
    formData.append(key, Object.values(payload)[index]);
  });
  formData.append('check_token', '2n7LkdMVqU9WSlaFi0LOkvf5p7v1tQZq');
  const response = yield ApiCaller.Post('check_user_login', formData);
  console.log('response', response.data);
  // let _self = this.props;

  if (response) {
    if (response.status == 200) {
      try {
        AsyncStorage.setItem('user_details', JSON.stringify(response.data));
      } catch {}
      yield put({
        type: AuthActions.LOGIN_SUCCESS,
        payload: response.data,
      });
      // NavigationService.reset_0('DashboardScreen');
      NavigationService.navigate('DashboardScreen');
    } else if (response.status == 400) {
      yield put({type: AuthActions.LOGIN_FAIL});
      ToastAndroid.showWithGravityAndOffset(
        'login failed',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
    } else if (response.success == 0) {
      yield put({type: AuthActions.LOGIN_FAIL});
      ToastAndroid.showWithGravityAndOffset(
        'Invalid Credentials',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
    }
  } else {
    yield put({type: AuthActions.LOGIN_FAIL});
    showToast('An error occurred');
  }

  // const response = yield call(
  //   ApiCaller.Post,
  //   'check_user_login',
  //   {...action.payload,check_token:'2n7LkdMVqU9WSlaFi0LOkvf5p7v1tQZq' ||""},
  //   {'content-type': 'application/json'},
  // );
  // console.log('login responce', response);
  // if (response) {
  //   if (response.status == 200) {
  //     try {
  //       AsyncStorage.setItem(
  //         'user',
  //         JSON.stringify(response.data.success.data),
  //       );
  //     } catch {}
  //     yield put({
  //       type: AuthActions.LOGIN_SUCCESS,
  //       payload: response.data.success.data,
  //     });
  //     NavigationService.reset_0('HomeScreen');
  //   } else if (response.status == 400) {
  //     yield put({type: AuthActions.LOGIN_FAIL});
  //     if (response.data.error.message.includes('unverified')) {
  //       yield put(AuthActions.fortgotPassword(action.payload));
  //       yield put({type: AuthActions.CHECK_USER_DETAILS_SUCCESS, payload});
  //       NavigationService.navigate('VerifyCode');
  //     }else if(response.data.error.message == "User status blocked."){
  //       showToast('Your account has been banned by admin');
  //     }else if(response.data.error.message == "Invalid credentials."){
  //       showToast('Invalid password');
  //     }
  //     else {
  //       showToast('User does not exist with this email address');
  //     }
  //   } else if (response.status == 401) {
  //     yield put({type: AuthActions.LOGIN_FAIL});
  //     showToast('Invalid password');
  //   }
  // } else {
  //   yield put({type: AuthActions.LOGIN_FAIL});
  //   showToast("An error occurred")
  // }
}
