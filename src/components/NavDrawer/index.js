import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import {Metrix, NavigationService, Images, Colors, Fonts} from '../../config/';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FeaterIcon from 'react-native-vector-icons/Feather';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {ProfileActions} from '../../store/actions';
import {AsyncStorage} from 'react-native';

class NavDrawer extends Component {
  constructor(props) {
    super(props);
    this._retrieveData()
      .then((item) => {
        console.log('ITEMMMMMM', item.user_id);
        this.props.userDetail({user_id: item.user_id});
        return item.user_id;
      })
      .catch((error) => {
        //this callback is executed when your Promise is rejected
        console.log('Promise is rejected with error: ' + error);
      });
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('user_details');
      if (value !== null) {
        // We have data!!
        console.log('VALUEEE',value);
        const item = JSON.parse(value);

        return item;
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  // _retrieveData = () => {
  //     var value =  AsyncStorage.getItem('user');
  //     value.then((val) => {return val})
  // }

  navigateToLogin = () => {
    NavigationService.reset_0('LoginScreen');
    // AsyncStorage.setItem("intro","done");
  };

  render() {
    let {isLoading, user_details} = this.props;
    console.log('USER DETAILS ARE HERE: ', user_details)
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
              onPress={() => {
                NavigationService.goBack();
              }}
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
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: Metrix.HorizontalSize(60),
                  marginVertical: Metrix.VerticalSize(20),
                }}>
                <Image
                  source = {{uri: user_details.member_photo}}
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
                    {user_details.member_name}
                  </Text>
                  <Text
                    style={{
                      color: '#8FB3D3',
                    }}>
                    Member id: {user_details.member_code}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      NavigationService.reset_0('Profile');
                    }}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={require('../../assets/profile_setting_icon.png')}
                    />
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        marginLeft: Metrix.HorizontalSize(3),
                      }}>
                      Profile Setting
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
          <View
            style={{
              marginTop: Metrix.VerticalSize(40),
              marginBottom: Metrix.VerticalSize(30),
            }}>
            <TouchableOpacity
            onPress={() => {
                NavigationService.reset_0('DashboardScreen');
              }}
              style={{
                width: Metrix.HorizontalSize(330),
                height: Metrix.VerticalSize(44),
                borderRadius: Metrix.VerticalSize(10),
                marginHorizontal: Metrix.HorizontalSize(22),
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <MaterialIcons
                name="domain"
                size={18}
                color={'#00529C'}
                style={{marginHorizontal: Metrix.HorizontalSize(23)}}
              />
              <Text
                style={{
                  marginLeft: Metrix.HorizontalSize(6),
                  fontFamily: Fonts['Poppins-Regular'],
                  fontSize: Metrix.customFontSize(16),
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                HOME
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={() => {
                NavigationService.reset_0('ClubInformation');
              }}
              style={{
                width: Metrix.HorizontalSize(330),
                height: Metrix.VerticalSize(44),
                borderRadius: Metrix.VerticalSize(10),
                marginHorizontal: Metrix.HorizontalSize(22),
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <MaterialIcons
                name="account-balance"
                size={18}
                color={'#00529C'}
                style={{marginHorizontal: Metrix.HorizontalSize(23)}}
              />
              <Text
                style={{
                  marginLeft: Metrix.HorizontalSize(6),
                  fontFamily: Fonts['Poppins-Regular'],
                  fontSize: Metrix.customFontSize(16),
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                CLUB INFORMATION
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => {
                NavigationService.reset_0('MemberDetails');
              }}
              style={{
                width: Metrix.HorizontalSize(330),
                height: Metrix.VerticalSize(44),
                borderRadius: Metrix.VerticalSize(10),
                marginHorizontal: Metrix.HorizontalSize(22),
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <MaterialIcons
                name="supervisor-account"
                size={18}
                color={'#00529C'}
                style={{marginHorizontal: Metrix.HorizontalSize(23)}}
              />
              <Text
                style={{
                  marginLeft: Metrix.HorizontalSize(6),
                  fontFamily: Fonts['Poppins-Regular'],
                  fontSize: Metrix.customFontSize(16),
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                MEMBER DETAILS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => {
                NavigationService.reset_0('Service');
              }}
              style={{
                width: Metrix.HorizontalSize(330),
                height: Metrix.VerticalSize(44),
                borderRadius: Metrix.VerticalSize(10),
                marginHorizontal: Metrix.HorizontalSize(22),
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <MaterialIcons
                name="card-giftcard"
                size={18}
                color={'#00529C'}
                style={{marginHorizontal: Metrix.HorizontalSize(23)}}
              />
              <Text
                style={{
                  marginLeft: Metrix.HorizontalSize(6),
                  fontFamily: Fonts['Poppins-Regular'],
                  fontSize: Metrix.customFontSize(16),
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                SERVICE & ACTIVITIES
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={() => {
                NavigationService.reset_0('BusinessCorner');
              }}
              style={{
                width: Metrix.HorizontalSize(330),
                height: Metrix.VerticalSize(44),
                borderRadius: Metrix.VerticalSize(10),
                marginHorizontal: Metrix.HorizontalSize(22),
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <MaterialIcons
                name="business-center"
                size={18}
                color={'#00529C'}
                style={{marginHorizontal: Metrix.HorizontalSize(23)}}
              />
              <Text
                style={{
                  marginLeft: Metrix.HorizontalSize(6),
                  fontFamily: Fonts['Poppins-Regular'],
                  fontSize: Metrix.customFontSize(16),
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                BUSINESS CORNER
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => {
                NavigationService.reset_0('Birthdays');
              }}
              style={{
                width: Metrix.HorizontalSize(330),
                height: Metrix.VerticalSize(44),
                borderRadius: Metrix.VerticalSize(10),
                marginHorizontal: Metrix.HorizontalSize(22),
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <MaterialIcons
                name="cake"
                size={18}
                color={'#00529C'}
                style={{marginHorizontal: Metrix.HorizontalSize(23)}}
              />
              <Text
                style={{
                  marginLeft: Metrix.HorizontalSize(6),
                  fontFamily: Fonts['Poppins-Regular'],
                  fontSize: Metrix.customFontSize(16),
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                BIRTHDAYS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={() => {
                NavigationService.reset_0('Anniversaries');
              }}
              style={{
                width: Metrix.HorizontalSize(330),
                height: Metrix.VerticalSize(44),
                borderRadius: Metrix.VerticalSize(10),
                marginHorizontal: Metrix.HorizontalSize(22),
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <MaterialIcons
                name="sentiment-satisfied"
                size={18}
                color={'#00529C'}
                style={{marginHorizontal: Metrix.HorizontalSize(23)}}
              />
              <Text
                style={{
                  marginLeft: Metrix.HorizontalSize(6),
                  fontFamily: Fonts['Poppins-Regular'],
                  fontSize: Metrix.customFontSize(16),
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                ANNIVERSARIES
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => {
                NavigationService.reset_0('BloodDoner');
              }}
              style={{
                width: Metrix.HorizontalSize(330),
                height: Metrix.VerticalSize(44),
                borderRadius: Metrix.VerticalSize(10),
                marginHorizontal: Metrix.HorizontalSize(22),
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <MaterialIcons
                name="assignment"
                size={18}
                color={'#00529C'}
                style={{marginHorizontal: Metrix.HorizontalSize(23)}}
              />
              <Text
                style={{
                  marginLeft: Metrix.HorizontalSize(6),
                  fontFamily: Fonts['Poppins-Regular'],
                  fontSize: Metrix.customFontSize(16),
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                BLOOD DONER'S CORNER
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => {
                NavigationService.reset_0('Notices');
              }}
              style={{
                width: Metrix.HorizontalSize(330),
                height: Metrix.VerticalSize(44),
                borderRadius: Metrix.VerticalSize(10),
                marginHorizontal: Metrix.HorizontalSize(22),
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <MaterialIcons
                name="ac-unit"
                size={18}
                color={'#00529C'}
                style={{marginHorizontal: Metrix.HorizontalSize(23)}}
              />
              <Text
                style={{
                  marginLeft: Metrix.HorizontalSize(6),
                  fontFamily: Fonts['Poppins-Regular'],
                  fontWeight: 'bold',
                  fontSize: Metrix.customFontSize(16),
                  color: 'black',
                }}>
                NOTICES AND UPCOMING EVENTS
              </Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require('../../assets/drawerLogo.png')}
            resizeMode={'cover'}
            style={{
              width: Metrix.VerticalSize(146),
              height: Metrix.VerticalSize(49),
              backgroundColor: Colors.White,
              marginLeft: Metrix.HorizontalSize(40),
            }}
          />
          <TouchableOpacity
          onPress = {()=> {this.navigateToLogin()}}
            style={{
              width: Metrix.HorizontalSize(330),
              height: Metrix.VerticalSize(44),
              borderRadius: Metrix.VerticalSize(10),
              marginHorizontal: Metrix.HorizontalSize(22),
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <AntDesign
              name="logout"
              size={18}
              color={'#817889'}
              style={{marginHorizontal: Metrix.HorizontalSize(23)}}
            />
            <Text
              style={{
                marginLeft: Metrix.HorizontalSize(6),
                fontFamily: Fonts['Poppins-Regular'],
                fontWeight: 'bold',
                fontSize: Metrix.customFontSize(16),
                color: '#928999',
              }}>
              Log Out
            </Text>
          </TouchableOpacity>
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

const mapStateToProps = (state) => {
  return {
    isLoading: state.Profile.isLoading,
    user_details: state.Profile.user_details.user_details,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    userDetail: (payload) => dispatch(ProfileActions.userDetails(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavDrawer);
