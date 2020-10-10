import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import InitialStack from './InitialStack';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {Transition} from '../config';


// import {DrawerStack} from './DrawerNavigator';
// import { createDrawerNavigator } from 'react-navigation-drawer';
const MainStack = createStackNavigator(
  {
    ...InitialStack,
    ...AuthStack,
    ...HomeStack,
    // DrawerNavigation: DrawerNavigation,
  },
  {
    headerMode: 'none',
    // initialRouteName: 'FindGolferScreen',
  },
  {
    transitionConfig: Transition
  }
);

export default createAppContainer(MainStack);

// export const MainStack = () => {
//   const MainStack = createStackNavigator();
//   const AppStacks = [...InitialStack, ...AuthStack, ...HomeStack];
//   return (
//     <MainStack.Navigator
//       initialRouteName={'SplashScreen'}
//       screenOptions={{
//         headerShown: false,
//       }}>
//       {AppStacks.map(stack => (
//         <MainStack.Screen {...stack} />
//       ))}
//       <MainStack.Screen component={DrawerStack} name="DrawerStack" />
//     </MainStack.Navigator>
//   );
// };