import {combineReducers} from 'redux';

// imports: Reducers
import AppReducer from './App';
import AuthReducer from './Auth';
import ProfileReducer from './Profile';

// Redux: Root Reducer
const rootReducer = combineReducers({
  //reducers will go here
  App: AppReducer,
  Auth: AuthReducer,
  Profile: ProfileReducer,
});

// exports
export default rootReducer;
