// import React, { Component } from 'react'
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createDrawerNavigator } from 'react-navigation-drawer';
// import DashboardScreen from '../components/Dashboard';
// import contentComponent from '../components/Common/navigationItem';
// import ClubInformation from '../components/ClubInformation/index';
// import MemberDetails from '../components/MemberDetails/index';
// import Notice from '../components/Notices/index';
// import Business from '../components/BusinessCorner/index';
// import BloodDonor from '../components/BloodDoner/index';
// import Birthdays from '../components/Birthdays/index';
// import Anniverseries from '../components/Anniversaries/index';
// import Services from '../components/Service/index';
// import Profile from '../components/Profile/index';
// import LoginScreen from '../components/login/index';
// import ForgotPassword from '../components/ForgotPassword/forgotPassword';
// import OtpVerify from '../components/login/otpVerify';


// const StackNav = createStackNavigator({
//     DashboardScreen: DashboardScreen,
//     ClubInformation: ClubInformation,
//     MemberDetails: MemberDetails,
//     Services: Services,
//     Business: Business,
//     Birthdays: Birthdays,
//     Anniverseries: Anniverseries,
//     BloodDonor: BloodDonor,
//     Notice: Notice,
//     Profile:Profile,
//     LoginScreen: LoginScreen,
//     ForgotScren: ForgotPassword,
//     OtpScreen: OtpVerify,

//   },{
//     initialRouteName: 'DashboardScreen',
//     headerMode:'none',
//   },
//   );

//   const AppStack = createDrawerNavigator({
    
//       StackNav: StackNav,
//       DashboardScreen:{screen: DashboardScreen},  
//       ClubInformation:{screen: ClubInformation},
//       MemberDetails:{screen: MemberDetails} ,
//       Notice:{screen: Notice} ,
//       Business:{screen: Business} ,
//       BloodDonor:{screen: BloodDonor} ,
//       Birthdays:{screen: Birthdays} ,
//       Anniverseries:{screen: Anniverseries} ,
//       Services:{screen: Services},  
//       Profile:{screen: Profile}
//     },
//     {
//       contentComponent: contentComponent ,
//       drawerWidth:'100%',
//       drawerLockMode:'locked-closed',
//       edgeWidth:0,
//       drawerBackgroundColor : 'transparent' 
//     }
//   );



//   const AppContainer = createAppContainer(AppStack);

//   export class DrawerNavigation extends Component {
   
//       static NavigationScreen={
//           title:'my app'
//       }
//       render() {
//           return (   
//             <AppContainer />     
//           )
//       }
//   }

//   export default DrawerNavigation