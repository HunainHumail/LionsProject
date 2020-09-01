import {
  LoginScreen,
  ForgotPassword,
  OptVerify
} from '../components';

const AuthStack = {
  LoginScreen: {
    screen: LoginScreen,
  },
  ForgotPassword: {
    screen: ForgotPassword,
  },
  OptVerify: {
    screen: OptVerify,
  },
};

export default AuthStack;
// export const AuthStack = [
//   {
//     name: 'LoginScreen',
//     component: LoginScreen,
//     key: 'LoginScreen',
//   },
//   {
//     name: 'ForgotPassword',
//     component: ForgotPassword,
//     key: 'ForgotPassword',
//   },
//   {
//     name: 'OptVerify',
//     component: OptVerify,
//     key: 'OptVerify',
//   },
// ];
