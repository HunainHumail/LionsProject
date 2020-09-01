// Imports: Dependencies
import {all, takeEvery, take} from 'redux-saga/effects';

// Imports: Actions
import {AppActions, AuthActions, ProfileActions} from '../actions/';

// Imports: Redux Sagas

import {getClubHistory, getClubPdg, getPresidentMessage, getMemberDetails, getBirthday, getAnniversary} from './AppSaga';
import {login} from './AuthSaga';
import {userDetails, updateUserDetails} from './ProfileSaga';
// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([
    //sagas will go here
    takeEvery(AppActions.CLUB_HISTORY, getClubHistory),
    takeEvery(AppActions.PRESIDENT_MESSAGE, getPresidentMessage),
    takeEvery(AppActions.CLUB_PDG, getClubPdg),
    takeEvery(AuthActions.LOGIN, login),
    takeEvery(ProfileActions.USER_DETAILS, userDetails),
    takeEvery(ProfileActions.UPDATE_USER_DETAILS, updateUserDetails),
    takeEvery(AppActions.MEMBER_DETAILS, getMemberDetails),
    takeEvery(AppActions.BIRTHDAY_API, getBirthday),
    takeEvery(AppActions.ANNIVERSARY_API, getAnniversary),


  ]);
}
