import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import {Metrix, NavigationService, Images, Colors, Fonts} from '../../config/';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FeaterIcon from 'react-native-vector-icons/Feather';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {AppActions} from '../../store/actions';

class NavDrawer extends Component {
  constructor(props) {
    super(props);
  }

  navigateToLogin = () => {
    NavigationService.reset_0('LoginScreen');
    // AsyncStorage.setItem("intro","done");
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <View
            style={{
              width: '100%',
              height: Metrix.VerticalSize(123),
              backgroundColor: '#00529C',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
            onPress = {()=> {NavigationService.goBack()}}
              style={{
                marginleft: Metrix.HorizontalSize(20),
                marginTop: Metrix.VerticalSize(30),
              }}>
              <MaterialIcons
                name={'keyboard-arrow-left'}
                color="white"
                size={Metrix.VerticalSize(40)}
              />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: Metrix.HorizontalSize(60),
                marginVertical: Metrix.VerticalSize(20),
              }}>
              <Image
                // source={Images.userImage}
                resizeMode={'cover'}
                style={{
                  width: Metrix.VerticalSize(77),
                  height: Metrix.VerticalSize(77),
                  backgroundColor: Colors.White,
                  borderRadius: 50,
                }}
              />
              <View
                style={{
                  marginLeft: Metrix.HorizontalSize(10),
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  Member name
                </Text>
                <Text
                  style={{
                    color: '#8FB3D3',
                  }}>
                  Member id: {'201234'}
                </Text>
                <TouchableOpacity
                onPress = {()=> {NavigationService.reset_0('Profile')}}
                 style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('../../assets/profile_setting_icon.png')} />
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      marginLeft: Metrix.HorizontalSize(3)
                    }}>
                    Profile Setting
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default NavDrawer;
