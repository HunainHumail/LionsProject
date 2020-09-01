import {put, call, select, delay} from 'redux-saga/effects';
import {ProfileActions} from '../actions';
import {showToast} from '../../config/utills';
import {NavigationService} from '../../config';
import {ApiCaller} from '../../config';
import AsyncStorage from '@react-native-community/async-storage';

export function* userDetails(action) {
  const {payload} = action;
  console.log('UID FROM AUTH', payload);
  let formData = new FormData();
  Object.keys(payload).forEach((key, index) => {
    formData.append(key, Object.values(payload)[index]);
  });
  formData.append('check_token', '2n7LkdMVqU9WSlaFi0LOkvf5p7v1tQZq');
  const response = yield ApiCaller.Post('getUserDetailsByID', formData);
  console.log('response', response);

  if (response) {
    if (response.status == 200) {
      yield put({
        type: ProfileActions.USER_DETAILS_SUCCESS,
        payload: response.data,
      });
    } else if (response.status == 400) {
      yield put({type: ProfileActions.USER_DETAILS_FAIL});
      showToast('Something Went Wrong');
    }
  } else {
    yield put({type: ProfileActions.USER_DETAILS_FAIL});
    showToast('An error occurred');
  }
}

export function* updateUserDetails(action) {
  let {payload} = action;
  let formData = new FormData();
  Object.keys(payload).forEach((key, index) => {
    formData.append(key, Object.values(payload)[index]);
  });
  formData.append('check_token', '2n7LkdMVqU9WSlaFi0LOkvf5p7v1tQZq');
  const response = yield ApiCaller.Post('update_user_profile', formData);
  console.log(response, 'update profile');

  if (response) {
    if (response.status == 200) {
      yield put({type: ProfileActions.UPDATE_USER_DETAILS_SUCCESS});
      NavigationService.goBack();
    } else {
      yield put({type: ProfileActions.UPDATE_USER_DETAILS_FAIL});
    }
  } else {
    yield put({type: ProfileActions.UPDATE_USER_DETAILS_FAIL});
  }
}
