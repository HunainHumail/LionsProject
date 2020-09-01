import {AppActions} from '../actions/';
import moment from 'moment';

const INITIAL_STATE = {
  clubHistory: '',
  isLoading: false,
  presidentMessage: '',
  clubPdg: '',
  memberDetails: [],
  birthdayData: [],
  anniversaryData: [],
  birthdates: [],
  anniversaryDates: []
};

function Reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AppActions.CLUB_HISTORY:
      return {...state, isLoading: true};
    case AppActions.CLUB_HISTORY_SUCCESS:
      return {...state, isLoading: false, clubHistory: action.payload};
    case AppActions.CLUB_HISTORY_FAIL:
      return {...state, isLoading: false};

    case AppActions.PRESIDENT_MESSAGE:
      return {...state, isLoading: true};
    case AppActions.PRESIDENT_MESSAGE_SUCCESS:
      return {...state, isLoading: false, presidentMessage: action.payload};
    case AppActions.PRESIDENT_MESSAGE_FAIL:
      return {...state, isLoading: false};

    case AppActions.CLUB_PDG:
      return {...state, isLoading: true};
    case AppActions.CLUB_PDG_SUCCESS:
      return {...state, isLoading: false, clubPdg: action.payload};
    case AppActions.CLUB_PDG_FAIL:
      return {...state, isLoading: false};

    case AppActions.MEMBER_DETAILS:
      return {...state, isLoading: true};
    case AppActions.MEMBER_DETAILS_SUCCESS:
      return {...state, isLoading: false, memberDetails: action.payload};
    case AppActions.MEMBER_DETAILS_FAIL:
      return {...state, isLoading: false};

    case AppActions.BIRTHDAY_API:
      // console.log('BIRTHDAY API CONSOLE RUNNING')
      return {...state, isLoading: true};
    case AppActions.BIRTHDAY_API_SUCCESS:
      console.log('API SUCCESS DATA: ', action)
      // const dobs = action.payload.map((val, index) => {
      //   let monthDate = '2020' + val.dob.substr(4);
      //   return [...state.birthdayData, monthDate];
      // });
      // console.log('DOBSSSSSS', ...dobs);
      let dobArray =[];
      var year = moment().format('YYYY');
      const dob = action.payload.map((item) => {
        dobArray.push(year+item.dob.substring(4))
      })
      return {...state, isLoading: false, birthdayData: action.payload, birthdates: dobArray};
    case AppActions.BIRTHDAY_API_FAIL:
      return {...state, isLoading: false};

    case AppActions.ANNIVERSARY_API:
      return {...state, isLoading: true};
    case AppActions.ANNIVERSARY_API_SUCCESS:
      let dobArray2 =[];
      var year = moment().format('YYYY');
      const dob2 = action.payload.map((item) => {
        dobArray2.push(year+item.anniversary_date.substring(4))
      })
      return {...state, isLoading: false, anniversaryData: action.payload, anniversaryDates: dobArray2};
    case AppActions.ANNIVERSARY_API_FAIL:
      return {...state, isLoading: false};
    default:
      return state;
  }
}

export default Reducer;
// {
//   "id": "1",
//   "member_name": "Saikat",
//   "dob": "1988-09-20"
//   },
//   {
//   "id": "2",
//   "member_name": "Soumit",
//   "dob": "1992-08-24"
//   },
//   {
//   "id": "3",
//   "member_name": "Amit",
//   "dob": "1990-01-01"
//   }
