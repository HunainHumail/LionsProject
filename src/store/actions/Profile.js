export default class Action {
    //Constants

    static USER_DETAILS = 'USER_DETAILS'
    static USER_DETAILS_SUCCESS = 'USER_DETAILS_SUCCESS'
    static USER_DETAILS_FAIL = 'USER_DETAILS_FAIL'
    
    static UPDATE_USER_DETAILS = 'UPDATE_USER_DETAILS'
    static UPDATE_USER_DETAILS_SUCCESS = 'UPDATE_USER_DETAILS_SUCCESS'
    static UPDATE_USER_DETAILS_FAIL = 'UPDATE_USER_DETAILS_FAIL'

  
    //Actions
    static userDetails(payload) {
      console.log("Payload", payload)
      return {
        type: Action.USER_DETAILS,
        payload,
      };
    }

    static updateUserDetails(payload) {
      console.log("Payload Update", payload)
      return {
        type: Action.UPDATE_USER_DETAILS,
        payload,
      };
    }
  }

  