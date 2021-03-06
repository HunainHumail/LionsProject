import {put, call, select, delay} from 'redux-saga/effects';
import {AuthActions, HomeActions, AppActions} from '../actions';
// import {showToast} from '../../config/utills';
import {NavigationService} from '../../config';
import {ApiCaller} from '../../config';
import AsyncStorage from '@react-native-community/async-storage';
import {validateEmail, showToast} from '../../config/utills';


// export const getUser = state => state.Auth.user;

// const validateResponse = response => {
//   return new Promise((res, rej) => {
//     if (response) {
//       if (response.status == 200) {
//         res({success: true});
//       } else {
//         try {
//           showToast(response.data.error.message);
//           res({success: false, message: response.data.error.message});
//         } catch (error) {
//           showToast('Something went wrong');
//           res({success: false});
//         }
//       }
//     } else {
//       res({success: false});
//       showToast('Something went wrong');
//     }
//   });
// };

export function* getClubHistory(action) {
  const response = yield ApiCaller.Get(`getCmsData?content_type=club_history`);
  console.log(response, 'get Club history');

  if (response) {
    if (response.status == 200) {
      yield put({
        type: AppActions.CLUB_HISTORY_SUCCESS,
        payload: response.data.page_details,
      });
    } else if (response.status == 400) {
      yield put({type: AppActions.CLUB_HISTORY_FAIL});
      showToast(response.data);
    }
  } else {
    yield put({type: AppActions.CLUB_HISTORY_FAIL});
    showToast('Something went wrong');
  }
}

export function* getPresidentMessage(action) {
  const response = yield ApiCaller.Get(`getCmsData?content_type=president_msg`);
  console.log(response.data, 'PRESEIDENT MESSAGE SAGA');
  // yield put({
  //   type: AppActions.PRESIDENT_MESSAGE_SUCCESS,
  //   payload: response.data,
  // });

  if (response){
    if(response.status == 200){
      yield put({type:AppActions.PRESIDENT_MESSAGE_SUCCESS, payload:response.data.page_details})
    }else if(response.status == 400){
      yield put({type:AppActions.PRESIDENT_MESSAGE_FAIL});
      showToast(response.data)
    }
  }else{
    yield put({type:AppActions.PRESIDENT_MESSAGE_FAIL});
    showToast("Something went wrong")
  }
}

export function* getClubPdg(action) {
  const response = yield ApiCaller.Get(`getCmsData?content_type=club_pdg`);
  // console.log(response.data.page_details, 'get Club history');

  if (response){
    if(response.status == 200){
      yield put({type:AppActions.CLUB_PDG_SUCCESS, payload:response.data.page_details})
    }else if(response.status == 400){
      yield put({type:AppActions.CLUB_PDG_FAIL});
      showToast(response.data)
    }
  }else{
    yield put({type:AppActions.CLUB_PDG_FAIL});
    showToast("Something went wrong")
  }

}


export function* getMemberDetails(action) {
  // const response = yield ApiCaller.Get(`get_member_list`);
  // console.log(response.data.page_details, 'get Club history');
  console.log('SAGA RUN')
  let formData = new FormData();
  formData.append('check_token', '2n7LkdMVqU9WSlaFi0LOkvf5p7v1tQZq');
  const response = yield ApiCaller.Post('get_member_list', formData);
  console.log(response.data, 'MEMBER DETAILS');

  if (response){
    if(response.status == 200){
      yield put({type:AppActions.MEMBER_DETAILS_SUCCESS, payload:response.data})
    }else if(response.status == 400){
      yield put({type:AppActions.MEMBER_DETAILS_FAIL});
      // showToast(response.data)
      console.log(response)
    }
  }else{
    yield put({type:AppActions.MEMBER_DETAILS_FAIL});
    showToast("Something went wrong")
  }

}

export function* getBirthday(action) {
  const response = yield ApiCaller.Get(`get_member_birthday`);
  console.log('BIRTHDAY DATA:', response.data)
  if (response){
    if(response.status == 200){
      yield put({type:AppActions.BIRTHDAY_API_SUCCESS, payload:response.data})
    }else if(response.status == 400){
      console.log('ERRORRRRRRRRRRRR')
      yield put({type:AppActions.BIRTHDAY_API_FAIL});
      showToast(response.data)
    }
  }else{
    yield put({type:AppActions.BIRTHDAY_API_FAIL});
    showToast("Something went wrong")
  }

}

export function* getAnniversary(action) {
  const response = yield ApiCaller.Get(`get_member_anniversary`);
  console.log('ANNIVERSARY DATA:', response.data)
  if (response){
    if(response.status == 200){
      yield put({type:AppActions.ANNIVERSARY_API_SUCCESS, payload:response.data})
    }else if(response.status == 400){
      console.log('ERRORRRRRRRRRRRR')
      yield put({type:AppActions.ANNIVERSARY_API_FAIL});
      showToast(response.data)
    }
  }else{
    yield put({type:AppActions.ANNIVERSARY_API_FAIL});
    showToast("Something went wrong")
  }

}


export function* getNotice(action) {
  console.log('SAGA RUN', action.payload)
  let formData = new FormData();
  formData.append('notice_type', action.payload);
  const response = yield ApiCaller.Post('upcoming_notice', formData);
  console.log(response.data, 'NOTICESSSSSSSSS');

  if (response){
    if(response.status == 200){
      yield put({type:AppActions.GET_NOTICE_API_SUCCESS, payload:response.data})
    }else if(response.status == 400){
      yield put({type:AppActions.GET_NOTICE_API_FAIL});
      // showToast(response.data)
      console.log(response)
    }
  }else{
    yield put({type:AppActions.GET_NOTICE_API_FAIL});
    showToast("Something went wrong")
  }

}

export function* getServices(action) {
  console.log('SAGA RUN', action.payload)
  let formData = new FormData();
  formData.append('service_type', action.payload);
  const response = yield ApiCaller.Post('services', formData);
  console.log(response.data, 'SERVICES');

  if (response){
    if(response.status == 200){
      yield put({type:AppActions.GET_SERVICES_API_SUCCESS, payload:response.data})
    }else if(response.status == 400){
      yield put({type:AppActions.GET_SERVICES_API_FAIL});
      // showToast(response.data)
      console.log(response)
    }
  }else{
    yield put({type:AppActions.GET_SERVICES_API_FAIL});
    showToast("Something went wrong")
  }

}

export function* bloodDonationUpdate(action) {
  console.log('SAGA RUN', action.payload)
  let formData = new FormData();
  formData.append('last_donate_date', action.payload.date);
  formData.append('user_id', action.payload.id);
  console.log('FORM DATA LOG:', formData)

  const response = yield ApiCaller.Post('update_user_blood_donation', formData);
  console.log(response.data, 'BLOOD DONATION');

  if (response) {
    if (response.data.message == 'success'){
      yield put({type:AppActions.BLOOD_DONATION_DETAILS_UPDATE_SUCCESS});
      console.log('SUCCESS')
  
    }else{
      yield put({type:AppActions.BLOOD_DONATION_DETAILS_UPDATE_FAIL});
      console.log('FAIL')
    }
  }
  else {
    yield put({type:AppActions.BLOOD_DONATION_DETAILS_UPDATE_FAIL});
    console.log('FAIL')
  }

}