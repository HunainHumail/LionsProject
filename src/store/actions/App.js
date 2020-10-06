export default class Action {
    //Constants

    static CLUB_HISTORY = 'CLUB_HISTORY'
    static CLUB_HISTORY_SUCCESS = 'CLUB_HISTORY_SUCCESS'
    static CLUB_HISTORY_FAIL = 'CLUB_HISTORY_FAIL'

    static PRESIDENT_MESSAGE = 'PRESIDENT_MESSAGE'
    static PRESIDENT_MESSAGE_SUCCESS = 'PRESIDENT_MESSAGE_SUCCESS'
    static PRESIDENT_MESSAGE_FAIL = 'PRESIDENT_MESSAGE_FAIL'

    static CLUB_PDG = 'CLUB_PDG'
    static CLUB_PDG_SUCCESS = 'CLUB_PDG_SUCCESS'
    static CLUB_PDG_FAIL = 'CLUB_PDG_FAIL'

    static MEMBER_DETAILS = 'MEMBER_DETAILS'
    static MEMBER_DETAILS_SUCCESS = 'MEMBER_DETAILS_SUCCESS'
    static MEMBER_DETAILS_FAIL = 'MEMBER_DETAILS_FAIL'

    static BIRTHDAY_API = 'BIRTHDAY_API'
    static BIRTHDAY_API_SUCCESS = 'BIRTHDAY_API_SUCCESS'
    static BIRTHDAY_API_FAIL = 'BIRTHDAY_API_FAIL'

    static ANNIVERSARY_API = 'ANNIVERSARY_API'
    static ANNIVERSARY_API_SUCCESS = 'ANNIVERSARY_API_SUCCESS'
    static ANNIVERSARY_API_FAIL = 'ANNIVERSARY_API_FAIL'
    
    static GET_NOTICE_API = 'GET_NOTICE_API'
    static GET_NOTICE_API_SUCCESS = 'GET_NOTICE_API_SUCCESS'
    static GET_NOTICE_API_FAIL = 'GET_NOTICE_API_FAIL'

    static GET_SERVICES_API = 'GET_SERVICES_API'
    static GET_SERVICES_API_SUCCESS = 'GET_SERVICES_API_SUCCESS'
    static GET_SERVICES_API_FAIL = 'GET_SERVICES_API_FAIL'
  

  
    //Actions
    static getClubHistory(payload) {
      return {
        type: Action.CLUB_HISTORY,
        payload,
      };
    }

    static getPresidentMessage(payload) {
      return {
        type: Action.PRESIDENT_MESSAGE,
        payload,
      };
    }

    static getClubPdg(payload) {
      return {
        type: Action.CLUB_PDG,
        payload,
      };
    }

    static getMemberDetails() {
      return {
        type: Action.MEMBER_DETAILS,
      };
    }

    static getBirthday() {
      return {
        type: Action.BIRTHDAY_API,
      };
    }

    static getAnniversary() {
      return {
        type: Action.ANNIVERSARY_API,
      };
    }

    static getNotice(payload) {
      return {
        type: Action.GET_NOTICE_API,
        payload
      };
    }

    static getServices(payload) {
      return {
        type: Action.GET_SERVICES_API,
        payload
      };
    }
  }

  