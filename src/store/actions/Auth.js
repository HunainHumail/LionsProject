export default class Action {
  //Constants

  static LOGIN = 'LOGIN';
  static LOGIN_SUCCESS = 'LOGIN_SUCCESS';
  static LOGIN_FAIL = 'LOGIN_FAIL';

  //Actions
  static login(payload) {
    return {
      type: Action.LOGIN,
      payload,
    };
  }

  static loginSuccess(payload) {
    return {
      type: Action.LOGIN_SUCCESS,
      payload,
    };
  }
}
