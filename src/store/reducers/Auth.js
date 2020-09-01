import {AuthActions} from '../actions/';
const INITIAL_STATE = {
    user_details: {},
    user_id: '',
    isLoading: false,

};

function Reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AuthActions.LOGIN:
        return {...state, isLoading: true}
    case AuthActions.LOGIN_SUCCESS:
        return {...state, isLoading: false, user_details: action.payload.user_details, user_id: action.payload.user_id}
    case AuthActions.LOGIN_FAIL:
        return {...state, isLoading: false} 
    default:
      return state;
  }
}

export default Reducer;
