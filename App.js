/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, Platform} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import NavigationScreen from './src/navigation/stackNavigation';
import { NavigationService } from './src/config';
import {Provider} from 'react-redux';
import {store} from './src/store/';
import MainStack from "./src/stacks/";
// import {NavigationContainer} from '@react-navigation/native';


const App: () => React$Node = () => {
  return (
    <Provider store={store}>
     {/* <NavigationContainer> */}
     <MainStack
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
     {/* </NavigationContainer> */}
    </Provider>
  );
};

export default App;
