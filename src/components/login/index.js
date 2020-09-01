import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import {AuthActions} from '../../store/actions';
import {validateEmail, showToast} from '../../config/utills';
import {connect} from 'react-redux';

const axios = require('axios');

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorText: '',
      emailBorderColor: '#FFFFFF',
      passwordBorderColor: '#FFFFFF',
      emailErrorTextStatus: false,
      passwordErrorTextStatus: false,
      emailerrorText: '',
      passworderrorText: '',
      isLoading: false,
    };
    console.log('props', this.props)
  }

  componentDidMount() {}

  login = () => {
    const {email, password} = this.state;
    if (email && password) {
      if (validateEmail(email)) {
        this.props.login({email, password});
      } else {
        ToastAndroid.showWithGravityAndOffset(
          'Please enter Valid Email Address',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      }
    } else {
      ToastAndroid.showWithGravityAndOffset(
        'Required fields cannot be left empty',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
    }
  };

  // validateEmail(email) {
  //   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(String(email).toLowerCase());
  // }

  // login = () => {
  //   let _self = this.props;
  //   this.setState({
  //     isLoading: true,
  //   });
  //   const url =
  //     'http://lionsclub.storecloudsolution.com/webservice/check_user_login/';

  //   let formData = new FormData();
  //   formData.append('email', `${this.state.email}`);
  //   formData.append('password', `${this.state.password}`);
  //   formData.append('check_token', '2n7LkdMVqU9WSlaFi0LOkvf5p7v1tQZq');

  //   if (this.state.email != '' && this.state.password != '') {
  //     this.setState({
  //       emailErrorTextStatus: false,
  //       passwordErrorTextStatus: false,
  //       emailerrorText: '',
  //       passworderrorText: '',
  //     });
  //     fetch(url, {
  //       method: 'POST',
  //       body: formData,
  //     })
  //       .then((response) => response.json())
  //       .then((response) => {
  //         if (response.success == 0) {
  //           this.setState({
  //             errorText: 'Invalid Credentials',
  //             isLoading: false,
  //           });
  //         } else if (response.success == 1) {
  //           this.setState({
  //             errorText: '',
  //             isLoading: false,
  //           });
  //           _self.navigation.navigate('DrawerNavigation');
  //         }
  //       })
  //       .catch((error) => console.error('Error:', error));
  //   } else if (this.state.email == '') {
  //     this.setState({
  //       emailErrorTextStatus: true,
  //       emailerrorText: 'check your user name',
  //     });
  //   } else if (this.state.password == '' && this.state.email != '') {
  //     this.setState({
  //       passwordErrorTextStatus: true,
  //       passworderrorText: 'check your password',
  //       emailErrorTextStatus: false,
  //       emailerrorText: '',
  //     });
  //   } else if (this.state.password == '') {
  //     this.setState({
  //       passwordErrorTextStatus: true,
  //       passworderrorText: 'check your password',
  //     });
  //   } else {
  //     this.setState({
  //       emailErrorTextStatus: false,
  //       passwordErrorTextStatus: false,
  //     });
  //   }

  //   // this.props.navigation.navigate('DashboardScreen')
  // };

  changeOnFocusBorderColor(type, action) {
    switch (type) {
      case 'email':
        this.setState({
          emailBorderColor: action == 'focus' ? '#FECC00' : '#FFFFFF',
        });
        break;
      case 'password':
        this.setState({
          passwordBorderColor: action == 'focus' ? '#FECC00' : '#FFFFFF',
        });
        break;
    }
  }

  render() {
    const {isLoading} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: '#335393'}}>
        <StatusBar backgroundColor="#335393" barStyle="light-content" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={{marginTop: 32}}>
            <Image
              source={require('../../assets/clubserve.png')}
              style={{width: 240, height: 75, alignSelf: 'center'}}
            />
          </View>
          <View style={{marginTop: 32}}>
            <Text
              style={{
                fontFamily: 'Muli-Bold',
                fontSize: 20,
                color: '#FECC00',
                alignSelf: 'center',
              }}>
              LIONS CLUB OF CALCUTTA
            </Text>
            <Text
              style={{
                fontFamily: 'Muli-Bold',
                fontSize: 20,
                color: '#FECC00',
                alignSelf: 'center',
              }}>
              KAKURGACHI
            </Text>
          </View>
          <View
            style={{
              height: 40,
              borderRadius: 25,
              width: 100,
              marginTop: 32,
              alignSelf: 'center',
              backgroundColor: '#FECC00',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Muli-Bold',
                fontSize: 16,
                color: '#00529C',
                alignSelf: 'center',
              }}>
              Sign In
            </Text>
          </View>
          <View style={{width: '80%', alignSelf: 'center'}}>
            <View
              style={{
                height: 50,
                marginTop: 60,
                borderBottomWidth: 1,
                borderColor: `${this.state.emailBorderColor}`,
                width: '100%',
                alignSelf: 'center',
              }}>
              <TextInput
                keyboardType="email-address"
                selectionColor="#FECC00"
                onFocus={() => this.changeOnFocusBorderColor('email', 'focus')}
                onBlur={() => this.changeOnFocusBorderColor('email', 'blur')}
                autoCapitalize="none"
                placeholder="User Name / Mobile No "
                onChangeText={(email) => this.setState({email})}
                style={{color: '#FECC00'}}
                placeholderTextColor={`${this.state.emailBorderColor}`}
              />
            </View>
            {this.state.emailErrorTextStatus && (
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 18,
                  alignSelf: 'flex-end',
                  color: 'red',
                }}>
                {this.state.emailerrorText}
              </Text>
            )}
            <View
              style={{
                height: 50,
                marginTop: 20,
                borderBottomWidth: 1,
                borderColor: `${this.state.passwordBorderColor}`,
                width: '100%',
                alignSelf: 'center',
              }}>
              {/* <TextInput placeholder="Enter your password" /> */}
              <TextInput
                placeholder="Password"
                selectionColor="#FECC00"
                onFocus={() =>
                  this.changeOnFocusBorderColor('password', 'focus')
                }
                onBlur={() => this.changeOnFocusBorderColor('password', 'blur')}
                secureTextEntry={true}
                onChangeText={(password) => this.setState({password})}
                style={{color: '#FECC00', height: 50}}
                placeholderTextColor={`${this.state.passwordBorderColor}`}
              />
            </View>
            {this.state.passwordErrorTextStatus && (
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 18,
                  alignSelf: 'flex-end',
                  color: 'red',
                }}>
                {this.state.passworderrorText}
              </Text>
            )}
            {this.state.errorText != '' && (
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 18,
                  alignSelf: 'flex-end',
                  color: 'red',
                }}>
                {this.state.errorText}
              </Text>
            )}
          </View>
          <TouchableOpacity
            // onPress={() => this.props.navigation.navigate('ForgotScren')}
            onPress={this.login}>
            <View
              style={{
                height: 60,
                width: '80%',
                borderRadius: 30,
                marginTop: 50,
                alignSelf: 'center',
                backgroundColor: '#FECC00',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Muli-Bold',
                  fontSize: 20,
                  color: '#00529C',
                  alignSelf: 'center',
                }}>
                CONTINUE
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ForgotScren')}>
            <Text
              style={{
                fontFamily: 'Muli-Bold',
                marginTop: 50,
                fontSize: 18,
                alignSelf: 'center',
                color: '#FFFFFF',
              }}>
              FORGOT PASSWORD
            </Text>
          </TouchableOpacity>
        </ScrollView>
        {isLoading ? (
          <View
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
              backgroundColor: 'transparent',
            }}>
            <ActivityIndicator size={50} animating={true} color="red" />
          </View>
        ) : null}
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLoading: state.Auth.isLoading,
    // clubHistory: state.App.clubHistory,
    // presidentMessage: state.App.presidentMessage,
    // clubPdg: state.App.clubPdg,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (payload) => dispatch(AuthActions.login(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
