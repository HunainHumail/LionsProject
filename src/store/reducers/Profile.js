import {ProfileActions} from '../actions/';
const INITIAL_STATE = {
  user_details: {},
  isLoading: false,
};

function Reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ProfileActions.USER_DETAILS:
      return {...state, isLoading: true};
    case ProfileActions.USER_DETAILS_SUCCESS:
      console.log('PROFILE REDUCER');
      return {...state, isLoading: false, user_details: action.payload};
    case ProfileActions.USER_DETAILS_FAIL:
      return {...state, isLoading: false};
    case ProfileActions.UPDATE_USER_DETAILS:
      return {...state, isLoading: true};
    case ProfileActions.UPDATE_USER_DETAILS_SUCCESS:
      console.log('PROFILE REDUCER');
      return {...state, isLoading: false};
    case ProfileActions.UPDATE_USER_DETAILS_FAIL:
      return {...state, isLoading: false};
    default:
      return state;
  }
}

export default Reducer;
