import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashboardScreen from '../components/Dashboard';
import contentComponent from '../components/Common/navigationItem';
import ClubInformation from '../components/ClubInformation/index';
import MemberDetails from '../components/MemberDetails/index';
import Notice from '../components/Notices/index';
import Business from '../components/BusinessCorner/index';
import BloodDonor from '../components/BloodDoner/index';
import Birthdays from '../components/Birthdays/index';
import Anniverseries from '../components/Anniversaries/index';
import Services from '../components/Service/index';
import Profile from '../components/Profile/index';
import LoginScreen from '../components/login/index';
import ForgotPassword from '../components/ForgotPassword/';
import OtpVerify from '../components/login/otpVerify';
import contentComponent from '../components/Common/navigationItem';
import {NavigationContainer} from '@react-navigation/native';

// const Drawer = createDrawerNavigator();
// export const DrawerStack = () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="HOME" component={DashboardScreen} />
//         <Drawer.Screen name="CLUB INFORMATION" component={ClubInformation} />
//         <Drawer.Screen name="MEMBER DETAILS" component={MemberDetails} />
//         <Drawer.Screen name="SERVICE & ACTIVITIES" component={Services} />
//         <Drawer.Screen name="BUSINESS CORNER" component={Business} />
//         <Drawer.Screen name="BIRTHDAYS" component={Birthdays} />
//         <Drawer.Screen name="ANNIVERSARIES" component={BloodDonor} />
//         <Drawer.Screen name="Notice" component={Notice} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

const StackNav = createStackNavigator({
    DashboardScreen: DashboardScreen,
    ClubInformation: ClubInformation,
    MemberDetails: MemberDetails,
    Services: Services,
    Business: Business,
    Birthdays: Birthdays,
    Anniverseries: Anniverseries,
    BloodDonor: BloodDonor,
    Notice: Notice,
    Profile:Profile,
    LoginScreen: LoginScreen,
    ForgotScren: ForgotPassword,
    OtpScreen: OtpVerify,

  },{
    initialRouteName: 'DashboardScreen',
    headerMode:'none',
  },
  );

  const AppStack = createDrawerNavigator({

      StackNav: StackNav,
      DashboardScreen:{screen: DashboardScreen},
      ClubInformation:{screen: ClubInformation},
      MemberDetails:{screen: MemberDetails} ,
      Notice:{screen: Notice} ,
      Business:{screen: Business} ,
      BloodDonor:{screen: BloodDonor} ,
      Birthdays:{screen: Birthdays} ,
      Anniverseries:{screen: Anniverseries} ,
      Services:{screen: Services},
      Profile:{screen: Profile}
    },
    {
      contentComponent: contentComponent ,
      drawerWidth:'100%',
      drawerLockMode:'locked-closed',
      edgeWidth:0,
      drawerBackgroundColor : 'transparent'
    }
  );

  const AppContainer = createAppContainer(AppStack);

  class DrawerNavigation extends Component {

      render() {
          return (
            <AppContainer />
          )
      }
  }

  export default DrawerNavigation
